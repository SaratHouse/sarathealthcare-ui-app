import React, { useState } from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { formatDate, LOGO_BASE64 } from '../utils/common';


// Create styles for the PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 30,
    fontFamily: 'Helvetica',
    fontSize: 10,
    lineHeight: 1.4,
  },
  header: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 15,
    paddingBottom: 15,
    fontWeight: 'bold',
    color: '#000000',
    letterSpacing: 1,
    textDecoration: 'underline'
  },
  image: {
    width: 'auto', // Example: set width to 50% of parent container
    height: 'auto', // Maintain aspect ratio
    marginTop: 10,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
    backgroundColor: '#f0f0f0',
    padding: 5,
    color: '#000000',
    letterSpacing: 1
  },
  table: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#cccccc',
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: '#cccccc',
    minHeight: 25,
  },
  tableCell: {
    flex: 1,
    padding: 5,
    borderRightWidth: 1,
    borderRightStyle: 'solid',
    borderRightColor: '#cccccc',
  },
  tableHeader: {
    backgroundColor: '#e0e0e0',
    fontWeight: 'bold',
  },
  lastCell: {
    borderRightWidth: 0,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 10,
    height: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
    marginRight: 5,
  },
  checkboxChecked: {
    backgroundColor: '#000',
  },
  signatureLine: {
    width: '60%',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    marginTop: 30,
    marginBottom: 5,
  },
  footer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 8,
    color: '#666666',
  },
  fullWidth: {
    width: '100%',
  },
  halfWidth: {
    width: '50%',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 8,
    gap: 5
  },
  label: {
    fontWeight: 'bold',
    width: '50%',
  },
  value: {
    width: '60%',
  },
  paragraph: {
    marginBottom: 10,
  },
  companyInfo: {
    fontSize: 8,
    textAlign: 'center',
    marginTop: 10,
  },
  ratingTable: {
    width: '100%',
    marginVertical: 10,
  },
  ratingRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: '#cccccc',
  },
  ratingCell: {
    padding: 5,
    borderRightWidth: 1,
    borderRightStyle: 'solid',
    borderRightColor: '#cccccc',
    width: '20%',
    textAlign: 'center',
  },
  ratingHeader: {
    backgroundColor: '#e0e0e0',
    fontWeight: 'bold',
  },
  lastRatingCell: {
    borderRightWidth: 0,
  },
  letterhead: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20,
    paddingBottom: 10,
  },
  letterfoot: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 10,
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#1663a3',
    paddingVertical: 15,
    gap: 4
  },
  pageContent: {
    position: 'relative',
    minHeight: '90%',
  },
  coverLetterBox: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
    padding: 10,
    minHeight: 400,
  },
});

// Checkbox component
const Checkbox = ({ checked } : any) => (
  <View style={[styles.checkbox, checked && styles.checkboxChecked]} />
);

