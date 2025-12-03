import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Fade to White */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://c.animaapp.com/mipw8t0njGuOWs/img/slatts____an_image_with_white_background_with_pastel_colors_and_fdda9e28-b23f-4457-9f46-ba1b686538ef.png)',
            backgroundPosition: 'center 85%'
          }}
        />
        {/* Gradient Overlay - Fade to White */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-60% via-transparent via-75% to-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <p className="text-sm md:text-base font-light text-gray-600 mb-4 uppercase tracking-wider">
            Innovation Engineering // AI Orchestration
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 max-w-4xl mx-auto leading-tight">
            Transform your biggest, boldest ideas into revenue-generating reality
          </h1>

          <p className="text-lg md:text-xl font-light text-gray-700 mb-12 max-w-2xl mx-auto">
            Cut through complexity to deliver measurable results. Save money. Ship faster. Scale smarter.
          </p>

          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-normal px-10 py-7 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Book Strategy Session
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
