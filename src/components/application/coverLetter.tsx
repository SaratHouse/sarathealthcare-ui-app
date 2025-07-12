
export const CoverLetter = ({ formData, handleChange }: any) => (
  <div>
    <h2 className="text-xl font-bold text-[#1663a3] mb-6">Cover Letter</h2>
    
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-[#e67238] mb-4">
        Why are you applying for this job?
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        Please state below how you meet the person specification for the role.
      </p>
      
      <div className="bg-white border border-gray-300 rounded-lg p-4">
        <textarea
          value={formData.coverLetter}
          onChange={(e) => handleChange('coverLetter', e.target.value)}
          className="w-full h-60 p-4 outline-none resize-none"
          placeholder="Explain why you're a good fit for this position and how you meet the requirements..."
        />
      </div>
    </div>
    
    <div className="bg-[#f4e8e3] p-4 rounded-lg">
      <h3 className="text-md font-semibold text-[#1663a3] mb-2">
        Important Notes:
      </h3>
      <ul className="list-disc pl-5 space-y-2 text-sm">
        <li>Please be specific about how your skills and experience match the job requirements</li>
        <li>Highlight any relevant qualifications or certifications</li>
        <li>Explain why you're interested in working for Sarat Healthcare Ltd.</li>
        <li>Continue on a separate sheet if necessary</li>
      </ul>
    </div>
  </div>
);