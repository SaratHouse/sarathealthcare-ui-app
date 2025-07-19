import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'application',
  title: 'Job Application',
  type: 'document',
  fields: [
    // Job Details
    defineField({
      name: 'jobDetails',
      type: 'object',
      fields: [
        { name: 'positionAppliedFor', type: 'string' },
        {
          name: 'preferredWorkingArrangements',
          type: 'object',
          fields: [
            { name: 'fullTime', type: 'boolean' },
            { name: 'partTime', type: 'boolean' },
            { name: 'jobShare', type: 'boolean' },
          ],
        },
        { name: 'location', type: 'string' },
        { name: 'howDidYouHear', type: 'string' },
      ],
    }),

    // Personal Details
    defineField({
      name: 'personalDetails',
      type: 'object',
      fields: [
        { name: 'surname', type: 'string' },
        { name: 'forenames', type: 'string' },
        { name: 'previousSurname', type: 'string' },
        { name: 'previousForename', type: 'string' },
        { name: 'title', type: 'string' },
        { name: 'preferredName', type: 'string' },
        { name: 'homeTelephone', type: 'string' },
        { name: 'mobile', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'address', type: 'text' },
      ],
    }),

    // Driving Licence
    defineField({
      name: 'drivingLicence',
      type: 'object',
      fields: [
        { name: 'holdsLicence', type: 'boolean' },
        { name: 'endorsements', type: 'boolean' },
        { name: 'endorsementsDetails', type: 'text' },
      ],
    }),

    // Present Employment
    defineField({
      name: 'presentEmployment',
      type: 'object',
      fields: [
        { name: 'jobTitle', type: 'string' },
        { name: 'employerName', type: 'string' },
        { name: 'employerAddress', type: 'text' },
        { name: 'dateCommenced', type: 'date' },
        { name: 'noticeRequired', type: 'string' },
        { name: 'currentSalary', type: 'string' },
        { name: 'reasonForLeaving', type: 'string' },
        { name: 'involvesWorkingWithChildren', type: 'boolean' },
        { name: 'jobDescription', type: 'text' },
      ],
    }),

    // Previous Employments
    defineField({
      name: 'previousEmployments',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'jobTitle', type: 'string' },
            { name: 'employerName', type: 'string' },
            { name: 'employerAddress', type: 'text' },
            { name: 'fromDate', type: 'date' },
            { name: 'toDate', type: 'date' },
            { name: 'salary', type: 'string' },
            { name: 'reasonForLeaving', type: 'text' },
            { name: 'involvedWorkingWithChildren', type: 'boolean' },
            { name: 'businessEmail', type: 'string' },
          ],
        },
      ],
    }),

    // Time Breaks
    defineField({
      name: 'timeBreaks',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'fromDate', type: 'date' },
            { name: 'toDate', type: 'date' },
            { name: 'reason', type: 'text' },
          ],
        },
      ],
    }),

    // Education
    defineField({
      name: 'education',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'institution', type: 'string' },
            { name: 'fromDate', type: 'date' },
            { name: 'toDate', type: 'date' },
            { name: 'qualifications', type: 'string' },
          ],
        },
      ],
    }),

    // Training
    defineField({
      name: 'training',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'courseTitle', type: 'string' },
            { name: 'fromDate', type: 'date' },
            { name: 'toDate', type: 'date' },
            { name: 'provider', type: 'string' },
          ],
        },
      ],
    }),

    // Ofsted History
    defineField({
      name: 'ofstedHistory',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'establishment', type: 'string' },
            { name: 'dateOfInspection', type: 'date' },
            { name: 'outcome', type: 'string' },
            { name: 'referenceNumber', type: 'string' },
          ],
        },
      ],
    }),

    // Cover Letter
    { name: 'coverLetter', type: 'text' },

    // References
    defineField({
      name: 'references',
      type: 'object',
      fields: [
        {
          name: 'professionalReferee',
          type: 'object',
          fields: [
            { name: 'name', type: 'string' },
            { name: 'address', type: 'text' },
            { name: 'tel', type: 'string' },
            { name: 'occupation', type: 'string' },
            { name: 'email', type: 'string' },
            { name: 'contactBeforeInterview', type: 'boolean' },
            { name: 'personalizedLink', type: 'string' },
        ],
    },
    {
        name: 'personalReferee',
        type: 'object',
        fields: [
            { name: 'name', type: 'string' },
            { name: 'address', type: 'text' },
            { name: 'tel', type: 'string' },
            { name: 'occupation', type: 'string' },
            { name: 'email', type: 'string' },
            { name: 'contactBeforeInterview', type: 'boolean' },
            { name: 'personalizedLink', type: 'string' },
          ],
        },
      ],
    }),

    // Disciplinary Issues
    defineField({
      name: 'disciplinaryIssues',
      type: 'object',
      fields: [
        { name: 'dismissedOrResigned', type: 'string' },
        { name: 'allegation', type: 'string' },
        { name: 'attachedDetails', type: 'string' },
      ],
    }),

    // Rehabilitation
    defineField({
      name: 'rehabilitation',
      type: 'object',
      fields: [
        { name: 'convicted', type: 'string' },
        { name: 'onDBSList', type: 'string' },
        { name: 'offencesOutstanding', type: 'string' },
        { name: 'attachedRehabilitationDetails', type: 'string' },
        { name: 'rightToWork', type: 'string' },
      ],
    }),

    // Declaration
    defineField({
      name: 'declaration',
      type: 'object',
      fields: [
        { name: 'date', type: 'date' },
        { name: 'printName', type: 'string' },
      ],
    }),

    // GDPR + Adjustments
    { name: 'gdprConsent', type: 'boolean' },
    { name: 'reasonableAdjustments', type: 'text' },
  ],
});
