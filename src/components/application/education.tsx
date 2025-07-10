import InputField from "../reuseables/input";

export const Education = ({ formData, handleChange, addArrayItem, removeArrayItem }: any) => (
  <div>
    <h2 className="text-xl font-bold text-[#1663a3] mb-6">Education & Qualifications</h2>
    
    {/* Time Breaks in Employment */}
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-[#e67238] mb-4">Time Breaks in Employment</h3>
      <p className="text-sm text-gray-600 mb-4">
        Reasons should be given for any period in which you were not in either employment, 
        education or training since leaving school.
      </p>
      
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm font-medium">List breaks in chronological order</div>
        <button
          type="button"
          onClick={() => addArrayItem('timeBreaks')}
          className="text-sm bg-[#1663a3] text-white px-3 py-1 rounded"
        >
          Add Break
        </button>
      </div>
      
      {formData.timeBreaks.map((breakItem: any, index: number) => (
        <div key={index} className="mb-6 p-4 border border-gray-200 rounded-lg">
          <div className="flex justify-between mb-4">
            <h4 className="font-medium">Break #{index + 1}</h4>
            {formData.timeBreaks.length > 1 && (
              <button
                type="button"
                onClick={() => removeArrayItem('timeBreaks', index)}
                className="text-red-600 text-sm"
              >
                Remove
              </button>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InputField
              title="From (exact date)"
              type="date"
              value={breakItem.fromDate}
              onChange={(e) => handleChange('timeBreaks', {fromDate: e.target.value}, index)}
              isRequired
              />
            
            <InputField
              title="To (exact date)"
              type="date"
              value={breakItem.toDate}
              onChange={(e) => handleChange('timeBreaks', {toDate: e.target.value}, index)}
              isRequired
              />
            
            <InputField
              title="Reason for break"
              type="text"
              value={breakItem.reason}
              onChange={(e) => handleChange('timeBreaks', {reason: e.target.value}, index)}
              isRequired
              />
          </div>
        </div>
      ))}
    </div>
    
    {/* Education and Qualifications */}
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-[#e67238] mb-4">Education and Qualifications</h3>
      <p className="text-sm text-gray-600 mb-4">
        Please provide details of qualifications gained since age 11.
      </p>
      
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm font-medium">List most recent first</div>
        <button
          type="button"
          onClick={() => addArrayItem('education')}
          className="text-sm bg-[#1663a3] text-white px-3 py-1 rounded"
          >
          Add Education
        </button>
      </div>
      
      {formData.education.map((edu: any, index: number) => (
        <div key={index} className="mb-6 p-4 border border-gray-200 rounded-lg">
          <div className="flex justify-between mb-4">
            <h4 className="font-medium">Education #{index + 1}</h4>
            {formData.education.length > 1 && (
              <button
              type="button"
              onClick={() => removeArrayItem('education', index)}
              className="text-red-600 text-sm"
              >
                Remove
              </button>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              title="Name of School/College/University"
              type="text"
              value={edu.institution}
              onChange={(e) => handleChange('education', {institution: e.target.value}, index)}
              isRequired
              />
            
            <div className="grid grid-cols-2 gap-6">
              <InputField
                title="From"
                type="date"
                value={edu.fromDate}
                onChange={(e) => handleChange('education', {fromDate: e.target.value}, index)}
                isRequired
                />
              
              <InputField
                title="To"
                type="date"
                value={edu.toDate}
                onChange={(e) => handleChange('education', {toDate: e.target.value}, index)}
                isRequired
                />
            </div>
            
            <div className="md:col-span-2">
              <InputField
                title="Qualifications awarded (incl. grades)"
                type="text"
                value={edu.qualifications}
                onChange={(e) => handleChange('education', {qualifications: e.target.value}, index)}
                isRequired
                />
            </div>
          </div>
        </div>
      ))}
    </div>
    
    {/* Training */}
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-[#e67238] mb-4">Training</h3>
      <p className="text-sm text-gray-600 mb-4">
        Please list all training undertaken that is relevant to the post applied for.
      </p>
      
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm font-medium">List most recent first</div>
        <button
          type="button"
          onClick={() => addArrayItem('training')}
          className="text-sm bg-[#1663a3] text-white px-3 py-1 rounded"
        >
          Add Training
        </button>
      </div>
      
      {formData.training.map((training: any, index: number) => (
        <div key={index} className="mb-6 p-4 border border-gray-200 rounded-lg">
          <div className="flex justify-between mb-4">
            <h4 className="font-medium">Training #{index + 1}</h4>
            {formData.training.length > 1 && (
              <button
              type="button"
              onClick={() => removeArrayItem('training', index)}
              className="text-red-600 text-sm"
              >
                Remove
              </button>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              title="Course Title"
              type="text"
              value={training.courseTitle}
              onChange={(e) => handleChange('training', {courseTitle: e.target.value}, index)}
              />
            
            <div className="grid grid-cols-2 gap-6">
              <InputField
                title="From"
                type="date"
                value={training.fromDate}
                onChange={(e) => handleChange('training', {fromDate: e.target.value}, index)}
                />
              
              <InputField
                title="To"
                type="date"
                value={training.toDate}
                onChange={(e) => handleChange('training', {toDate: e.target.value}, index)}
                />
            </div>
            
            <div className="md:col-span-2">
              <InputField
                title="Training Provider"
                type="text"
                value={training.provider}
                onChange={(e) => handleChange('training', {provider: e.target.value}, index)}
                />
            </div>
          </div>
        </div>
      ))}
    </div>
    
    {/* Ofsted History (For Home or Deputy Manager positions only) */}
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-[#e67238] mb-4">Ofsted History</h3>
      <p className="text-sm text-gray-600 mb-4">
        For Home or Deputy Manager positions only.
      </p>
      
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm font-medium">List inspections</div>
        <button
          type="button"
          onClick={() => addArrayItem('ofstedHistory')}
          className="text-sm bg-[#1663a3] text-white px-3 py-1 rounded"
          >
          Add Inspection
        </button>
      </div>
      
      {formData.ofstedHistory.map((inspection: any, index: number) => (
        <div key={index} className="mb-6 p-4 border border-gray-200 rounded-lg">
          <div className="flex justify-between mb-4">
            <h4 className="font-medium">Inspection #{index + 1}</h4>
            {formData.ofstedHistory.length > 1 && (
              <button
              type="button"
              onClick={() => removeArrayItem('ofstedHistory', index)}
              className="text-red-600 text-sm"
              >
                Remove
              </button>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              title="Establishment"
              type="text"
              value={inspection.establishment}
              onChange={(e) => handleChange('ofstedHistory', {establishment: e.target.value}, index)}
              />
            
            <InputField
              title="Date of Inspection"
              type="date"
              value={inspection.dateOfInspection}
              onChange={(e) => handleChange('ofstedHistory', {dateOfInspection: e.target.value}, index)}
              />
            
            <InputField
              title="Outcome"
              type="text"
              value={inspection.outcome}
              onChange={(e) => handleChange('ofstedHistory', {outcome: e.target.value}, index)}
              />
            
            <InputField
              title="Reference number (if known)"
              type="text"
              value={inspection.referenceNumber}
              onChange={(e) => handleChange('ofstedHistory', {referenceNumber: e.target.value}, index)}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);