import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ToDo from './components/ToDo/ToDo';
import Counter from './components/Counter/Counter';
import Films from './components/Film/Films';
import Header from './components/Header/Header';
import Users from './components/Users/Users';
import UserInfo from './components/Users/UserInfo';
import UsersContext from './contexts/UsersContext';
import ThemeProvider from './providers/ThemeProvider';
import FavoritesProvider from './providers/FavoritesProvider';
import FavoritesList from './components/Film/FavoritesList';
import Counters from './components/Counters/Counters';

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await response.json();
    setUsers(result);
  }

  useEffect(() => { getUsers(); }, []);

  return (
    <div>
      <UsersContext.Provider value={users}>
        <ThemeProvider>
          <FavoritesProvider>
            <Header />
            <Routes>
              <Route path="/" element={<ToDo />} />
              <Route path="/counter" element={<Counter />} />
              <Route path="/films" element={<Films />} />
              <Route path="/counters" element={<Counters />} />
              <Route path="/users" element={<Users />}>
                <Route path="/users/:id" element={<UserInfo />} />
              </Route>
              <Route path="*" element={<h1>Page not found</h1>} />
            </Routes>
            <FavoritesList />
          </FavoritesProvider>
        </ThemeProvider>
      </UsersContext.Provider>
    </div>
  );
}

export default App;
