import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Facebook, Youtube, Pencil, Computer,  Speech, Instagram, Database, Code, BarChart  } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "https://www.youtube.com/@ls117spartan7",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/luis-soto-7698262a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
        id: 3,
        logo: <Twitter size={30} strokeWidth={1} />,
        src: "https://x.com/Ldsoto117",
    },
    {
        id: 4,
        logo: <Facebook size={30} strokeWidth={1} />,
        src: "https://www.facebook.com/luisdavid.sotoestrada?mibextid=ZbWKwL",
    },
    {
        id: 5,
        logo: <Instagram size={30} strokeWidth={1} />,
        src: "https://www.instagram.com/luis_soto_117/profilecard/?igsh=MXFwaGl2eHM5YTM1aw==",
    },
];



export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Sistemas de Información",
        subtitle: "Gestión y Análisis de Datos",
        description: "Estudia el diseño, implementación y gestión de sistemas de información para apoyar la toma de decisiones empresariales mediante el análisis eficiente de datos.",
        date: "nov 2024",
    },
    {
        id: 2,
        title: "Software 2",
        subtitle: "Diseño y Arquitectura de Software",
        description: "Profundiza en técnicas avanzadas de desarrollo de software, incluyendo patrones de diseño, principios SOLID y arquitecturas modernas para construir sistemas robustos y escalables.",
        date: "julio 2024",
    },
    {
        id: 3,
        title: "Programación Web",
        subtitle: "Desarrollo de Aplicaciones Web",
        description: "Aprende a crear aplicaciones web dinámicas y responsivas utilizando tecnologías como HTML, CSS, JavaScript y frameworks modernos como React o Angular.",
        date: "Nov 2022",
    },
    {
        id: 4,
        title: "Programación Móvil",
        subtitle: "Desarrollo de Aplicaciones para Dispositivos Móviles",
        description: "Explora el desarrollo de aplicaciones móviles nativas e híbridas utilizando tecnologías como Android Studio, Swift y Flutter, optimizando la experiencia del usuario en plataformas móviles.",
        date: "nov 2022",
    },
    
    
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 4,
        text: "Años dedicandome a esta carrera",
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
        endCounter: 10,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 5,
        text: "aplicaciones vendidas",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    
    
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo aplicaciones que cumplan con los requisitos del usuario y seguridad",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Interfaces funcionales y atractivas centradas en la usabilidad.",
    },
    {
        icon: <Database />,
        title: "Gestión de Información",
        description: "Diseño y gestión de sistemas para optimizar decisiones.",
    },
    {
        icon: <Code />,
        title: "Desarrollo de Soluciones",
        description: "Patrones, SOLID y estrategias para software escalable.",
    },    
    {
        icon: <BarChart />,
        title: "Modelo y Simulación",
        description: "Estudia y aplica técnicas para representar y simular sistemas complejos en diversos dominios.",
    },
    
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Dashboard-unicesar",
        image: "/Dashboard-1.jpg",
        urlGithub: "https://github.com/shadow-shield/Dashboard-Admin.git",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "administrar proyectos",
        image: "/admiProyecto.jpg",
        urlGithub: "https://github.com/luisDSotoE/admi-proyectos-cliente.git",
        urlDemo: "https://admi-proyectos-cliente.vercel.app/",
    },
    {
        id: 3,
        title: "Aplicacion pensionado",
        image: "/pension.jpg",
        urlGithub: "https://github.com/luisDSotoE/proyecto_pensionado.git",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];