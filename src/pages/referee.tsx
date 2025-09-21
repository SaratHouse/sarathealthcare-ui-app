import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { client } from "../utils/client";
import { CharacterReferee } from "../components/referee/character";
import { ProfessionalReferee } from "../components/referee/professional";
import { useAlert } from "../utils/notification/alertcontext";

const Referee = () => {
    const { addAlert } = useAlert();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get('type');
  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [referenceFormHasBeenFilled, setReferenceFormHasBeenFilled] = useState(false);
  const [application, setApplication] = useState<any>(null);
  const link = `${window.location.origin}/referee/${id}?type=${type}`;

  
  
  useEffect(() => {
    const CheckIfReferenceFormHasBeenFilled = async () => {
      const query = `*[_type == 'applicationReference' && token == $link][0]{_id}`;
      const result = await client.fetch(query, { link });
      if (result) {
        setApplication(null);
        setReferenceFormHasBeenFilled(true);
        setLoading(false);
        addAlert({ message: 'This reference form has already been filled out.', type: "error" })
      }
    };
    CheckIfReferenceFormHasBeenFilled();
    // eslint-disable-next-line
}, [type, id, link]);
  
useEffect(() => {
    const fetchApplication = async () => {
      const refPath = `references.${type === "professional" ? type : 'personal' }Referee.personalizedLink`;
      const query = `*[_type == 'application' && ${refPath} == $link][0]{
        personalDetails,
        jobDetails,
        "professionalReferee": references.professionalReferee,
        "personalReferee": references.personalReferee
      }`;
      const result = await client.fetch(query, { link });
      setApplication(result);
      setLoading(false);
    };
    fetchApplication();
}, [type, id, link]);

  if (loading) return <div className="bg-white flex flex-col text-center items-center justify-center font-bold text-lg text-[#1663a3] w-full px-5 my-44">Loading...</div>;
  
  if (referenceFormHasBeenFilled)
    return <div className="bg-white flex flex-col text-center items-center justify-center font-bold text-lg text-[#1663a3] w-full px-5 my-44">This reference form has already been filled out.</div>;
  
  if (!referenceFormHasBeenFilled && !application)
    return <div className="bg-white flex flex-col text-center items-center justify-center font-bold text-lg text-red-600 w-full px-5 my-44">Invalid or expired link.</div>;
  

  const applicantName = `${application.personalDetails?.forenames} ${application.personalDetails?.surname}`;

  return (
    <div className="flex flex-col items-center w-full">
        <div className="w-full max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden my-8">
            {/* Form Header */}
            <div className="bg-[#1663a3] text-white p-6">
                <h1 className="text-2xl font-bold">{type === "professional" ? "Professional" : "Character"} Reference Form</h1>
                <p className="mt-2 text-[#a0d1ff]">
                    Reference for: <strong>{applicantName}</strong>
                </p>
            </div>
            {!referenceFormHasBeenFilled && type === "professional" ? <ProfessionalReferee token={link} applicantInfo={application}/> :  <CharacterReferee token={link} applicantInfo={application}/>}
        </div>
    </div>
  );
};

export default Referee;
