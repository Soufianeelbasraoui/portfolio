import React, { useState, useRef, useEffect } from 'react';
import { FiMessageSquare, FiX, FiSend } from 'react-icons/fi';
import './AIAmbassador.css';

// ─────────────────────────────────────────────────────────────────────────────
// KNOWLEDGE BASE (Strictly limited to technical skills, services, and CV)
// ─────────────────────────────────────────────────────────────────────────────
const KNOWLEDGE_BASE = [
  // ── Technical Skills / Tech Stack ──
  {
    keywords: ['skill', 'competence', 'tech', 'stack', 'expertise', 'know-how', 'compétence', 'مهارات', 'المهارات التقنية', 'تقنيات'],
    response: {
      en: "Soufiane's Technical Expertise includes:\n• Java & Spring Boot (Spring Boot, Spring Security, JPA)\n• PHP & Laravel\n• React.js & Next.js (React, Tailwind CSS, Bootstrap)\n• MERN Stack (React, Node, Express)\n• SQL & NoSQL (MySQL, MongoDB, PostgreSQL)\n• UML & Architecture Système\n• Figma (Design UI/UX)",
      fr: "L'expertise technique de Soufiane comprend :\n• Java & Spring Boot (Spring Boot, Spring Security, JPA)\n• PHP & Laravel\n• React.js & Next.js (React, Tailwind CSS, Bootstrap)\n• MERN Stack (React, Node, Express)\n• SQL & NoSQL (MySQL, MongoDB, PostgreSQL)\n• UML & Architecture Système\n• Figma (Design UI/UX)",
      ar: "الخبرة التقنية لسفيان تشمل:\n• Java & Spring Boot (Spring Boot, Spring Security, JPA)\n• PHP & Laravel\n• React.js & Next.js (React, Tailwind CSS, Bootstrap)\n• MERN Stack (React, Node, Express)\n• SQL & NoSQL (MySQL, MongoDB, PostgreSQL)\n• UML وهندسة البرمجيات (System Architecture)\n• Figma (تصميم واجهة المستخدم UI/UX)"
    }
  },
  // ── Services Offered ──
  {
    keywords: ['service', 'offered', 'provide', 'solution', 'hire', 'work', 'contrat', 'الخدمات', 'خدمات'],
    response: {
      en: "Soufiane provides the following Services:\n• Frontend Development: Creating responsive, high-performance, and visually stunning user interfaces using React and modern CSS.\n• Backend Development: Building robust and scalable server-side applications and APIs using Java Spring Boot, Node.js, and Laravel.\n• Database Management: Designing and optimizing database schemas with MySQL and PostgreSQL for efficient data storage.\n• Full-Stack Solutions: Delivering end-to-end web applications, from conceptual design to deployment and maintenance.\n• Responsive Design: Ensuring your application looks and works perfectly on all devices, from desktops to mobile phones.\n• API Integration: Connecting your platform with third-party services and building custom RESTful APIs.",
      fr: "Soufiane propose les services suivants :\n• Développement Frontend : Création d'interfaces utilisateur réactives, performantes et visuellement attrayantes avec React et CSS moderne.\n• Développement Backend : Construction d'applications et d'APIs serveur robustes et évolutives avec Java Spring Boot, Node.js et Laravel.\n• Gestion de Bases de Données : Conception et optimisation de schémas de bases de données avec MySQL et PostgreSQL pour un stockage de données efficace.\n• Solutions Full-Stack : Livraison d'applications web de bout en bout, de la conception au déploiement et à la maintenance.\n• Design Responsif : Garantie d'un fonctionnement parfait de votre application sur tous les appareils, des ordinateurs aux téléphones portables.\n• Intégration d'API : Connexion de plateformes à des services tiers et création d'APIs RESTful personnalisées.",
      ar: "يقدم سفيان الخدمات التالية:\n• تطوير الواجهات (Frontend): إنشاء واجهات مستخدم متجاوبة، عالية الأداء وجذابة بصرياً باستخدام React و CSS الحديث.\n• تطوير الخلفية (Backend): بناء تطبيقات برمجية قوية وقابلة للتطوير على جانب الخادم و APIs باستخدام Java Spring Boot و Node.js و Laravel.\n• إدارة قواعد البيانات: تصميم وتحسين مخططات قواعد البيانات باستخدام MySQL و PostgreSQL لتخزين البيانات بكفاءة.\n• حلول Full-Stack متكاملة: تقديم تطبيقات ويب متكاملة، بدءاً من التصميم المفاهيمي وحتى النشر والصيانة.\n• تصميم متجاوب (Responsive Design): ضمان عمل التطبيق ومظهره بشكل مثالي على جميع الأجهزة، من الحواسيب إلى الهواتف المحمولة.\n• ربط الـ APIs: توصيل المنصة بالخدمات الخارجية وبناء RESTful APIs مخصصة."
    }
  },
  // ── CV Download ──
  {
    keywords: ['cv', 'resume', 'download', 'télécharger', 'سيرة', 'تحميل', 'تنزيل'],
    response: {
      en: "You can download Soufiane's CV directly by clicking here: <a href='/Soufiane_El_Basraoui_CV.pdf' download='Soufiane_El_Basraoui_CV.pdf' style='color: #FF8C00; font-weight: bold; text-decoration: underline;'>Download CV</a>",
      fr: "Vous pouvez télécharger le CV de Soufiane directement en cliquant ici : <a href='/Soufiane_El_Basraoui_CV.pdf' download='Soufiane_El_Basraoui_CV.pdf' style='color: #FF8C00; font-weight: bold; text-decoration: underline;'>Télécharger le CV</a>",
      ar: "يمكنك تحميل السيرة الذاتية لسفيان مباشرة بالضغط هنا: <a href='/Soufiane_El_Basraoui_CV.pdf' download='Soufiane_El_Basraoui_CV.pdf' style='color: #FF8C00; font-weight: bold; text-decoration: underline;'>تحميل السيرة الذاتية</a>"
    }
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// CHIPS & UI DATA
// ─────────────────────────────────────────────────────────────────────────────
const QUICK_CHIPS = {
  en: [
    { label: "Technical Skills", query: "skills" },
    { label: "Services Offered", query: "services" },
    { label: "Download CV", query: "download cv" }
  ],
  fr: [
    { label: "Compétences", query: "skills" },
    { label: "Services", query: "services" },
    { label: "Télécharger le CV", query: "télécharger le cv" }
  ],
  ar: [
    { label: "المهارات التقنية", query: "skills" },
    { label: "الخدمات", query: "services" },
    { label: "تحميل السيرة الذاتية", query: "تحميل السيرة الذاتية" }
  ]
};

const INITIAL_BOT_MESSAGES = {
  en: "Welcome! I'm Soufiane's AI Ambassador. Ask me about his technical skills, services offered, or download his CV directly here. How can I assist you?",
  fr: "Bienvenue ! Je suis l'Ambassadeur IA de Soufiane. Posez-moi vos questions sur ses compétences techniques, ses services, ou téléchargez son CV directement ici. Comment puis-je vous aider ?",
  ar: "مرحباً! أنا السفير الذكي لسفيان. اسألني عن مهاراته التقنية، الخدمات التي يقدمها، أو قم بتحميل سيرته الذاتية مباشرة من هنا. كيف يمكنني مساعدتك؟"
};

const FALLBACK_RESPONSES = {
  en: "I can assist you with Soufiane's technical skills (Java Spring Boot, Laravel, React, Next.js, databases) or the web development services he provides. Try using the quick chips below!",
  fr: "Je peux vous renseigner sur les compétences de Soufiane (Java Spring Boot, Laravel, React, Next.js, bases de données) ou les services web qu'il propose. Essayez d'utiliser les raccourcis ci-dessous !",
  ar: "يمكنني مساعدتك بخصوص مهارات سفيان التقنية (Java Spring Boot، Laravel، React، Next.js، قواعد البيانات) أو الخدمات البرمجية التي يقدمها. جرب استخدام الاختصارات أدناه!"
};

// ─────────────────────────────────────────────────────────────────────────────
// RESPONSE RETRIEVER
// ─────────────────────────────────────────────────────────────────────────────
const getSystemResponse = (userInput, lang) => {
  const input = userInput.toLowerCase();
  for (const entry of KNOWLEDGE_BASE) {
    if (entry.keywords.some(keyword => input.includes(keyword.toLowerCase()))) {
      return entry.response[lang];
    }
  }
  return FALLBACK_RESPONSES[lang];
};

const AIAmbassador = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('en');
  const [inputVal, setInputVal] = useState('');
  const messagesEndRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: INITIAL_BOT_MESSAGES['en']
    }
  ]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setMessages([
      {
        type: 'bot',
        text: INITIAL_BOT_MESSAGES[lang]
      }
    ]);
    setInputVal('');
  };

  const handleSend = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const reply = getSystemResponse(trimmed, language);
    setMessages(prev => [
      ...prev,
      { type: 'user', text: trimmed },
      { type: 'bot', text: reply }
    ]);
    setInputVal('');
  };

  const isRTL = language === 'ar';

  return (
    <div className={`ai-ambassador-container ${isRTL ? 'rtl' : ''}`}>
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
              <div 
                key={idx} 
                className={`ai-message ${msg.type}`}
                style={{ 
                  alignSelf: msg.type === 'user' ? 'flex-end' : 'flex-start',
                  textAlign: isRTL ? 'right' : 'left'
                }}
                dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br />') }}
              />
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Action Chips Bar */}
          <div className="ai-quick-chips" style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
            {QUICK_CHIPS[language].map((chip, index) => (
              <button 
                key={index} 
                className="ai-chip" 
                onClick={() => handleSend(chip.query)}
              >
                {chip.label}
              </button>
            ))}
          </div>

          <div className="ai-chat-input" style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
            <input 
              type="text" 
              placeholder={
                language === 'ar' ? '...اسأل عن خدماتي أو مهاراتي التقنية' :
                language === 'fr' ? 'Posez une question...' :
                'Ask about my stack or services...'
              }
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSend(inputVal);
                }
              }}
              style={{ textAlign: isRTL ? 'right' : 'left' }}
            />
            <FiSend onClick={() => handleSend(inputVal)} style={{ cursor: 'pointer' }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAmbassador;
