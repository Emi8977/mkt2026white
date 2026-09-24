import { Helmet } from 'react-helmet-async';
import { siteContent } from '../data/site';

export function Seo({
  title = 'The Osas | Marketing & Ads',
  description = 'Agencia de marketing y ads para marcas de Mendoza y todo el país. Estrategia, paid media, contenidos y visuales para crecer con claridad.',
  path = '/',
  image = '/og-image.svg',
  schema = null,
}) {
  const canonicalUrl = `https://${siteContent.brand.domain}${path === '/' ? '' : path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={canonicalUrl} />
      {schema ? <script type="application/ld+json">{JSON.stringify(schema)}</script> : null}
    </Helmet>
  );
}
