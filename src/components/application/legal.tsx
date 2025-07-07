import CheckboxField from "../reuseables/checkbox";

export const Legal = ({ formData, handleChange }: any) => (
  <div>
    <h2 className="text-xl font-bold text-[#1663a3] mb-6">Legal Declarations</h2>
    
    {/* Warnings and Disciplinary Issues */}
    <div className="mb-8 p-4 border border-gray-200 rounded-lg">
      <h3 className="text-lg font-semibold text-[#e67238] mb-4">Warnings and Disciplinary Issues</h3>
      
      <div className="space-y-6">
        <div>
          <div className="font-semibold tracking-wide mb-2">
            Have you ever been dismissed or resigned in the face of a dismissal or warning?
          </div>
          <div className="flex gap-4">
            <CheckboxField
              label="Yes"
              checked={formData.disciplinaryIssues.dismissedOrResigned}
              onChange={(checked) => handleChange('disciplinaryIssues', {...formData.disciplinaryIssues, dismissedOrResigned: checked})}
              isRequired
            />
            <CheckboxField
              label="No"
              checked={!formData.disciplinaryIssues.dismissedOrResigned}
              onChange={(checked) => handleChange('disciplinaryIssues', {...formData.disciplinaryIssues, dismissedOrResigned: !checked})}
              isRequired
            />
          </div>
        </div>
        
        <div>
          <div className="font-semibold tracking-wide mb-2">
            Have you ever been the subject of an allegation(s) in relation to the safety and welfare of children, 
            young people and/or vulnerable adults, either substantiated or unsubstantiated?
          </div>
          <div className="flex gap-4">
            <CheckboxField
              label="Yes"
              checked={formData.disciplinaryIssues.allegation}
              onChange={(checked) => handleChange('disciplinaryIssues', {...formData.disciplinaryIssues, allegation: checked})}
              isRequired
            />
            <CheckboxField
              label="No"
              checked={!formData.disciplinaryIssues.allegation}
              onChange={(checked) => handleChange('disciplinaryIssues', {...formData.disciplinaryIssues, allegation: !checked})}
              isRequired
            />
          </div>
        </div>
      </div>
      
      {(formData.disciplinaryIssues.dismissedOrResigned || formData.disciplinaryIssues.allegation) && (
        <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
          <div className="font-semibold text-yellow-800 mb-2">
            Important: You must supply details on a separate sheet of paper
          </div>
          <p className="text-sm text-yellow-700">
            Place it in a sealed envelope marked confidential and attach it to your application form.
          </p>
          <CheckboxField
            label="I have attached a confidential document with details"
            checked={formData.disciplinaryIssues.attachedDetails}
            onChange={(checked) => handleChange('disciplinaryIssues', {...formData.disciplinaryIssues, attachedDetails: checked})}
          />
        </div>
      )}
    </div>
    
    {/* Rehabilitation of Offenders Act 1974 */}
    <div className="mb-8 p-4 border border-gray-200 rounded-lg">
      <h3 className="text-lg font-semibold text-[#e67238] mb-4">Rehabilitation of Offenders Act 1974</h3>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <p className="text-sm text-blue-800">
          The nature of the post for which you are applying means that it is exempt from Section 4(2) of the Rehabilitation of Offenders Act 1974. 
          You are not, therefore, entitled to withhold information about cautions or convictions, which for other purposes are 'spent' under the 
          provisions of the Act, unless covered by the Disclosure and Barring Service filtering rules which specify under what circumstances certain 
          cautions or convictions are classed as 'spent'.
        </p>
        
        <div className="mt-3">
          <a 
            href="https://www.gov.uk/government/publications/filtering-rules-for-criminal-record-check-certificates" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm flex items-center"
          >
            <span>View Filtering Rules</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
      
      <div className="space-y-6">
        <div>
          <div className="font-semibold tracking-wide mb-2">
            Have you ever been convicted of any offence in a Court of Law or received any bind-overs or cautions from the police? 
            (Any caution or conviction covered by the Disclosure and Barring Service filtering rules need not be disclosed).
          </div>
          <div className="flex gap-4">
            <CheckboxField
              label="Yes"
              checked={formData.rehabilitation.convicted}
              onChange={(checked) => handleChange('rehabilitation', {...formData.rehabilitation, convicted: checked})}
              isRequired
            />
            <CheckboxField
              label="No"
              checked={!formData.rehabilitation.convicted}
              onChange={(checked) => handleChange('rehabilitation', {...formData.rehabilitation, convicted: !checked})}
              isRequired
            />
          </div>
        </div>
        
        <div>
          <div className="font-semibold tracking-wide mb-2">
            Have you ever been included on any Disclosure and Barring/Criminal Records Bureau list which disqualified you from working with children or vulnerable adults?
          </div>
          <div className="flex gap-4">
            <CheckboxField
              label="Yes"
              checked={formData.rehabilitation.onDBSList}
              onChange={(checked) => handleChange('rehabilitation', {...formData.rehabilitation, onDBSList: checked})}
              isRequired
            />
            <CheckboxField
              label="No"
              checked={!formData.rehabilitation.onDBSList}
              onChange={(checked) => handleChange('rehabilitation', {...formData.rehabilitation, onDBSList: !checked})}
              isRequired
            />
          </div>
        </div>
        
        <div>
          <div className="font-semibold tracking-wide mb-2">
            Are there any alleged offences outstanding against you?
          </div>
          <div className="flex gap-4">
            <CheckboxField
              label="Yes"
              checked={formData.rehabilitation.offencesOutstanding}
              onChange={(checked) => handleChange('rehabilitation', {...formData.rehabilitation, offencesOutstanding: checked})}
              isRequired
            />
            <CheckboxField
              label="No"
              checked={!formData.rehabilitation.offencesOutstanding}
              onChange={(checked) => handleChange('rehabilitation', {...formData.rehabilitation, offencesOutstanding: !checked})}
              isRequired
            />
          </div>
        </div>
      </div>
      
      {(formData.rehabilitation.convicted || formData.rehabilitation.onDBSList || formData.rehabilitation.offencesOutstanding) && (
        <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
          <div className="font-semibold text-yellow-800 mb-2">
            Important: You must supply details on a separate sheet of paper
          </div>
          <p className="text-sm text-yellow-700">
            Place it in a sealed envelope marked confidential and attach it to your application form.
          </p>
          <CheckboxField
            label="I have attached a confidential document with details"
            checked={formData.rehabilitation.attachedRehabilitationDetails}
            onChange={(checked) => handleChange('rehabilitation', {...formData.rehabilitation, attachedRehabilitationDetails: checked})}
          />
        </div>
      )}
    </div>
    
    {/* Immigration, Asylum and Nationality Act 2006 */}
    <div className="p-4 border border-gray-200 rounded-lg">
      <h3 className="text-lg font-semibold text-[#e67238] mb-4">Immigration, Asylum and Nationality Act 2006</h3>
      
      <div>
        <div className="font-semibold tracking-wide mb-2">
          Do you have the right to take up employment in the UK, either as a UK National, or because you hold a valid work permit?
        </div>
        <div className="flex gap-4">
          <CheckboxField
            label="Yes"
            checked={formData.rehabilitation.rightToWork}
            onChange={(checked) => handleChange('rehabilitation', {...formData.rehabilitation, rightToWork: checked})}
            isRequired
          />
          <CheckboxField
            label="No"
            checked={!formData.rehabilitation.rightToWork}
            onChange={(checked) => handleChange('rehabilitation', {...formData.rehabilitation, rightToWork: !checked})}
            isRequired
          />
        </div>
      </div>
    </div>
  </div>
);