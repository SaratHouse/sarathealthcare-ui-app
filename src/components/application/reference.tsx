import CheckboxField from "../reuseables/checkbox";
import InputField from "../reuseables/input";

export const References = ({ formData, handleChange }: any) => (
  <div>
    <h2 className="text-xl font-bold text-[#1663a3] mb-6">References</h2>
    
    <div className="bg-[#f4e8e3] p-4 rounded-lg mb-6">
      <p className="text-sm">
        One of the referees must be your current (or most recent) employer. If you have no previous employment history, 
        please provide a tutor or personal referee who can provide a character reference.
      </p>
      <p className="text-sm mt-2 font-medium">
        For care related positions, we require email addresses of all previous employers that involve working with children, 
        young people or vulnerable adults.
      </p>
    </div>
    
    {/* Current Employer Reference */}
    <div className="mb-8 p-4 border border-gray-200 rounded-lg">
      <h3 className="text-lg font-semibold text-[#e67238] mb-4">Current Employer Reference</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          title="Name"
          type="text"
          value={formData.references.currentEmployer.name}
          onChange={(e) => handleChange('references.currentEmployer', 'name', e.target.value)}
          isRequired
        />
        
        <InputField
          title="Address"
          type="text"
          value={formData.references.currentEmployer.address}
          onChange={(e) => handleChange('references.currentEmployer', 'address', e.target.value)}
          isRequired
        />
        
        <InputField
          title="Tel No"
          type="tel"
          value={formData.references.currentEmployer.tel}
          onChange={(e) => handleChange('references.currentEmployer', 'tel', e.target.value)}
          isRequired
        />
        
        <InputField
          title="Occupation"
          type="text"
          value={formData.references.currentEmployer.occupation}
          onChange={(e) => handleChange('references.currentEmployer', 'occupation', e.target.value)}
          isRequired
        />
        
        <InputField
          title="Email Address (business only)"
          type="email"
          value={formData.references.currentEmployer.email}
          onChange={(e) => handleChange('references.currentEmployer', 'email', e.target.value)}
          isRequired
        />
        
        <div className="md:col-span-2">
          <div className="font-semibold tracking-wide mb-2">
            May we contact this referee prior to interview?
          </div>
          <div className="flex gap-4">
            <CheckboxField
              label="Yes"
              checked={formData.references.currentEmployer.contactBeforeInterview}
              onChange={(checked) => handleChange('references.currentEmployer', {...formData.references.currentEmployer, contactBeforeInterview: checked})}
            />
            <CheckboxField
              label="No"
              checked={!formData.references.currentEmployer.contactBeforeInterview}
              onChange={(checked) => handleChange('references.currentEmployer', {...formData.references.currentEmployer, contactBeforeInterview: !checked})}
            />
          </div>
        </div>
      </div>
    </div>
    
    {/* Second Employer Reference */}
    <div className="mb-8 p-4 border border-gray-200 rounded-lg">
      <h3 className="text-lg font-semibold text-[#e67238] mb-4">Second Employer Reference</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          title="Name"
          type="text"
          value={formData.references.secondEmployer.name}
          onChange={(e) => handleChange('references.secondEmployer', 'name', e.target.value)}
          isRequired
        />
        
        <InputField
          title="Address"
          type="text"
          value={formData.references.secondEmployer.address}
          onChange={(e) => handleChange('references.secondEmployer', 'address', e.target.value)}
          isRequired
        />
        
        <InputField
          title="Tel No"
          type="tel"
          value={formData.references.secondEmployer.tel}
          onChange={(e) => handleChange('references.secondEmployer', 'tel', e.target.value)}
          isRequired
        />
        
        <InputField
          title="Occupation"
          type="text"
          value={formData.references.secondEmployer.occupation}
          onChange={(e) => handleChange('references.secondEmployer', 'occupation', e.target.value)}
          isRequired
        />
        
        <InputField
          title="Email Address (business only)"
          type="email"
          value={formData.references.secondEmployer.email}
          onChange={(e) => handleChange('references.secondEmployer', 'email', e.target.value)}
          isRequired
        />
        
        <div className="md:col-span-2">
          <div className="font-semibold tracking-wide mb-2">
            May we contact this referee prior to interview?
          </div>
          <div className="flex gap-4">
            <CheckboxField
              label="Yes"
              checked={formData.references.secondEmployer.contactBeforeInterview}
              onChange={(checked) => handleChange('references.secondEmployer', {...formData.references.secondEmployer, contactBeforeInterview: checked})}
            />
            <CheckboxField
              label="No"
              checked={!formData.references.secondEmployer.contactBeforeInterview}
              onChange={(checked) => handleChange('references.secondEmployer', {...formData.references.secondEmployer, contactBeforeInterview: !checked})}
            />
          </div>
        </div>
      </div>
    </div>
    
    {/* Personal Referee or Course Tutor */}
    <div className="p-4 border border-gray-200 rounded-lg">
      <h3 className="text-lg font-semibold text-[#e67238] mb-4">Personal Referee or Course Tutor</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          title="Name"
          type="text"
          value={formData.references.personalReferee.name}
          onChange={(e) => handleChange('references.personalReferee', 'name', e.target.value)}
          isRequired
        />
        
        <InputField
          title="Address"
          type="text"
          value={formData.references.personalReferee.address}
          onChange={(e) => handleChange('references.personalReferee', 'address', e.target.value)}
          isRequired
        />
        
        <InputField
          title="Tel No"
          type="tel"
          value={formData.references.personalReferee.tel}
          onChange={(e) => handleChange('references.personalReferee', 'tel', e.target.value)}
          isRequired
        />
        
        <InputField
          title="Occupation"
          type="text"
          value={formData.references.personalReferee.occupation}
          onChange={(e) => handleChange('references.personalReferee', 'occupation', e.target.value)}
          isRequired
        />
        
        <InputField
          title="Email Address"
          type="email"
          value={formData.references.personalReferee.email}
          onChange={(e) => handleChange('references.personalReferee', 'email', e.target.value)}
          isRequired
        />
        
        <div className="md:col-span-2">
          <div className="font-semibold tracking-wide mb-2">
            May we contact this referee prior to interview?
          </div>
          <div className="flex gap-4">
            <CheckboxField
              label="Yes"
              checked={formData.references.personalReferee.contactBeforeInterview}
              onChange={(checked) => handleChange('references.personalReferee', {...formData.references.personalReferee, contactBeforeInterview: checked})}
            />
            <CheckboxField
              label="No"
              checked={!formData.references.personalReferee.contactBeforeInterview}
              onChange={(checked) => handleChange('references.personalReferee', {...formData.references.personalReferee, contactBeforeInterview: !checked})}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);