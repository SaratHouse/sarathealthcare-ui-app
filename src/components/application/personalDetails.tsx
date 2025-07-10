import CheckboxField from "../reuseables/checkbox";
import InputField from "../reuseables/input";

export const PersonalDetails = ({ formData, handleChange }: any) => (
  <div>
    <h2 className="text-xl font-bold text-[#1663a3] mb-6">Personal Details</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <InputField
        title="Surname"
        type="text"
        value={formData.personalDetails.surname}
        onChange={(e) => handleChange('personalDetails.surname', e.target.value)}
        isRequired
      />
      
      <InputField
        title="Forename(s)"
        type="text"
        value={formData.personalDetails.forenames}
        onChange={(e) => handleChange('personalDetails.forenames', e.target.value)}
        isRequired
      />
      
      <InputField
        title="Previous surname(s)"
        type="text"
        value={formData.personalDetails.previousSurname}
        onChange={(e) => handleChange('personalDetails.previousSurname', e.target.value)}
      />
      
      <InputField
        title="Previous forename(s)"
        type="text"
        value={formData.personalDetails.previousForename}
        onChange={(e) => handleChange('personalDetails.previousForename', e.target.value)}
      />
      
      <InputField
        title="Title"
        type="text"
        value={formData.personalDetails.title}
        onChange={(e) => handleChange('personalDetails.title', e.target.value)}
        isRequired
      />
      
      <InputField
        title="Preferred name"
        type="text"
        value={formData.personalDetails.preferredName}
        onChange={(e) => handleChange('personalDetails.preferredName', e.target.value)}
      />
      
      <InputField
        title="Home Telephone"
        type="tel"
        value={formData.personalDetails.homeTelephone}
        onChange={(e) => handleChange('personalDetails.homeTelephone', e.target.value)}
        isRequired
      />
      
      <InputField
        title="Mobile"
        type="tel"
        value={formData.personalDetails.mobile}
        onChange={(e) => handleChange('personalDetails.mobile', e.target.value)}
        isRequired
      />
      
      <InputField
        title="Email address"
        type="email"
        value={formData.personalDetails.email}
        onChange={(e) => handleChange('personalDetails.email', e.target.value)}
        isRequired
      />
      
      <div className="md:col-span-2">
        <InputField
          title="Address (incl postcode)"
          type="text"
          value={formData.personalDetails.address}
          onChange={(e) => handleChange('personalDetails.address', e.target.value)}
          isRequired
        />
      </div>
    </div>
    
    <div className="mt-8 pt-6 border-t border-gray-200">
      <h2 className="text-xl font-bold text-[#1663a3] mb-6">Driving Licence</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="font-semibold tracking-wide mb-2">
            Do you hold a full current Driving Licence?
          </div>
          <div className="flex gap-4">
            <CheckboxField
              label="If Yes, '✔' in the box"
              checked={formData.drivingLicence.holdsLicence}
              onChange={(checked) => handleChange('drivingLicence.holdsLicence', checked)}
              isRequired
            />
          </div>
        </div>
        
        <div>
          <div className="font-semibold tracking-wide mb-2">
            Do you have any current endorsements?
          </div>
          <div className="flex gap-4">
            <CheckboxField
              label="If Yes, '✔' in the box"
              checked={formData.drivingLicence.endorsements}
              onChange={(checked) => handleChange('drivingLicence.endorsements', checked)}
              isRequired
            />
          </div>
        </div>
        
        {formData.drivingLicence.endorsements && (
          <div className="md:col-span-2">
            <InputField
              title="If YES, please provide details"
              type="text"
              value={formData.drivingLicence.endorsementsDetails}
              onChange={(e) => handleChange('drivingLicence.endorsementsDetails', e.target.value)}
              isRequired
            />
          </div>
        )}
      </div>
    </div>
  </div>
);