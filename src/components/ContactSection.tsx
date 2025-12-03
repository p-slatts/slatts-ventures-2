import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin } from 'lucide-react';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-32 px-8 bg-gray-50"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
            Let's Transform Your Vision
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg font-light text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to turn your boldest ideas into revenue-generating reality? Book a strategy session to explore how we can accelerate your innovation journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-normal px-10 py-7 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open('https://calendly.com/slatts-ventures', '_blank')}
            >
              Book Strategy Session
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-normal px-10 py-7 text-lg rounded-full transition-all duration-300"
              onClick={() => window.location.href = 'mailto:contact@slatts.ventures'}
            >
              <Mail className="mr-2" width={20} height={20} />
              Direct Contact
            </Button>
          </div>

          <div className="text-center">
            <p className="text-base font-light text-gray-600 mb-2">Email</p>
            <a
              href="mailto:contact@slatts.ventures"
              className="text-lg font-normal text-primary hover:text-primary/80 transition-colors duration-200"
            >
              contact@slatts.ventures
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
