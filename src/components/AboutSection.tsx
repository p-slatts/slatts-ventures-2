import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
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
            About
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <div className="text-lg font-light text-gray-700 max-w-3xl mx-auto leading-relaxed">
            <p>
              Some people talk about the future. I build it. Not because it's easy, but because it matters. Twenty years in the space between what is and what could be, building platforms, leading teams, turning industries on their heads. The work was never about the exit or the title. It was about the craft. The obsession. The 3am conviction that this thing has to exist. I believe technology should mean something and that the best work comes from curiosity that won't quit and the courage to ship before you're ready. This is what I do. I build things that matter.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="text-center"
          >
            <div className="bg-gray-50 p-8 rounded-2xl h-full">
              <h3 className="text-xl font-normal text-gray-900 mb-3">Engineering Leadership</h3>
              <p className="text-base font-light text-gray-600">
                VP-level transformation leadership
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            className="text-center"
          >
            <div className="bg-gray-50 p-8 rounded-2xl h-full">
              <h3 className="text-xl font-normal text-gray-900 mb-3">0→1 Innovation Delivery</h3>
              <p className="text-base font-light text-gray-600">
                Bold ideas to proven systems
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            className="text-center"
          >
            <div className="bg-gray-50 p-8 rounded-2xl h-full">
              <h3 className="text-xl font-normal text-gray-900 mb-3">3-5x ROI Track Record</h3>
              <p className="text-base font-light text-gray-600">
                Measurable business impact
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
            className="text-center"
          >
            <div className="bg-gray-50 p-8 rounded-2xl h-full">
              <h3 className="text-xl font-normal text-gray-900 mb-3">100+ Engineers Led</h3>
              <p className="text-base font-light text-gray-600">
                Team building expertise
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
            className="text-center"
          >
            <div className="bg-gray-50 p-8 rounded-2xl h-full">
              <h3 className="text-xl font-normal text-gray-900 mb-3">Digital Transformation</h3>
              <p className="text-base font-light text-gray-600">
                Legacy to modern systems
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7 }}
            className="text-center"
          >
            <div className="bg-gray-50 p-8 rounded-2xl h-full">
              <h3 className="text-xl font-normal text-gray-900 mb-3">Enterprise to Startup</h3>
              <p className="text-base font-light text-gray-600">
                Cross-sector experience
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
