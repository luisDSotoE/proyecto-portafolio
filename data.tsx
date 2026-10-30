import { 
    BookText, 
    CodeSquare, 
    HomeIcon, 
    UserRound, 
     
    Speech, 
    Database, 
    Code, 
    Gamepad2,
    ShoppingBag,
    GraduationCap
} from "lucide-react";

// Importamos los iconos de las redes sociales desde react-icons/fi
import { 
    FiYoutube, 
    FiLinkedin, 
    FiTwitter, 
    FiFacebook, 
    FiInstagram 
} from "react-icons/fi";

export const PERSONAL_DATA = {
    name: "Luis Soto",
    // Un título más imponente que abarca software, hardware, 3D y consultoría
    role: "Ingeniero de Sistemas & Arquitecto Tecnológico", 
    // Descripción enfocada en el impacto y ecosistemas completos
    description: "Transformo ideas en ecosistemas tecnológicos de alto nivel. Arquitecto y desarrollo plataformas robustas, seguras y con un diseño vanguardista que escalan junto a tus proyectos.",
    country: "Colombia",
    contact: {
        whatsapp: "573000000000", // Reemplaza esto con tu número real
        email: "tu-correo@email.com",
    },
    social: {
        linkedin: "https://www.linkedin.com/in/luis-soto-7698262a2",
        github: "https://github.com/luisDSotoE",
        instagram: "https://www.instagram.com/luis_soto_117/profilecard/",
    }
};

export const socialNetworks = [
    {
        id: 1,
        logo: <FiYoutube size={30} strokeWidth={1.5} />,
        src: "https://www.youtube.com/@ls117spartan7",
    },
    {
        id: 2,
        logo: <FiLinkedin size={30} strokeWidth={1.5} />,
        src: "https://www.linkedin.com/in/luis-soto-7698262a2",
    },
    {
        id: 3,
        logo: <FiTwitter size={30} strokeWidth={1.5} />,
        src: "https://x.com/Ldsoto117",
    },
    {
        id: 4,
        logo: <FiFacebook size={30} strokeWidth={1.5} />,
        src: "https://www.facebook.com/luisdavid.sotoestrada",
    },
    {
        id: 5,
        logo: <FiInstagram size={30} strokeWidth={1.5} />,
        src: "https://www.instagram.com/luis_soto_117/profilecard/",
    },
];

export const itemsNavbar = [
    {
        id: 1,
        title: "Inicio",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1.5} />,
        link: "#inicio",
    },
    {
        id: 2,
        title: "Sobre mí",
        icon: <UserRound size={25} color="#fff" strokeWidth={1.5} />,
        link: "#about-me",
    },
    {
        id: 3,
        title: "Servicios",
        icon: <BookText size={25} color="#fff" strokeWidth={1.5} />,
        link: "#services",
    },
    {
        id: 4,
        title: "Portafolio",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1.5} />,
        link: "#portfolio",
    },
    {
        id: 5,
        title: "Testimonios", 
        icon: <Speech size={25} color="#fff" strokeWidth={1.5} />,
        link: "#testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Sistemas de Información",
        subtitle: "Gestión y Análisis de Datos",
        description: "Estudio, diseño, implementación y gestión de sistemas de información para apoyar la toma de decisiones empresariales mediante el análisis eficiente y escalable de datos.",
        date: "Nov 2024",
    },
    {
        id: 2,
        title: "Arquitectura de Software",
        subtitle: "Diseño de Software Nivel 2",
        description: "Aplicación de técnicas avanzadas de desarrollo, incluyendo patrones de diseño, principios SOLID y arquitecturas modernas para construir sistemas robustos.",
        date: "Jul 2024",
    },
    {
        id: 3,
        title: "Desarrollo Web Full-Stack",
        subtitle: "Programación Web Moderna",
        description: "Creación de aplicaciones web dinámicas, responsivas y de alto rendimiento utilizando frameworks modernos y arquitecturas basadas en componentes.",
        date: "Nov 2022",
    },
    {
        id: 4,
        title: "Desarrollo Móvil",
        subtitle: "Apps para iOS y Android",
        description: "Desarrollo de aplicaciones móviles nativas e híbridas optimizando la experiencia de usuario (UX), el rendimiento y la integración con APIs RESTful.",
        date: "Nov 2022",
    },
];

