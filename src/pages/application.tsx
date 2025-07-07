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

const JobApplication = () => {
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
      currentEmployer: {
        name: "",
        address: "",
        tel: "",
        occupation: "",
        email: "",
        contactBeforeInterview: false
      },
      secondEmployer: {
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
      dismissedOrResigned: false,
      allegation: false,
      attachedDetails: false
    },
    rehabilitation: {
      convicted: false,
      onDBSList: false,
      offencesOutstanding: false,
      attachedRehabilitationDetails: false,
      rightToWork: false
    },
    declaration: {
      signed: "",
      date: "",
      printName: "",
      consent: false
    },
    gdprConsent: false,
    reasonableAdjustments: ""
  });

  const handleChange = (section: string, field: string, value: any, index?: number) => {
    setFormData((prev: { [x: string]: any; }) => {
      const newData = { ...prev };
      
      if (index !== undefined) {
        // Handle array fields (previousEmployments, timeBreaks, etc.)
        newData[section] = [...prev[section]];
        newData[section][index] = { ...newData[section][index], [field]: value };
      } else if (section.includes('.')) {
        // Handle nested objects (references, etc.)
        const [parent, child] = section.split('.');
        newData[parent] = { ...prev[parent], [child]: { ...prev[parent][child], [field]: value } };
      } else {
        // Handle top-level fields
        newData[section] = { ...prev[section], [field]: value };
      }
      
      return newData;
    });
  };

  const addArrayItem = (section: string) => {
    setFormData((prev: { [x: string]: any[]; }) => ({
      ...prev,
      [section]: [
        ...prev[section],
        { ...prev[section][0] } // Clone the structure of the first item
      ]
    }));
  };

  const removeArrayItem = (section: string, index: number) => {
    if (formData[section].length <= 1) return;
    
    setFormData((prev: { [x: string]: any[]; }) => ({
      ...prev,
      [section]: prev[section].filter((_: any, i: number) => i !== index)
    }));
  };

  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, 8));
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

  const submitForm = () => {
    console.log("Form submitted:", formData);
    alert("Application submitted successfully!");
    // Here you would typically send the form data to your backend
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
              formData={formData.jobDetails} 
              handleChange={(field: string, value: any) => handleChange('jobDetails', field, value)} 
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
