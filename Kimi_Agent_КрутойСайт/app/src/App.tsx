// SECTION: App.tsx — Main app component wiring all sections
import { Toaster } from '@/components/ui/sonner';
import { Header } from '@/sections/Header';
import { VideoHero } from '@/sections/VideoHero';
import { About } from '@/sections/About';
import { StoryScroll } from '@/sections/StoryScroll';
import { Rooms } from '@/sections/Rooms';
import { Features } from '@/sections/Features';
import { Gallery } from '@/sections/Gallery';
import { Reviews } from '@/sections/Reviews';
import { Location } from '@/sections/Location';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import { StickyBookingBar } from '@/components/StickyBookingBar';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';

// SECTION: App
function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Toaster position="top-center" richColors />
      
      {/* Progress bar and navigation */}
      <Header />
      
      {/* Main content */}
      <main>
        {/* Hero with video background */}
        <VideoHero />
        
        {/* Story scroll section */}
        <StoryScroll />
        
        {/* About with rotation animation */}
        <About />
        
        {/* Features with counters */}
        <Features />
        
        {/* Rooms with alternating layout */}
        <Rooms />
        
        {/* Gallery masonry */}
        <Gallery />
        
        {/* Reviews wall */}
        <Reviews />
        
        {/* Location with map */}
        <Location />
        
        {/* Contact form */}
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Floating elements */}
      <StickyBookingBar />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
