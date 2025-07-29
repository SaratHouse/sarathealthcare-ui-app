import { useEffect, useState } from "react";
import { client } from "../utils/client";
import { useAlert } from "../utils/notification/alertcontext";
import SelectField from "../components/reuseables/select";
import InputField from "../components/reuseables/input";
import ApplicationPDFGenerator from "../components/ApplicationFormPDF";
import ProfessionalReferencePDFGenerator from "../components/ProfessionalReferencePDF";
import CharacterReferencePDFGenerator from "../components/CharacterReferencePDF";

const DownloadForm = () => {
  const { addAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [application, setApplication] = useState<any>(null);
  const [reference, setReference] = useState<any>(null);
  const [selectedForm, setSelectedForm] = useState<string>('');
  const [id, setId] = useState<string>('');

  const formTypes = ['Application', 'Reference'];

  const verifyFormDetails = async () => {
    setLoading(true);
    if (!selectedForm) {
      setLoading(false)
      return addAlert({ message:'Form Type is required', type: 'error' });
    }

    if (!id) {
      setLoading(false)
      return addAlert({ message:'Form Id is required', type: 'error' });
    }

    if (selectedForm === 'Application'){
      const query = `*[_type == 'application' && _id == $id][0]`;
      const result = await client.fetch(query, { id });
      if (result) {
        setApplication(result);
        setLoading(false);
      }else{
        setLoading(false);
        return addAlert({ message:`No Application Form details found for the provides ID: ${id}`, type: 'error' });
      }
    }
    if (selectedForm === 'Reference'){
      const query = `*[_type == 'applicationReference' && _id == $id][0]`;
      const result = await client.fetch(query, { id });
      if (result) {
        setReference(result);
        setLoading(false);
      }else{
        setLoading(false);
        return addAlert({ message:`No Reference Form details found for the provides ID: ${id}`, type: 'error' });
      }
    }
  }

  const handleDownloadAnotherForm = () => {
    setId('')
    setSelectedForm('')
    setReference(null)
    setApplication(null)
  }

  if (loading) return <div className="bg-white flex flex-col text-center items-center justify-center font-bold text-lg text-[#1663a3] w-full px-5 my-44">Loading...</div>;

  return (
    <div className="flex flex-col items-center w-full">
        <div className="w-full max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden my-8">
            {/* Form Header - Fixed conditional rendering */}
            <div className="bg-[#1663a3] flex flex-col md:flex-row md:justify-between gap-5 text-white p-6">
              <h1 className="text-2xl font-bold">Download Form</h1>
              {/* Corrected conditional */}
              {(application || reference) && (
                <div 
                  onClick={handleDownloadAnotherForm} 
                  className="bg-white md:w-auto w-2/3 text-sm text-[#1663a3] font-medium rounded-lg p-2 cursor-pointer"
                >
                  Download another form
                </div>
              )}
            </div>
            
            {!application && !reference ? (
              <div className="flex flex-col gap-10 w-full md:p-10 p-6">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-3 w-full">
                  <div className="flex flex-col w-full gap-1">
                    <div className='font-medium tracking-wide'>
                      Form Type
                    </div>
                    <SelectField recordList={formTypes} value={selectedForm} onChangeText={(value) => setSelectedForm(value)} placeholder="Select form type" />
                  </div>
                  {selectedForm && (
                    <InputField
                      title="Form ID"
                      type="text"
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                    />
                  )}
                </div>
                <button
                  onClick={verifyFormDetails}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                >
                  Submit Form
                </button>
              </div>
            ) : (
              <>
                {/* Show PDF generators when data exists */}
                {application && (
                  <ApplicationPDFGenerator application={application} />
                )}
                {reference && reference.refereeType === 'professional' && (
                  <ProfessionalReferencePDFGenerator reference={reference}/>
                )}
                {reference && reference.refereeType === 'character' && (
                  <CharacterReferencePDFGenerator reference={reference}/>
                )}
              </>
            )}
        </div>
    </div>
  );
};

export default DownloadForm;