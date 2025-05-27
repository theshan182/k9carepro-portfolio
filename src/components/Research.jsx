import React from 'react';
import { motion } from 'framer-motion';

const researchData = [
  {
    title: 'Research Questions',
    content: [
      'How can smart collar technology effectively address the unique communication challenges faced by deaf dogs?',
      'What essential features must be integrated to cater specifically to sensory-impaired dogs for better interaction and care?',
      'In what ways can real-time data collection improve safety, behavior understanding, and overall quality of life for dogs?',
      'How do the combination of IoT and Machine Learning technologies impact user engagement and provide actionable insights?',
    ],
  },
  {
    title: 'Research Gaps',
    content: `The current landscape of pet care technology reveals significant gaps in real-time socialization analysis and emotional 
    interpretation for dogs. Existing systems underutilize advanced computer vision techniques to decode canine body language and lack 
    accurate classification methods for understanding emotional states through barking patterns, which vary widely. While most pet monitoring 
    solutions focus on basic activity tracking, they fail to interpret emotions effectively, often leading to miscommunication and delayed owner 
    responses. Additionally, there is a notable absence of standardized vibration based communication systems for training sensory impaired dogs, 
    and few integrated platforms combine behavior analysis with real time training feedback. Similarly, in pet healthcare, despite the transformative 
    potential of IoT and AI already prevalent in human healthcare most solutions remain reactive, relying on manual observations or periodic vet 
    visits rather than continuous, real-time monitoring of vital signs like temperature and heart rate. This highlights the urgent need for a smart, 
    integrated system that leverages IoT sensors, AI driven analytics, and cloud-based data management to provide comprehensive emotional interpretation,
    health monitoring, and early detection of issues, ultimately improving pet-owner communication and proactive care.
`,
  },
  {
    title: 'Objectives',
    content: `This research aims to develop an AI powered dog healthcare and emotion monitoring system that integrates IoT sensors, machine learning, 
    and cloud-based Firebase management to revolutionize pet care. The system will provide real time health monitoring, tracking vital signs such as 
    heart rate and temperature, while using AI driven analytics to detect early health issues and send proactive alerts for timely intervention. 
    Additionally, it will incorporate advanced sound classification and computer vision to interpret dog barks and body language, enabling real time 
    emotion analysis and instant notifications to owners for better communication. Furthermore, the system will include a vibration-based feedback 
    mechanism to assist in training and socializing dogs particularly those with sensory impairments by analyzing interactions and delivering 
    corrective cues. By combining health monitoring, emotion recognition, and behavior management, this smart system seeks to enhance pet-owner bonding, 
    improve well-being, and ensure more informed, proactive pet care.`,
  },
];

export default function Research() {
  return (
    <section
      id="research"
      className="py-20 px-6 sm:px-12 bg-gradient-to-br from-blue-50 via-white to-blue-100"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center text-blue-900"
      >
        Research <span className="text-blue-600">Overview</span>
      </motion.h2>

      <div className="max-w-4xl mx-auto mt-12 space-y-12">
        {researchData.map(({ title, content }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.3 }}
            className="bg-white p-8 rounded-3xl shadow-lg border border-blue-200"
          >
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">{title}</h3>

            {Array.isArray(content) ? (
              <ul className="list-disc list-inside text-blue-700 space-y-2">
                {content.map((item, i) => (
                  <li key={i} className="text-lg leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-blue-700 text-lg leading-relaxed">{content}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
