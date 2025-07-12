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
      <h3 className="text-lg font-semibold text-[#e67238] mb-4">Professional Reference</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          title="Name"
          type="text"
          value={formData.references.professionalReferee.name}
          onChange={(e) => handleChange('references.professionalReferee.name', e.target.value)}
          isRequired
        />
        
        <InputField
          title="Address"
          type="text"
          value={formData.references.professionalReferee.address}
          onChange={(e) => handleChange('references.professionalReferee.address', e.target.value)}
          isRequired
        />
        
        <InputField
          title="Tel No"
          type="tel"
          value={formData.references.professionalReferee.tel}
          onChange={(e) => handleChange('references.professionalReferee.tel', e.target.value)}
          isRequired
        />
        
        <InputField
          title="Occupation"
          type="text"
          value={formData.references.professionalReferee.occupation}
          onChange={(e) => handleChange('references.professionalReferee.occupation', e.target.value)}
          isRequired
        />
        
        <InputField
          title="Email Address (business only)"
          type="email"
          value={formData.references.professionalReferee.email}
          onChange={(e) => handleChange('references.professionalReferee.email', e.target.value)}
          isRequired
        />
        
        <div className="md:col-span-2">
          <div className="font-semibold tracking-wide mb-2">
            May we contact this referee prior to interview?
          </div>
          <div className="flex gap-4">
            <CheckboxField
              label="If Yes, '✔' in the box"
              checked={formData.references.professionalReferee.contactBeforeInterview}
              onChange={(checked) => handleChange('references.professionalReferee.contactBeforeInterview', checked)}
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
          onChange={(e) => handleChange('references.personalReferee.name', e.target.value)}
          isRequired
        />
        
        <InputField
          title="Address"
          type="text"
          value={formData.references.personalReferee.address}
          onChange={(e) => handleChange('references.personalReferee.address', e.target.value)}
          isRequired
        />
        
        <InputField
          title="Tel No"
          type="tel"
          value={formData.references.personalReferee.tel}
          onChange={(e) => handleChange('references.personalReferee.tel', e.target.value)}
          isRequired
        />
        
        <InputField
          title="Occupation"
          type="text"
          value={formData.references.personalReferee.occupation}
          onChange={(e) => handleChange('references.personalReferee.occupation', e.target.value)}
          isRequired
        />
        
        <InputField
          title="Email Address"
          type="email"
          value={formData.references.personalReferee.email}
          onChange={(e) => handleChange('references.personalReferee.email', e.target.value)}
          isRequired
        />
        
        <div className="md:col-span-2">
          <div className="font-semibold tracking-wide mb-2">
            May we contact this referee prior to interview?
          </div>
          <div className="flex gap-4">
            <CheckboxField
              label="If Yes, '✔' in the box"
              checked={formData.references.personalReferee.contactBeforeInterview}
              onChange={(checked) => handleChange('references.personalReferee.contactBeforeInterview', checked)}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);