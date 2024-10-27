import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations';
import './About.css';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <motion.section 
      className="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
      >
        {t.about.title}
      </motion.h2>
      <motion.div 
        className="about-content"
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
      >
        <p>{t.about.content}</p>
      </motion.div>
    </motion.section>
  );
};

export default About;