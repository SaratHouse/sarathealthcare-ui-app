import InputField from "../reuseables/input";

export const EmploymentHistory = ({ formData, handleChange, addArrayItem, removeArrayItem }: any) => (
  <div>
    <h2 className="text-xl font-bold text-[#1663a3] mb-6">Employment History</h2>
    
    {/* Present Employment */}
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-[#e67238] mb-4">Present Employment</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          title="Job Title"
          type="text"
          value={formData.presentEmployment.jobTitle}
          onChange={(e) => handleChange('presentEmployment', 'jobTitle', e.target.value)}
          isRequired
        />
        
        {/* Additional fields for present employment */}
      </div>
    </div>
    
    {/* Previous Employment */}
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-[#e67238]">Previous Employment</h3>
        <button
          type="button"
          onClick={() => addArrayItem('previousEmployments')}
          className="text-sm bg-[#1663a3] text-white px-3 py-1 rounded"
        >
          Add Employment
        </button>
      </div>
      
      {formData.previousEmployments.map((emp: any, index: number) => (
        <div key={index} className="mb-6 p-4 border border-gray-200 rounded-lg">
          <div className="flex justify-between mb-4">
            <h4 className="font-medium">Previous Employment #{index + 1}</h4>
            {formData.previousEmployments.length > 1 && (
              <button
                type="button"
                onClick={() => removeArrayItem('previousEmployments', index)}
                className="text-red-600 text-sm"
              >
                Remove
              </button>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              title="Job Title"
              type="text"
              value={emp.jobTitle}
              onChange={(e) => handleChange('previousEmployments', 'jobTitle', e.target.value, index)}
              isRequired
            />
            
            {/* Additional fields for previous employment */}
          </div>
        </div>
      ))}
    </div>
  </div>
);