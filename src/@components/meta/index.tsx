import Head from 'next/head';

const defaultDescription = "Nail salon, beauty services and products";
const defaultKeywords = "beauty, footcare, pedicure, massage, eyelashes, corringham, stanford, tint, ombre, fullset, infills, sns, care, facial";
const defaultOgTitle = "nail salon, beauty services and products, nails, footcare, pedicure, massage, eyelashes, tint,"

interface Props {
    title?: any,
    ogTitle?: string,
    description?: string,
    keywords?: string,
    image?: string,
}

export const Layout = ({title, image, ogTitle = defaultOgTitle, description = defaultDescription, keywords = defaultKeywords }: Props) => 
(        
    <Head>
        <title>{title ? `Wendy's | ${title}` : "Wendy's "}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content={description} />
        <meta name="og:title" content={ogTitle} key="og:title" />
        <meta property="og:url" content="https://www.wendynail.co.uk" key="og:url"/>
        <meta property="og:type" content="website" key="og:type"/>
        <meta property="og:image" content={image? "/home_intro.webp" : image} key="ogimage"/>
        <meta property="og:description" content={description} />
        <meta name="keywords" content={keywords} />
    </Head>
)

export default Layout;