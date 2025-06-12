import { arrowIcon } from "../../constant/images";
import { BsEnvelopeAt } from "react-icons/bs";

const Career = () => {
  return (
    <div className="flex flex-col items-center lg:gap-[5rem] gap-10 w-full">
      <div className="flex flex-col w-full items-center border-b">
        <div className="flex flex-col lg:w-8/12 w-11/12">
          <div className="flex flex-col w-full justify-center items-center text-gray gap-7 bg-pattern">
            <div className="relative flex justify-center py-8 md:py-[9rem] lg:py-[5rem] !pt-[10rem]">
              <div className="bg-white md:px-8 lg:w-4/5 text-center">
                <div className="relative z-40 flex flex-col space-y-3">
                  <div className="flex flex-col items-center space-y-4 ">
                    <h2 className="flex items-center justify-center pb-4 text-sm text-gray-11">
                      ~/careers
                    </h2>
                    <h1 className="heading-1 w-4/5 !mt-2 text-3xl leading-tight text-gray-12 md:!mb-2 md:text-[48px] lg:whitespace-pre-wrap">
                      Committed to providing the highest quality to our clients.
                    </h1>
                  </div>
                  <div className="flex flex-col items-center gap-8">
                    <p className="text-sm md:w-10/12">
                      <span className="text-gray-600 md:whitespace-pre-wrap">
                        Sarathealthcare is committed to providing and delivering the
                        highest quality of technology consulting service to its
                        clients, which means hiring elite consultants capable of
                        delivering extraordinary results.
                      </span>
                    </p>
                    <p className="text-sm md:w-10/12">
                      <span className="text-gray-600 md:whitespace-pre-wrap">
                        We seek individuals who are committed to maintaining our
                        record of excellence and upholding our impeccable
                        reputation. Although we infrequently hire new
                        consultants and we are extremely selective in our hiring
                        decisions, we are always looking for the next great
                        contributor to the team
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col lg:gap-10 gap-4 lg:w-1/2 w-11/12 pb-20">
        <div className="w-1/2 flex justify-between items-center">
          <div className="lg:text-[2rem] text-lg font-medium">HOW TO APPLY</div>
          <img src={arrowIcon} className="h-4" alt="arrowIcon" />
        </div>
        <div className="lg:w-1/2 flex flex-col gap-1 lg:text-lg text-sm ">
          <div className="text-sm text-gray-500">
            Submit a CV and cover letter to:
          </div>
          <div className="flex flex-row gap-3 lg:text-lg items-center">
            <BsEnvelopeAt className="text-[#006dad]"/>

            <div className="font-semibold">info@sarathealthcare.ltd</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
