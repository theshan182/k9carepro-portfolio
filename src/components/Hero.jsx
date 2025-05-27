import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center px-6 sm:px-10 pt-24"
      style={{
       backgroundImage: `url(https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=1500&q=80)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-300 bg-opacity-60 z-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl text-center text-white bg-blue-800/70 p-8 md:p-14 rounded-2xl shadow-2xl backdrop-blur-sm"
      >
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 120 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
        >
          K9CarePro
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl leading-relaxed text-blue-100"
        >
          <span className="font-semibold text-white">K9CarePro</span> is an AI-powered system designed to assist dog owners in training, socializing, and monitoring their pets. It integrates multiple advanced technologies to enhance canine well-being. 
          The system features a unique deaf dog training module using <strong>YOLOv8</strong> to interpret body language cues—like tail wagging, ear position, and posture—identifying whether a dog is friendly, aggressive, or neutral.
          For deaf dogs, training is enabled through <strong>vibration-based communication</strong> techniques, fostering clear non-verbal interaction. 
          The bark analysis feature evaluates emotional states—such as aggression, excitement, or distress—by studying barking patterns using advanced sound recognition. 
          A built-in <strong>AI health chatbot</strong> offers instant, intelligent answers to pet health concerns using a rich medical dataset.
          Furthermore, vital signs like <strong>heart rate and body temperature</strong> are monitored continuously to alert owners about potential health issues early. 
          Altogether, K9CarePro provides a smart, fun, and comprehensive experience for dog lovers to keep their companions healthy, happy, and well-trained.
        </motion.p>
      </motion.div>
    </section>
  );
}
