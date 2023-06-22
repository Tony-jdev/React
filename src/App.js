import './App.css';
import ToDo from './components/ToDo/ToDo';
import Counter from './components/Counter/Counter';
import { Route, Routes } from 'react-router-dom';
import Films from './components/Film/Films';
import Header from './components/Header/Header';
import Users from './components/Users/Users';
import UserInfo from './components/Users/UserInfo';

function App() {
  return (
    <div>
      <Header />
      <Routes>


        <Route path="/" element={<ToDo />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/films" element={<Films />} />

        <Route path="/users" element={<Users />}>
          <Route path="/users/:id" element={<UserInfo />} />
        </Route>

        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
