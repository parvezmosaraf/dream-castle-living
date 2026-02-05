import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    ogImage?: string;
    canonical?: string;
}

const SEO = ({ title, description, keywords, ogImage, canonical }: SEOProps) => {
    const location = useLocation();
    const baseUrl = 'https://dream-castle-living.vercel.app';

    const defaultTitle = 'Dream Castle Living - Premium Apartments in Ashulia, Savar | Sea Dream Developments';
    const defaultDescription = 'Buy luxury 1550 sqft apartments in Ashulia Model Town, Savar, Dhaka. Dream Castle offers lake view flats with EMI options, premium amenities. Best real estate investment in Ashulia. Starting ৳38.75 Lakh.';
    const defaultKeywords = 'real estate Ashulia, property buy Savar, apartments Ashulia Model Town, flats for sale Savar, Ashulia apartments, Savar real estate, Dream Castle Living';
    const defaultImage = `${baseUrl}/favicon.png`;

    const pageTitle = title || defaultTitle;
    const pageDescription = description || defaultDescription;
    const pageKeywords = keywords || defaultKeywords;
    const pageImage = ogImage || defaultImage;
    const pageCanonical = canonical || `${baseUrl}${location.pathname}`;

    useEffect(() => {
        // Update title
        document.title = pageTitle;

        // Update meta tags
        updateMetaTag('name', 'description', pageDescription);
        updateMetaTag('name', 'keywords', pageKeywords);

        // Update Open Graph tags
        updateMetaTag('property', 'og:title', pageTitle);
        updateMetaTag('property', 'og:description', pageDescription);
        updateMetaTag('property', 'og:url', pageCanonical);
        updateMetaTag('property', 'og:image', pageImage);

        // Update Twitter Card tags
        updateMetaTag('name', 'twitter:title', pageTitle);
        updateMetaTag('name', 'twitter:description', pageDescription);
        updateMetaTag('name', 'twitter:image', pageImage);

        // Update canonical link
        updateCanonicalLink(pageCanonical);
    }, [pageTitle, pageDescription, pageKeywords, pageImage, pageCanonical]);

    return null;
};

const updateMetaTag = (attr: string, key: string, content: string) => {
    let element = document.querySelector(`meta[${attr}="${key}"]`);
    if (element) {
        element.setAttribute('content', content);
    } else {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        element.setAttribute('content', content);
        document.head.appendChild(element);
    }
};

const updateCanonicalLink = (url: string) => {
    let link = document.querySelector('link[rel="canonical"]');
    if (link) {
        link.setAttribute('href', url);
    } else {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        link.setAttribute('href', url);
        document.head.appendChild(link);
    }
};

export default SEO;
