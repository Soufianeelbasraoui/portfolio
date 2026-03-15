import React, { useState } from 'react';
import { FiMessageSquare, FiX, FiSend } from 'react-icons/fi';
import './AIAmbassador.css';

const AIAmbassador = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('en');
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: {
        en: "Hello! I am the Professional AI Ambassador for Soufiane. How can I assist you in exploring his developer profile?",
        fr: "Bonjour ! Je suis l'Ambassadeur IA Professionnel de Soufiane. Comment puis-je vous aider à explorer son profil de développeur ?",
        ar: "مرحباً! أنا السفير الاصطناعي المهني لـ سفيان. كيف يمكنني مساعدتك في استكشاف ملف تعريف المطور الخاص به؟"
      }[language]
    }
  ]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setMessages([{
      type: 'bot',
      text: {
        en: "Hello! I am the Professional AI Ambassador for Soufiane. How can I assist you in exploring his developer profile?",
        fr: "Bonjour ! Je suis l'Ambassadeur IA Professionnel de Soufiane. Comment puis-je vous aider à explorer son profil de développeur ?",
        ar: "مرحباً! أنا السفير الاصطناعي المهني لـ سفيان. كيف يمكنني مساعدتك في استكشاف ملف تعريف المطور الخاص به؟"
      }[lang]
    }]);
  };

  const getSystemResponse = (userInput) => {
    // Basic logic to mimic the persona
    const input = userInput.toLowerCase();
    if (input.includes('stack') || input.includes('tech') || input.includes('compétences') || input.includes('تقنيات')) {
      return {
        en: "Soufiane is an expert in the Java ecosystem (Spring Boot), PHP (Laravel), and the MERN stack. He specializes in building scalable Full-Stack applications with a strong focus on clean code and UML documentation.",
        fr: "Soufiane est expert dans l'écosystème Java (Spring Boot), PHP (Laravel) et le MERN stack. Il est spécialisé dans la création d'applications Full-Stack évolutives avec un fort accent sur le clean code et la documentation UML.",
        ar: "سفيان خبير في بيئة Java (Spring Boot) و PHP (Laravel) ومجموعة MERN. يتخصص في بناء تطبيقات Full-Stack قابلة للتوسع مع تركيز قوي على الكود النظيف وتوثيق UML."
      }[language];
    }
    if (input.includes('cv') || input.includes('resumé') || input.includes('سيرة')) {
      return {
        en: "You can download Soufiane's CV directly from the 'About Me' section or contact him via the form for a formal inquiry.",
        fr: "Vous pouvez télécharger le CV de Soufiane directement depuis la section 'À propos de moi' ou le contacter via le formulaire.",
        ar: "يمكنك تحميل السيرة الذاتية لـ سفيان مباشرة من قسم 'نبذة عني' أو التواصل معه عبر النموذج."
      }[language];
    }
    if (input.includes('project') || input.includes('projet') || input.includes('réalisation') || input.includes('مشروع') || input.includes('أعمال')) {
      return {
        en: "Soufiane has a diverse portfolio including: \n• An E-Commerce ecosystem with real-time inventory.\n• A Crypto Analytics platform with advanced charting.\n• A SaaS Task Manager for collaborative workflows.\nAll built with professional architectures (MERN, Laravel, or Spring Boot).",
        fr: "Soufiane possède un portfolio varié comprenant :\n• Un écosystème E-Commerce avec inventaire en temps réel.\n• Une plateforme Crypto Analytics avec graphiques avancés.\n• Un gestionnaire de tâches SaaS pour les flux de travail collaboratifs.\nTous conçus avec des architectures professionnelles (MERN, Laravel ou Spring Boot).",
        ar: "يمتلك سفيان محفظة أعمال متنوعة تشمل:\n• منظومة تجارة إلكترونية مع تتبع مخزون في الوقت الفعلي.\n• منصة تحليلات عملات رقمية مع رسوم بيانية متقدمة.\n• نظام إدارة مهام SaaS لبيئات العمل التعاونية.\nجميعها مبنية بهندسات احترافية (MERN ، Laravel ، أو Spring Boot)."
      }[language];
    }
    return {
      en: "I am here to represent Soufiane's technical expertise in software architecture, Full-Stack development, and UI/UX design. Feel free to ask about specific technologies like Spring Boot or React.",
      fr: "Je suis ici pour représenter l'expertise technique de Soufiane en architecture logicielle, développement Full-Stack et design UI/UX. N'hésitez pas à poser des questions sur des technologies spécifiques comme Spring Boot ou React.",
      ar: "أنا هنا لتمثيل الخبرة التقنية لـ سفيان في هندسة البرمجيات، وتطوير Full-Stack، وتصميم UI/UX. لا تتردد في السؤال عن تقنيات محددة مثل Spring Boot أو React."
    }[language];
  };

  return (
    <div className={`ai-ambassador-container ${language === 'ar' ? 'rtl' : ''}`}>
      {!isOpen && (
        <button className="ai-trigger" onClick={toggleChat} aria-label="Open AI Ambassador">
          <FiMessageSquare />
        </button>
      )}

      {isOpen && (
        <div className="ai-chat-window">
          <div className="ai-chat-header">
            <h4>AI Ambassador</h4>
            <div className="ai-lang-switch">
                <button onClick={() => handleLanguageChange('en')} className={language === 'en' ? 'active' : ''}>EN</button>
                <button onClick={() => handleLanguageChange('fr')} className={language === 'fr' ? 'active' : ''}>FR</button>
                <button onClick={() => handleLanguageChange('ar')} className={language === 'ar' ? 'active' : ''}>AR</button>
            </div>
            <button className="ai-close" onClick={toggleChat}><FiX /></button>
          </div>
          
          <div className="ai-chat-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`ai-message ${msg.type}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="ai-chat-input">
             <input type="text" placeholder="..." onKeyPress={(e) => {
               if (e.key === 'Enter' && e.target.value) {
                 const text = e.target.value;
                 setMessages([...messages, { type: 'user', text }, { type: 'bot', text: getSystemResponse(text) }]);
                 e.target.value = '';
               }
             }} />
             <FiSend />
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAmbassador;