// Employment history section
const EmploymentHistory = ({ employments, title }: any) => {
  if (!employments || !Array.isArray(employments) || employments.length === 0) {
    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <Text>No entries</Text>
      </View>
    );
  }

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {employments.map((job : any, index: number) => (
        <View key={index} style={{ marginBottom: 10, borderBottom: 2 }}>
          <View style={styles.row}>
            <Text style={styles.label}>Job Title:</Text>
            <Text style={styles.value}>{job?.jobTitle || 'N/A'}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Employer:</Text>
            <Text style={styles.value}>{job?.employerName || 'N/A'}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Address:</Text>
            <Text style={styles.value}>{job?.employerAddress || 'N/A'}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Dates:</Text>
            <Text style={styles.value}>{job?.fromDate ? (formatDate(job?.fromDate)) : "N/A"} - {job?.toDate ? (formatDate(job?.toDate)) : "N/A"}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Salary:</Text>
            <Text style={styles.value}>{job?.salary || 'N/A'}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Reason for Leaving:</Text>
            <Text style={styles.value}>{job?.reasonForLeaving || 'N/A'}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Involved working with children?</Text>
            <View style={[styles.checkboxContainer, {width: '60%'}]}>
              <Checkbox checked={job?.involvedWorkingWithChildren === true} />
              <Text>Yes</Text>
              <View style={{ width: 10 }} />
              <Checkbox checked={job?.involvedWorkingWithChildren === false} />
              <Text>No</Text>
            </View>
          </View>
          {job?.involvedWorkingWithChildren && (
            <View style={styles.row}>
              <Text style={styles.label}>Business Email:</Text>
              <Text style={styles.value}>{job?.businessEmail || 'N/A'}</Text>
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

// Main PDF document component
const ApplicationFormPDF = ({ application }: any) => {
  const {
    jobDetails,
    personalDetails,
    drivingLicence,
    presentEmployment,
    previousEmployments,
    timeBreaks,
    education,
    training,
    ofstedHistory,
    coverLetter,
    references,
    disciplinaryIssues,
    rehabilitation,
    declaration,
    gdprConsent
  } = application;

  // Render the complete PDF document with all 8 pages
  return (
    <Document>
      {/* Page 1 */}
      <Page size="A4" style={styles.page}>

        <View style={styles.letterhead}>
          <Image src={LOGO_BASE64} style={styles.image} />
        </View>

        <View style={styles.pageContent}>
          <Text style={styles.header}>Job Application Form</Text>

          <View style={styles.section}>
            <Text style={styles.paragraph}>
              Sarat Healthcare Ltd. is committed to the safeguarding and promotion of the welfare of our clients, 
              their families, and our staff, volunteers and carers. Everything we do promotes the safety and 
              wellbeing of the clients we work with.
            </Text>
            <Text style={styles.paragraph}>
              Some of the fields on the application form are mandatory, indicated by a *. Failure to complete 
              all mandatory fields will result in your application not being considered.
            </Text>
          </View>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Job details</Text>
            <View style={styles.row}>
              <Text style={styles.label}>Position Applied For *:</Text>
              <Text style={styles.value}>{jobDetails.positionAppliedFor || 'N/A'}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Preferred working arrangements:</Text>
              <View style={[styles.checkboxContainer, {width: '60%'}]}>
                <Checkbox checked={jobDetails.preferredWorkingArrangements?.fullTime} />
                <Text>Full-time</Text>
                <View style={{ width: 10 }} />
                <Checkbox checked={jobDetails.preferredWorkingArrangements?.partTime} />
                <Text>Part-time</Text>
                <View style={{ width: 10 }} />
                <Checkbox checked={jobDetails.preferredWorkingArrangements?.jobShare} />
                <Text>Job share</Text>
              </View>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Location *:</Text>
              <Text style={styles.value}>{jobDetails?.location || 'N/A'}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>How did you hear about this vacancy *:</Text>
              <Text style={styles.value}>{jobDetails?.howDidYouHear || 'N/A'}</Text>
            </View>
          </View>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Personal details</Text>
            <View style={styles.row}>
              <Text style={styles.label}>Surname *:</Text>
              <Text style={styles.value}>{personalDetails.surname || 'N/A'}</Text>
              <Text style={[styles.label, { marginLeft: 10 }]}>Forename(s) *:</Text>
              <Text style={styles.value}>{personalDetails.forenames || 'N/A'}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Previous surname(s):</Text>
              <Text style={styles.value}>{personalDetails?.previousSurname || 'N/A'}</Text>
              <Text style={[styles.label, { marginLeft: 10 }]}>Previous forename(s):</Text>
              <Text style={styles.value}>{personalDetails?.previousForename || 'N/A'}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Title *:</Text>
              <Text style={styles.value}>{personalDetails.title || 'N/A'}</Text>
              <Text style={[styles.label, { marginLeft: 10 }]}>Preferred name:</Text>
              <Text style={styles.value}>{personalDetails?.preferredName || 'N/A'}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Home Telephone *:</Text>
              <Text style={styles.value}>{personalDetails?.homeTelephone || 'N/A'}</Text>
              <Text style={[styles.label, { marginLeft: 10 }]}>Mobile *:</Text>
              <Text style={styles.value}>{personalDetails?.mobile || 'N/A'}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Email address *:</Text>
              <Text style={styles.value}>{personalDetails.email || 'N/A'}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Address * (incl postcode):</Text>
              <Text style={styles.value}>{personalDetails?.address || 'N/A'}</Text>
            </View>
          </View>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Driving Licence</Text>
            <View style={styles.row}>
              <Text style={styles.label}>Do you hold a full current Driving Licence? *:</Text>
              <View style={styles.checkboxContainer}>
                <Checkbox checked={drivingLicence?.holdsLicence === true} />
                <Text>Yes</Text>
                <View style={{ width: 10 }} />
                <Checkbox checked={drivingLicence?.holdsLicence === false} />
                <Text>No</Text>
              </View>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Do you have any current endorsements? *:</Text>
              <View style={styles.checkboxContainer}>
                <Checkbox checked={drivingLicence?.endorsements === true} />
                <Text>Yes</Text>
                <View style={{ width: 10 }} />
                <Checkbox checked={drivingLicence?.endorsements === false} />
                <Text>No</Text>
              </View>
            </View>
            {drivingLicence?.endorsements && (
              <View style={styles.row}>
                <Text style={styles.label}>If YES, please provide details: *</Text>
                <Text style={styles.value}>{drivingLicence?.endorsementDetails || 'N/A'}</Text>
              </View>
            )}
          </View>
        </View>
        
        <View style={styles.letterfoot}>
          <Text>Sarat Healthcare Ltd. Registered in England and Wales. Company Registration Number: 12932541.</Text>
          <Text>Office Address: Jhumat House,160 London Road, Barking London. IG11 8BB. United Kingdom</Text>
          <Text>Tel: 020 3667 3616; Mob: 077 3736 1681. Email: info@sarathealthcare.co.uk. Web: www.sarathealthcare.co.uk</Text>
        </View>
      </Page>

      {/* Page 2 */}
      <Page size="A4" style={styles.page}>
        <View style={styles.letterhead}>
          <Image src={LOGO_BASE64} style={styles.image} />
        </View>

        <View style={styles.pageContent}>
          <Text style={styles.header}>Job Application Form</Text>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Present employment</Text>
            <View style={styles.row}>
              <Text style={styles.label}>Job Title *:</Text>
              <Text style={styles.value}>{presentEmployment?.jobTitle || 'N/A'}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Name of Employer *:</Text>
              <Text style={styles.value}>{presentEmployment?.employerName || 'N/A'}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Address of Employer *:</Text>
              <Text style={styles.value}>{presentEmployment?.employerAddress || 'N/A'}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Date commenced with employer *:</Text>
              <Text style={styles.value}>{presentEmployment?.dateCommenced || 'N/A'}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Notice required *:</Text>
              <Text style={styles.value}>{presentEmployment?.noticeRequired || 'N/A'}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Current Salary *:</Text>
              <Text style={styles.value}>{presentEmployment?.currentSalary || 'N/A'}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Reason for Leaving *:</Text>
              <Text style={styles.value}>{presentEmployment?.reasonForLeaving || 'N/A'}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Does this role involve working with Children? *:</Text>
              <View style={[styles.checkboxContainer, {width: '60%'}]}>
                <Checkbox checked={presentEmployment?.involvesWorkingWithChildren === true} />
                <Text>Yes</Text>
                <View style={{ width: 10 }} />
                <Checkbox checked={presentEmployment?.involvesWorkingWithChildren === false} />
                <Text>No</Text>
              </View>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.label}>Briefly describe your present job; its main purpose and your responsibilities: *</Text>
              <Text style={styles.value}>{presentEmployment?.jobDescription || 'N/A'}</Text>
            </View>
          </View>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Previous employment</Text>
            <Text style={styles.paragraph}>
              Include permanent, temporary and voluntary work since leaving school (continue on a separate sheet if necessary). 
              Please list most recent first.
            </Text>

            {previousEmployments && previousEmployments.length > 0 && (
              <EmploymentHistory 
                employments={previousEmployments.slice(0, 1)} 
                title="Previous Employment History" 
              />
            )}
            
          </View>
        </View>
        
        <View style={styles.letterfoot}>
          <Text>Sarat Healthcare Ltd. Registered in England and Wales. Company Registration Number: 12932541.</Text>
          <Text>Office Address: Jhumat House,160 London Road, Barking London. IG11 8BB. United Kingdom</Text>
          <Text>Tel: 020 3667 3616; Mob: 077 3736 1681. Email: info@sarathealthcare.co.uk. Web: www.sarathealthcare.co.uk</Text>
        </View>
      </Page>

      {/* Page 3 - Previous employment continued */}
      <Page size="A4" style={styles.page}>
        <View style={styles.letterhead}>
          <Image src={LOGO_BASE64} style={styles.image} />
        </View>

        <View style={styles.pageContent}>
          <Text style={styles.header}>Job Application Form</Text>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Previous employment (continued)</Text>
            {previousEmployments && previousEmployments.length > 3 && (
              <EmploymentHistory 
                employments={previousEmployments.slice(1)} 
                title="Additional Employment History" 
              />
            )}
            
            {(!previousEmployments || previousEmployments.length <= 1) && (
              <Text>No additional previous employment history</Text>
            )}            
          </View>
        </View>
        
        <View style={styles.letterfoot}>
          <Text>Sarat Healthcare Ltd. Registered in England and Wales. Company Registration Number: 12932541.</Text>
          <Text>Office Address: Jhumat House,160 London Road, Barking London. IG11 8BB. United Kingdom</Text>
          <Text>Tel: 020 3667 3616; Mob: 077 3736 1681. Email: info@sarathealthcare.co.uk. Web: www.sarathealthcare.co.uk</Text>
        </View>
      </Page>

      {/* Page 4 */}
      <Page size="A4" style={styles.page}>
        <View style={styles.letterhead}>
          <Image src={LOGO_BASE64} style={styles.image} />
        </View>

        <View style={styles.pageContent}>
          <Text style={styles.header}>Job Application Form</Text>
        
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Time Breaks in Employment</Text>
            <Text style={styles.paragraph}>
              Reasons should be given for any period in which you were not in either employment, education or training since leaving school. 
              Please state this information in chronological order. Please continue on a separate sheet if necessary.
            </Text>
            
            {(!timeBreaks || timeBreaks.length === 0) ? (
              <Text>No time breaks in employment</Text>
            ) : (
              <View style={styles.table}>
                <View style={[styles.tableRow, styles.tableHeader]}>
                  <Text style={styles.tableCell}>From (exact dates) *</Text>
                  <Text style={styles.tableCell}>To (exact dates) *</Text>
                  <Text style={[styles.tableCell, styles.lastCell]}>Reason for break *</Text>
                </View>
                {timeBreaks.map((breakItem: any, index: number) => (
                  <View key={index} style={styles.tableRow}>
                    <Text style={styles.tableCell}>{breakItem?.fromDate ? (formatDate(breakItem?.fromDate)) : 'N/A'}</Text>
                    <Text style={styles.tableCell}>{breakItem?.toDate ? (formatDate(breakItem?.toDate)) : 'N/A'}</Text>
                    <Text style={[styles.tableCell, styles.lastCell]}>{breakItem?.reason || 'N/A'}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education and Qualifications</Text>
            <Text style={styles.paragraph}>
              Please provide details of qualifications gained since age 11.
            </Text>
            
            {(!education || education.length === 0) ? (
              <Text>No education history</Text>
            ) : (
              <View style={styles.table}>
                <View style={[styles.tableRow, styles.tableHeader]}>
                  <Text style={styles.tableCell}>Institution *</Text>
                  <Text style={styles.tableCell}>Dates attended *</Text>
                  <Text style={[styles.tableCell, styles.lastCell]}>Qualifications awarded *</Text>
                </View>
                {education.map((edu : any, index: number) => (
                  <View key={index} style={styles.tableRow}>
                    <Text style={styles.tableCell}>{edu?.institution || 'N/A'}</Text>
                    <Text style={styles.tableCell}>{edu?.fromDate ? (formatDate(edu?.fromDate)) : "N/A"} - {edu?.toDate ? (formatDate(edu?.toDate)) : "N/A"}</Text>
                    <Text style={[styles.tableCell, styles.lastCell]}>{edu?.qualifications || 'N/A'}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        </View>
        
        <View style={styles.letterfoot}>
          <Text>Sarat Healthcare Ltd. Registered in England and Wales. Company Registration Number: 12932541.</Text>
          <Text>Office Address: Jhumat House,160 London Road, Barking London. IG11 8BB. United Kingdom</Text>
          <Text>Tel: 020 3667 3616; Mob: 077 3736 1681. Email: info@sarathealthcare.co.uk. Web: www.sarathealthcare.co.uk</Text>
        </View>
      </Page>
      
      {/* Page 5 */}
      <Page size="A4" style={styles.page}>
        <View style={styles.letterhead}>
          <Image src={LOGO_BASE64} style={styles.image} />
        </View>

        <View style={styles.pageContent}>
          <Text style={styles.header}>Job Application Form</Text>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Training</Text>
            <Text style={styles.paragraph}>
              Please list all training undertaken that is relevant to the post applied for. Continue on a separate sheet if necessary.
            </Text>
            
            {(!training || training.length === 0) ? (
              <Text>No training history</Text>
            ) : (
              <View style={styles.table}>
                <View style={[styles.tableRow, styles.tableHeader]}>
                  <Text style={styles.tableCell}>Course Title</Text>
                  <Text style={styles.tableCell}>Dates attended</Text>
                  <Text style={[styles.tableCell, styles.lastCell]}>Training provider</Text>
                </View>
                {training.map((train: any, index: number) => (
                  <View key={index} style={styles.tableRow}>
                    <Text style={styles.tableCell}>{train?.courseTitle || 'N/A'}</Text>
                    <Text style={styles.tableCell}>{train?.fromDate ? (formatDate(train?.fromDate)) : "N/A"} - {train?.toDate ? (formatDate(train?.toDate)) : "N/A"}</Text>
                    <Text style={[styles.tableCell, styles.lastCell]}>{train?.provider || 'N/A'}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Ofsted History</Text>
            <Text style={styles.paragraph}>
              For Home or Deputy Manager positions only. Please continue on a separate sheet if necessary.
            </Text>
            
            {(!ofstedHistory || ofstedHistory.length === 0) ? (
              <Text>No Ofsted history</Text>
            ) : (
              <View style={styles.table}>
                <View style={[styles.tableRow, styles.tableHeader]}>
                  <Text style={styles.tableCell}>Establishment</Text>
                  <Text style={styles.tableCell}>Date of Inspection</Text>
                  <Text style={styles.tableCell}>Outcome</Text>
                  <Text style={[styles.tableCell, styles.lastCell]}>Reference number</Text>
                </View>
                {ofstedHistory.map((history: any, index: number) => (
                  <View key={index} style={styles.tableRow}>
                    <Text style={styles.tableCell}>{history?.establishment || 'N/A'}</Text>
                    <Text style={styles.tableCell}>{history?.dateOfInspection ? (formatDate(history?.dateOfInspection)) :'N/A'}</Text>
                    <Text style={styles.tableCell}>{history?.outcome || 'N/A'}</Text>
                    <Text style={[styles.tableCell, styles.lastCell]}>{history?.referenceNumber || 'N/A'}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        </View>
        
        <View style={styles.letterfoot}>
          <Text>Sarat Healthcare Ltd. Registered in England and Wales. Company Registration Number: 12932541.</Text>
          <Text>Office Address: Jhumat House,160 London Road, Barking London. IG11 8BB. United Kingdom</Text>
          <Text>Tel: 020 3667 3616; Mob: 077 3736 1681. Email: info@sarathealthcare.co.uk. Web: www.sarathealthcare.co.uk</Text>
        </View>
      </Page>

      {/* Page 6 */}
      <Page size="A4" style={styles.page}>
        <View style={styles.letterhead}>
          <Image src={LOGO_BASE64} style={styles.image} />
        </View>

        <View style={styles.pageContent}>
          <Text style={styles.header}>Job Application Form</Text>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Why are you applying for this job?
            </Text>
            <Text style={styles.paragraph}>
              Please state below how you meet the person specification for the role. 
              Please continue on a separate sheet if necessary.
            </Text>
            
            <View style={styles.coverLetterBox}>
              <Text>{coverLetter || 'N/A'}</Text>
              </View>
          </View>
        </View>
        
        <View style={styles.letterfoot}>
          <Text>Sarat Healthcare Ltd. Registered in England and Wales. Company Registration Number: 12932541.</Text>
          <Text>Office Address: Jhumat House,160 London Road, Barking London. IG11 8BB. United Kingdom</Text>
          <Text>Tel: 020 3667 3616; Mob: 077 3736 1681. Email: info@sarathealthcare.co.uk. Web: www.sarathealthcare.co.uk</Text>
        </View>
      </Page>

      {/* Page 7 */}
      <Page size="A4" style={styles.page}>
        <View style={styles.letterhead}>
          <Image src={LOGO_BASE64} style={styles.image} />
        </View>

        <View style={styles.pageContent}>
          <Text style={styles.header}>Job Application Form</Text>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>References</Text>
            <Text style={styles.paragraph}>
              One of the referees must be your current (or most recent) employer. If you have no previous employment history, 
              please provide a tutor or personal referee who can provide a character reference.
            </Text>
            <Text style={styles.paragraph}>
              For care related positions, we require email addresses of all previous employers that involve working with children, 
              young people or vulnerable adults.
            </Text>
            <Text style={styles.paragraph}>
              NB: We reserve the right to seek references from any previous employers listed in the ‘Previous Employment’ section of this form.
            </Text>
            
            <View style={{ marginTop: 15 }}>
              <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Professional Referee</Text>
              <View style={styles.row}>
                <Text style={styles.label}>Name *:</Text>
                <Text style={styles.value}>{references.professionalReferee?.name || 'N/A'}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Address *:</Text>
                <Text style={styles.value}>{references.professionalReferee?.address || 'N/A'}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Tel No *:</Text>
                <Text style={styles.value}>{references.professionalReferee?.tel || 'N/A'}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Occupation *:</Text>
                <Text style={styles.value}>{references.professionalReferee?.occupation || 'N/A'}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Email Address *:</Text>
                <Text style={styles.value}>{references.professionalReferee?.email || 'N/A'}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>May we contact this referee prior to interview? *:</Text>
                <View style={styles.checkboxContainer}>
                  <Checkbox checked={references.professionalReferee?.contactBeforeInterview === true} />
                  <Text>Yes</Text>
                  <View style={{ width: 10 }} />
                  <Checkbox checked={references.professionalReferee?.contactBeforeInterview === false} />
                  <Text>No</Text>
                </View>
              </View>
            </View>
            
            <View style={{ marginTop: 15 }}>
              <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Personal Referee or course tutor (if applicable)</Text>
              <View style={styles.row}>
                <Text style={styles.label}>Name *:</Text>
                <Text style={styles.value}>{references.personalReferee?.name || 'N/A'}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Address *:</Text>
                <Text style={styles.value}>{references.personalReferee?.address || 'N/A'}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Tel No *:</Text>
                <Text style={styles.value}>{references.personalReferee?.tel || 'N/A'}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Occupation *:</Text>
                <Text style={styles.value}>{references.personalReferee?.occupation || 'N/A'}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Email Address:</Text>
                <Text style={styles.value}>{references.personalReferee?.email || 'N/A'}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>May we contact this referee prior to interview? *:</Text>
                <View style={styles.checkboxContainer}>
                  <Checkbox checked={references.personalReferee?.contactBeforeInterview === true} />
                  <Text>Yes</Text>
                  <View style={{ width: 10 }} />
                  <Checkbox checked={references.personalReferee?.contactBeforeInterview === false} />
                  <Text>No</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        
        <View style={styles.letterfoot}>
          <Text>Sarat Healthcare Ltd. Registered in England and Wales. Company Registration Number: 12932541.</Text>
          <Text>Office Address: Jhumat House,160 London Road, Barking London. IG11 8BB. United Kingdom</Text>
          <Text>Tel: 020 3667 3616; Mob: 077 3736 1681. Email: info@sarathealthcare.co.uk. Web: www.sarathealthcare.co.uk</Text>
        </View>
      </Page>

      {/* Page 8 */}
      <Page size="A4" style={styles.page}>
        <View style={styles.letterhead}>
          <Image src={LOGO_BASE64} style={styles.image} />
        </View>

        <View style={styles.pageContent}>
          <Text style={styles.header}>Job Application Form</Text>
        
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Warnings and Disciplinary Issues</Text>
            <View style={styles.row}>
              <Text style={styles.label}>Have you ever been dismissed or resigned in the face of a dismissal or warning? *:</Text>
              <View style={[styles.checkboxContainer, {width: '40%'}]}>
                <Checkbox checked={disciplinaryIssues.dismissedOrResigned === 'Yes'} />
                <Text>Yes</Text>
                <View style={{ width: 10 }} />
                <Checkbox checked={disciplinaryIssues.dismissedOrResigned === 'No'} />
                <Text>No</Text>
              </View>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Have you ever been the subject of an allegation(s) in relation to the safety and welfare of children, young people and/or vulnerable adults? *:</Text>
              <View style={[styles.checkboxContainer, {width: '40%'}]}>
                <Checkbox checked={disciplinaryIssues.allegation === 'Yes'} />
                <Text>Yes</Text>
                <View style={{ width: 10 }} />
                <Checkbox checked={disciplinaryIssues.allegation === 'No'} />
                <Text>No</Text>
              </View>
            </View>
            <Text style={{ fontStyle: 'italic', marginTop: 10 }}>
              If you have answered yes to any of the above questions, you must supply details on a separate sheet of paper, 
              place it in a sealed envelope marked confidential and attach it to your application form.
            </Text>
          </View>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Rehabilitation of Offenders Act 1974</Text>
            <Text style={styles.paragraph}>
              The nature of the post for which you are applying means that it is exempt from Section 4(2) of the 
              Rehabilitation of Offenders Act 1974. You are not, therefore, entitled to withhold information about 
              cautions or convictions, which for other purposes are ‘spent’ under the provisions of the Act, unless 
              covered by the Disclosure and Barring Service filtering rules which specify under what circumstances 
              certain cautions or convictions are classed as ‘spent’.
            </Text>
            <Text style={styles.paragraph}>
              Further information can be found at: https://www.gov.uk/government/publications/filtering-rules-for-criminal-record-check-certificates
            </Text>
            <Text style={styles.paragraph}>
              Filtering rules do not apply to certain convictions, please refer to:  
              https://www.gov.uk/government/publications/dbs-list-of-offences-that-will-never-be-filtered-from-a-criminal-record-check  
            </Text>
            <Text style={styles.paragraph}>
              If you are successful the information on the form will be considered and, if you have declared any previous 
              criminal convictions, cautions or reprimands, these may be discussed with you prior to a decision being 
              taken on your appointment. If you are appointed any failure to disclose cautions or convictions not expressly 
              covered by the filtering rules may result in the offer of appointment being withdrawn or disciplinary action 
              being taken and possibly the police and/or the Disclosure and Barring Service being notified.
            </Text>
            <Text style={styles.paragraph}>
              Please be aware that Sarat Healthcare Ltd. Services operates a policy on the recruitment of ex-offenders 
              and that a criminal record will not automatically debar anyone from employment with the organisation.
            </Text>
            
            <View style={styles.row}>
              <Text style={styles.label}>
                Have you ever been convicted of any offence in a Court of Law or received any bind-overs or cautions from the police? * 
                (Any caution or conviction covered by the Disclosure and Barring Service filtering rules need not be disclosed):
              </Text>
              <View style={[styles.checkboxContainer, {width: '40%'}]}>
                <Checkbox checked={rehabilitation.convicted === 'Yes'} />
                <Text>Yes</Text>
                <View style={{ width: 10 }} />
                <Checkbox checked={rehabilitation.convicted === 'No'} />
                <Text>No</Text>
              </View>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>
                Have you ever been included on any Disclosure and Barring/Criminal Records Bureau list which disqualified you from working with children or vulnerable adults? *:
              </Text>
              <View style={[styles.checkboxContainer, {width: '40%'}]}>
                <Checkbox checked={rehabilitation.onDBSList === 'Yes'} />
                <Text>Yes</Text>
                <View style={{ width: 10 }} />
                <Checkbox checked={rehabilitation.onDBSList === 'No'} />
                <Text>No</Text>
              </View>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>
                Are there any alleged offences outstanding against you? *:
              </Text>
              <View style={[styles.checkboxContainer, {width: '40%'}]}>
                <Checkbox checked={rehabilitation.offencesOutstanding === 'Yes'} />
                <Text>Yes</Text>
                <View style={{ width: 10 }} />
                <Checkbox checked={rehabilitation.offencesOutstanding === 'No'} />
                <Text>No</Text>
              </View>
            </View>
            <Text style={{ fontStyle: 'italic', marginTop: 10 }}>
              If you have answered yes to any of the above questions, you must supply details on a separate sheet of paper, 
              place it in a sealed envelope marked confidential and attach it to your application form.
            </Text>
          </View>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Immigration, Asylum and Nationality Act 2006</Text>
            <View style={styles.row}>
              <Text style={styles.label}>
                Do you have the right to take up employment in the UK, either as a UK National, or because you hold a valid work permit? *:
              </Text>
              <View style={[styles.checkboxContainer, {width: '40%'}]}>
                <Checkbox checked={rehabilitation.rightToWork === 'Yes'} />
                <Text>Yes</Text>
                <View style={{ width: 10 }} />
                <Checkbox checked={rehabilitation.rightToWork === 'No'} />
                <Text>No</Text>
              </View>
            </View>
          </View>
        </View>
        
        <View style={styles.letterfoot}>
          <Text>Sarat Healthcare Ltd. Registered in England and Wales. Company Registration Number: 12932541.</Text>
          <Text>Office Address: Jhumat House,160 London Road, Barking London. IG11 8BB. United Kingdom</Text>
          <Text>Tel: 020 3667 3616; Mob: 077 3736 1681. Email: info@sarathealthcare.co.uk. Web: www.sarathealthcare.co.uk</Text>
        </View>
      </Page>

      {/* Page 9 */}
      <Page size="A4" style={styles.page}>
        <View style={styles.letterhead}>
          <Image src={LOGO_BASE64} style={styles.image} />
        </View>

        <View style={styles.pageContent}>
          <Text style={styles.header}>Job Application Form</Text>
        
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Declaration</Text>
            <Text style={styles.paragraph}>
              I declare that the information given on this application form is true and correct. I understand that any false or misleading 
              information, or omissions of information concerning criminal convictions etc may disqualify my application or may render my 
              Contract of Employment, if I am appointed, liable to termination. Should my application be successful, I give my consent for 
              Sarat Healthcare Ltd. to seek employment references from any of the previous employers listed in the ‘Previous Employment’ 
              section of this form.
            </Text>
            
            <View style={styles.row}>
              <Text style={styles.label}>Signed: *</Text>
              <View style={styles.signatureLine}></View>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Date: *</Text>
              <Text style={styles.value}>{formatDate(declaration.date)}</Text>
              <Text style={[styles.label, { marginLeft: 10 }]}>Print name: *</Text>
              <Text style={styles.value}>{declaration.printName}</Text>
            </View>
            
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
              <Text>If form has been completed electronically please place an 'X' in this box to indicate your consent → </Text>
              <Checkbox checked={true} />
            </View>
          </View>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>The General Data Protection Regulation (GDPR)</Text>
            <Text style={styles.paragraph}>
              As part of any recruitment process, the organisation collects and processes personal data relating to job applicants. 
              The organisation is committed to being transparent about how it collects and uses that data and to meeting its data 
              protection obligations. Sarat Healthcare Ltd. will only process the information you have provided in this form for the 
              purpose of recruitment and selection and, if you are successful in securing this position, for purposes relating to 
              your employment. Completed application forms and supplementary information provided by you in support of your application 
              will be retained by the HR Department in a secure place for a period of 6 months, after which time the information will be 
              destroyed, excepting for persons who subsequently take up employment with the organisation. This is to enable the organisation 
              to fulfil its legal obligations in the event of a legal claim being brought against the organisation in relation to the 
              recruitment and selection process. To view our Job Applicant Privacy Notice in full, please go to https://www.sarathealthcare.co.uk/GDPR  
            </Text>
            
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
              <Text>
                Should you be unsuccessful in your application for the position applied for but would like us to send you 
                information about future vacancies, please place an 'X' in the box to indicate your consent → 
              </Text>
              <Checkbox checked={gdprConsent} />
            </View>
            <Text style={styles.paragraph}>
              You can withdraw your consent at any time by contacting a member of the HR Department by phone on 020 3667 3616, 
              by email at info@sarathealthcare.co.uk or in writing using the address below.
            </Text>
          </View>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Reasonable adjustments</Text>
            <Text style={styles.paragraph}>
              If you require any reasonable adjustments to the recruitment process, including completion of this application 
              form and interview, please provide details on a separate sheet of paper. Alternatively, please contact a member 
              of the HR Department on 020 3667 3616 to discuss further.
            </Text>
          </View>
          
          <Text style={{ textAlign: 'center', marginTop: 10 }}>Thank you for your application</Text>
        </View>
        
        <View style={styles.letterfoot}>
          <Text>Sarat Healthcare Ltd. Registered in England and Wales. Company Registration Number: 12932541.</Text>
          <Text>Office Address: Jhumat House,160 London Road, Barking London. IG11 8BB. United Kingdom</Text>
          <Text>Tel: 020 3667 3616; Mob: 077 3736 1681. Email: info@sarathealthcare.co.uk. Web: www.sarathealthcare.co.uk</Text>
        </View>
      </Page>
    </Document>
  );
};

// Wrapper component to generate and download the PDF
const ApplicationPDFGenerator = ({ application }: any) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async () => {
    try {
      setIsGenerating(true);
      setError(null);
      
      // Dynamically import the PDF library
      const { pdf } = await import('@react-pdf/renderer');
      
      // Create the PDF document
      const doc = <ApplicationFormPDF application={application} />;
      
      // Create blob and download
      const blob = await pdf(doc).toBlob();
      const url = URL.createObjectURL(blob);

      const pdfFileName = `${application.personalDetails.forenames.charAt(0).toUpperCase() + application.personalDetails.forenames.slice(1)}_${application.personalDetails.surname.charAt(0).toUpperCase() + application.personalDetails.surname.slice(1)}_Sarat_Healthcare_Application_Form.pdf`;
      
      const link = document.createElement('a');
      link.href = url;
      link.download = pdfFileName;
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        setIsGenerating(false);
      }, 100);
    } catch (err) {
      console.error('Failed to generate PDF:', err);
      setError('Failed to generate PDF. Please try again.');
      setIsGenerating(false);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Download Application Form</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}
      
      <button
        onClick={handleDownload}
        disabled={isGenerating}
        className={`bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded inline-flex items-center ${
          isGenerating ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
        }`}
      >
        {isGenerating ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Generating PDF...
          </>
        ) : (
          'Download Application PDF'
        )}
      </button>
      
      <div className="mt-4 p-3 bg-gray-50 rounded border border-gray-200">
        <h3 className="font-semibold mb-2">Preview of Application Data:</h3>
        <div className="text-sm text-gray-600">
          <p><strong>Position Applied For:</strong> {application?.jobDetails?.positionAppliedFor || 'N/A'}</p>
          <p><strong>Applicant Name: </strong> {application?.personalDetails?.forenames || ''} {application?.personalDetails?.surname || ''}
          </p>
          <p><strong>Email:</strong> {application?.personalDetails?.email || 'N/A'}</p>
          <p><strong>Application Date:</strong> {application?._createdAt ? new Date(application._createdAt).toLocaleDateString() : 'N/A'}</p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationPDFGenerator;