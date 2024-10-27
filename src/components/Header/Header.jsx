import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations';
import './Header.css';

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  return (
    <motion.header 
      className="header"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <button className="language-switch" onClick={toggleLanguage}>
        {t.languageButton}
      </button>
      <motion.h1 
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        {t.header.title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {t.header.subtitle}
      </motion.p>
    </motion.header>
  );
};

export default Header;