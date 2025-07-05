import { awsImage, gcloudImage, azureImage, powerbiImage, databrickImage, CQC } from "../../constant/images";


export default function Partners() {
  return (
    <div className="flex flex-col items-center w-full py-16">
        <div className="flex flex-col gap-10 lg:w-8/12 w-11/12">
          <div className="flex flex-row items-center justify-between lg:justify-center flex-wrap text-sm mx-auto gap-5 w-full space-y-2 mb-6 lg:mx-0 lg:max-w-none">
            {[
              awsImage,
              gcloudImage,
              azureImage,
              powerbiImage,
              databrickImage,
            ].map((img, index) => (
              <img
                key={index}
                src={img}
                className="aspect-square lg:h-[10rem] md:h-[7rem] h-[6rem]"
                alt="client-logo"
              />
            ))}
          </div>
          <div className="flex flex-row gap-10 w-full pb-4 items-center justify-end border-gray-200">
            <div className="text-xs text-black/70 font-semibold flex flex-col lg:flex-row lg:items-center justify-end gap-5 lg:mx-4 lg:w-2/3 w-full">
              <span className="lg:w-1/2"> We are Care Quality Commission regulated and our services are rated as Good. We are committed to providing the highest standards of care and support to our clients.</span>
              <a href="https://www.cqc.org.uk/location/1-11817828876" target="_blank" rel="noreferrer" className="flex flex-row items-center gap-2">
                <img src={CQC} alt='CQC' className='h-16'/>
              </a>
            </div>
          </div>
        </div>
      </div>
  );
}
