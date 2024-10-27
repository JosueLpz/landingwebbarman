import { motion } from 'framer-motion';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Cocktails from './components/Cocktails/Cocktails';
import { LanguageProvider } from './context/LanguageContext';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        <About />
        <Skills />
        <Cocktails />
      </motion.div>
    </LanguageProvider>
  );
}

export default App;