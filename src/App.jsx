import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer, Navbar } from './components';
import { LandingPage } from './pages';

function App() {
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
