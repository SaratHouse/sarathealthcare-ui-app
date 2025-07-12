import InputField from "../reuseables/input";
import CheckboxField from "../reuseables/checkbox";

export const EmploymentHistory = ({ formData, handleChange, addArrayItem, removeArrayItem }: any) => (
  <div>
    <h2 className="text-xl font-bold text-[#1663a3] mb-6">Employment History</h2>
    
    {/* Present Employment */}
    <div className="mb-8 p-4 bg-blue-50 rounded-lg">
      <h3 className="text-lg font-semibold text-[#e67238] mb-4 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        Present Employment
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          title="Job Title"
          type="text"
          value={formData.presentEmployment.jobTitle}
          onChange={(e) => handleChange('presentEmployment.jobTitle', e.target.value)}
          isRequired
        />
        
        <InputField
          title="Employer Name"
          type="text"
          value={formData.presentEmployment.employerName}
          onChange={(e) => handleChange('presentEmployment.employerName', e.target.value)}
          isRequired
        />
        
        <div className="md:col-span-2">
          <InputField
            title="Employer Address"
            type="text"
            value={formData.presentEmployment.employerAddress}
            onChange={(e) => handleChange('presentEmployment.employerAddress', e.target.value)}
            isRequired
          />
        </div>
        
        <InputField
          title="Date Commenced"
          type="date"
          value={formData.presentEmployment.dateCommenced}
          onChange={(e) => handleChange('presentEmployment.dateCommenced', e.target.value)}
          isRequired
        />
        
        <InputField
          title="Notice Required"
          type="text"
          value={formData.presentEmployment.noticeRequired}
          onChange={(e) => handleChange('presentEmployment.noticeRequired', e.target.value)}
          placeholder="e.g., 1 month"
          isRequired
        />
        
        <InputField
          title="Current Salary"
          type="text"
          value={formData.presentEmployment.currentSalary}
          onChange={(e) => handleChange('presentEmployment.currentSalary', e.target.value)}
          placeholder="e.g., £30,000 per annum"
          isRequired
        />
        
        <InputField
          title="Reason for Leaving"
          type="text"
          value={formData.presentEmployment.reasonForLeaving}
          onChange={(e) => handleChange('presentEmployment.reasonForLeaving', e.target.value)}
          isRequired
        />
        
        <div className="md:col-span-2">
          <CheckboxField
            label="Does this role involve working with children?"
            checked={formData.presentEmployment.involvesWorkingWithChildren}
            onChange={(checked) => handleChange('presentEmployment.involvesWorkingWithChildren', checked)}
          />
        </div>
        
        <div className="md:col-span-2">
          <div className="font-semibold tracking-wide mb-2">
            Briefly describe your present job; its main purpose and your responsibilities
          </div>
          <textarea
            value={formData.presentEmployment.jobDescription}
            onChange={(e) => handleChange('presentEmployment.jobDescription', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg min-h-[120px]"
            placeholder="Describe your responsibilities and main purpose of the role..."
            required
          />
        </div>
      </div>
    </div>
    
    {/* Previous Employment */}
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-[#e67238] flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Previous Employment
        </h3>
        <button
          type="button"
          onClick={() => addArrayItem('previousEmployments')}
          className="text-sm bg-[#1663a3] text-white px-3 py-2 rounded flex items-center hover:bg-[#0d4a7a]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add Employment
        </button>
      </div>
      
      <p className="text-sm text-gray-600 mb-4">
        Include permanent, temporary and voluntary work since leaving school. List most recent first.
      </p>
      
      {formData.previousEmployments.map((emp: any, index: number) => (
        <div key={index} className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-medium text-[#1663a3]">Previous Employment #{index + 1}</h4>
            {formData.previousEmployments.length > 1 && (
              <button
                type="button"
                onClick={() => removeArrayItem('previousEmployments', index)}
                className="text-red-600 text-sm flex items-center hover:text-red-800"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Remove
              </button>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              title="Job Title"
              type="text"
              value={emp.jobTitle}
              onChange={(e) => handleChange('previousEmployments', {jobTitle: e.target.value}, index)}
              isRequired
              />
            
            <InputField
              title="Employer Name"
              type="text"
              value={emp.employerName}
              onChange={(e) => handleChange('previousEmployments', {employerName: e.target.value}, index)}
              isRequired
              />
            
            <div className="md:col-span-2">
              <InputField
                title="Employer Address"
                type="text"
                value={emp.employerAddress}
                onChange={(e) => handleChange('previousEmployments', {employerAddress: e.target.value}, index)}
                isRequired
                />
            </div>
            
            <InputField
              title="From Date"
              type="date"
              value={emp.fromDate}
              onChange={(e) => handleChange('previousEmployments', {fromDate: e.target.value}, index)}
              isRequired
              />
            
            <InputField
              title="To Date"
              type="date"
              value={emp.toDate}
              onChange={(e) => handleChange('previousEmployments', {toDate: e.target.value}, index)}
              isRequired
              />
            
            <InputField
              title="Salary"
              type="text"
              value={emp.salary}
              onChange={(e) => handleChange('previousEmployments', {salary: e.target.value}, index)}
              placeholder="e.g., £28,000 per annum"
              isRequired
              />
            
            <InputField
              title="Reason for Leaving"
              type="text"
              value={emp.reasonForLeaving}
              onChange={(e) => handleChange('previousEmployments', {reasonForLeaving: e.target.value}, index)}
              isRequired
              />
            
            <div className="md:col-span-2">
              <CheckboxField
                label="Did this role involve working with children or young people?"
                checked={emp.involvedWorkingWithChildren}
                onChange={(checked) => handleChange('previousEmployments', {involvedWorkingWithChildren: checked}, index)}
                />
            </div>
            
            {emp.involvedWorkingWithChildren && (
              <div className="md:col-span-2">
                <InputField
                  title="Business Email (for verification)"
                  type="email"
                  value={emp.businessEmail}
                  onChange={(e) => handleChange('previousEmployments', {businessEmail: e.target.value}, index)}
                  placeholder="business@example.com"
                  isRequired
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);