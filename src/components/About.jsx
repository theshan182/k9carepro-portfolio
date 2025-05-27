import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'KARUNARATHNE K.J',
    id: 'IT21256646',
    image: '/src/images/Ghazi.jpg',
    role: 'Group Member',
  },
  {
    name: 'ISMAIL M.A.U',
    id: 'IT21233630',
    image: '/src/images/Kasun.jpg',
    role: 'Group Member',
  },
  {
    name: 'WIJERATHNE R.V.A.N.S',
    id: 'IT21264184',
    image: '/src/images/Nilusha.jpg', 
    role: 'Group Member',
  },
];

const supervisor = {
  name: 'Ms. Manori Gamage',
  role: 'Supervisor',
  image: '/src/images/M.png',
};

export default function About() {
  const allMembers = [...teamMembers, { ...supervisor, id: 'Supervisor', isSupervisor: true }];

  return (
    <section id="about" className="py-20 px-6 sm:px-12 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-blue-900"
        >
          About <span className="text-blue-600">K9CarePro</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-4 max-w-3xl mx-auto text-blue-800 text-lg"
        >
          K9CarePro is developed by a dedicated team under the supervision of <strong>{supervisor.name}</strong>. Our mission is to revolutionize canine care using advanced AI and IoT technologies.
        </motion.p>
      </div>

      {/* Cards in one line */}
      <div className="flex flex-row gap-8 overflow-x-auto justify-center px-2">
        {allMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex-none w-72 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 border-t-4 border-blue-400"
          >
            <div className="relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover rounded-t-3xl"
              />
              {member.isSupervisor && (
                <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
                  Supervisor
                </span>
              )}
            </div>
            <div className="p-5 text-center bg-gradient-to-t from-blue-50 to-white rounded-b-3xl">
              <h3 className="text-xl font-semibold text-blue-900">{member.name}</h3>
              {!member.isSupervisor && <p className="text-blue-600 mt-1">{member.id}</p>}
              <p className="mt-2 text-blue-700 font-medium">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
