import React from 'react';
import { motion } from 'framer-motion';

const methodologies = [
  {
    title: 'Bark Analysis Methodology',
    points: [
      'Data Collection: Gather and preprocess dog barking audio samples.',
      'Feature Extraction: Use MFCCs (Mel-Frequency Cepstral Coefficients) to analyze bark patterns.',
      'Model Training: Train a deep learning model using TensorFlow to classify emotions.',
      'Real-Time Processing: Implement real-time audio analysis and instant notifications.',
      'Mobile Integration: Develop an Android app for user interaction and notifications.',
      'Deployment & Testing: Use Firebase for cloud storage and conduct real-world testing.',
    ],
  },
  {
    title: 'Body Language Detection Methodology',
    points: [
      'Data Collection: Gather images of dog interactions to understand their emotions and behavior.',
      'Feature Extraction: Use YOLOv8 to analyze dog body language in images and detect emotions based on posture and movement.',
      'Model Training: Train a model to recognize dog emotions from body language.',
      'Mobile Integration: Create an Android app that lets owners receive feedback and send commands to the vibrating collar.',
      'Deployment & Testing: Store data on Firebase and test in real-world environments.',
    ],
  },
];

const toolsAndTechs = [
  {
    name: 'Python',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg',
    url: 'https://www.python.org/',
  },
  {
    name: 'Java',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/java.svg',
    url: 'https://www.java.com/',
  },
  {
    name: 'TensorFlow',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tensorflow.svg',
    url: 'https://www.tensorflow.org/',
  },
  {
    name: 'Pandas',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/pandas.svg',
    url: 'https://pandas.pydata.org/',
  },
  {
    name: 'NumPy',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/numpy.svg',
    url: 'https://numpy.org/',
  },
  {
    name: 'Android Studio',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/androidstudio.svg',
    url: 'https://developer.android.com/studio',
  },
  {
    name: 'VS Code',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/visualstudiocode.svg',
    url: 'https://code.visualstudio.com/',
  },
  {
    name: 'GitHub',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg',
    url: 'https://github.com/',
  },
  {
    name: 'Firebase',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/firebase.svg',
    url: 'https://firebase.google.com/',
  },
];

export default function Technology() {
  return (
    <section id="technology" className="py-20 bg-blue-50">
      <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-16">
        Methodology & Tools
      </h2>

      {/* Methodology Section */}
      <div className="max-w-6xl mx-auto px-6 grid gap-12 md:grid-cols-2 mb-20">
        {methodologies.map(({ title, points }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.3 }}
            className="bg-white rounded-3xl shadow-lg p-8 border border-blue-200"
          >
            <h3 className="text-2xl font-bold text-blue-900 mb-6">{title}</h3>
            <ul className="list-disc list-inside space-y-3 text-blue-700 text-lg leading-relaxed">
              {points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Tools & Technologies Section */}
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-blue-900 mb-10 text-center">
          Tools & Technologies
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 justify-items-center">
          {toolsAndTechs.map(({ name, logo, url }, i) => (
            <motion.a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-3 cursor-pointer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ scale: 1.1, filter: 'drop-shadow(0 0 8px #2563EB)' }}
            >
              <img
                src={logo}
                alt={name}
                className="w-16 h-16 object-contain"
                loading="lazy"
              />
              <span className="text-blue-800 font-semibold">{name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
