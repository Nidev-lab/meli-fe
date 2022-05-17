import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Detail } from './pages/Detail';
import { Home } from './pages/Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="/items?search=" element={<Home />} />
      <Route path="/items/:id" element={<Detail />} />
    </Routes>
  );
};

export default App;
