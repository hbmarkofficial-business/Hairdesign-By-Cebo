import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Barbershop Augsburg | Hairdesign By Cebo</title>
        <meta
          name="description"
          content="Besuche unseren Premium Barbershop Hairdesign By Cebo in Augsburg für erstklassige Haarschnitte, Bartpflege und individuelle Styles. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Barbershop, Herrenfriseur, Haarschnitt, Bartpflege, Rasur, Augsburg, Hairdesign By Cebo"
        />
        <link rel="canonical" href="https://hairdesignbycebo.de" />

        {/* Open Graph */}
        <meta property="og:title" content="Hairdesign By Cebo | Premium Barbershop Augsburg" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und Bartpflege für den modernen Gentleman in Augsburg."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hairdesignbycebo.de" />
        <meta property="og:image" content="https://hairdesignbycebo.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hairdesign By Cebo | Premium Barbershop Augsburg" />
        <meta
          name="twitter:description"
          content="Erleben Sie erstklassige Haarschnitte und Bartpflege für den modernen Gentleman."
        />
        <meta name="twitter:image" content="https://hairdesignbycebo.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            "name": "Hairdesign By Cebo",
            "image": "https://hairdesignbycebo.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Jakoberstraße 27",
              "addressLocality": "Augsburg",
              "postalCode": "86152",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "48.3705",
              "longitude": "10.8978"
            },
            "url": "https://hairdesignbycebo.de",
            "telephone": "+49 151 18311067",
            "openingHours": "Mo-Fr 09:00-19:00, Sa 09:00-18:00",
            "priceRange": "€€",
            "servesCuisine": "Barbershop Services",
            "sameAs": [
              "https://www.facebook.com/hairdesignbycebo",
              "https://www.instagram.com/hairdesignbycebo"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;

