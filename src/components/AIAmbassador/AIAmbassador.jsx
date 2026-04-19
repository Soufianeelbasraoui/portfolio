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
    const input = userInput.toLowerCase();
    
    // Check developer info
    if (input.includes('soufiane') || input.includes('developer') || input.includes('développeur') || input.includes('مطور') || input.includes('skills') || input.includes('compétences') || input.includes('مهارات') || input.includes('projects') || input.includes('projets') || input.includes('مشاريع') || input.includes('cv') || input.includes('who')) {
      return {
        en: "Soufiane is a Full-stack developer skilled in HTML, CSS, JavaScript, React, Bootstrap, PHP, Laravel, and MySQL. His projects include an E-commerce website (React + Laravel), an Admin dashboard, a Product management system, and an Online services platform. Feel free to contact Soufiane for your project!",
        fr: "Soufiane est un développeur Full-stack maîtrisant HTML, CSS, JavaScript, React, Bootstrap, PHP, Laravel et MySQL. Ses projets incluent un site E-commerce (React + Laravel), un tableau de bord Admin, un système de gestion de produits et une plateforme de services en ligne. N'hésitez pas à contacter Soufiane pour votre projet !",
        ar: "سفيان هو مطور Full-stack ماهر في HTML, CSS, JavaScript, React, Bootstrap, PHP, Laravel، و MySQL. تشمل مشاريعه موقع تجارة إلكترونية (React + Laravel)، لوحة تحكم، نظام إدارة المنتجات، ومنصة خدمات عبر الإنترنت. لا تتردد في التواصل مع سفيان من أجل مشروعك!"
      }[language];
    }
    
    // Check services
    if (input.includes('service') || input.includes('خدمات') || input.includes('hire') || input.includes('work') || input.includes('travail') || input.includes('وظيفة') || input.includes('offer')) {
      return {
        en: "Soufiane offers services in Website development, E-commerce solutions, UI/UX design, and Full-stack applications. Feel free to contact Soufiane for your project!",
        fr: "Soufiane propose des services de développement de sites web, solutions E-commerce, design UI/UX et applications Full-stack. N'hésitez pas à contacter Soufiane pour votre projet !",
        ar: "يقدم سفيان خدمات في تطوير مواقع الويب، حلول التجارة الإلكترونية، تصميم UI/UX، وتطبيقات Full-stack. لا تتردد في التواصل مع سفيان من أجل مشروعك!"
      }[language];
    }
    
    // Default fallback
    return {
      en: "I can help you mainly with information about this developer and web development topics. Feel free to contact Soufiane for your project!",
      fr: "Je peux principalement vous aider avec des informations sur ce développeur et des sujets de développement web. N'hésitez pas à contacter Soufiane pour votre projet !",
      ar: "يمكنني مساعدتك بشكل أساسي في تقديم معلومات حول هذا المطور ومواضيع تطوير الويب. لا تتردد في التواصل مع سفيان من أجل مشروعك!"
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
