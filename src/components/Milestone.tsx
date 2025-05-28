import React from "react"

const Milestone = () => {
  return (
    <section id="milestones" className="bg-blue-50">
      <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-16">
        Project Milestones
      </h2>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <ul className="relative border-l-2 border-gray-200">
          {/* Project proposal */}
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full -left-3 ring-8 ring-white text-white font-semibold">
              1
            </span>
            <h3 className="text-lg font-semibold text-blue-500">
              Project Proposal
            </h3>
            <time className="block mb-2 text-sm font-normal text-gray-400">
              Sep 2024
            </time>
            <p className="text-base font-normal text-gray-500">
              A project proposal is presented to get your project approved.
            </p>
          </li>

          {/* Progress Presentation */}
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full -left-3 ring-8 ring-white text-white font-semibold">
              2
            </span>
            <h3 className="text-lg font-semibold text-blue-500">
              Progress Presentation
            </h3>
            <time className="block mb-2 text-sm font-normal text-gray-400">
              Dec 2024
            </time>
            <p className="text-base font-normal text-gray-500">
              Reviews the 50% completion status of the project.
            </p>
          </li>

          {/* Research Paper */}
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full -left-3 ring-8 ring-white text-white font-semibold">
              3
            </span>
            <h3 className="text-lg font-semibold text-blue-500">
              Research Paper
            </h3>
            <time className="block mb-2 text-sm font-normal text-gray-400">
              Mar 2025
            </time>
            <p className="text-base font-normal text-gray-500">
              A research paper is submitted to document findings and
              methodologies.
            </p>
          </li>

          {/* Progress Presentation 2 */}
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full -left-3 ring-8 ring-white text-white font-semibold">
              4
            </span>
            <h3 className="text-lg font-semibold text-blue-500">
              Progress Presentation 2
            </h3>
            <time className="block mb-2 text-sm font-normal text-gray-400">
              Mar 2025
            </time>
            <p className="text-base font-normal text-gray-500">
              Reviews the 75% completion status of the project.
            </p>
          </li>

          {/* Final Report */}
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full -left-3 ring-8 ring-white text-white font-semibold">
              5
            </span>
            <h3 className="text-lg font-semibold text-blue-500">
              Final Report
            </h3>
            <time className="block mb-2 text-sm font-normal text-gray-400">
              Apr 2025
            </time>
            <p className="text-base font-normal text-gray-500">
              A final report is prepared summarizing the project outcomes.
            </p>
          </li>

          {/* Final */}
          <li className="ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full -left-3 ring-8 ring-white text-white font-semibold">
              6
            </span>
            <h3 className="text-lg font-semibold text-blue-500">Final</h3>
            <time className="block mb-2 text-sm font-normal text-gray-400">
              May 2025
            </time>
            <p className="text-base font-normal text-gray-500">
              Project closure and handover.
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Milestone
