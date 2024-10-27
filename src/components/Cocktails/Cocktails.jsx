import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations';
import './Cocktails.css';

const Cocktails = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="cocktails">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {t.cocktails.title}
      </motion.h2>
      
      <div className="cocktails-grid">
        {t.cocktails.items.map((cocktail, index) => (
          <motion.div 
            key={index}
            className="cocktail-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="cocktail-image">
              <img src={`https://source.unsplash.com/800x600/?cocktail,${cocktail.name}`} alt={cocktail.name} />
            </div>
            <h3>{cocktail.name}</h3>
            <p>{cocktail.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="contact-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <a href="tel:+1234567890">{t.cocktails.contact}</a>
      </motion.div>
    </section>
  );
};

export default Cocktails;