import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer, Navbar } from './components';
import { LandingPage } from './pages';
import useAOS from './hooks/useAos';

function App() {
  useAOS();
  return (
    <>
      <>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </main>
        <Footer />
      </>
    </>
  );
}

export default App;