export const dataCounter = [
    {
        id: 0,
        endCounter: 2,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 10,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 15,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 5,
        text: "Soluciones digitales lanzadas",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Code className="text-cyan-400" size={32} strokeWidth={1.5} />,
        title: "Desarrollo de Software y Apps",
        description: "Diseño y desarrollo de aplicaciones web, móviles y de escritorio, aplicando principios SOLID para garantizar soluciones rápidas, seguras y escalables.",
    },
    {
        icon: <Gamepad2 className="text-purple-400" size={32} strokeWidth={1.5} />,
        title: "Diseño UI/UX y Entornos 3D",
        description: "Creación de interfaces impactantes, desarrollo de videojuegos y modelado 3D interactivo utilizando herramientas como Unity, SketchUp y Blender.",
    },
    {
        icon: <Database className="text-blue-400" size={32} strokeWidth={1.5} />,
        title: "Datos, Modelado y Simulación",
        description: "Arquitectura de bases de datos y aplicación de técnicas avanzadas para simular sistemas complejos y optimizar la toma de decisiones empresariales.",
    },
    {
        icon: <ShoppingBag className="text-yellow-400" size={32} strokeWidth={1.5} />,
        title: "Equipos y Accesorios Tecnológicos",
        description: "Venta de celulares, computadores y una amplia gama de accesorios de última generación para todas tus necesidades digitales.",
    },
    {
        icon: <GraduationCap className="text-red-400" size={32} strokeWidth={1.5} />,
        title: "Asesoría y Proyectos Académicos",
        description: "Realización de trabajos, proyectos integrales y apoyo académico especializado para estudiantes de colegio y universidad.",
    }
];

// Servicio público de capturas sin límite de cuotas diarias
const getScreenshotUrl = (url: string) => 
  `https://mini.s-shot.ru/1200x800/JPEG/1200/Z100/?${encodeURIComponent(url)}`;

export const dataPortfolio = [
    {
        id: 1,
        title: "Dónde Nelson",
        description: "Plataforma web gastronómica moderna con menú digital e interfaz intuitiva.",
        tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
        image: "/donde-nelson.png", // Guarda tu captura en public/donde-nelson.png
        urlGithub: "https://github.com/luisDSotoE",
        urlDemo: "https://donde-nelson.vercel.app/",
    },
    {
        id: 2,
        title: "Chimichagua Tiene Historia",
        description: "Portal cultural y turístico enfocado en la memoria e historia de Chimichagua.",
        tech: ["React", "Tailwind CSS", "Web Design"],
        image: "/chimichagua.png",
        urlGithub: "https://github.com/luisDSotoE",
        urlDemo: "https://www.chimichaguatienehistoria.com/",
    },
    {
        id: 3,
        title: "Eduardo Soto - Portfolio",
        description: "Sitio web profesional y portafolio personal de marca.",
        tech: ["Next.js", "TypeScript", "UI/UX"],
        image: "/eduardo-soto.png",
        urlGithub: "https://github.com/luisDSotoE",
        urlDemo: "https://eduardo-soto.vercel.app/",
    },
    {
        id: 4,
        title: "Lepochi Cosmetics",
        description: "Catálogo y tienda virtual para marca de cosméticos y productos de belleza.",
        tech: ["Next.js", "E-commerce", "Tailwind CSS"],
        image: "/lepochi.png",
        urlGithub: "https://github.com/luisDSotoE",
        urlDemo: "https://lepochi-cosmetics.vercel.app/",
    },
    {
        id: 5,
        title: "Barbería Los Chamos",
        description: "Plataforma digital para barbería comercial con presentación de servicios.",
        tech: ["React", "Responsive Design", "CSS"],
        image: "/barberia.png",
        urlGithub: "https://github.com/luisDSotoE",
        urlDemo: "https://barberia-los-chamos-web.vercel.app/",
    },
    {
        id: 6,
        title: "Samy's Restobar",
        description: "Experiencia web interactiva para restaurante y barra de bebidas.",
        tech: ["Next.js", "Tailwind CSS", "UI Design"],
        image: "/samys.png",
        urlGithub: "https://github.com/luisDSotoE",
        urlDemo: "https://samys-restobar.vercel.app/",
    },
    {
        id: 7,
        title: "Monky Drinks",
        description: "Landing page y carta digital interactiva para marca de bebidas.",
        tech: ["Next.js", "Framer Motion", "Tailwind"],
        image: "/monky.png",
        urlGithub: "https://github.com/luisDSotoE",
        urlDemo: "https://monky-drinks.vercel.app/",
    },
    {
        id: 8,
        title: "Ema Bakery",
        description: "Sitio web para repostería y pastelería artesanal con catálogo visual.",
        tech: ["React", "Tailwind CSS", "Branding"],
        image: "/ema-bakery.png",
        urlGithub: "https://github.com/luisDSotoE",
        urlDemo: "https://ema-bakery-web.vercel.app/",
    },
];

export const dataTestimonials = [
    {
        id: 1,
        name: "Director de TI, Unicesar",
        description: "Luis demostró un dominio técnico excepcional al estructurar nuestro Dashboard. Su enfoque en la arquitectura de datos transformó nuestra manera de tomar decisiones.",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Carlos Mendoza",
        description: "El gestor de proyectos que desarrolló para nosotros es rápido, intuitivo y exactamente lo que necesitábamos para escalar. Una experiencia de usuario nivel premium.",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "Elena Rodríguez",
        description: "Contratar a Luis para nuestra transformación digital fue un acierto. Código limpio, entregas a tiempo y un diseño web que realmente destaca frente a la competencia.",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Andrés Silva",
        description: "El sistema pensional que implementó resolvió cuellos de botella que veníamos arrastrando por años. Su habilidad para modelar sistemas complejos es invaluable.",
        imageUrl: "/profile4.png",
    },
];