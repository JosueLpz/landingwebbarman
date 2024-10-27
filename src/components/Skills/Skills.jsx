import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations';
import './Skills.css';

const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const hardSkills = [
    { name: t.skills.skills.cocktails, level: 40 },
    { name: t.skills.skills.liquors, level: 35 },
    { name: t.skills.skills.tools, level: 45 },
    { name: t.skills.skills.pouring, level: 30 }
  ];

  const softSkills = [
    { name: t.skills.skills.customer, level: 80 },
    { name: t.skills.skills.teamwork, level: 75 },
    { name: t.skills.skills.communication, level: 85 },
    { name: t.skills.skills.organization, level: 70 }
  ];

  return (
    <section className="skills">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {t.skills.title}
      </motion.h2>
      
      <div className="skills-container">
        <div className="skills-column">
          <h3>{t.skills.hardSkills}</h3>
          {hardSkills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="skill"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <p>{skill.name}</p>
              <div className="skill-bar">
                <motion.div 
                  className="skill-level"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="skills-column">
          <h3>{t.skills.softSkills}</h3>
          {softSkills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="skill"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <p>{skill.name}</p>
              <div className="skill-bar">
                <motion.div 
                  className="skill-level"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;