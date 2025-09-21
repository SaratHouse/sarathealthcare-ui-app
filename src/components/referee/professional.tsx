import { useState } from "react";
import TextareaField from "../reuseables/textarea";
import { useAlert } from "../../utils/notification/alertcontext";
import { client } from "../../utils/client";
import { formatDate, validateEmail } from "../../utils/common";
import InputField from "../reuseables/input";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import SelectField from "../reuseables/select";
import { ERROR_EMAIL_INVALID } from "../../constant/errors";

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
    applicantInfo:{
      employingOrganisation: '',
      contactPhone: '',
      contactEmail: '',
      professionalCapacity: '',
      yearsKnown: '',
      applicantJobTitle: applicantInfo.jobDetails?.positionAppliedFor,
      employmentDates: '',
      reasonForLeaving: '',
      sicknessRecord: {
        days: "",
        episodes: "",
      }
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
      const { employingOrganisation, contactPhone, contactEmail, professionalCapacity, employmentDates} = formData.applicantInfo;
    
      if (!employingOrganisation) {
        errors.push("Name of employing organisation/company is required");
      }
      if (!contactPhone) {
        errors.push("Contact Phone Number is required");
      }
      if (!contactEmail) {
        errors.push("Contact Email is required");
      }else {
        if (!validateEmail(contactEmail)) errors.push("Contact Email is invalid");
      }
      if (!professionalCapacity) {
        errors.push("Professional Capacity is required");
      }
      if (!employmentDates) {
        errors.push("Employment Dates is required");
      }
      if (errors.length > 0) {
        errors.forEach(msg => addAlert({ message: msg, type: "error" }));
        return;
      }
    }
    if (step === 3) {
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
    
    setStep(prev => Math.min(prev + 1, 4));
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

  const Step3 = () => {
    return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-[#1663a3] mb-6">Section 3: Performance Assessment</h2>
      
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
    const query = `*[_type == 'applicationReference' && token == ${token}][0]{_id}`;
    const formSubmittedAlready = await client.fetch(query);
    if (formSubmittedAlready) {
      addAlert({ message: 'This Professional reference form has already been filled out.', type: "error" })
      return
    }
    try {
      const result = await client.create({
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
            refereeId: result?._id,
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
          <div className="text-sm font-medium text-[#1663a3]">Page {step} of 4</div>
          <div className="text-sm text-gray-500">* indicates required fields</div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-[#e67238] h-2.5 rounded-full" 
            style={{ width: `${(step / 4) * 100}%` }}
          ></div>
        </div>
      </div>   
      <div className="p-6"> 
        <div className="text-sm  mb-2">This information is being collected for the purpose of recruitment and selection. It will be treated with the strictest confidence. If you are giving a reference on behalf of a present or previous employer, you are advised that under the GDPR and related UK data protection legislation, all references are potentially disclosable to the applicant.</div>
        {step === 1 && <Step1 />}
        {step === 2 && 
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-[#1663a3] mb-6">Section 2: Applicant Information</h2>
            <div className="text-sm  mb-2">Please provide the following information in respect of the applicant.</div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                title="Name of employing organisation/company"
                type="text"
                value={formData.applicantInfo.employingOrganisation}
                onChange={(e) => handleChange('applicantInfo.employingOrganisation', e.target.value)}
                
              />
              <InputField
                title="Contact Email"
                type="email"
                value={formData.applicantInfo.contactEmail}
                onChange={(e) => handleChange('applicantInfo.contactEmail', e.target.value)}
              />
              <InputField
                title="Contact Phone Number"
                type="text"
                value={formData.applicantInfo.contactPhone}
                onChange={(e) => handleChange('applicantInfo.contactPhone', e.target.value)}
              />
              <InputField
                title="In what professional capacity do you know the applicant?"
                type="text"
                value={formData.applicantInfo.professionalCapacity}
                onChange={(e) => handleChange('applicantInfo.professionalCapacity', e.target.value)}
              />
              <InputField
                title="How long have you known the applicant in this capacity?"
                type="text"
                value={formData.applicantInfo.yearsKnown}
                onChange={(e) => handleChange('applicantInfo.yearsKnown', e.target.value)}
              />
              <InputField
                title="What was the applicant’s job title?"
                type="text"
                value={formData.applicantInfo.applicantJobTitle}
                readonly
              />
              <InputField
                title="Employment Date"
                type="date"
                value={formData.applicantInfo.employmentDates}
                onChange={(e) => handleChange('applicantInfo.employmentDates', e.target.value)}
              />
              <InputField
                title="Reason for leaving?"
                type="text"
                value={formData.applicantInfo.reasonForLeaving}
                onChange={(e) => handleChange('applicantInfo.reasonForLeaving', e.target.value)}
              />
              <div className="md:col-span-2">
                <div className="text-sm font-bold mb-2">Sickness records</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    title="(No. of days) over the past two years,"
                    type="text"
                    value={formData.applicantInfo.sicknessRecord.days}
                    onChange={(e) => handleChange('applicantInfo.sicknessRecord.days', e.target.value)}
                  />
                  <InputField
                    title="How many episodes (If known)?"
                    type="text"
                    value={formData.applicantInfo.sicknessRecord.episodes}
                    onChange={(e) => handleChange('applicantInfo.sicknessRecord.episodes', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        }
        {step === 3 && <Step3 />}
        {step === 4 && 
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-[#1663a3] mb-6">Section 4: Additional Information</h2>
            
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
          </div>
        }
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
          
          {step < 4 ? (
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