import { useState } from "react";
import TextareaField from "../reuseables/textarea";
import { useAlert } from "../../utils/notification/alertcontext";
import { client } from "../../utils/client";

export const CharacterReferee = ({token, applicantInfo} : {token: string, applicantInfo : any}) => {
  const { addAlert } = useAlert();
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);
  const [formData, setFormData] = useState<any>({
    characterReference: {
      capacityKnown: "",
      yearsKnown: "",
      skillsAssessment: "",
      unsuitabilityReason: "",
      recommendation: "",
      recommendationReason: ""
    },
    refereeType: "character",
    token,
  })

  const errors: string[] = [];

  const handleChange = (path: string, value: any, index?: number) => {
    setFormData((prevFormData: any) => {
      const updated = { ...prevFormData };
      const keys = path.split('.');

      let current = updated;

      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];

        // If we're at the last key, update the value
        if (i === keys.length - 1) {
          if (index !== undefined && Array.isArray(current[key])) {
            current[key][index] = {
              ...current[key][index],
              ...value,
            };
          } else {
            current[key] = value;
          }
        } else {
          // If the path doesn't exist, create an empty object or array
          if (!current[key]) {
            current[key] = {};
          }
          current = current[key];
        }
      }

      return updated;
    });
  };

  const submitForm = async () => {

    const refereeName = applicantInfo.professionalReferee?.name
    const position = applicantInfo.jobDetails?.positionAppliedFor;
    const applicantName = `${applicantInfo.personalDetails?.forenames} ${applicantInfo.personalDetails?.surname}`;
    
    try {
      const { capacityKnown, yearsKnown, skillsAssessment, unsuitabilityReason, recommendation} = formData.characterReference;
      
      if (!capacityKnown || !yearsKnown || !skillsAssessment || !unsuitabilityReason || !recommendation) {
        errors.push("Please, fill all fields");
      }
      if (errors.length > 0) {
        errors.forEach(msg => addAlert({ message: msg, type: "error" }));
        return;
      }

      await client.create({
        _type: 'applicationReference',
        ...formData
      });

      const sendNotificationEmail = async () => {
        await fetch('/api/referee-notification-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            isNotification: true,
            email: "info@sarathealthcare.co.uk",
            type: "professional",
            applicantName,
            refereeName,
            position
          })
        });
      };

      await sendNotificationEmail();

      addAlert({ message: 'Reference form submitted successfully!', type: 'success' });
      setIsSubmittedSuccessfully(true)
    } catch (error) {
      console.error('Error submitting form:', error);
      addAlert({ 
        message: 'An error occurred while submitting the application.', 
        type: 'error' 
      });
    }
  };
return(
  <>
  { isSubmittedSuccessfully ?
    <><div className="bg-white flex flex-col items-center justify-center font-bold text-lg text-[#1663a3] w-full px-5 h-44">Thank You for Filling the Form</div></> :
    <>
      <div className="p-6">    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TextareaField
            title="In what capacity do you know the candidate?"
            value={formData.characterReference.capacityKnown}
            onChange={(e) => handleChange('characterReference.capacityKnown', e.target.value)}
            isRequired
          />
          <TextareaField
            title="How long have you known the candidate?"
            value={formData.characterReference.yearsKnown}
            onChange={(e) => handleChange('characterReference.yearsKnown', e.target.value)}
            isRequired
          />
          <TextareaField
            title="What do you know about the candidate's skills in relation to the job applied for?"
            value={formData.characterReference.skillsAssessment}
            onChange={(e) => handleChange('characterReference.skillsAssessment', e.target.value)}
            isRequired
          />
          <TextareaField
            title="Do you know of any reason why the candidate would be unsuitable to work with Sarat Healthcare LTD?"
            value={formData.characterReference.unsuitabilityReason}
            onChange={(e) => handleChange('characterReference.unsuitabilityReason', e.target.value)}
            isRequired
          />
          <div className="border p-4 rounded-md">
            <p className="text-sm font-bold tracking-wide mb-4">
              Would you recommend the candidate for employment?
            </p>
            <div className="flex space-x-6">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="recommendation"
                  value="Yes"
                  checked={formData.characterReference.recommendation === 'Yes'}
                  onChange={(e) => handleChange('characterReference.recommendation', e.target.value)}
                  className="h-4 w-4 text-blue-600"
                />
                <span className="ml-2 text-sm text-gray-700">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="recommendation"
                  value="No"
                  checked={formData.characterReference.recommendation === 'No'}
                  onChange={(e) => handleChange('characterReference.recommendation', e.target.value)}
                  className="h-4 w-4 text-blue-600"
                />
                <span className="ml-2 text-sm text-gray-700">No</span>
              </label>
            </div>
            
          </div>
          {formData.characterReference.recommendation === 'No' && (
            <TextareaField
              title="Please state reasons"
              value={formData.characterReference.recommendationReason}
              onChange={(e) => handleChange('characterReference.recommendationReason', e.target.value)}
              isRequired
            />
          )}
        </div>
        <div className="flex justify-between gap-5 mt-8 pt-4 border-t border-gray-200">
          <button
            onClick={submitForm}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
          >
            Submit Form
          </button>
        </div>
      </div>
    </>
  }
  </>
)};