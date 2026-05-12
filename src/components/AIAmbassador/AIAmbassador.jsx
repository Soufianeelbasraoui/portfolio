import React, { useState } from 'react';
import { FiMessageSquare, FiX, FiSend } from 'react-icons/fi';
import './AIAmbassador.css';

const AIAmbassador = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('en');

  const initialBotMessages = {
    en: "Welcome. I am Soufiane's AI Ambassador. I can guide you through his high-level Full-Stack projects, technical architecture, and business solutions. How can I assist you?",
    fr: "Bienvenue. Je suis l'Ambassadeur IA de Soufiane. Je peux vous guider à travers ses projets Full-Stack de haut niveau, son architecture technique et ses solutions business. Comment puis-je vous aider ?",
    ar: "مرحباً. أنا السفير الذكي لـ سفيان. يمكنني إرشادك عبر مشاريعه Full-Stack عالية المستوى، ومعماريته التقنية، وحلول الأعمال الخاصة به. كيف يمكنني مساعدتك؟"
  };

  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: initialBotMessages['en']
    }
  ]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setMessages([{
      type: 'bot',
      text: initialBotMessages[lang]
    }]);
  };

  const getSystemResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    // Technical inquiry
    if (input.includes('stack') || input.includes('react') || input.includes('laravel') || input.includes('spring') || input.includes('architecture') || input.includes('tech') || input.includes('docker') || input.includes('base de données') || input.includes('database')) {
      return {
        en: "Soufiane doesn't just use React; he integrates it with Spring Boot to build industrial systems like FleetFlow, or Laravel for modern e-commerce like Guza Shop. His expertise spans MERN, state management, Docker, and UML modeling. You can explore his complete architecture implementations on his GitHub!",
        fr: "Soufiane ne se contente pas de React; il l'intègre à des architectures Spring Boot pour créer des systèmes industriels comme FleetFlow, ou Laravel pour l'e-commerce (Guza Shop). Son expertise couvre le MERN, le state management, Docker et la modélisation UML. Explorez son code sur GitHub !",
        ar: "سفيان لا يكتفي باستخدام React فحسب؛ بل يدمجه مع Spring Boot لبناء أنظمة صناعية مثل FleetFlow، أو Laravel لتطبيقات التجارة الإلكترونية مثل Guza Shop. خبرته تشمل MERN، وإدارة الحالة، و Docker، ونمذجة UML. يمكنك استكشاف كود المشاريع بالكامل على GitHub!"
      }[language];
    }
    
    // General developer inquiry
    if (input.includes('soufiane') || input.includes('developer') || input.includes('développeur') || input.includes('مطور') || input.includes('skills') || input.includes('compétences') || input.includes('مهارات') || input.includes('projects') || input.includes('projets') || input.includes('مشاريع') || input.includes('cv') || input.includes('who')) {
      return {
        en: "Soufiane is a high-level Full-Stack Developer who builds robust business solutions. Whether it's the complex logistics of FleetFlow, precise billing in FinPay, or the sleek UI/UX of Guza Shop, he delivers performance and innovation. Ready to collaborate? Hit the Contact button!",
        fr: "Soufiane est un développeur Full-Stack de haut niveau qui crée des solutions business robustes. Qu'il s'agisse de la logistique complexe de FleetFlow, de la facturation précise de FinPay ou de l'UX/UI minimaliste de Guza Shop, il allie performance et innovation. Prêt à collaborer ? Cliquez sur Contact !",
        ar: "سفيان مطور Full-Stack عالي المستوى يبني حلول أعمال قوية. سواء كانت لوجستيات FleetFlow المعقدة، أو الفواتير الدقيقة في FinPay، أو واجهة المستخدم الأنيقة لـ Guza Shop، فإنه يوفر الأداء والابتكار. هل أنت مستعد للتعاون؟ اضغط على زر التواصل!"
      }[language];
    }
    
    // Services / Hire
    if (input.includes('service') || input.includes('خدمات') || input.includes('hire') || input.includes('work') || input.includes('travail') || input.includes('وظيفة') || input.includes('offer') || input.includes('emploi')) {
      return {
        en: "Looking for performance, scalable data architecture, and a modern minimalist design? Soufiane builds complete systems tailored to your business goals. I highly recommend clicking the Contact button below so we can discuss your vision.",
        fr: "Vous recherchez performance, architecture de données scalable, et design minimaliste moderne ? Soufiane construit des systèmes complets adaptés à vos objectifs. Je vous invite à cliquer sur le bouton Contact pour discuter de votre vision.",
        ar: "هل تبحث عن الأداء، معمارية بيانات قابلة للتطوير، وتصميم حديث وبسيط؟ يبني سفيان أنظمة كاملة مصممة خصيصًا لأهداف عملك. أنصحك بالضغط على زر التواصل بالأسفل لمناقشة رؤيتك."
      }[language];
    }
    
    // Default fallback
    return {
      en: "I am confident Soufiane can bring immense value to your next project. Would you like to hear about his architectural expertise, his complex projects like FleetFlow, or would you prefer to get in touch directly via the Contact button?",
      fr: "Je suis convaincu que Soufiane apportera une immense valeur à votre projet. Souhaitez-vous en savoir plus sur son expertise architecturale, ses projets complexes comme FleetFlow, ou préférez-vous le contacter directement via le bouton Contact ?",
      ar: "أنا واثق من أن سفيان سيضيف قيمة هائلة لمشروعك القادم. هل ترغب في معرفة المزيد عن خبرته المعمارية، ومشاريعه المعقدة مثل FleetFlow، أم تفضل التواصل معه مباشرة عبر زر التواصل؟"
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
