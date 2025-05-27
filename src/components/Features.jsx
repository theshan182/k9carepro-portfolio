import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Deaf Dog Socialization',
    desc: `Utilizes YOLOV8’s state-of-the-art computer vision to accurately interpret deaf dogs’ body language signals—such as tail wags, ear positions, and posture. This technology empowers owners to better understand and enhance social interactions, reducing anxiety and isolation.`,
  },
  {
    title: 'Bark Analysis',
    desc: `Our system analyzes acoustic patterns in barking to detect emotional states like stress, excitement, or discomfort. By recognizing these cues early, owners can intervene proactively to improve their dog's wellbeing and behavior.`,
  },
  {
    title: 'AI Chatbot',
    desc: `An intelligent AI chatbot is integrated to provide instant, reliable answers to health, training, and behavior queries. It leverages vast veterinary databases and behavioral science to offer personalized advice for your furry friend.`,
  },
  {
    title: 'Health Monitoring',
    desc: `Real-time monitoring of vital signs such as heart rate, temperature, and activity levels is conducted through IoT sensors embedded in the smart collar. This allows for early detection of health issues and supports continuous care.`,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-blue-50">
      <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-16">
        Advanced Features for Deaf Dogs
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        {features.map(({ title, desc }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{
              scale: 1.04,
              boxShadow: '0 20px 30px rgba(59, 130, 246, 0.3)',
              borderColor: 'rgba(59, 130, 246, 0.6)',
            }}
            className="flex flex-col p-10 bg-white rounded-3xl border border-blue-200 shadow-md cursor-pointer"
          >
            <div className="mb-6">
              <h3 className="text-3xl font-extrabold text-blue-900">{title}</h3>
            </div>
            <p className="text-blue-700 text-lg leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
