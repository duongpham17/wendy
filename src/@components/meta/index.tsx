import Head from 'next/head';

const defaultDescription =
  "Professional nail salon offering acrylic, gel, SNS nails, eyebrow treatments and massage services in Corringham and Stanford-le-Hope.";

const defaultOgTitle =
  "Wendy's Nails & Beauty | Nail Salon in Corringham";

interface Props {
  title?: string;
  ogTitle?: string;
  description?: string;
  image?: string;
}

export const Layout = ({
  title,
  image,
  ogTitle = defaultOgTitle,
  description = defaultDescription,
}: Props) => (
  <Head>
    <title>
      {title
        ? `Wendy's Nails & Beauty | ${title} in Corringham`
        : "Wendy's Nails & Beauty | Nail Salon in Corringham"}
    </title>

    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    {/* SEO */}
    <meta name="description" content={description} />

    {/* Open Graph */}
    <meta property="og:title" content={ogTitle} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.wendynail.co.uk" />
    <meta property="og:image" content={image || "/home_intro.webp"} />

    {/* Local SEO boost */}
    <meta name="geo.region" content="GB-ESS" />
    <meta name="geo.placename" content="Corringham, Essex" />
  </Head>
);

export default Layout;