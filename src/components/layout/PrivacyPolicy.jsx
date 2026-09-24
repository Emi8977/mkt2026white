import { Footer } from './Footer';
import { siteContent } from '../../data/site';

export function PrivacyPolicy() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a href="/" className="brand" aria-label="Volver al inicio de The Osas">
            <img src="/logo.jpg" alt="Logo de The Osas" className="brand-mark" />
            <span className="brand-copy">
              <strong>{siteContent.brand.name}</strong>
              <small>{siteContent.brand.subtitle}</small>
            </span>
          </a>

          <a className="btn btn-primary btn-whatsapp header-cta" href={siteContent.brand.whatsappUrl} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </header>

      <main className="section">
        <div className="container">
          <div className="section-header">
            <span className="kicker">Privacidad</span>
            <h1>Política de privacidad</h1>
          </div>

          <div className="card" style={{ padding: '1.5rem', maxWidth: '48rem' }}>
            <p>
              En The Osas, cuidamos la información que compartís al contactarnos por WhatsApp, formulario,
              Instagram o email. Esta política es un placeholder para dejar la base legal antes de la versión final.
            </p>
            <p>
              La información que recibimos puede incluir nombre, empresa, sector, contacto y mensaje. La
              utilizamos solo para responder consultas, coordinar un diagnóstico o gestionar la relación comercial.
            </p>
            <p>
              No compartimos tus datos con terceros salvo obligación legal o con la autorización explícita del
              interesado. Podés solicitar la actualización, eliminación o consulta de tus datos escribiendo a
              {` ${siteContent.brand.email}`}, y te responderemos con la mayor rapidez posible.
            </p>
            <p>
              Si en el futuro se activa un servicio real de formulario o automatización, se actualizará esta
              política con los proveedores, periodos de almacenamiento y medidas implementadas.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
