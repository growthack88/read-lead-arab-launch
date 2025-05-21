
import React from "react";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image = "/assets/home-og.jpg",
  url = "https://land.readtolead.store/",
  type = "product"
}) => {
  React.useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    const metaTags = {
      "description": description,
      "keywords": "Read to Lead, كتب, كيتات تعليمية, تطوير الذات, التسويق, الإنتاجية, ريادة أعمال",
      "author": "Read to Lead",
      "og:title": title,
      "og:description": description,
      "og:image": image,
      "og:url": url,
      "og:type": type,
      "og:locale": "ar_AR",
      "twitter:card": "summary_large_image",
      "twitter:title": title,
      "twitter:description": description,
      "twitter:image": image
    };
    
    // Update existing meta tags or create new ones
    Object.entries(metaTags).forEach(([name, content]) => {
      let element = document.querySelector(`meta[name="${name}"]`) || 
                    document.querySelector(`meta[property="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        if (name.startsWith('og:')) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    });
    
    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', url);
    
    // Cleanup function to restore original title
    const originalTitle = document.title;
    return () => {
      document.title = originalTitle;
    };
  }, [title, description, image, url, type]);
  
  return null; // This component doesn't render anything
};

export default SEO;
