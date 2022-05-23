import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Detail } from './pages/Detail';
import { Home } from './pages/Home';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/items" element={<Home />} />
        <Route path="/items/:id" element={<Detail />} />
      </Routes>
    </>
  );
};

export default App;
