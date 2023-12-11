import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <>
    <Header />
      <Nav />
      <main >
        <Outlet />
      </main>
    </>
  );
}

export default App;