import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { JobDetails } from "../components/application/jobDetails";
import { PersonalDetails } from "../components/application/personalDetails";
import { EmploymentHistory } from "../components/application/employmentHistory";
import { Declaration } from "../components/application/declaration";
import { Education } from "../components/application/education";
import { CoverLetter } from "../components/application/coverLetter";
import { Legal } from "../components/application/legal";
import { References } from "../components/application/reference";
import { useAlert } from "../utils/notification/alertcontext";
import { addSanityKeys, ApplicationData, cleanEmptyObjects, emptyTemplates, formatDate, initialFormData, validateEmail } from "../utils/common";
import { ERROR_EMAIL_INVALID } from "../constant/errors";
import { client } from "../utils/client";
import { v4 as uuidv4 } from "uuid";

type EmailResponse = {
  message: string;
  email?: string;
  error?: string;
};

const JobApplication = () => {
  const { addAlert } = useAlert();
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState<any>({
    jobDetails: {
      positionAppliedFor: "",
      preferredWorkingArrangements: { fullTime: false, partTime: false, jobShare: false },
      location: "",
      howDidYouHear: ""
    },
    personalDetails: {
      surname: "",
      forenames: "",
      previousSurname: "",
      previousForename: "",
      title: "",
      preferredName: "",
      homeTelephone: "",
      mobile: "",
      email: "",
      address: ""
    },
    drivingLicence: {
      holdsLicence: false,
      endorsements: false,
      endorsementsDetails: ""
    },
    presentEmployment: {
      jobTitle: "",
      employerName: "",
      employerAddress: "",
      dateCommenced: "",
      noticeRequired: "",
      currentSalary: "",
      reasonForLeaving: "",
      involvesWorkingWithChildren: false,
      jobDescription: ""
    },
    previousEmployments: [{
      jobTitle: "",
      employerName: "",
      employerAddress: "",
      fromDate: "",
      toDate: "",
      salary: "",
      reasonForLeaving: "",
      involvedWorkingWithChildren: false,
      businessEmail: ""
    }],
    timeBreaks: [{
      fromDate: "",
      toDate: "",
      reason: ""
    }],
    education: [{
      institution: "",
      fromDate: "",
      toDate: "",
      qualifications: ""
    }],
    training: [{
      courseTitle: "",
      fromDate: "",
      toDate: "",
      provider: ""
    }],
    ofstedHistory: [{
      establishment: "",
      dateOfInspection: "",
      outcome: "",
      referenceNumber: ""
    }],
    coverLetter: "",
    references: {
      professionalReferee: {
        name: "",
        address: "",
        tel: "",
        occupation: "",
        email: "",
        contactBeforeInterview: false
      },
      personalReferee: {
        name: "",
        address: "",
        tel: "",
        occupation: "",
        email: "",
        contactBeforeInterview: false
      }
    },
    disciplinaryIssues: {
      dismissedOrResigned: "",
      allegation: "",
      attachedDetails: ""
    },
    rehabilitation: {
      convicted: "",
      onDBSList: "",
      offencesOutstanding: "",
      attachedRehabilitationDetails: "",
      rightToWork: ""
    },
    declaration: {
      date: "",
      printName: "",
    },
    gdprConsent: false,
    reasonableAdjustments: ""
  });

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

  const errors: string[] = [];

  const validateJobDetails = () => {
    const { positionAppliedFor, location, howDidYouHear, preferredWorkingArrangements } = formData.jobDetails;
    
    if (!positionAppliedFor.trim()) {
      errors.push("Position applied for is required");
    }
    
    if (!location.trim()) {
      errors.push("Location is required");
    }
    
    if (!howDidYouHear.trim()) {
      errors.push("Please specify how you heard about this vacancy");
    }
    
    const hasWorkingArrangement = 
      preferredWorkingArrangements.fullTime || 
      preferredWorkingArrangements.partTime || 
      preferredWorkingArrangements.jobShare;
    
    if (!hasWorkingArrangement) {
      errors.push("Please select at least one working arrangement")
    }
    return Object.keys(errors).length === 0;
  };

  const validatePersonalDetails = () => {
    const { surname, forenames, title, preferredName, homeTelephone, mobile, email, address } = formData.personalDetails;
    
    if (!title.trim()) {
      errors.push("Title is required");
    }
    
    if (!surname.trim()) {
      errors.push("Surname is required");
    }
    
    if (!forenames.trim()) {
      errors.push("Forename is required");
    }
    
    if (!preferredName.trim()) {
      errors.push("Preferred Name is required");
    }
    
    if (!homeTelephone.trim()) {
      errors.push("Home Telephone is required");
    }
    
    if (!mobile.trim()) {
      errors.push("Mobile is required");
    }
    
    if (!address.trim()) {
      errors.push("Address is required");
    }
    
    if (!email.trim()) {
      errors.push("Email is required");
    }else {
      if (!validateEmail(email)) errors.push(ERROR_EMAIL_INVALID);
    }

    const { endorsements, endorsementsDetails } = formData.drivingLicence;

    if (endorsements && !endorsementsDetails.trim()) {
      errors.push("Please provide endorsement details");
    }
    
    // setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const validateEmployment = () => {
    const {
      jobTitle,
      employerName,
      employerAddress,
      dateCommenced,
      noticeRequired,
      currentSalary,
      reasonForLeaving,
      jobDescription,
    } = formData.presentEmployment;

    if (!jobTitle.trim()) errors.push("Current job title is required");
    if (!employerName.trim()) errors.push("Current employer name is required");
    if (!employerAddress.trim()) errors.push("Current employer address is required");
    if (!dateCommenced.trim()) errors.push("Date commenced is required");
    if (!noticeRequired.trim()) errors.push("Notice required is required");
    if (!currentSalary.trim()) errors.push("Current salary is required");
    if (!reasonForLeaving.trim()) errors.push("Reason for leaving is required");
    if (!jobDescription.trim()) errors.push("Job description is required");

    if (
      Array.isArray(formData.previousEmployments) &&
      formData.previousEmployments.some((emp: { jobTitle: string; employerName: string; employerAddress: string; fromDate: string; toDate: string; reasonForLeaving: string; salary: string; }) =>
        emp.jobTitle.trim() ||
        emp.employerName.trim() ||
        emp.employerAddress.trim() ||
        emp.fromDate.trim() ||
        emp.toDate.trim() ||
        emp.reasonForLeaving.trim() ||
        emp.salary.trim()
      )
    ) {
      formData.previousEmployments.forEach((job: { jobTitle: string; employerName: string; fromDate: string; toDate: string; reasonForLeaving: string; salary: string; }, index: number) => {
        if (!job.jobTitle.trim()) errors.push(`Previous job #${index + 1}: job title is required`);
        if (!job.employerName.trim()) errors.push(`Previous job #${index + 1}: employer name is required`);
        if (!job.fromDate.trim()) errors.push(`Previous job #${index + 1}: start date is required`);
        if (!job.toDate.trim()) errors.push(`Previous job #${index + 1}: end date is required`);
        if (!job.reasonForLeaving.trim()) errors.push(`Previous job #${index + 1}: Reason for leaving is required`);
        if (!job.salary.trim()) errors.push(`Previous job #${index + 1}: Salary is required`);
      });
    }

    return errors.length === 0;
  };

  const validateEducation = () => {
    if (formData.timeBreaks.length > 0) {
      if (
        Array.isArray(formData.timeBreaks) &&
        formData.timeBreaks.some((emp: { reason: string; }) =>
          emp.reason.trim() 
        )
      ) {
        formData.timeBreaks.forEach((breakItem: { reason: string; }, index: number) => {
          if (!breakItem.reason.trim()) errors.push(`Break #${index + 1}: reason is required`);
          if (!breakItem.reason.trim()) errors.push(`Break #${index + 1}: reason is required`);
        });
      }
    }

    if (formData.training.length > 0) {
      if (
        Array.isArray(formData.training) &&
        formData.training.some((emp: { courseTitle: string; provider: string; }) =>
          emp.courseTitle.trim() ||
          emp.provider.trim() 
        )
      ) {
        formData.training.forEach((item: { courseTitle: string; provider: string; }, index: number) => {
          if (!item.courseTitle.trim()) errors.push(`Training #${index + 1}: course title is required`);
          if (!item.provider.trim()) errors.push(`Training #${index + 1}: provider is required`);
        });
      }
    }
    
    if (formData.ofstedHistory.length > 0) {
      if (
        Array.isArray(formData.ofstedHistory) &&
        formData.ofstedHistory.some((emp: { establishment: string; dateOfInspection: string; }) =>
          emp.establishment.trim() ||
          emp.dateOfInspection.trim() 
        )
      ) {
        formData.ofstedHistory.forEach((entry: { establishment: string; dateOfInspection: string; }, index: number) => {
          if (!entry.establishment.trim()) errors.push(`Ofsted #${index + 1}: establishment is required`);
          if (!entry.dateOfInspection.trim()) errors.push(`Ofsted #${index + 1}: inspection date is required`);
        });
      }
    }
    
    formData.education.forEach((edu: { institution: string; qualifications: string; }, index: number) => {
      if (!edu.institution.trim()) errors.push(`Education #${index + 1}: institution name is required`);
      if (!edu.qualifications.trim()) errors.push(`Education #${index + 1}: qualifications are required`);
    });
    return Object.keys(errors).length === 0;
  };

  const validateCoverletter = () => {
    const { coverLetter} = formData;
    if (!coverLetter) errors.push("Cover letter is required");
    return Object.keys(errors).length === 0;
  };

  const validateReferences = () => {
    const { professionalReferee, personalReferee } = formData.references;

    if (!professionalReferee.name.trim()) errors.push("Personal referee name is required");
    if (!professionalReferee.email.trim()) {errors.push("Professional referee email is required")} else {
      if (!validateEmail(professionalReferee.email.trim())) errors.push("Professional referee email is invalid");
    };
    if (!professionalReferee.tel.trim()) errors.push("Professional referee telephone Number is required");
    if (!professionalReferee.address.trim()) errors.push("Professional referee address is required");
    if (!professionalReferee.occupation.trim()) errors.push("Professional referee occupation is required");
    
    if (!personalReferee.name.trim()) errors.push("Personal referee name is required");
    if (!personalReferee.email.trim()) {errors.push("Personal referee email is required")} else {
      if (!validateEmail(personalReferee.email.trim())) errors.push("Personal referee email is invalid");
    };
    if (!personalReferee.tel.trim()) errors.push("Personal referee telephone Number is required");
    if (!personalReferee.address.trim()) errors.push("Personal referee address is required");
    if (!personalReferee.occupation.trim()) errors.push("Personal referee occupation is required");

    return Object.keys(errors).length === 0;
  };

  const validateLegal = () => {
    const { convicted, onDBSList, offencesOutstanding, rightToWork} = formData.rehabilitation;
    const { dismissedOrResigned, allegation} = formData.disciplinaryIssues;
    
    if (!dismissedOrResigned || !allegation || !convicted || !onDBSList || !offencesOutstanding || !rightToWork) {
      errors.push("Please check all required fields");
    }
    return Object.keys(errors).length === 0;
  };

  const validateDeclaration = () => {
    if (!formData.gdprConsent) {
      errors.push("You must consent to data storage (GDPR)");
    }
    return Object.keys(errors).length === 0;
  };

  const nextPage = async () => {
    if (currentPage === 1) {
      const isValid = validateJobDetails();
      if (!isValid) {
        errors.forEach(msg => addAlert({ message: msg, type: "error" }));
        return;
      }
    }
    if (currentPage === 2) {
      const isValid = validatePersonalDetails();
      if (!isValid) {
        errors.forEach(msg => addAlert({ message: msg, type: "error" }));
        return;
      }else {
        const query = `*[_type == 'application' && personalDetails.email == '${formData.personalDetails.email.trim()}'][0]{_id}`;
        const result = await client.fetch(query);
        if (result) {
          addAlert({ 
            message: "An application with this email already exists. Please contact support if you need assistance.", 
            type: "error" 
          });
          return;
        }
      }
    }
    if (currentPage === 3) {
      const isValid = validateEmployment();
      if (!isValid) {
        errors.forEach(msg => addAlert({ message: msg, type: "error" }));
        return;
      }
    }
    if (currentPage === 4) {
      const isValid = validateEducation();
      if (!isValid) {
        errors.forEach(msg => addAlert({ message: msg, type: "error" }));
        return;
      }
    }
    if (currentPage === 5) {
      const isValid = validateCoverletter();
      if (!isValid) {
        errors.forEach(msg => addAlert({ message: msg, type: "error" }));
        return;
      }
    }
    if (currentPage === 6) {
      const isValid = validateReferences();
      if (!isValid) {
        errors.forEach(msg => addAlert({ message: msg, type: "error" }));
        return;
      }
    }
    
    if (currentPage === 7) {
      const isValid = validateLegal();
      if (!isValid) {
        errors.forEach(msg => addAlert({ message: msg, type: "error" }));
        return;
      }
    }
    
    setCurrentPage(prev => Math.min(prev + 1, 8));
  };

  const prevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const addArrayItem = (section: string) => {
    const newItem = emptyTemplates[section];
    if (!newItem) return console.warn(`No template defined for ${section}`);

    setFormData((prev: { [x: string]: any; }) => ({
      ...prev,
      [section]: [...prev[section], { ...newItem }],
    }));
  };

  const removeArrayItem = (section: string, index: number) => {
    if (formData[section].length <= 1) return;
    
    setFormData((prev: { [x: string]: any[]; }) => ({
      ...prev,
      [section]: prev[section].filter((_: any, i: number) => i !== index)
    }));
  };

  const submitForm = async () => {
    // Validate form
    if (!validateDeclaration()) {
      errors.forEach(msg => addAlert({ message: msg, type: "error" }));
      return;
    }
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    try {
      // Generate unique tokens
      const professionalToken = uuidv4();
      const personalToken = uuidv4();
      const baseURL = window.location.origin;
      
      // Prepare applicant info
      const { forenames, surname } = formData.personalDetails;
      const applicantName = `${forenames} ${surname}`;
      const position = formData.jobDetails.positionAppliedFor;
      
      // Prepare enriched data
      const enrichedFormData = {
        ...formData,
        declaration: {
          date: formatDate(new Date().toISOString()),
          printName: applicantName
        },
        references: {
          professionalReferee: {
            ...formData.references.professionalReferee,
            personalizedLink: `${baseURL}/referee/${professionalToken}?type=professional`
          },
          personalReferee: {
            ...formData.references.personalReferee,
            personalizedLink: `${baseURL}/referee/${personalToken}?type=character`
          }
        }
      };

      // Clean and prepare data for Sanity
      const cleanedData = cleanEmptyObjects(enrichedFormData) as ApplicationData;
      const dataWithKeys = addSanityKeys(cleanedData);
      
      // Save to Sanity
      await client.create({
        _type: 'application',
        ...dataWithKeys
      });
      
      const sendEmail = async (type: string, refData: any): Promise<Response> => {
        if (!refData?.email) {
          console.warn(`Skipping ${type} email - no address provided`);
          throw new Error('NO_EMAIL_ADDRESS');
        }

        return fetch('/api/send-referee-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type,
            email: refData.email,
            applicantName,
            refereeName: refData.name,
            position,
            link: refData.personalizedLink
          })
        });
      };

      // Retry function with proper typing
      const sendWithRetry = async (
        fn: () => Promise<Response>,
        retries = 2
      ): Promise<EmailResponse> => {
        try {
          const response = await fn();
          const data: EmailResponse = await response.json();
          
          if (!response.ok) {
            throw new Error(data.error || `HTTP error ${response.status}`);
          }
          
          return data;
        } catch (error) {
          if (retries > 0) {
            console.warn(`Retrying (${retries} left)...`);
            await delay(1000);
            return sendWithRetry(fn, retries - 1);
          }
          throw error;
        }
      };

      // Send emails sequentially with proper error handling
      try {
        await sendWithRetry(
          () => sendEmail('professional', enrichedFormData.references.professionalReferee)
        );
      } catch (error) {
        console.error('Professional ref email failed:', error);
        addAlert({
          message: 'Failed to send email to professional referee',
          type: 'error'
        });
      }

      try {
        await sendWithRetry(
          () => sendEmail('character', enrichedFormData.references.personalReferee)
        );
      } catch (error) {
        console.error('Personal ref email failed:', error);
        addAlert({
          message: 'Failed to send email to personal referee',
          type: 'error'
        });
      }

      // Send notification
      try {
        const response = await fetch('/api/application-notification-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            isNotification: true,
            email: "info@sarathealthcare.co.uk",
            applicantName,
            position
          })
        });
        
        if (!response.ok) {
          throw new Error('Notification email failed');
        }
        console.log('Notification email sent');
      } catch (error) {
        console.error('Notification email failed:', error);
        addAlert({
          message: 'Failed to send notification email',
          type: 'error'
        });
      }

      // Reset form and show success
      addAlert({ message: 'Application submitted successfully!', type: 'success' });
      setFormData(initialFormData);
      setCurrentPage(1);
      
    } catch (error: any) {
      console.error('Submission error:', error);
      
      // Handle specific email errors
      if (error.message.includes('EMAIL_FAILED')) {
        const refType = error.message.split('_')[2]?.toLowerCase() || 'referee';
        addAlert({
          message: `Application submitted, but failed to send ${refType} reference email`,
          type: 'error'
        });
      } else {
        // General error
        addAlert({
          message: 'An error occurred while submitting the application',
          type: 'error'
        });
      }
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden my-8">
        {/* Form Header */}
        <div className="bg-[#1663a3] text-white p-6">
          <h1 className="text-2xl font-bold">Job Application</h1>
          <p className="mt-2 text-[#a0d1ff]">
            Sarat Healthcare Ltd. is committed to the safeguarding and promotion of the welfare of our clients
          </p>
        </div>
  
        {/* Progress Bar */}
        <div className="px-6 pt-4">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium text-[#1663a3]">Page {currentPage} of 8</div>
            <div className="text-sm text-gray-500">* indicates required fields</div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-[#e67238] h-2.5 rounded-full" 
              style={{ width: `${(currentPage / 8) * 100}%` }}
            ></div>
          </div>
        </div>
  
        {/* Form Content */}
        <div className="p-6">
          {currentPage === 1 && (
            <JobDetails
              formData={formData} 
              handleChange={handleChange} 
            />
          )}
          {currentPage === 2 && (
            <PersonalDetails
              formData={formData} 
              handleChange={handleChange} 
            />
          )}
          {currentPage === 3 && (
            <EmploymentHistory 
              formData={formData} 
              handleChange={handleChange}
              addArrayItem={addArrayItem}
              removeArrayItem={removeArrayItem}
            />
          )}
          {currentPage === 4 && (
            <Education 
              formData={formData} 
              handleChange={handleChange}
              addArrayItem={addArrayItem}
              removeArrayItem={removeArrayItem}
            />
          )}
          {currentPage === 5 && (
            <CoverLetter 
              formData={formData} 
              handleChange={handleChange}
            />
          )}
          
          {currentPage === 6 && (
            <References 
              formData={formData} 
              handleChange={handleChange}
            />
          )}
          
          {currentPage === 7 && (
            <Legal 
              formData={formData} 
              handleChange={handleChange}
            />
          )}
  
          {currentPage === 8 && (
            <Declaration 
              formData={formData} 
              handleChange={handleChange}
              submitForm={submitForm}
            />
          )} 
          {/* Navigation Buttons */}
          <div className="flex justify-between gap-5 mt-8 pt-4 border-t border-gray-200">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                currentPage === 1 
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed" 
                  : "bg-[#1663a3] text-white hover:bg-[#0d4a7a]"
              }`}
            >
              <FaArrowLeft /> Previous
            </button>
            
            {currentPage < 8 ? (
              <button
                onClick={nextPage}
                className="flex items-center gap-2 bg-[#e67238] text-white px-4 py-2 rounded-lg hover:bg-[#d45a28]"
              >
                Next <FaArrowRight />
              </button>
            ) : (
              <button
                onClick={submitForm}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
              >
                Submit Application
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApplication;


