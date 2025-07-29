// schemas/reference.js
export default {
  name: 'applicationReference',
  title: 'Reference',
  type: 'document',
  fields: [
    {
      name: 'refereeType',
      title: 'Referee Type',
      type: 'string',
      options: {
        list: [
          { title: 'Professional', value: 'professional' },
          { title: 'Character', value: 'character' }
        ]
      },
      validation: (Rule: { required: () => any; }) => Rule.required()
    },
    {
      name: 'token',
      title: 'Unique Token',
      type: 'string',
      description: 'Unique identifier for this reference',
      validation: (Rule: { required: () => any; }) => Rule.required()
    },
    // Section 1: Sender Information (common to both)
    {
      name: 'sender',
      title: 'Section 1: Sender Information',
      type: 'object',
      fields: [
        { name: 'organisation', title: 'Organisation', type: 'string' },
        { name: 'applicantName', title: 'Applicant Name', type: 'string' },
        
        
        { name: 'postAppliedFor', title: 'Post Applied For', type: 'string' },
        { name: 'refereeName', title: 'Name of Referee', type: 'string' },
        { name: 'refereeJobTitle', title: "Referee's Job Title", type: 'string' },
      ]
    },
    // Section 2: Character Reference Specific Fields
    {
      name: 'characterReference',
      title: 'Section 2: Character Reference Information',
      type: 'object',
      fields: [
        { 
          name: 'capacityKnown', 
          title: 'In what capacity do you know the candidate?', 
          type: 'text',
          rows: 3
        },
        { 
          name: 'yearsKnown', 
          title: 'How long have you known the candidate?', 
          type: 'string' 
        },
        { 
          name: 'skillsAssessment', 
          title: 'What do you know about the candidate\'s skills in relation to the job applied for?', 
          type: 'text',
          rows: 4
        },
        { 
          name: 'unsuitabilityReason', 
          title: 'Do you know of any reason why the candidate would be unsuitable?', 
          type: 'text',
          rows: 3
        },
        { 
          name: 'recommendation', 
          title: 'Would you recommend the candidate for employment?', 
          type: 'string',
          options: {
            list: ['Yes', 'No']
          }
        },
        { 
          name: 'recommendationReason', 
          title: 'If not, please state reasons', 
          type: 'text',
          rows: 3,
          hidden: ({ parent }: { parent?: { recommendation?: string } }) => parent?.recommendation !== 'No'
        }
      ]
    },
    // Section 3: Applicant Information
    {
      name: 'applicantInfo',
      title: 'Section 3: Applicant Information',
      type: 'object',
      fields: [
        { name: 'employingOrganisation', title: 'Employing Organisation', type: 'string' },
        { name: 'contactPhone', title: 'Contact Phone', type: 'string' },
        { name: 'contactEmail', title: 'Contact Email', type: 'string' },
        { name: 'professionalCapacity', title: 'Professional Capacity', type: 'string' },
        { name: 'yearsKnown', title: 'Years Known', type: 'string' },
        { name: 'applicantJobTitle', title: "Applicant's Job Title", type: 'string' },
        { name: 'employmentDates', title: 'Employment Dates', type: 'string' },
        { name: 'reasonForLeaving', title: 'Reason for Leaving', type: 'string' },
        { 
          name: 'sicknessRecord', 
          title: 'Sickness Record', 
          type: 'object',
          fields: [
            { name: 'days', title: 'Days', type: 'string' },
            { name: 'episodes', title: 'Episodes', type: 'string' }
          ]
        }
      ]
    },
    // Section 4: Performance Assessment
    {
      name: 'performanceAssessment',
      title: 'Section 4: Performance Assessment',
      type: 'object',
      fields: [
        { 
          name: 'ratings',
          title: 'Performance Ratings',
          type: 'object',
          fields: [
            { name: 'qualityOfWork', title: 'Quality of Work', type: 'string', options: { list: ['Excellent', 'Good', 'Satisfactory', 'Poor'] } },
            { name: 'reliability', title: 'Reliability', type: 'string', options: { list: ['Excellent', 'Good', 'Satisfactory', 'Poor'] } },
            { name: 'relationships', title: 'Relationship with Colleagues/Residents', type: 'string', options: { list: ['Excellent', 'Good', 'Satisfactory', 'Poor'] } },
            { name: 'attitude', title: 'Attitude', type: 'string', options: { list: ['Excellent', 'Good', 'Satisfactory', 'Poor'] } },
            { name: 'communication', title: 'Communication', type: 'string', options: { list: ['Excellent', 'Good', 'Satisfactory', 'Poor'] } },
            { name: 'timekeeping', title: 'Timekeeping', type: 'string', options: { list: ['Excellent', 'Good', 'Satisfactory', 'Poor'] } },
          ]
        },
        { name: 'doubtHonesty', title: 'Reason to doubt honesty?', type: 'string' },
        { name: 'wouldReemploy', title: 'Would re-employ?', type: 'string' },
        { name: 'disciplinaryProceedings', title: 'Live disciplinary proceedings?', type: 'string' }
      ]
    },
    // Additional Information
    {
      name: 'additionalInfo',
      title: 'Section 5: Additional Information',
      type: 'object',
      fields: [
        { name: 'details', title: 'Additional Details', type: 'text' },
        { name: 'comments', title: 'Comments on Suitability', type: 'text' }
      ]
    },
    // Signature
    {
      name: 'signature',
      title: 'Signature',
      type: 'object',
      fields: [
        { name: 'name', title: 'Name', type: 'string' },
        { name: 'date', title: 'Date', type: 'date' }
      ]
    },
  ],
  initialValue: {
    submittedAt: (new Date()).toISOString()
  }
}