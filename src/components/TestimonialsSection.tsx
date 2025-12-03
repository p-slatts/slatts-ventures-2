import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const values = [
    {
      title: 'AI Platform Development',
      description: 'Custom AI solutions and automation'
    },
    {
      title: 'Context Engineering',
      description: 'Intelligent system design'
    },
    {
      title: 'Enterprise Integration',
      description: 'Seamless system connections'
    },
    {
      title: 'Engineering Leadership',
      description: 'Team building and mentorship'
    },
    {
      title: 'Digital Transformation',
      description: 'Legacy system modernization'
    },
    {
      title: 'Product Strategy',
      description: 'Vision to execution roadmaps'
    }
  ];

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-32 px-8 bg-white"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
            Additional Services
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-2xl text-center"
            >
              <h3 className="text-lg font-normal text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-sm font-light text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
