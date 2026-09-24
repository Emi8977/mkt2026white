import { useEffect, useState } from 'react';
import { Header, Footer, PrivacyPolicy } from './components/layout';
import { Hero, Services, Quote, Sectors, Process, Cases, About, FAQ, Contact } from './components/sections';
import { Seo } from './components/Seo';
import { useReducedMotion } from './hooks/useReducedMotion';
import { siteContent } from './data/site';

const appSections = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-nosotros', label: 'Nosotros' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'sectores', label: 'Sectores' },
  { id: 'proceso', label: 'Proceso' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contacto', label: 'Contacto' },
];

function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'white';
    return window.localStorage.getItem('the-osas-theme') === 'dark' ? 'dark' : 'white';
  });
  const prefersReducedMotion = useReducedMotion();
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
  const isPrivacyPage = pathname.includes('/politica-privacidad') || pathname.includes('/politica-privacidad.html');
  const openQuote = () => {
    setIsQuoteOpen(true);
    window.setTimeout(() => {
      document.getElementById('cotizador')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  };
  const toggleQuote = () => {
    if (isQuoteOpen) {
      setIsQuoteOpen(false);
      return;
    }

    openQuote();
  };

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('the-osas-theme', theme);
  }, [theme]);

  const mainSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteContent.brand.name,
    image: 'https://theosasmkt.vercel.app/og-image.svg',
    description: 'Agencia de marketing y publicidad para marcas que necesitan crecer con estrategia, anuncios y contenidos.',
    areaServed: 'Argentina',
    url: 'https://theosasmkt.vercel.app/',
    sameAs: [siteContent.brand.instagram, siteContent.brand.instagramSecondary, siteContent.brand.whatsappUrl],
    makesOffer: siteContent.services.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: service.description,
      },
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: siteContent.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  if (isPrivacyPage) {
    return (
      <>
        <Seo
          title="Política de privacidad | The Osas"
          description="Información sobre privacidad, uso de datos y contacto para The Osas Marketing & Ads."
          path="/politica-privacidad"
        />
        <PrivacyPolicy />
      </>
    );
  }

  return (
    <>
      <Seo
        title="The Osas | Marketing & Ads"
        description="Agencia de marketing y ads para marcas que quieren crecer con estrategia, creatividad y resultados medibles."
        path="/"
        schema={faqSchema}
      />

      <div className="app-shell">
        <Header
          navItems={appSections}
          onQuoteOpen={openQuote}
          theme={theme}
          onThemeToggle={() => setTheme((current) => current === 'white' ? 'dark' : 'white')}
        />

        <main>
          <Hero prefersReducedMotion={prefersReducedMotion} />
          <About />
          <Services prefersReducedMotion={prefersReducedMotion} />
          <Quote isOpen={isQuoteOpen} onToggle={toggleQuote} />
          <Sectors prefersReducedMotion={prefersReducedMotion} />
          <Process prefersReducedMotion={prefersReducedMotion} />
          <Cases prefersReducedMotion={prefersReducedMotion} />
          <FAQ prefersReducedMotion={prefersReducedMotion} />
          <Contact prefersReducedMotion={prefersReducedMotion} />
        </main>

        <Footer onQuoteOpen={openQuote} />

      </div>

      <script type="application/ld+json">{JSON.stringify(mainSchema)}</script>
    </>
  );
}
export default App;
