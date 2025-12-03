import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const sectors = [
    {
      type: 'Strategic Service',
      title: '0→1 Innovation Delivery',
      description: 'VP-level transformation leadership bringing 0→1 innovation to enterprises and ventures. Proven methodology delivering 3-5x ROI turning bold, ambitious ideas into proven systems that scale.'
    },
    {
      type: 'Strategic Service',
      title: 'Venture Building & CTO Services',
      description: 'End-to-end venture creation from idea to scale. Technical leadership, team building, product strategy. Active startup co-founder with funding track record.'
    },
    {
      type: 'Business Impact',
      title: 'Engineering Leadership',
      description: 'Transformed 80-year-old elevator manufacturer into intelligent IoT business.',
      impact: 'Result: 3x revenue potential through connected services and predictive maintenance.'
    },
    {
      type: 'Business Impact',
      title: 'Enterprise Integration Services',
      description: 'Led fintech platform serving millions of users. Cloud transformation, behavioral finance, 99% test coverage.',
      impact: 'Delivered advanced wealth management capabilities at scale.'
    },
  ];

  return (
    <section
      id="portfolio"
      ref={ref}
      className="py-32 px-8 bg-gray-50"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
            Service Offerings
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.15 }}
            >
              <Card className="p-10 h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl">
                <div className="mb-4">
                  <span className="text-sm font-light text-gray-500 uppercase tracking-wider">
                    {sector.type}
                  </span>
                </div>
                <h3 className="text-2xl font-normal text-gray-900 mb-4">
                  {sector.title}
                </h3>
                <p className="text-base font-light text-gray-700 mb-6 leading-relaxed">
                  {sector.description}
                </p>
                {sector.impact && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-sm font-light text-gray-500 mb-2">Business Impact</p>
                    <p className="text-base font-light text-gray-700 leading-relaxed">
                      {sector.impact}
                    </p>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
