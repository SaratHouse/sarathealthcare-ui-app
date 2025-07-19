import { EMAIL_REGEX } from "./regex";
import { v4 as uuidv4 } from 'uuid';

type Cleanable = 
  | string 
  | number 
  | boolean 
  | null 
  | undefined 
  | Date 
  | Cleanable[] 
  | { [key: string]: Cleanable };

export type ApplicationData = {
  jobDetails: object;
  personalDetails: object;
  drivingLicence: object;
  presentEmployment: object;
  previousEmployments?: any[];
  timeBreaks?: any[];
  education?: any[];
  training?: any[];
  ofstedHistory?: any[];
  coverLetter?: string;
  references: object;
  disciplinaryIssues: object;
  rehabilitation: object;
  declaration: object;
  gdprConsent: boolean;
  reasonableAdjustments?: string;
};


export const formatDate = (isoString: string, ): string => {
  const date = new Date(isoString);
  
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date string');
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export const validateEmail = (email: string) => {
  return EMAIL_REGEX.test(email);
}


export const cleanEmptyObjects = (data: Cleanable): Cleanable => {
  if (data instanceof Date) return data;

  if (Array.isArray(data)) {
    const cleaned = data
      .map(item => cleanEmptyObjects(item))
      .filter(item => {
        if (item === null || item === undefined) return false;
        if (typeof item !== 'object') return true;
        return Object.keys(item).length > 0;
      }) as Cleanable[];
    return cleaned.length > 0 ? cleaned : undefined;
  }

  if (typeof data === 'object' && data !== null) {
    const cleaned = Object.entries(data).reduce((acc, [key, value]) => {
      let cleanedValue = cleanEmptyObjects(value);
      
      if (key === 'previousEmployments' && Array.isArray(cleanedValue)) {
        // Check if all objects are "empty" - only contain false or empty values
        const hasMeaningfulData = cleanedValue.some(item => {
          if (typeof item === 'object' && item !== null) {
            // Object has at least one meaningful value (non-false, non-empty)
            return Object.values(item).some(val => 
              val !== false && 
              val !== "" && 
              val !== null && 
              val !== undefined
            );
          }
          return false;
        });
        
        // Remove entire array if no meaningful data exists
        if (!hasMeaningfulData) {
          return acc;
        }
      }
      
      if (cleanedValue !== undefined && cleanedValue !== null && cleanedValue !== '') {
        acc[key] = cleanedValue;
      }
      return acc;
    }, {} as Record<string, Cleanable>);
    
    return Object.keys(cleaned).length > 0 ? cleaned : undefined;
  }

  return data !== '' ? data : undefined;
};

export const addSanityKeys = (data: any): any => {
  if (Array.isArray(data)) {
    return data.map(item => ({
      ...addSanityKeys(item),
      _key: uuidv4()
    }));
  }
  
  if (typeof data === 'object' && data !== null) {
    return Object.entries(data).reduce((acc, [key, value]) => ({
      ...acc,
      [key]: addSanityKeys(value)
    }), {});
  }
  
  return data;
};

export const initialFormData = {
  jobDetails: {
    positionAppliedFor: '',
    preferredWorkingArrangements: { fullTime: false, partTime: false, jobShare: false },
    location: '',
    howDidYouHear: ''
  },
  personalDetails: {
    surname: '', forenames: '', previousSurname: '', previousForename: '',
    title: '', preferredName: '', homeTelephone: '', mobile: '', email: '', address: ''
  },
  drivingLicence: {
    holdsLicence: false, endorsements: false, endorsementsDetails: ''
  },
  presentEmployment: {
    jobTitle: '', employerName: '', employerAddress: '', dateCommenced: '',
    noticeRequired: '', currentSalary: '', reasonForLeaving: '', involvesWorkingWithChildren: false,
    jobDescription: ''
  },
  previousEmployments: [{ jobTitle: '', employerName: '', employerAddress: '', fromDate: '', toDate: '', salary: '', reasonForLeaving: '', involvedWorkingWithChildren: false, businessEmail: '' }],
  timeBreaks: [{ fromDate: '', toDate: '', reason: '' }],
  education: [{ institution: '', fromDate: '', toDate: '', qualifications: '' }],
  training: [{ courseTitle: '', fromDate: '', toDate: '', provider: '' }],
  ofstedHistory: [{ establishment: '', dateOfInspection: '', outcome: '', referenceNumber: '' }],
  coverLetter: '',
  references: {
    professionalReferee: {
      name: '', address: '', tel: '', occupation: '', email: '', contactBeforeInterview: false, personalizedLink: ''
    },
    personalReferee: {
      name: '', address: '', tel: '', occupation: '', email: '', contactBeforeInterview: false, personalizedLink: ''
    }
  },
  disciplinaryIssues: { dismissedOrResigned: '', allegation: '', attachedDetails: '' },
  rehabilitation: { convicted: '', onDBSList: '', offencesOutstanding: '', attachedRehabilitationDetails: '', rightToWork: '' },
  declaration: { date: '', printName: '', },
  gdprConsent: false,
  reasonableAdjustments: ''
};

export const emptyTemplates: Record<string, any> = {
  previousEmployments: {
    jobTitle: '',
    employerName: '',
    employerAddress: '',
    fromDate: '',
    toDate: '',
    salary: '',
    reasonForLeaving: '',
    involvedWorkingWithChildren: false,
    businessEmail: '',
  },
  timeBreaks: {
    fromDate: '',
    toDate: '',
    reason: '',
  },
  education: {
    institution: '',
    fromDate: '',
    toDate: '',
    qualifications: '',
  },
  training: {
    courseTitle: '',
    fromDate: '',
    toDate: '',
    provider: '',
  },
  ofstedHistory: {
    establishment: '',
    dateOfInspection: '',
    outcome: '',
    referenceNumber: '',
  },
};
