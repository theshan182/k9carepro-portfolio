import React from 'react';
import { motion } from 'framer-motion';

const implementations = [
  {
    title: 'YOLOv8 - Body Language Detection',
    desc: `Leveraging the cutting-edge YOLOv8 computer vision model, our system accurately detects and interprets deaf dogs' body language signals including tail movements, ear positioning, and posture. This real-time analysis enables meaningful insights into dog emotions and social cues.`,
  },
  {
    title: 'TensorFlow - Bark Analysis',
    desc: `Utilizes TensorFlow’s deep learning frameworks to analyze acoustic barking patterns. The system classifies emotional states such as stress, excitement, or discomfort by processing frequency, tone, and duration, helping owners respond proactively to their pet’s needs.`,
  },
  {
    title: 'TF-IDF & NLP - AI Chatbot',
    desc: `Our AI Chatbot employs Term Frequency-Inverse Document Frequency (TF-IDF) along with advanced Natural Language Processing (NLP) techniques to understand and answer complex health, behavior, and training queries instantly, offering personalized advice based on veterinary and behavioral datasets.`,
  },
  {
    title: 'IoT Sensors & Devices',
    desc: `Equipped with state-of-the-art IoT sensors including Raspberry Pi 4 as the processing hub, MLX90614 for non-contact temperature sensing, and MAX30105 for heart rate and oxygen saturation monitoring. This combination ensures continuous, real-time vital sign tracking to detect health anomalies early.`,
  },
];

export default function Implementation() {
  return (
    <section id="implementation" className="py-20 bg-blue-50">
      <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-12">
        Implementation Details
      </h2>
      <div className="max-w-5xl mx-auto px-6 grid gap-10 md:grid-cols-2">
        {implementations.map(({ title, desc }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ scale: 1.03, boxShadow: '0 10px 20px rgba(37, 99, 235, 0.3)' }}
            className="bg-white rounded-3xl p-8 shadow-lg border border-blue-200 cursor-pointer"
          >
            <h3 className="text-2xl font-bold text-blue-900 mb-4">{title}</h3>
            <p className="text-blue-700 leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
