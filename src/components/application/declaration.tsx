import CheckboxField from "../reuseables/checkbox";
import InputField from "../reuseables/input";

export const Declaration = ({ formData, handleChange, submitForm }: any) => (
  <div>
    <h2 className="text-xl font-bold text-[#1663a3] mb-6">Declaration</h2>
    
    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
      <p className="mb-4">
        I declare that the information given on this application form is true and correct. I understand that any false or misleading information, or omissions of information concerning criminal convictions etc may disqualify my application or may render my Contract of Employment, if I am appointed, liable to termination. Should my application be successful, I give my consent for Sarat Healthcare Ltd. to seek employment references from any of the previous employers listed in the 'Previous Employment' section of this form.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <InputField
          title="Signed"
          type="text"
          value={formData.declaration.signed}
          onChange={(e) => handleChange('declaration', {...formData.declaration, signed: e.target.value})}
          isRequired
        />
        
        <InputField
          title="Date"
          type="date"
          value={formData.declaration.date}
          onChange={(e) => handleChange('declaration', {...formData.declaration, date: e.target.value})}
          isRequired
        />
        
        <InputField
          title="Print name"
          type="text"
          value={formData.declaration.printName}
          onChange={(e) => handleChange('declaration', {...formData.declaration, printName: e.target.value})}
          isRequired
        />
      </div>
      
      <div className="mt-4">
        <CheckboxField
          label="If form has been completed electronically, place an 'X' in this box to indicate your consent"
          checked={formData.declaration.consent}
          onChange={(checked) => handleChange('declaration', {...formData.declaration, consent: checked})}
          isRequired
        />
      </div>
    </div>
    
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-[#1663a3] mb-4">GDPR Consent</h3>
      
      <p className="mb-4 text-sm">
        Should you be unsuccessful in your application for the position applied for but would like us to send you information about future vacancies, please place an 'X' in the box to indicate your consent.
      </p>
      
      <CheckboxField
        label="I consent to Sarat Healthcare Ltd. storing my application data for future vacancies"
        checked={formData.gdprConsent}
        onChange={(checked) => handleChange('gdprConsent', checked)}
      />
    </div>
    
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-[#1663a3] mb-4">Reasonable Adjustments</h3>
      
      <InputField
        title="If you require any reasonable adjustments to the recruitment process, please provide details"
        type="text"
        value={formData.reasonableAdjustments}
        onChange={(e) => handleChange('reasonableAdjustments', e.target.value)}
        placeholder="Describe any adjustments needed"
      />
    </div>
    
    <div className="text-center mt-8">
      <button
        onClick={submitForm}
        className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 text-lg font-medium"
      >
        Submit Application
      </button>
      
      {/* <p className="mt-4 text-sm text-gray-600">
        Please email your completed application form to info@sarathealthcare.co.uk
      </p> */}
    </div>
  </div>
);