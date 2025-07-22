import { useState } from "react";
import TextareaField from "../reuseables/textarea";
import { useAlert } from "../../utils/notification/alertcontext";
import { client } from "../../utils/client";
import { formatDate } from "../../utils/common";
import InputField from "../reuseables/input";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import SelectField from "../reuseables/select";

export const ProfessionalReferee = ({token, applicantInfo} : {token: string, applicantInfo: any}) => {
  const { addAlert } = useAlert();
  const [step, setStep] = useState(1);
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);
  const [formData, setFormData] = useState({
    refereeType: "professional",
    token,
    sender: {
      organisation: '',
      applicantName: `${applicantInfo.personalDetails?.forenames} ${applicantInfo.personalDetails?.surname}`,
      postAppliedFor: applicantInfo.jobDetails?.positionAppliedFor,
      refereeName: applicantInfo.professionalReferee?.name,
      refereeJobTitle: applicantInfo.professionalReferee?.occupation,
    },
    performanceAssessment: {
      ratings: {
        qualityOfWork: '',
        reliability: '',
        relationships: '',
        attitude: '',
        communication: '',
        timekeeping: ''
      },
      doubtHonesty: '',
      wouldReemploy: '',
      disciplinaryProceedings: ''
    },
    additionalInfo: {
      details: '',
      comments: ''
    },
    signature: {
      name: applicantInfo.professionalReferee?.name,
      date: formatDate(new Date().toISOString()),
    }
  });

  const ratings: (keyof typeof formData.performanceAssessment.ratings)[] = [
    'qualityOfWork', 'reliability', 'relationships', 
    'attitude', 'communication', 'timekeeping'
  ];
  
  const ratingLabels: Record<keyof typeof formData.performanceAssessment.ratings, string> = {
    qualityOfWork: 'Quality of work',
    reliability: 'Reliability',
    relationships: 'Relationship with colleagues/residents',
    attitude: 'Attitude',
    communication: 'Communication',
    timekeeping: 'Timekeeping'
  };
  const scoreList = ['Excellent', 'Good', 'Satisfactory', 'Poor']

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

  const nextPage = () => {
    if (step === 2) {
      ratings.forEach(element => {
        if (!formData.performanceAssessment.ratings[element]) errors.push(`${ratingLabels[element]} is required`);
      });
      const { doubtHonesty, wouldReemploy, disciplinaryProceedings} = formData.performanceAssessment;
    
      if (!doubtHonesty || !wouldReemploy || !disciplinaryProceedings) {
        errors.push("Please answer all Yes or No questions");
      }
      if (errors.length > 0) {
        errors.forEach(msg => addAlert({ message: msg, type: "error" }));
        return;
      }
    }
    
    setStep(prev => Math.min(prev + 1, 3));
  };

  const prevPage = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const Step1 = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-[#1663a3] mb-6">Section 1: Sender Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          title="Applicant Name"
          type="text"
          value={formData.sender.applicantName}
          // onChange={(e) => handleChange('sender.forenames', e.target.value)}
          readonly
        />
        <InputField
          title="Postion Applied For"
          type="text"
          value={formData.sender.postAppliedFor}
          // onChange={(e) => handleChange('sender.forenames', e.target.value)}
          readonly
        />
        <InputField
          title="Referee Name"
          type="text"
          value={formData.sender.refereeName}
          // onChange={(e) => handleChange('sender.forenames', e.target.value)}
          readonly
        />
        <InputField
          title="Referee's Position"
          type="text"
          value={formData.sender.refereeJobTitle}
          // onChange={(e) => handleChange('sender.forenames', e.target.value)}
          readonly
        />
      </div>
    </div>
  );

  const Step2 = () => {
  
    return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-[#1663a3] mb-6">Section 2: Performance Assessment</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ratings.map((rating, index) => (
          <SelectField key={index} recordList={scoreList} value={formData.performanceAssessment.ratings[rating]} onChangeText={(value) => handleChange(`performanceAssessment.ratings.${rating}`, value)} title={ratingLabels[rating]} placeholder={`Scale Applicant for ${ratingLabels[rating]}`} />
        ))}
        <div className="border p-4 rounded-md">
          <p className="text-sm font-medium text-gray-700 mb-2">
            During the course of their employment did you have any reason to doubt the applicant's honesty?
          </p>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="doubtHonesty"
                checked={formData.performanceAssessment.doubtHonesty === 'Yes'}
                onChange={() => setFormData(prev => ({
                  ...prev,
                  performanceAssessment: {
                    ...prev.performanceAssessment,
                    doubtHonesty: 'Yes'
                  }
                }))}
                className="h-4 w-4 text-blue-600"
              />
              <span className="ml-2 text-sm text-gray-700">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="doubtHonesty"
                checked={formData.performanceAssessment.doubtHonesty === 'No'}
                onChange={() => setFormData(prev => ({
                  ...prev,
                  performanceAssessment: {
                    ...prev.performanceAssessment,
                    doubtHonesty: 'No'
                  }
                }))}
                className="h-4 w-4 text-blue-600"
              />
              <span className="ml-2 text-sm text-gray-700">No</span>
            </label>
          </div>
        </div>
        
        <div className="border p-4 rounded-md">
          <p className="text-sm font-medium text-gray-700 mb-2">
            Subject to a suitable vacancy arising, and policy permitting, would you re-employ the applicant?
          </p>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="wouldReemploy"
                checked={formData.performanceAssessment.wouldReemploy === 'Yes'}
                onChange={() => setFormData(prev => ({
                  ...prev,
                  performanceAssessment: {
                    ...prev.performanceAssessment,
                    wouldReemploy: 'Yes'
                  }
                }))}
                className="h-4 w-4 text-blue-600"
              />
              <span className="ml-2 text-sm text-gray-700">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="wouldReemploy"
                checked={formData.performanceAssessment.wouldReemploy === 'No'}
                onChange={() => setFormData(prev => ({
                  ...prev,
                  performanceAssessment: {
                    ...prev.performanceAssessment,
                    wouldReemploy: 'No'
                  }
                }))}
                className="h-4 w-4 text-blue-600"
              />
              <span className="ml-2 text-sm text-gray-700">No</span>
            </label>
          </div>
        </div>
        
        <div className="border p-4 rounded-md">
          <p className="text-sm font-medium text-gray-700 mb-2">
            Have there been any disciplinary/other formal employment proceedings against or by the applicant which are still considered 'live'?
          </p>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="disciplinaryProceedings"
                checked={formData.performanceAssessment.disciplinaryProceedings === 'Yes'}
                onChange={() => setFormData(prev => ({
                  ...prev,
                  performanceAssessment: {
                    ...prev.performanceAssessment,
                    disciplinaryProceedings: 'Yes'
                  }
                }))}
                className="h-4 w-4 text-blue-600"
              />
              <span className="ml-2 text-sm text-gray-700">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="disciplinaryProceedings"
                checked={formData.performanceAssessment.disciplinaryProceedings === 'No'}
                onChange={() => setFormData(prev => ({
                  ...prev,
                  performanceAssessment: {
                    ...prev.performanceAssessment,
                    disciplinaryProceedings: 'No'
                  }
                }))}
                className="h-4 w-4 text-blue-600"
              />
              <span className="ml-2 text-sm text-gray-700">No</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )};


  const submitForm = async () => {
    const refereeName = applicantInfo.professionalReferee?.name
    const position = applicantInfo.jobDetails?.positionAppliedFor;
    const applicantName = `${applicantInfo.personalDetails?.forenames} ${applicantInfo.personalDetails?.surname}`;
    try {
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
      <div className="px-6 pt-4">
        <div className="flex items-center justify-between mb-2">
          <div className="text-sm font-medium text-[#1663a3]">Page {step} of 3</div>
          <div className="text-sm text-gray-500">* indicates required fields</div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-[#e67238] h-2.5 rounded-full" 
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>
      </div>   
      <div className="p-6"> 
        <div className="text-sm  mb-2">This information is being collected for the purpose of recruitment and selection. It will be treated with the strictest confidence. If you are giving a reference on behalf of a present or previous employer, you are advised that under the GDPR and related UK data protection legislation, all references are potentially disclosable to the applicant.</div>
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <div className="space-y-6">
      <h2 className="text-xl font-bold text-[#1663a3] mb-6">Section 3: Additional Information</h2>
      
      <div className="grid grid-cols-1 gap-6">
        <TextareaField
          title="If YES, answered to any above questions, please give details"
          value={formData.additionalInfo.details || ''}
          onChange={(e) => handleChange('additionalInfo.details', e.target.value)}
          isRequired
        />
        <TextareaField
          title="Comments"
          value={formData.additionalInfo.comments || ''}
          onChange={(e) => handleChange('additionalInfo.comments', e.target.value)}
          isRequired
        />
      </div>
    </div>}

        <div className="flex justify-between gap-5 mt-8 pt-4 border-t border-gray-200">
          <button
            onClick={prevPage}
            disabled={step === 1}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              step === 1 
                ? "bg-gray-200 text-gray-500 cursor-not-allowed" 
                : "bg-[#1663a3] text-white hover:bg-[#0d4a7a]"
            }`}
          >
            <FaArrowLeft /> Go Back
          </button>
          
          {step < 3 ? (
            <button
              onClick={nextPage}
              className="flex items-center gap-2 bg-[#e67238] text-white px-4 py-2 rounded-lg hover:bg-[#d45a28]"
            >
              Continue <FaArrowRight />
            </button>
          ) : (
            <button
              onClick={submitForm}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
            >
              Submit Form
            </button>
          )}
        </div>
      </div>
    </>
  }
  </>
)};