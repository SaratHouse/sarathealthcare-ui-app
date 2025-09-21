// src/components/ProfessionalReferencePDF.tsx
import React from 'react';
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
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: 3,
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
    justifyContent:'space-between',
    marginBottom: 8,
  },
  label: {
    fontWeight: 'bold',
    width: '40%',
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
});

// Checkbox component
const Checkbox = ({ checked }: any) => (
  <View style={[styles.checkbox, checked && styles.checkboxChecked]} />
);

// Main PDF document component
const ProfessionalReferencePDF = ({ reference }: any) => {
  const {
    sender,
    additionalInfo,
    applicantInfo,
    performanceAssessment,
    signature,
    token
  } = reference;

  // Render the complete PDF document with all 3 pages
  return (
    <Document>
      {/* Page 1 */}
      <Page size="A4" style={styles.page}>
        {/* Letterhead */}
        <View style={styles.letterhead}>
          <Image src={LOGO_BASE64} style={styles.image} />
        </View>
        
        <View style={styles.pageContent}>
          <Text style={styles.header}>Professional Reference Request</Text>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Data Protection</Text>
            <Text style={styles.paragraph}>
              This information is being collected for the purpose of recruitment and selection. 
              It will be treated with the strictest confidence. If you are giving a reference 
              on behalf of a present or previous employer, you are advised that under the GDPR 
              and related UK data protection legislation, all references are potentially 
              disclosable to the applicant.
            </Text>
          </View>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Section 1: To be completed by sender.</Text>
            
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Organisation</Text>
                <Text style={[styles.tableCell, styles.lastCell]}>{sender?.organisation || 'N/A'}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Applicant name</Text>
                <Text style={[styles.tableCell, styles.lastCell]}>{sender?.applicantName || 'N/A'}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Post applied for</Text>
                <Text style={[styles.tableCell, styles.lastCell]}>{sender?.postAppliedFor || 'N/A'}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Name of referee</Text>
                <Text style={[styles.tableCell, styles.lastCell]}>{sender?.refereeName || 'N/A'}</Text>
              </View>
              <View style={[styles.tableRow, { borderBottomWidth: 0 }]}>
                <Text style={styles.tableCell}>Referee’s job title</Text>
                <Text style={[styles.tableCell, styles.lastCell]}>{sender?.refereeJobTitle || 'N/A'}</Text>
              </View>
            </View>
          </View>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Section 2: Please provide the following information in respect of the applicant
            </Text>
            
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Name of employing organisation/company</Text>
                <Text style={[styles.tableCell, styles.lastCell]}>{applicantInfo?.employingOrganisation}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Contact Details</Text>
                <Text style={[styles.tableCell, styles.lastCell]}>
                  Phone No.: {applicantInfo?.contactPhone || 'N/A'} | Email: {applicantInfo?.contactEmail || 'N/A'}
                </Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>In what professional capacity do you know the applicant?</Text>
                <Text style={[styles.tableCell, styles.lastCell]}>{applicantInfo?.professionalCapacity || 'N/A'}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>How long have you known the applicant in this capacity?</Text>
                <Text style={[styles.tableCell, styles.lastCell]}>{applicantInfo?.yearsKnown || 'N/A'}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>What was the applicant’s job title?</Text>
                <Text style={[styles.tableCell, styles.lastCell]}>{applicantInfo?.applicantJobTitle}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Employment Dates</Text>
                <Text style={[styles.tableCell, styles.lastCell]}>{applicantInfo?.employmentDates || 'N/A'}</Text>
              </View>
              <View style={[styles.tableRow, { borderBottomWidth: 0 }]}>
                <Text style={styles.tableCell}>Reason for leaving?</Text>
                <Text style={[styles.tableCell, styles.lastCell]}>{applicantInfo?.reasonForLeaving || 'N/A'}</Text>
              </View>
            </View>
          </View>
        </View>
        
        {/* Letterfoot */}
        <View style={styles.letterfoot}>
          <Text>Sarat Healthcare Ltd. Registered in England and Wales. Company Registration Number: 12932541.</Text>
          <Text>Office Address: Jhumat House,160 London Road, Barking London. IG11 8BB. United Kingdom</Text>
          <Text>Tel: 020 3667 3616; Mob: 077 3736 1681. Email: info@sarathealthcare.co.uk. Web: www.sarathealthcare.co.uk</Text>
        </View>
      </Page>

      {/* Page 2 */}
      <Page size="A4" style={styles.page}>
        {/* Letterhead */}
        <View style={styles.letterhead}>
          <Image src={LOGO_BASE64} style={styles.image} />
        </View>
        
        <View style={styles.pageContent}>
          <Text style={styles.header}>Professional Reference Request</Text>
          
          <View style={styles.section}>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>
                  Sickness Record (No. of days) over the past two years, and how many episodes (if known)?
                </Text>
                <Text style={[styles.tableCell, styles.lastCell]}>
                  Days: {applicantInfo?.sicknessRecord.days || 'N/A'} | Episodes: {applicantInfo?.sicknessRecord.episodes || 'N/A'}
                </Text>
              </View>
            </View>
          </View>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Section 3: Please give your assessment of applicant’s performance (tick appropriate boxes)
            </Text>
            
            <View style={styles.ratingTable}>
              {/* Table Header */}
              <View style={[styles.ratingRow, styles.ratingHeader]}>
                <Text style={[styles.ratingCell, { width: '40%' }]}></Text>
                <Text style={styles.ratingCell}>Excellent</Text>
                <Text style={styles.ratingCell}>Good</Text>
                <Text style={styles.ratingCell}>Satisfactory</Text>
                <Text style={[styles.ratingCell, styles.lastRatingCell]}>Poor</Text>
              </View>
              
              {/* Quality of work */}
              <View style={styles.ratingRow}>
                <Text style={[styles.ratingCell, { width: '40%' }]}>Quality of work</Text>
                <View style={styles.ratingCell}><Checkbox checked={performanceAssessment.ratings.qualityOfWork === 'Excellent'} /></View>
                <View style={styles.ratingCell}><Checkbox checked={performanceAssessment.ratings.qualityOfWork === 'Good'} /></View>
                <View style={styles.ratingCell}><Checkbox checked={performanceAssessment.ratings.qualityOfWork === 'Satisfactory'} /></View>
                <View style={[styles.ratingCell, styles.lastRatingCell]}><Checkbox checked={performanceAssessment.ratings.qualityOfWork === 'Poor'} /></View>
              </View>
              
              {/* Reliability */}
              <View style={styles.ratingRow}>
                <Text style={[styles.ratingCell, { width: '40%' }]}>Reliability</Text>
                <View style={styles.ratingCell}><Checkbox checked={performanceAssessment.ratings.reliability === 'Excellent'} /></View>
                <View style={styles.ratingCell}><Checkbox checked={performanceAssessment.ratings.reliability === 'Good'} /></View>
                <View style={styles.ratingCell}><Checkbox checked={performanceAssessment.ratings.reliability === 'Satisfactory'} /></View>
                <View style={[styles.ratingCell, styles.lastRatingCell]}><Checkbox checked={performanceAssessment.ratings.reliability === 'Poor'} /></View>
              </View>
              
              {/* Relationship with colleagues / residents */}
              <View style={styles.ratingRow}>
                <Text style={[styles.ratingCell, { width: '40%' }]}>Relationship with colleagues / residents</Text>
                <View style={styles.ratingCell}><Checkbox checked={performanceAssessment.ratings.relationships === 'Excellent'} /></View>
                <View style={styles.ratingCell}><Checkbox checked={performanceAssessment.ratings.relationships === 'Good'} /></View>
                <View style={styles.ratingCell}><Checkbox checked={performanceAssessment.ratings.relationships === 'Satisfactory'} /></View>
                <View style={[styles.ratingCell, styles.lastRatingCell]}><Checkbox checked={performanceAssessment.ratings.relationships === 'Poor'} /></View>
              </View>
              
              {/* Attitude */}
              <View style={styles.ratingRow}>
                <Text style={[styles.ratingCell, { width: '40%' }]}>Attitude</Text>
                <View style={styles.ratingCell}><Checkbox checked={performanceAssessment.ratings.attitude === 'Excellent'} /></View>
                <View style={styles.ratingCell}><Checkbox checked={performanceAssessment.ratings.attitude === 'Good'} /></View>
                <View style={styles.ratingCell}><Checkbox checked={performanceAssessment.ratings.attitude === 'Satisfactory'} /></View>
                <View style={[styles.ratingCell, styles.lastRatingCell]}><Checkbox checked={performanceAssessment.ratings.attitude === 'Poor'} /></View>
              </View>
              
              {/* Communication */}
              <View style={styles.ratingRow}>
                <Text style={[styles.ratingCell, { width: '40%' }]}>Communication</Text>
                <View style={styles.ratingCell}><Checkbox checked={performanceAssessment.ratings.communication === 'Excellent'} /></View>
                <View style={styles.ratingCell}><Checkbox checked={performanceAssessment.ratings.communication === 'Good'} /></View>
                <View style={styles.ratingCell}><Checkbox checked={performanceAssessment.ratings.communication === 'Satisfactory'} /></View>
                <View style={[styles.ratingCell, styles.lastRatingCell]}><Checkbox checked={performanceAssessment.ratings.communication === 'Poor'} /></View>
              </View>
              
              {/* Timekeeping */}
              <View style={styles.ratingRow}>
                <Text style={[styles.ratingCell, { width: '40%' }]}>Timekeeping</Text>
                <View style={styles.ratingCell}><Checkbox checked={performanceAssessment.ratings.timekeeping === 'Excellent'} /></View>
                <View style={styles.ratingCell}><Checkbox checked={performanceAssessment.ratings.timekeeping === 'Good'} /></View>
                <View style={styles.ratingCell}><Checkbox checked={performanceAssessment.ratings.timekeeping === 'Satisfactory'} /></View>
                <View style={[styles.ratingCell, styles.lastRatingCell]}><Checkbox checked={performanceAssessment.ratings.timekeeping === 'Poor'} /></View>
              </View>
            </View>
          </View>
          
          <View style={styles.section}>
            <View style={styles.row}>
              <Text style={{ width: '75%' }}>
                During the course of their employment did you have any reason to doubt the applicant’s honesty?
              </Text>
              <View style={styles.checkboxContainer}>
                <Checkbox checked={performanceAssessment.doubtHonesty === 'Yes'} />
                <Text>YES</Text>
                <View style={{ width: 10 }} />
                <Checkbox checked={performanceAssessment.doubtHonesty === 'No'} />
                <Text>NO</Text>
              </View>
            </View>
            
            <View style={styles.row}>
              <Text style={{ width: '75%' }}>
                Subject to a suitable vacancy arising, and policy permitting, would you re-employ the applicant?
              </Text>
              <View style={styles.checkboxContainer}>
                <Checkbox checked={performanceAssessment.wouldReemploy === 'Yes'} />
                <Text>YES</Text>
                <View style={{ width: 10 }} />
                <Checkbox checked={performanceAssessment.wouldReemploy === 'No'} />
                <Text>NO</Text>
              </View>
            </View>
            
            <View style={styles.row}>
              <Text style={{ width: '75%' }}>
                Have there been any disciplinary/other formal employment proceedings against or by the applicant 
                which are still considered 'live' (including any in process at present/at the time the employment ended?
              </Text>
              <View style={styles.checkboxContainer}>
                <Checkbox checked={performanceAssessment.disciplinaryProceedings === 'Yes'} />
                <Text>YES</Text>
                <View style={{ width: 10 }} />
                <Checkbox checked={performanceAssessment.disciplinaryProceedings === 'No'} />
                <Text>NO</Text>
              </View>
            </View>
          </View>
        </View>
        
        {/* Letterfoot */}
        <View style={styles.letterfoot}>
          <Text>Sarat Healthcare Ltd. Registered in England and Wales. Company Registration Number: 12932541.</Text>
          <Text>Office Address: Jhumat House,160 London Road, Barking London. IG11 8BB. United Kingdom</Text>
          <Text>Tel: 020 3667 3616; Mob: 077 3736 1681. Email: info@sarathealthcare.co.uk. Web: www.sarathealthcare.co.uk</Text>
        </View>
      </Page>

      {/* Page 3 */}
      <Page size="A4" style={styles.page}>
        {/* Letterhead */}
        <View style={styles.letterhead}>
          <Image src={LOGO_BASE64} style={styles.image} />
        </View>
        
        <View style={styles.pageContent}>
          <Text style={styles.header}>Professional Reference Request</Text>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              If YES, answered to any above questions, please give details.
            </Text>
            <Text style={styles.paragraph}>
              {additionalInfo.details || 'N/A'}
            </Text>
          </View>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Please comment on the applicant’s suitability for the post and provide any further information you
              feel would be relevant to this appointment
            </Text>
            <Text style={styles.paragraph}>
              {additionalInfo.comments || 'N/A'}
            </Text>
          </View>
          
          <View style={styles.section}>
            <View style={styles.row}>
              <Text style={styles.label}>Signature:</Text>
              <View style={styles.signatureLine}></View>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Date:</Text>
              <Text style={styles.value}>{formatDate(signature.date)}</Text>
            </View>
          </View>
        </View>
        
        {/* Letterfoot */}
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
const ProfessionalReferencePDFGenerator = ({ reference }: any) => {
  const [isGenerating, setIsGenerating] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleDownload = async () => {
    try {
      setIsGenerating(true);
      setError(null);
      
      // Dynamically import the PDF library
      const { pdf } = await import('@react-pdf/renderer');
      
      // Create the PDF document
      const doc = <ProfessionalReferencePDF reference={reference} />;
      
      // Create blob and download
      const blob = await pdf(doc).toBlob();
      const url = URL.createObjectURL(blob);
      const pdfFileName = `${reference.sender.refereeName.charAt(0).toUpperCase() + reference.sender.refereeName.slice(1)}_Sarat_Healthcare_Professional_Reference_Form.pdf`;
      
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
      <h2 className="text-xl font-bold mb-4">Download Reference Form</h2>
      
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
          'Download Reference Form PDF'
        )}
      </button>
      
      <div className="mt-4 p-3 bg-gray-50 rounded border border-gray-200">
        <h3 className="font-semibold mb-2">Preview of Reference Data:</h3>
        <div className="text-sm text-gray-600">
          <p><strong>Applicant Name:</strong> {reference.sender.applicantName}</p>
          <p><strong>Position Applied For:</strong> {reference.sender.postAppliedFor}</p>
          <p><strong>Referee Name:</strong> {reference.sender.refereeName}</p>
          <p><strong>Referee Type:</strong> Professional</p>
          <p><strong>Reference Date:</strong> {formatDate(reference.signature.date)}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalReferencePDFGenerator;