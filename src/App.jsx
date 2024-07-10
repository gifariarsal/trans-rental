import './App.css';
import { Footer, Navbar } from './components';
import {
  About,
  Cars,
  FrequentlyAQ,
  Hero,
  Procedure,
  Service,
  Testimonials,
} from './components';
import useAOS from './hooks/useAos';

function App() {
  useAOS();
  return (
    <>
      <>
        <Navbar />
        <main>
          <Hero />
          <Service />
          <Procedure />
          <Cars />
          <About />
          <Testimonials />
          <FrequentlyAQ />
        </main>
        <Footer />
      </>
    </>
  );
}

export default App;
