import { useState } from "react";
import Disclaimer from './disclaimer';

import { NavLink } from "react-router-dom";
import { FaDiscord, FaEnvelope, FaFacebookF, FaGithub, FaLinkedin, FaLocationDot, FaMobileScreenButton, FaRegClock, FaXTwitter } from "react-icons/fa6";
import { CQC, Logo } from "../../constant/images";


const Footer = () => {
    const date = new Date();
    const [handleDisclaimerPopUp, setHandleDisclaimerPopUp] = useState(false);

    const handleToggleModal = (newValue: boolean) => {
        setHandleDisclaimerPopUp(newValue);
    };

    if (handleDisclaimerPopUp) {
        return <Disclaimer handleToggleModal={handleToggleModal} />
    }

    return (
        <footer className="bg-[#2e3c61] text-white w-full flex flex-col items-center py-12">
            <div className="w-full max-w-7xl relative px-4 flex flex-col">
                <div className="grid grid-cols-1 gap-8 text-sm lg:grid-cols-3 lg:gap-5 pb-10">
                    <div className="space-y-4">
                        <img src={Logo} alt='logo' className='h-16'/>
                        <div className={`flex flex-col gap-3 pt-4 text-sm`}>
                            <div className="flex flex-row items-center gap-2">
                                <FaLocationDot size={18} color="white" />
                                <span className="tracking-wider"><span className="font-semibold">Address: </span>Jhumat House, 160 London Road, Barking, IG11 8BB</span>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <FaEnvelope size={18} color="white" />
                                <a href="mailto:homecare@sarathealthcare.co.uk" target="_blank" rel="noreferrer" className="tracking-wider"><span className="font-semibold">Email: </span>homecare@sarathealthcare.co.uk</a>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <FaMobileScreenButton size={18} color="white" />
                                <span className="tracking-wider"><span className="font-semibold">Phone: </span>020 3667 3616, 077 3736 1681</span>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex flex-col gap-2">
                            <div className="text-xl tracking-widest uppercase font-bold">Useful Links</div>
                            <div className="border-b-2 border-[#e67238] w-1/4"></div>
                        </div>
                        <div className={`flex flex-col gap-4 text-sm`}>
                            <NavLink to='/about' className="flex flex-row items-center gap-2">
                                <span className="tracking-wider">About Us</span>
                            </NavLink>
                            <NavLink to='/' className="flex flex-row items-center gap-2">
                                <span className="tracking-wider">Services</span>
                            </NavLink>
                            <NavLink to='/' className="flex flex-row items-center gap-2">
                                <span className="tracking-wider">Career</span>
                            </NavLink>
                            <NavLink to='/' className="flex flex-row items-center gap-2">
                                <span className="tracking-wider">Jobs</span>
                            </NavLink>
                            <NavLink to='/' className="flex flex-row items-center gap-2">
                                <span className="tracking-wider">Contact Us</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex flex-col gap-2">
                            <div className="text-xl tracking-widest uppercase font-bold">Work Hours</div>
                            <div className="border-b-2 border-[#e67238] w-1/4"></div>
                        </div>
                        <div className={`flex flex-col gap-4 text-sm`}>
                            <div className="flex flex-row items-center gap-2">
                                <FaRegClock  size={13} color="#e67238" />
                                <span className="tracking-wider">09:00 am - 6:00 pm, Monday - Friday (Office)</span>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <FaMobileScreenButton size={13} color="#e67238" />
                                <span className="tracking-wider">24/7 On-call Daily</span>
                            </div>
                            <div className="flex space-x-4 opacity-50">
                                <a href="https://www.facebook.com/profile.php?id=61560262184384" target="_blank" rel="noreferrer">
                                    <FaFacebookF size={20}/>
                                </a>
                                <FaXTwitter size={20}/>
                                <FaLinkedin size={20}/>
                                <FaGithub  size={20}/>
                                <FaDiscord size={20}/>
                            </div>
                            <a href="https://www.cqc.org.uk/location/1-11817828876" target="_blank" rel="noreferrer" className="flex flex-row items-center gap-2">
                                <img src={CQC} alt='CQC' className='h-16'/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full border-t flex lg:flex-row flex-col justify-between gap-5 pt-6">
                    <div className="space-y-8 text-sm text-gray-11">
                        <p className="text-gray-08">Copyright ©  {date.getFullYear()} Sarathealthcare,  Inc. All rights reserved.</p>
                    </div>
                    <div className={`flex flex-row gap-10 text-sm items-center lg:justify-end justify-between`}>
                        <NavLink to='/'>
                            Terms and Conditions
                        </NavLink>
                        <NavLink to='/'>
                            Privacy Policy
                        </NavLink>
                    </div>
                </div>
            
            </div>
        </footer>
    )
}

export default Footer