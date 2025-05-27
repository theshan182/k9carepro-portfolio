import React from 'react';
import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';

const documents = [
  {
    title: 'Topic Assessment',
    date: 'Submitted on 2024/09/25',
    type: 'Group',
    link: 'https://drive.google.com/drive/folders/1WedetRRHWPmd82VkoQ6mmS5FpMoErGXA?dmr=1&ec=wgc-drive-hero-goto',
  },
  {
    title: 'Project Charter',
    date: 'Submitted on 2024/08/19',
    type: 'Group',
    link: 'https://drive.google.com/file/d/your_project_charter_link/view',
  },
  {
    title: 'Project Proposal',
    date: 'Submitted on 2024/09/11',
    type: 'Individual',
    link: 'https://drive.google.com/drive/folders/140aJa-l-azhhqhtn-Qjj616XGduz0jTB?dmr=1&ec=wgc-drive-hero-goto',
  },
  {
    title: 'Status Documents I',
    date: 'Submitted on 2025/05/22',
    type: 'Individual',
    link: 'https://drive.google.com/file/d/your_status_doc1_link/view',
  },
  {
    title: 'Status Documents II',
    date: 'Yet to be submitted, link will be updated soon.',
    type: 'Individual',
    link: null,
  },
  {
    title: 'Research Papers',
    date: 'Submitted on 2025/03/20',
    type: 'Group',
    link: 'https://drive.google.com/drive/folders/1WN8uAatnjOHsZGYrZp9BrshrApx5iBeG?dmr=1&ec=wgc-drive-hero-goto',
  },
  {
    title: 'Final Report (Group)',
    date: 'Submitted on 2025/03/15',
    type: 'Group',
    link: 'https://drive.google.com/drive/folders/1VT0RJO-cTHz26cvUdSvzg5AWMkUxC0ko?dmr=1&ec=wgc-drive-hero-goto',
  },
  {
    title: 'Final Report (Individual)',
    date: 'Submitted on 2025/03/15',
    type: 'Individual',
    link: 'https://drive.google.com/drive/folders/1y8-poU-OE6j5oP3nUxxotEmjxMko-Jjn?dmr=1&ec=wgc-drive-hero-goto',
  },
  {
    title: 'Poster',
    date: 'Submitted on 2025/05/20',
    type: 'Group',
    link: 'https://drive.google.com/drive/folders/161hcu3y-spuN2IYQuINXKFAAhy01vzcl?dmr=1&ec=wgc-drive-hero-goto',
  },
];

const presentations = [
  {
    title: 'Project Proposal',
    date: 'Submitted on 2024/09/11',
    type: 'Group',
    link: 'https://drive.google.com/drive/folders/1KFFPcveZVm7gcTT_661xqbshb9I85hNF?dmr=1&ec=wgc-drive-hero-goto',
  },
  {
    title: 'Progress Presentation I',
    date: 'Submitted on 2024/10/28',
    type: 'Group',
    link: 'https://drive.google.com/drive/folders/1BkoF3aURF6bFpiFQJPkzn_F2wROIg7UX?dmr=1&ec=wgc-drive-hero-goto',
  },
  {
    title: 'Progress Presentation II',
    date: 'Submitted on 2025/03/22',
    type: 'Group',
    link: 'https://drive.google.com/drive/folders/1TCKCHLDTyAwqw7NnANzDez1OdmW_jsiE?dmr=1&ec=wgc-drive-hero-goto',
  },
  {
    title: 'Final Presentation',
    date: 'Yet to be submitted, link will be updated soon.',
    type: 'Group',
    link: null,
  },
];

const Card = ({ title, date, type, link }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="flex flex-col justify-between bg-white border border-blue-200 rounded-2xl shadow-sm p-6 hover:shadow-lg transition-all"
  >
    <div>
      <h3 className="text-xl font-semibold text-blue-800">{title}</h3>
      <p className="text-sm text-blue-600 mt-2">{date}</p>
      <p className="text-sm mt-1 text-gray-500 font-medium">Type: {type}</p>
    </div>
    {link ? (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
      >
        <FileDown size={16} className="mr-2" />
        Download
      </a>
    ) : (
      <button
        disabled
        className="mt-4 inline-flex items-center justify-center bg-blue-200 text-white px-4 py-2 rounded-md text-sm font-medium cursor-not-allowed"
      >
        <FileDown size={16} className="mr-2" />
        Coming Soon
      </button>
    )}
  </motion.div>
);

export default function Gallery() {
  return (
    <section id="documents" className="py-20 bg-blue-50 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-12">
          Project Documents
        </h2>

        <h3 className="text-2xl font-bold text-blue-800 mb-6">Documents</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {documents.map((doc, i) => (
            <Card key={i} {...doc} />
          ))}
        </div>

        <h3 className="text-2xl font-bold text-blue-800 mb-6">Presentations</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {presentations.map((pres, i) => (
            <Card key={i} {...pres} />
          ))}
        </div>
      </div>
    </section>
  );
}
