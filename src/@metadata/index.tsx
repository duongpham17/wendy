import Head from 'next/head';

const defaultDescription = "Pamper yourself with acrylic nails, SNS, gel manicures, eyebrow treatments & massages in Corringham. Book your appointment today!";

interface Props {
  title?: string;
  description?: string;
  image?: string;
}

export const Metadata = ({ title, description = defaultDescription }: Props) => {
  const fullTitle = title ? `Wendy Nails | ${title}` : "Wendy Nails";

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.wendynail.co.uk" />
      <meta property="og:site_name" content="Wendy Nails" />
      <meta property="og:locale" content="en_GB" />
    </Head>
  );
}

export default Metadata;