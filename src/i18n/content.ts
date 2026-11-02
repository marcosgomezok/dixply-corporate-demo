export type Locale = "en" | "es";

export const locales: Locale[] = ["en", "es"];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const content = {
  en: {
    localeName: "English",
    brand: "Vaqzeryn",
    tagline: "Business, made more capable.",
    nav: [
      { label: "Services", href: "/services/" },
      { label: "About", href: "/about/" },
      { label: "Insights", href: "/insights/" },
      { label: "Contact", href: "/contact/" },
    ],
    contactLink: "Talk with our team",
    menu: "Open navigation",
    closeMenu: "Close navigation",
    skip: "Skip to content",
    footerIntro:
      "Practical thinking for the decisions, operations and technology that move your business forward.",
    footerExplore: "Explore",
    footerContact: "Start a conversation",
    footerNote: "Independent consulting for businesses ready to move with purpose.",
    attribution: "Demonstration by Dixply",
    language: "Language",
    home: {
      businessType: "Business process improvement consultancy",
      eyebrow: "Structure. Processes. Results.",
      title: "Better processes. Better results.",
      intro:
        "Vaqzeryn works with small and mid-sized businesses to find operational friction, redesign the work that slows them down, and turn better processes into measurable performance.",
      primary: "See how we improve processes",
      secondary: "Talk with our team",
      proofLabel: "Vaqzeryn at a glance",
      proofNote: "Presentation figures; not verified company or client data.",
      proofStats: [
        { value: "320+", label: "SMEs supported" },
        { value: "14", label: "years of experience" },
        { value: "8", label: "countries covered" },
        { value: "24", label: "professionals on the team" },
      ],
      servicesLabel: "Where we help",
      servicesTitle: "Find the friction. Fix the process. Track the result.",
      servicesIntro:
        "We diagnose operational bottlenecks, streamline workflows and equip your team to measure the impact. Strategy and digital consulting support the improvements your business needs.",
      servicesLink: "View all services",
      valueLabel: "The Vaqzeryn difference",
      valueTitle: "A clear view. A capable team. Progress you can see.",
      valueIntro:
        "We work alongside your people to turn complex operational challenges into changes the business can keep improving.",
      values: [
        {
          title: "Clarity before activity",
          body: "We help your team agree on the problem before investing in the solution.",
        },
        {
          title: "Built for your reality",
          body: "Recommendations respect your people, capacity, customers and constraints.",
        },
        {
          title: "Capability that stays",
          body: "We work with your team, leaving behind useful skills, tools and ownership.",
        },
      ],
      methodLabel: "Our approach",
      methodTitle: "Move from uncertainty to useful momentum.",
      methodIntro:
        "A practical sequence brings the right people from understanding the problem to improving the work and tracking the difference.",
      steps: [
        { title: "Understand", body: "Map the real work, listen to the people doing it, and uncover delays and root causes." },
        { title: "Focus", body: "Prioritize the changes most likely to improve service, capacity or cost." },
        { title: "Improve and measure", body: "Test changes with your team, track the results and refine what works." },
      ],
      casesLabel: "Process improvement opportunities",
      casesTitle: "Make operational improvements visible in the numbers.",
      casesIntro:
        "We help teams identify where time and cost are being lost, then agree on measures to track whether a change is working.",
      casesNote: "Areas to measure—not reported client results or averages. Outcomes vary by organization.",
      cases: [
        {
          industry: "Manufacturing",
          name: "Reduce production rework",
          result: "Less rework",
          metric: "and avoidable overtime",
          body: "Reviewing the causes of defects and schedule changes can reveal practical ways to protect capacity and cost.",
          service: "Operational Improvement",
        },
        {
          industry: "Professional services",
          name: "Improve project delivery",
          result: "More capacity",
          metric: "for client-facing work",
          body: "Clearer handoffs and workload visibility can help teams spend less time on coordination and more time delivering.",
          service: "Business Strategy",
        },
      ],
      testimonialLabel: "What business leaders say",
      testimonialIntro: "Clearer processes make a difference in the day-to-day work of a team.",
      testimonials: [
        {
          quote: "“We went from chasing late orders to knowing where the process needed attention. The team owns the changes now.”",
          by: "Operations director",
        },
        {
          quote: "“The work made our handoffs simpler and gave us hours back each week. We can finally see what is improving.”",
          by: "Managing partner",
        },
        {
          quote: "“Vaqzeryn focused on the operational issue behind the numbers—not a quick software fix.”",
          by: "General manager",
        },
      ],
      testimonialNote: "Sample testimonial copy; these are not actual client endorsements.",
      faqLabel: "Common questions",
      faqTitle: "What to expect from process improvement consulting.",
      faqIntro: "Straightforward answers about scope, measurement and the results you can expect.",
      faqLink: "More about our services",
      faqs: [
        {
          question: "What does process improvement consulting include?",
          answer: "We map how work actually moves, identify delays, rework and avoidable cost, then help your team prioritize and test improvements. The scope is shaped around your operation and goals.",
        },
        {
          question: "How do you measure whether a process is improving?",
          answer: "We agree on a baseline and a few practical indicators with your team—such as cycle time, error rates, on-time delivery or operating cost—then review the results as changes are tested.",
        },
        {
          question: "How soon can a business see a difference?",
          answer: "Timing depends on the process, data and people involved. A focused pilot may reveal early signals in weeks; durable financial outcomes usually take longer to validate.",
        },
        {
          question: "Can you guarantee a profit increase or return?",
          answer: "No. Results depend on your starting point, implementation and market conditions. Figures shown here are not verified client results or averages, forecasts or guarantees.",
        },
      ],
      finalTitle: "A better way forward starts with a good conversation.",
      finalBody: "Tell us what you are working through. We will help you find the right first step.",
      finalCta: "Start a conversation",
    },
    pages: {
      services: {
        eyebrow: "What we do",
        title: "Practical expertise for decisions that matter.",
        intro:
          "Three connected disciplines help your business choose a direction, make its operations stronger and put technology to work with purpose.",
        closeTitle: "Not sure where to begin?",
        closeBody: "A short conversation can help you identify the question worth solving first.",
        closeCta: "Talk with our team",
      },
      about: {
        eyebrow: "About Vaqzeryn",
        title: "Experienced partners for the work behind progress.",
        intro:
          "We are an independent consulting firm for organizations that want to grow without losing sight of how the work actually gets done.",
        backgroundTitle: "Experience with its feet on the ground.",
        background:
          "Founded in 2012, Vaqzeryn was built around a simple observation: small and mid-sized organizations deserve advice as thoughtful as the challenges they face—and practical enough to use. Our consultants bring experience across strategy, operations and technology, then work shoulder-to-shoulder with the people who know your business best.",
        missionLabel: "Our mission",
        missionTitle: "Make meaningful improvement possible for every organization we work with.",
        approachTitle: "A partnership, not a handoff.",
        approach:
          "The strongest outcomes are created with your team, not delivered to it. We bring structure and an outside perspective, while your people bring the context and expertise that make change work.",
        principlesTitle: "Principles we work by",
        principles: [
          { title: "Be candid", body: "Say what the evidence tells us, with care and respect." },
          { title: "Make it useful", body: "Turn complex ideas into decisions people can act on." },
          { title: "Share ownership", body: "Build change with the people who will sustain it." },
          { title: "Measure what matters", body: "Track outcomes that improve the work and the business." },
        ],
        teamLabel: "The people behind the work",
        teamTitle: "A senior team, close to the detail.",
        teamNote: "Sample team profiles; these are not staff biographies.",
        closeTitle: "Looking for a thoughtful partner?",
        closeBody: "We would welcome a conversation about what your business needs next.",
        closeCta: "Meet our team",
      },
      insights: {
        eyebrow: "Ideas for better business",
        title: "Useful perspectives, grounded in the work.",
        intro:
          "Perspectives on strategy, operations and technology—written to help leaders ask better questions.",
        note: "Sample articles and author profiles for this website.",
      },
      contact: {
        eyebrow: "Get in touch",
        title: "Tell us what you are working through.",
        intro:
          "Share a little context and the right person on our team can help you consider a sensible next step.",
        formTitle: "Start a conversation",
        name: "Your name",
        email: "Business email",
        company: "Company",
        service: "Area of interest",
        servicePlaceholder: "Choose a service",
        message: "What would you like to work through?",
        submit: "Prepare email draft",
        privacy:
          "This is a static demonstration. The website does not send or store your form details. Preparing an email creates a mailto link; choose it to open your email app with the details you entered.",
        emailLabel: "Prefer email?",
        emailPrompt: "Open a draft to",
        successTitle: "Your email draft is ready.",
        successBody:
          "Open it in your email app and choose send if you wish. This website has not sent or stored your message.",
        draftLink: "Open email draft",
        errorTitle: "Please check the highlighted fields.",
        errors: {
          required: "Please complete this field.",
          email: "Enter a valid business email address.",
          messageShort: "Please add a little more detail (at least 20 characters).",
          messageLong: "Keep your message to 2,000 characters or fewer.",
        },
        closeTitle: "Not ready to share details?",
        closeBody: "Email us directly instead. Your email app will open with our address.",
      },
    },
    serviceItems: [
      {
        slug: "business-strategy",
        short: "Business Strategy",
        title: "A direction your whole business can act on.",
        summary:
          "Align leadership around clear priorities, customer opportunities and a realistic growth plan—with measurable goals your teams can use to guide everyday decisions.",
        intro:
          "When priorities multiply, progress gets diluted. We help leadership teams turn market realities and internal ambitions into a focused strategy—with choices, owners and measures people can use.",
        benefits: [
          "Shared priorities that guide day-to-day decisions.",
          "A realistic growth path grounded in customers and capability.",
          "Clear measures that keep leadership aligned.",
        ],
        deliverables: [
          "Market and business position assessment.",
          "Strategic choices, objectives and a 12–24 month roadmap.",
          "Leadership alignment session and progress scorecard.",
        ],
        method:
          "We combine focused interviews, available business data and facilitated working sessions. Together, we test assumptions, make choices and translate them into a sequence your team can own.",
        cta: "Discuss your strategy",
      },
      {
        slug: "operational-improvement",
        short: "Operational Improvement",
        title: "Less friction in the work. More room to deliver.",
        summary:
          "Map work from end to end, remove delays and rework, clarify ownership at each handoff, and establish measures to sustain improvements in service and cost.",
        intro:
          "Operational issues rarely live in one department. We follow the work from end to end to understand where time, quality and confidence are lost—then help your people improve the process without adding unnecessary complexity.",
        benefits: [
          "More reliable service and fewer avoidable delays.",
          "Clearer responsibilities across teams and handoffs.",
          "Practical improvements your people can sustain.",
        ],
        deliverables: [
          "Current-state process map and friction-point analysis.",
          "Prioritized improvement backlog with owners and measures.",
          "Team-led pilot and a repeatable improvement routine.",
        ],
        method:
          "We observe and map real work with the people doing it, establish a useful baseline, and test targeted changes in manageable cycles before scaling what works.",
        cta: "Improve an operation",
      },
      {
        slug: "digital-transformation",
        short: "Digital Transformation Consulting",
        title: "Technology choices that start with your business.",
        summary:
          "Connect business goals to workflow and technology choices, then build a phased roadmap with practical requirements, adoption planning and ways to measure value.",
        intro:
          "Digital transformation should make the business work better—not just add another platform. We connect your operating priorities with sensible technology choices, adoption planning and measurable outcomes.",
        benefits: [
          "A business-led roadmap instead of a technology wish list.",
          "More confidence in investment choices and sequencing.",
          "A thoughtful plan for adoption, ownership and measurement.",
        ],
        deliverables: [
          "Digital maturity and workflow assessment.",
          "Prioritized roadmap, requirements and decision criteria.",
          "Adoption plan, governance recommendations and outcome measures.",
        ],
        method:
          "We begin with business outcomes and user needs, assess the current landscape, then help your team compare options and plan adoption. We provide independent advice; any technology implementation is separately scoped.",
        cta: "Plan a digital roadmap",
      },
    ],
    team: [
      { name: "Elena Marlowe", role: "Managing Partner", focus: "Business strategy & leadership" },
      { name: "Rafael Ortiz", role: "Partner", focus: "Operations & service design" },
      { name: "Mina Chen", role: "Principal Consultant", focus: "Digital transformation" },
    ],
    articles: [
      {
        slug: "strategy-that-survives-contact-with-monday",
        category: "Business Strategy",
        title: "A strategy that survives contact with Monday morning",
        summary:
          "A useful strategy is not a presentation. It is a small set of choices people can make when the week gets busy.",
        author: "Elena Marlowe",
        readTime: "5 min read",
        intro:
          "Many plans look convincing in a room and disappear in the calendar that follows. The difference is not more detail—it is a clearer connection between strategic choices and the decisions teams make every week.",
        points: [
          { title: "Name the trade-offs", body: "A priority only guides action when people know what it takes precedence over. Make the choices visible, including the work you will deliberately defer." },
          { title: "Give teams a useful test", body: "Translate each strategic objective into a question people can ask when a new request arrives. The answer should help them decide, not send them looking for another document." },
          { title: "Review evidence, not activity", body: "Use a short regular review to ask whether customer or business outcomes are changing. A long list of completed tasks is not proof that the strategy is working." },
        ],
      },
      {
        slug: "find-the-friction-before-fixing-the-process",
        category: "Operations",
        title: "Find the friction before fixing the process",
        summary:
          "Before redesigning a workflow, follow the real work and find where teams lose time, context or confidence.",
        author: "Rafael Ortiz",
        readTime: "4 min read",
        intro:
          "A process diagram can describe the intended route while the actual work takes several detours. Improvement starts by understanding those detours without blaming the people navigating them.",
        points: [
          { title: "Watch a real example", body: "Trace one customer request from beginning to end. Record handoffs, waiting and repeated questions, not just the steps written in a procedure." },
          { title: "Ask what makes the workaround necessary", body: "People build workarounds for a reason. Missing information, unclear decision rights or mismatched tools may be the underlying issue." },
          { title: "Test one change at a time", body: "Choose a manageable adjustment, agree on what would improve, and review it with the team before expanding the change." },
        ],
      },
      {
        slug: "a-human-plan-for-digital-change",
        category: "Digital Transformation",
        title: "A more human plan for digital change",
        summary:
          "Successful digital change is designed around the people who will use it, not just the tools being introduced.",
        author: "Mina Chen",
        readTime: "6 min read",
        intro:
          "Technology selection is visible and exciting. The less visible work—clarifying ownership, changing routines and building confidence—is what often determines whether the investment makes a difference.",
        points: [
          { title: "Start with a day in the work", body: "Understand what a person is trying to accomplish, where information comes from and what makes the task difficult today." },
          { title: "Plan the transition, not just the launch", body: "Adoption needs time, support and feedback after go-live. Give managers and users a clear route to surface issues and improve the new way of working." },
          { title: "Define success in business terms", body: "Choose a small number of indicators connected to service, quality or capacity. Review them after implementation and adjust when the evidence calls for it." },
        ],
      },
    ],
    faqs: [
      { question: "Who does Vaqzeryn work with?", answer: "We work with owners, executives and operations leaders in small and mid-sized organizations. Engagements are tailored to the challenge, team and capacity involved." },
      { question: "How does an engagement begin?", answer: "We start with a short conversation to understand the situation and decide whether there is a useful fit. If so, we agree on a focused scope, outcomes, timeline and working team before any project begins." },
      { question: "Do you implement software?", answer: "We provide independent digital transformation advice, requirements and adoption planning. Software selection or implementation is not implied and would need to be separately agreed and scoped." },
      { question: "What happens to information I submit here?", answer: "This is a static demonstration with no backend. The form does not transmit or store information. You can prepare an email draft in your own email app instead." },
    ],
  },
  es: {
    localeName: "Español",
    brand: "Vaqzeryn",
    tagline: "Negocios con más posibilidades.",
    nav: [
      { label: "Servicios", href: "/services/" },
      { label: "Nosotros", href: "/about/" },
      { label: "Ideas", href: "/insights/" },
      { label: "Contacto", href: "/contact/" },
    ],
    contactLink: "Hable con nuestro equipo",
    menu: "Abrir navegación",
    closeMenu: "Cerrar navegación",
    skip: "Saltar al contenido",
    footerIntro:
      "Ideas prácticas para las decisiones, operaciones y tecnologías que impulsan su negocio.",
    footerExplore: "Secciones",
    footerContact: "Inicie una conversación",
    footerNote: "Consultoría independiente para empresas que quieren avanzar con propósito.",
    attribution: "Demostración de Dixply",
    language: "Idioma",
    home: {
      businessType: "Consultora de mejora de procesos empresariales",
      eyebrow: "Estructura. Procesos. Resultados.",
      title: "Mejores procesos. Mejores resultados.",
      intro:
        "Vaqzeryn trabaja con pequeñas y medianas empresas para detectar fricciones, rediseñar el trabajo que las retrasa y convertir procesos en un desempeño medible.",
      primary: "Vea cómo mejoramos procesos",
      secondary: "Hable con nuestro equipo",
      proofLabel: "Vaqzeryn en cifras",
      proofNote: "Cifras de presentación; no son datos verificados de la empresa o sus clientes.",
      proofStats: [
        { value: "320+", label: "pymes acompañadas" },
        { value: "14", label: "años de trayectoria" },
        { value: "8", label: "países con cobertura" },
        { value: "24", label: "profesionales en el equipo" },
      ],
      servicesLabel: "Cómo podemos ayudar",
      servicesTitle: "Detectar fricciones. Mejorar procesos. Medir resultados.",
      servicesIntro:
        "Diagnosticamos cuellos de botella, simplificamos flujos de trabajo y ayudamos a su equipo a medir el impacto. La estrategia y la consultoría digital complementan las mejoras que necesita su empresa.",
      servicesLink: "Ver todos los servicios",
      valueLabel: "La diferencia Vaqzeryn",
      valueTitle: "Claridad, un equipo capaz y avances que se notan.",
      valueIntro:
        "Trabajamos junto a su equipo para convertir desafíos operativos complejos en cambios que la empresa pueda seguir mejorando.",
      values: [
        {
          title: "Claridad antes que actividad",
          body: "Ayudamos a su equipo a definir el problema antes de invertir en la solución.",
        },
        {
          title: "Pensado para su realidad",
          body: "Las recomendaciones consideran a las personas, la capacidad y los clientes.",
        },
        {
          title: "Capacidad que permanece",
          body: "Colaboramos con su equipo y dejamos conocimientos, herramientas y autonomía.",
        },
      ],
      methodLabel: "Nuestra metodología",
      methodTitle: "De la incertidumbre al avance con sentido.",
      methodIntro:
        "Una secuencia práctica acompaña a las personas indicadas desde la comprensión del problema hasta la mejora del trabajo y la medición del impacto.",
      steps: [
        { title: "Comprender", body: "Mapeamos el trabajo real, escuchamos a quienes lo realizan y detectamos demoras y causas." },
        { title: "Enfocar", body: "Priorizamos los cambios con mayor potencial para mejorar servicio, capacidad o costos." },
        { title: "Mejorar y medir", body: "Probamos cambios con su equipo, medimos resultados y ajustamos lo que funciona." },
      ],
      casesLabel: "Oportunidades de mejora de procesos",
      casesTitle: "Haga visibles las mejoras operativas en sus indicadores.",
      casesIntro:
        "Ayudamos a identificar dónde se pierden tiempo y recursos, y a elegir métricas para comprobar si los cambios funcionan.",
      casesNote: "Áreas para medir; no son resultados ni promedios reportados por clientes. El impacto varía según cada empresa.",
      cases: [
        {
          industry: "Manufactura",
          name: "Reducir el retrabajo en producción",
          result: "Menos retrabajo",
          metric: "y horas extra evitables",
          body: "Analizar las causas de defectos y cambios de programación permite encontrar mejoras para cuidar capacidad y costos.",
          service: "Mejora Operativa",
        },
        {
          industry: "Servicios profesionales",
          name: "Mejorar la entrega de proyectos",
          result: "Más capacidad",
          metric: "para el trabajo con clientes",
          body: "Los traspasos más claros y la visibilidad de carga ayudan a reducir la coordinación y dedicar más tiempo a entregar valor.",
          service: "Estrategia Empresarial",
        },
      ],
      testimonialLabel: "Lo que dicen los líderes empresariales",
      testimonialIntro: "Los procesos más claros se notan en el trabajo cotidiano de cada equipo.",
      testimonials: [
        {
          quote: "«Pasamos de perseguir pedidos retrasados a saber dónde debía mejorar el proceso. Hoy el equipo es responsable de los cambios».",
          by: "Directora de operaciones",
        },
        {
          quote: "«Simplificamos los traspasos entre equipos y recuperamos horas cada semana. Por fin podemos ver qué está mejorando».",
          by: "Socio director",
        },
        {
          quote: "«Vaqzeryn se enfocó en el problema operativo detrás de las cifras, no en ofrecer una solución rápida de software».",
          by: "Gerente general",
        },
      ],
      testimonialNote: "Textos de muestra; no son recomendaciones de clientes reales.",
      faqLabel: "Preguntas frecuentes",
      faqTitle: "Qué esperar de una consultoría de mejora de procesos.",
      faqIntro: "Respuestas claras sobre el alcance, la medición y los resultados que puede esperar.",
      faqLink: "Más información sobre nuestros servicios",
      faqs: [
        {
          question: "¿Qué incluye una consultoría de mejora de procesos?",
          answer: "Mapeamos cómo fluye realmente el trabajo, detectamos demoras, retrabajo y costos evitables, y ayudamos a su equipo a priorizar y probar mejoras. El alcance se adapta a la operación y sus objetivos.",
        },
        {
          question: "¿Cómo miden si un proceso está mejorando?",
          answer: "Acordamos una referencia inicial y algunos indicadores prácticos junto a su equipo, como tiempos de ciclo, errores, entregas a tiempo o costos operativos, y revisamos los resultados durante las pruebas.",
        },
        {
          question: "¿Cuándo puede notarse una diferencia?",
          answer: "Depende del proceso, los datos y las personas involucradas. Una prueba acotada puede mostrar señales iniciales en semanas; los resultados financieros sostenibles requieren más tiempo para validarse.",
        },
        {
          question: "¿Pueden garantizar un aumento de ganancias o retorno?",
          answer: "No. Los resultados dependen del punto de partida, la implementación y las condiciones del mercado. Las cifras del sitio no son resultados ni promedios verificados de clientes, proyecciones o garantías.",
        },
      ],
      finalTitle: "Un buen camino empieza con una buena conversación.",
      finalBody: "Cuéntenos qué está tratando de resolver. Le ayudaremos a encontrar el primer paso.",
      finalCta: "Inicie una conversación",
    },
    pages: {
      services: {
        eyebrow: "Qué hacemos",
        title: "Experiencia práctica para las decisiones importantes.",
        intro:
          "Tres disciplinas conectadas ayudan a elegir un rumbo, fortalecer las operaciones y aprovechar la tecnología con propósito.",
        closeTitle: "¿No sabe por dónde empezar?",
        closeBody: "Una conversación breve puede ayudarle a identificar qué conviene resolver primero.",
        closeCta: "Hable con nuestro equipo",
      },
      about: {
        eyebrow: "Acerca de Vaqzeryn",
        title: "Socios con experiencia para el trabajo que impulsa el progreso.",
        intro:
          "Somos una consultora independiente para organizaciones que quieren crecer sin perder de vista cómo se realiza el trabajo.",
        backgroundTitle: "Experiencia con los pies en la tierra.",
        background:
          "Vaqzeryn nació en 2012 a partir de una idea sencilla: las pequeñas y medianas empresas merecen recomendaciones tan rigurosas como sus desafíos y, a la vez, fáciles de poner en práctica. Nuestro equipo combina estrategia, operaciones y tecnología, y trabaja junto a quienes mejor conocen su organización.",
        missionLabel: "Nuestra misión",
        missionTitle: "Hacer posible una mejora significativa en cada organización con la que colaboramos.",
        approachTitle: "Una colaboración, no una entrega.",
        approach:
          "Los mejores resultados se crean junto a su equipo. Aportamos estructura y una perspectiva externa; las personas de su organización aportan el contexto que hace posible el cambio.",
        principlesTitle: "Principios que nos guían",
        principles: [
          { title: "Hablar con franqueza", body: "Compartimos lo que muestran los datos, con respeto y consideración." },
          { title: "Aportar valor práctico", body: "Convertimos ideas complejas en decisiones que se pueden llevar a la práctica." },
          { title: "Compartir la responsabilidad", body: "Construimos el cambio con quienes lo mantendrán." },
          { title: "Medir lo importante", body: "Seguimos resultados que mejoran el trabajo y el negocio." },
        ],
        teamLabel: "Las personas detrás del trabajo",
        teamTitle: "Un equipo sénior, cerca de cada detalle.",
        teamNote: "Perfiles de muestra; no son biografías del equipo real.",
        closeTitle: "¿Busca un socio de confianza?",
        closeBody: "Conversemos sobre las próximas necesidades de su organización.",
        closeCta: "Conozca al equipo",
      },
      insights: {
        eyebrow: "Ideas para mejores negocios",
        title: "Perspectivas útiles y conectadas con la realidad.",
        intro:
          "Perspectivas sobre estrategia, operaciones y tecnología para ayudar a los líderes a hacer mejores preguntas.",
        note: "Artículos y perfiles de autor de muestra para este sitio.",
      },
      contact: {
        eyebrow: "Hablemos",
        title: "Cuéntenos qué está tratando de resolver.",
        intro:
          "Comparta algunos detalles y la persona indicada de nuestro equipo podrá ayudarle a considerar el siguiente paso.",
        formTitle: "Inicie una conversación",
        name: "Su nombre",
        email: "Correo electrónico laboral",
        company: "Empresa",
        service: "Área de interés",
        servicePlaceholder: "Seleccione un servicio",
        message: "¿Qué le gustaría resolver?",
        submit: "Preparar borrador de correo",
        privacy:
          "Esta es una demostración estática. El sitio no envía ni guarda sus datos. Preparar un correo crea un enlace mailto; al seleccionarlo, se abrirá su aplicación de correo con los datos ingresados.",
        emailLabel: "¿Prefiere escribirnos?",
        emailPrompt: "Crear un borrador para",
        successTitle: "Su borrador de correo está listo.",
        successBody:
          "Ábralo en su aplicación de correo y envíelo si lo desea. Este sitio no envió ni guardó su mensaje.",
        draftLink: "Abrir borrador de correo",
        errorTitle: "Revise los campos señalados.",
        errors: {
          required: "Complete este campo, por favor.",
          email: "Escriba una dirección de correo laboral válida.",
          messageShort: "Añada un poco más de detalle (al menos 20 caracteres).",
          messageLong: "El mensaje no debe superar los 2.000 caracteres.",
        },
        closeTitle: "¿Aún no quiere compartir detalles?",
        closeBody: "Puede escribirnos directamente. Se abrirá su aplicación de correo.",
      },
    },
    serviceItems: [
      {
        slug: "business-strategy",
        short: "Estrategia Empresarial",
        title: "Un rumbo que todo su negocio puede seguir.",
        summary:
          "Alinee al equipo directivo en prioridades, oportunidades para sus clientes y un plan de crecimiento realista, con objetivos medibles que orienten las decisiones diarias.",
        intro:
          "Cuando se multiplican las prioridades, el progreso pierde fuerza. Ayudamos a los equipos directivos a convertir la realidad del mercado y sus ambiciones en una estrategia enfocada, con decisiones y objetivos concretos.",
        benefits: [
          "Prioridades compartidas para orientar las decisiones diarias.",
          "Un camino de crecimiento basado en clientes y capacidades reales.",
          "Métricas claras para mantener alineado al equipo directivo.",
        ],
        deliverables: [
          "Análisis del mercado y la situación de la empresa.",
          "Decisiones estratégicas, objetivos y plan de 12 a 24 meses.",
          "Sesión de alineación directiva y cuadro de seguimiento.",
        ],
        method:
          "Combinamos entrevistas, datos disponibles y sesiones de trabajo. Juntos analizamos las hipótesis, tomamos decisiones y establecemos las etapas que su equipo podrá asumir.",
        cta: "Conversemos sobre su estrategia",
      },
      {
        slug: "operational-improvement",
        short: "Mejora Operativa",
        title: "Menos fricción en el trabajo. Más capacidad para cumplir.",
        summary:
          "Analice el trabajo de principio a fin, reduzca demoras y retrabajo, aclare responsabilidades y defina métricas para sostener mejoras de servicio y costos.",
        intro:
          "Los desafíos operativos rara vez se limitan a un área. Seguimos el trabajo de principio a fin para descubrir dónde se pierden tiempo, calidad y confianza, y ayudamos a mejorar los procesos sin añadir complejidad innecesaria.",
        benefits: [
          "Un servicio más confiable y menos retrasos evitables.",
          "Responsabilidades más claras entre los equipos.",
          "Mejoras prácticas que las personas pueden mantener.",
        ],
        deliverables: [
          "Mapa del proceso actual y análisis de puntos de fricción.",
          "Lista priorizada de mejoras, responsables y métricas.",
          "Prueba piloto dirigida por el equipo y rutina de mejora continua.",
        ],
        method:
          "Observamos el trabajo real con quienes lo realizan, definimos una referencia útil y probamos cambios concretos en ciclos manejables antes de ampliar lo que funciona.",
        cta: "Mejore una operación",
      },
      {
        slug: "digital-transformation",
        short: "Consultoría en Transformación Digital",
        title: "Tecnología que parte de las necesidades de su negocio.",
        summary:
          "Conecte los objetivos de negocio con los procesos y la tecnología, y defina una ruta por etapas con requisitos, adopción y formas de medir el valor.",
        intro:
          "La transformación digital debe ayudar a que la empresa funcione mejor, no sumar otra plataforma. Conectamos las prioridades del negocio con decisiones tecnológicas sensatas, planes de adopción y resultados medibles.",
        benefits: [
          "Un plan guiado por el negocio, no una lista de tecnologías.",
          "Más seguridad al elegir y secuenciar inversiones.",
          "Un plan de adopción, responsabilidades y medición.",
        ],
        deliverables: [
          "Evaluación de madurez digital y flujos de trabajo.",
          "Plan priorizado, requisitos y criterios para decidir.",
          "Plan de adopción, recomendaciones de gobierno y métricas.",
        ],
        method:
          "Partimos de los resultados del negocio y las necesidades de las personas. Analizamos la situación actual y comparamos opciones con su equipo. Nuestra asesoría es independiente; cualquier implementación se define por separado.",
        cta: "Planifique su ruta digital",
      },
    ],
    team: [
      { name: "Elena Marlowe", role: "Socia directora", focus: "Estrategia empresarial y liderazgo" },
      { name: "Rafael Ortiz", role: "Socio", focus: "Operaciones y diseño de servicios" },
      { name: "Mina Chen", role: "Consultora principal", focus: "Transformación digital" },
    ],
    articles: [
      {
        slug: "strategy-that-survives-contact-with-monday",
        category: "Estrategia Empresarial",
        title: "Una estrategia que resiste el lunes por la mañana",
        summary:
          "Una estrategia útil no es una presentación. Son decisiones claras que orientan el trabajo de cada semana.",
        author: "Elena Marlowe",
        readTime: "5 min de lectura",
        intro:
          "Muchos planes convencen en una sala y desaparecen en la agenda de la semana siguiente. La diferencia no es tener más detalles, sino conectar mejor las decisiones estratégicas con el trabajo cotidiano.",
        points: [
          { title: "Defina las renuncias", body: "Una prioridad solo orienta el trabajo cuando todos entienden qué desplaza. Deje claras las decisiones y también qué tareas se aplazarán deliberadamente." },
          { title: "Dé al equipo una guía útil", body: "Convierta cada objetivo en una pregunta que ayude a decidir qué hacer ante una nueva solicitud, sin tener que buscar otro documento." },
          { title: "Revise los resultados, no la actividad", body: "Analice con regularidad si cambian los resultados para sus clientes o su negocio. Completar muchas tareas no demuestra que la estrategia esté funcionando." },
        ],
      },
      {
        slug: "find-the-friction-before-fixing-the-process",
        category: "Operaciones",
        title: "Encuentre la fricción antes de rediseñar el proceso",
        summary:
          "Antes de cambiar un flujo de trabajo, observe cómo se realiza y dónde se pierde tiempo o información.",
        author: "Rafael Ortiz",
        readTime: "4 min de lectura",
        intro:
          "Un diagrama puede mostrar el recorrido previsto mientras el trabajo real toma otros caminos. Para mejorar, hay que entenderlos sin culpar a quienes deben transitarlos.",
        points: [
          { title: "Observe un caso real", body: "Siga una solicitud de cliente desde el inicio hasta el final. Registre los traspasos, esperas y preguntas repetidas, no solo los pasos del procedimiento." },
          { title: "Pregunte por qué hace falta improvisar", body: "Los equipos crean soluciones alternativas por algún motivo. Puede faltar información, claridad en las decisiones o herramientas adecuadas." },
          { title: "Pruebe un cambio a la vez", body: "Elija un ajuste manejable, defina qué debería mejorar y revíselo con el equipo antes de extenderlo." },
        ],
      },
      {
        slug: "a-human-plan-for-digital-change",
        category: "Transformación Digital",
        title: "Un plan de cambio digital más humano",
        summary:
          "El cambio digital funciona mejor cuando se diseña para quienes usarán las nuevas herramientas.",
        author: "Mina Chen",
        readTime: "6 min de lectura",
        intro:
          "Elegir tecnología es una parte visible y emocionante. Aclarar responsabilidades, cambiar rutinas y desarrollar confianza es menos visible, pero suele determinar el valor de la inversión.",
        points: [
          { title: "Empiece por observar el trabajo", body: "Entienda qué intenta lograr cada persona, de dónde obtiene la información y qué dificultades encuentra hoy." },
          { title: "Planifique la transición, no solo el lanzamiento", body: "La adopción requiere tiempo, apoyo y comentarios después de la puesta en marcha. Defina cómo se comunicarán los problemas y se mejorará el nuevo proceso." },
          { title: "Mida el éxito con indicadores de negocio", body: "Elija unas pocas métricas relacionadas con el servicio, la calidad o la capacidad. Revise los datos después de implementar y ajuste el plan cuando sea necesario." },
        ],
      },
    ],
    faqs: [
      { question: "¿Con quién trabaja Vaqzeryn?", answer: "Colaboramos con propietarios, directivos y responsables de operaciones de pequeñas y medianas organizaciones. Adaptamos cada proyecto al desafío, el equipo y la capacidad disponibles." },
      { question: "¿Cómo comienza un proyecto?", answer: "Empezamos con una conversación breve para entender la situación y confirmar si podemos aportar valor. Después acordamos el alcance, los resultados, el plazo y el equipo antes de iniciar." },
      { question: "¿Implementan programas informáticos?", answer: "Ofrecemos asesoría independiente en transformación digital, requisitos y adopción. La selección o implementación de software no está incluida, salvo que se acuerde y defina por separado." },
      { question: "¿Qué ocurre con la información que envío?", answer: "Esta es una demostración estática sin servidor. El formulario no transmite ni almacena información. Puede preparar un borrador desde su propia aplicación de correo." },
    ],
  },
} as const;

export type SiteContent = (typeof content)[Locale];
