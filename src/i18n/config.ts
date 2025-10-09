import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      hero: {
        greeting: "Hi, I'm",
        title: "Matteo Repole",
        subtitle: "Graphic Designer",
        description: "Creating visual experiences that connect and inspire",
        cta: "View My Work"
      },
      about: {
        title: "About Me",
        description: "I'm a passionate graphic designer with a love for creating clean, modern designs that tell compelling stories. My work spans brand identity, digital design, and visual communication, always focusing on simplicity and impact.\n\nWith years of experience in the industry, I blend creativity with strategic thinking to deliver designs that not only look beautiful but also achieve real business goals. I believe great design should be both functional and memorable."
      },
      latestWorks: {
        title: "Latest Works",
        subtitle: "Recent projects I'm proud of",
        projects: [
          {
            title: "Brand Identity Design",
            category: "Branding",
            description: "Complete brand identity system for a tech startup, including logo, color palette, typography, and brand guidelines.",
            image: "A modern, minimalist brand identity presentation showing logo variations and brand guidelines, professional studio photograph"
          },
          {
            title: "Website UI/UX Design",
            category: "Web Design",
            description: "User-centered design for an e-commerce platform, focusing on intuitive navigation and conversion optimization.",
            image: "Clean, modern website interface design mockup on laptop screen, bright studio lighting"
          },
          {
            title: "Marketing Campaign",
            category: "Marketing",
            description: "Multi-channel marketing campaign including social media graphics, print materials, and digital ads.",
            image: "Creative marketing campaign materials spread on desk, including posters and digital screen mockups"
          }
        ]
      },
      personalProjects: {
        title: "Personal Projects",
        subtitle: "Passion projects and experiments",
        projects: [
          {
            title: "Experimental Typography",
            category: "Typography",
            description: "Exploring new forms and expressions through custom typeface design.",
            image: "Abstract typography artwork with bold, experimental letterforms"
          },
          {
            title: "Minimalist Posters",
            category: "Print Design",
            description: "A series of minimalist posters exploring color, composition, and negative space.",
            image: "Minimalist poster design with geometric shapes and bold colors"
          }
        ]
      },
      footer: {
        rights: "All rights reserved.",
        email: "Email",
        connect: "Let's connect"
      }
    }
  },
  it: {
    translation: {
      hero: {
        greeting: "Ciao, sono",
        title: "Matteo Repole",
        subtitle: "Graphic Designer",
        description: "Creo esperienze visive che connettono e ispirano",
        cta: "Guarda i Miei Lavori"
      },
      about: {
        title: "Chi Sono",
        description: "Sono un graphic designer appassionato con l'amore per la creazione di design puliti e moderni che raccontano storie avvincenti. Il mio lavoro spazia dall'identità di marca, al design digitale e alla comunicazione visiva, sempre focalizzandomi sulla semplicità e sull'impatto.\n\nCon anni di esperienza nel settore, unisco creatività e pensiero strategico per offrire design che non solo sono belli, ma raggiungono anche obiettivi di business concreti. Credo che un grande design debba essere funzionale e memorabile."
      },
      latestWorks: {
        title: "Ultimi Lavori",
        subtitle: "Progetti recenti di cui sono orgoglioso",
        projects: [
          {
            title: "Design Identità di Marca",
            category: "Branding",
            description: "Sistema completo di identità di marca per una startup tecnologica, inclusi logo, palette colori, tipografia e linee guida del marchio.",
            image: "A modern, minimalist brand identity presentation showing logo variations and brand guidelines, professional studio photograph"
          },
          {
            title: "Design UI/UX Sito Web",
            category: "Web Design",
            description: "Design incentrato sull'utente per una piattaforma e-commerce, focalizzato su navigazione intuitiva e ottimizzazione delle conversioni.",
            image: "Clean, modern website interface design mockup on laptop screen, bright studio lighting"
          },
          {
            title: "Campagna Marketing",
            category: "Marketing",
            description: "Campagna marketing multicanale che include grafica per social media, materiali stampati e annunci digitali.",
            image: "Creative marketing campaign materials spread on desk, including posters and digital screen mockups"
          }
        ]
      },
      personalProjects: {
        title: "Progetti Personali",
        subtitle: "Progetti passionali ed esperimenti",
        projects: [
          {
            title: "Tipografia Sperimentale",
            category: "Tipografia",
            description: "Esplorare nuove forme ed espressioni attraverso il design di caratteri personalizzati.",
            image: "Abstract typography artwork with bold, experimental letterforms"
          },
          {
            title: "Poster Minimalisti",
            category: "Design Stampa",
            description: "Una serie di poster minimalisti che esplorano colore, composizione e spazio negativo.",
            image: "Minimalist poster design with geometric shapes and bold colors"
          }
        ]
      },
      footer: {
        rights: "Tutti i diritti riservati.",
        email: "Email",
        connect: "Connettiamoci"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
