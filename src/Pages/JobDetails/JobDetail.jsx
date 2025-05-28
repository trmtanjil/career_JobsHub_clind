import React from 'react';
import { useLoaderData } from 'react-router';
import {motion} from 'framer-motion';

const JobDetailsCard = () => {
  const job = useLoaderData();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto my-7 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
    >
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={job.company_logo}
          alt="Company Logo"
          className="w-16 h-16 rounded-full border"
        />
        <div>
          <h2 className="text-xl font-semibold">{job.title}</h2>
          <p className="text-gray-600">{job.company} • {job.location}</p>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-500 mb-1"><strong>Job Type:</strong> {job.jobType}</p>
        <p className="text-sm text-gray-500 mb-1"><strong>Category:</strong> {job.category}</p>
        <p className="text-sm text-gray-500 mb-1"><strong>Deadline:</strong> {job.applicationDeadline}</p>
        <p className="text-sm text-gray-500"><strong>Salary:</strong> ৳ {job.salaryRange.min} - {job.salaryRange.max} {job.salaryRange.currency.toUpperCase()}</p>
      </div>

      <div className="mb-4">
        <h3 className="font-medium text-gray-800 mb-1">Description</h3>
        <p className="text-gray-700 text-sm">{job.description}</p>
      </div>

      <div className="mb-4">
        <h3 className="font-medium text-gray-800 mb-1">Requirements</h3>
        <ul className="list-disc list-inside text-sm text-gray-700">
          {job.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-medium text-gray-800 mb-1">Responsibilities</h3>
        <ul className="list-disc list-inside text-sm text-gray-700">
          {job.responsibilities.map((res, index) => (
            <li key={index}>{res}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4 text-sm text-gray-600">
        <p><strong>HR Name:</strong> {job.hr_name}</p>
        <p><strong>Contact:</strong> {job.hr_email}</p>
      </div>
    </motion.div>
  );
};

export default JobDetailsCard;
