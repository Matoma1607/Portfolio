import { PortfolioProject } from '../types';

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'famailla-if-club-gestor',
    title: 'Famaillá IF Club - Gestión Deportiva',
    subtitle: 'Sistema Integral de Gestión & Administración',
    category: 'app',
    categoryLabel: 'Sistema & Dashboard',
    image: 'https://i.postimg.cc/BvFRk3Vx/Captura-de-pantalla-2026-07-26-211244.png',
    description: 'Sistema web integral para el control de socios, administración deportiva, categorías y gestión institucional del club Famaillá IF.',
    liveUrl: 'https://famaillaifclub.netlify.app/',
    highlight: 'Dashboard Administrativo',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Google Sheets', 'Netlify'],
    features: ['Panel de control centralizado', 'Gestión de socios y cuotas', 'Registro de disciplinas', 'Interfaz de rápida respuesta'],
    featured: true
  },
  {
    id: 'avisos-facultad-bot',
    title: 'Avisos Facultad: Bot de Notificaciones Académicas',
    subtitle: 'Bot de Telegram & Conexión a Aula Virtual (Moodle)',
    category: 'automation',
    categoryLabel: 'Bot & Automatización',
    image: 'https://i.postimg.cc/bw4wZy7D/Captura-de-pantalla-2026-09-28-152829.png',
    description: 'Bot de Telegram que se conecta al aula virtual (Moodle) de la facultad y me avisa de forma anticipada sobre entregas, cuestionarios y exámenes.',
    liveUrl: '',
    highlight: 'Telegram Bot & Apps Script',
    techStack: ['Google Apps Script', 'Telegram Bot API', 'Moodle (.ics)', 'Triggers en la Nube', 'JavaScript'],
    features: [
      'Google Apps Script (JavaScript): lógica del bot ejecutada en la nube de Google',
      'Moodle (.ics): exportación de calendario como fuente de tareas y vencimientos',
      'Telegram Bot API: envío de mensajes y recepción de comandos (polling con getUpdates)',
      'Triggers por tiempo: revisión periódica de vencimientos y lectura de comandos'
    ],
    featured: true
  },
  {
    id: 'dolar-diario-n8n',
    title: 'Dólar diario: Cotizaciones automáticas con n8n',
    subtitle: 'Automatización & Notificaciones por Telegram',
    category: 'automation',
    categoryLabel: 'Bot & Automatización',
    image: 'https://i.postimg.cc/sgJRrVVs/Captura-de-pantalla-2026-09-28-153607.png',
    description: 'Automatización que consulta cada mañana la cotización del dólar en Argentina y me envía un resumen por Telegram. Incluye un sistema de monitoreo que me avisa al instante si alguna parte del proceso falla.',
    liveUrl: '',
    highlight: 'n8n & DolarAPI',
    techStack: ['n8n (Self-Hosted)', 'Telegram Bot API', 'DolarAPI (REST)', 'Node.js', 'JavaScript'],
    features: [
      'n8n (self-hosted): orquestación del flujo de automatización, ejecutado sobre Node.js',
      'DolarAPI (REST): fuente de datos de cotizaciones, consumida con el nodo HTTP Request',
      'JavaScript (nodo Code): filtrado y formateo de los datos',
      'Telegram Bot API: envío de notificaciones y resumen diario',
      'Schedule Trigger y Error Trigger: ejecución programada y manejo centralizado de errores'
    ],
    featured: true
  },

  {
    id: 'gestion-optica',
    title: 'Gestión Óptica & Optodata',
    subtitle: 'Sistema de Trazabilidad y Control de Pedidos',
    category: 'app',
    categoryLabel: 'Sistema de Gestión',
    image: 'https://i.postimg.cc/GpRj31pJ/Captura-de-pantalla-2026-07-26-211554.png',
    description: 'Plataforma para el seguimiento minucioso de trabajos de laboratorio óptico, estados de entrega y pedidos de clientes.',
    liveUrl: 'https://gestionoptica.netlify.app/',
    highlight: 'Control de Laboratorio',
    techStack: ['React', 'JavaScript', 'Tailwind CSS', 'Workflow Engine'],
    features: ['Estados en tiempo real de graduación', 'Control de entregas y fechas', 'Búsqueda por cliente', 'Diseño ergonómico para uso diario'],
    featured: true
  },
  {
    id: 'portal-solmar',
    title: 'Portal SOLMAR',
    subtitle: 'Portal de Comunicación Interna & Documentación',
    category: 'app',
    categoryLabel: 'Portal Interno',
    image: 'https://i.postimg.cc/2SkKnnf0/Captura-de-pantalla-2026-09-28-154017.png',
    description: 'Portal web interno diseñado para poner en contacto a cada uno de los integrantes del equipo, dar avisos de movimientos, festejos y centralizar documentación clave.',
    liveUrl: '',
    highlight: 'Intranet & Comunicación',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Gestión Interna', 'Diseño UI/UX'],
    features: [
      'Punto de contacto y conexión entre integrantes del equipo',
      'Muro de avisos para movimientos operativos y novedades',
      'Publicación de festejos institucionales y fechas especiales',
      'Repositorio y centralización de documentación interna'
    ],
    featured: true
  },

  {
    id: 'tucu-oficios',
    title: 'Tucu Oficios',
    subtitle: 'Directorio de Profesionales y Prestadores',
    category: 'web',
    categoryLabel: 'Plataforma Web',
    image: 'https://i.postimg.cc/fWPjtdLf/Captura-de-pantalla-2026-04-18-143304.png',
    description: 'Plataforma comunitaria que conecta profesionales de diferentes oficios con clientes que necesitan contratar servicios confiables.',
    liveUrl: 'https://tucuoficios.netlify.app/',
    highlight: 'Directorio de Servicios',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Google Sheets', 'Filtros Dinámicos'],
    features: ['Perfiles verificados de profesionales', 'Clasificación por oficio y zona', 'Contacto directo con prestadores', 'Buscador instantáneo'],
    featured: true
  },
  {
    id: 'web-famailla-if-club',
    title: 'Famaillá IF Club - Portal Institucional',
    subtitle: 'Sitio Web Oficial de Comunicación Deportiva',
    category: 'web',
    categoryLabel: 'Web Institucional',
    image: 'https://i.postimg.cc/k52Y04V9/Gemini-Generated-Image-lau568lau568lau5.png',
    description: 'Portal web de cara a hinchas y comunidad para difundir noticias, fixture, plantel oficial e historia del club.',
    liveUrl: 'https://webfamaillaifclub.netlify.app/',
    highlight: 'Presencia Institucional',
    techStack: ['React', 'Tailwind CSS', 'Responsive UI', 'Netlify'],
    features: ['Sección de novedades y fixture', 'Galería de imágenes y plantel', 'Diseño adaptado a identidad del club', 'Acceso directo a redes'],
    featured: false
  }
];
