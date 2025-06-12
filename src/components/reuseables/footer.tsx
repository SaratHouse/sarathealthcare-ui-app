import { useState } from "react";
import Disclaimer from './disclaimer';

import logo from '../../assets/images/logo.png';
import { NavLink } from "react-router-dom";
import { FaDiscord, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";


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
        <footer className="bg-black text-white w-full flex flex-col items-center py-20">
            <div className="lg:w-8/12 w-11/12 relative px-4 flex flex-col">
                <div className="grid grid-cols-1 gap-8 text-sm lg:grid-cols-2 lg:gap-0 pb-10">
                    <div className="space-y-4 lg:space-y-8">
                        <img src={logo} alt='logo' className='h-10'/>
                        <div className={`flex flex-row gap-5 text-xs items-center opacity-50`}>
                            <NavLink to='/'>
                                Home
                            </NavLink>
                            <NavLink to='/services'>
                                Services
                            </NavLink>
                            <NavLink to='/about'>
                                About us
                            </NavLink>
                            <NavLink to='/careers'>
                                Careers
                            </NavLink>
                        </div>
                    </div>
                    <div className="w-full space-y-4 flex flex-col items-end lg:space-y-8">
                        <div className="flex items-end space-x-4">
                            <div className="flex flex-col gap-4 text-xs">
                                <label className="">Get insights from our expert</label>
                                <input className="bg-transparent border border-white rounded-sm p-3 py-2 " placeholder="Enter your email"/>
                            </div>
                            <a
                                className="flex h-[35px] items-center justify-center rounded-[4px] px-4 text-xs text-white bg-[#006dad] space-x-2"
                                href="/booking"
                            >
                                <span className="opacity-80">
                                Book a demo
                                </span>{" "}
                                <span>→</span>
                            </a>
                        </div>
                        <div className="flex space-x-4 opacity-50">
                            <FaXTwitter size={20}/>
                            <FaLinkedin size={20}/>
                            <FaGithub  size={20}/>
                            <FaDiscord size={20}/>
                        </div>
                    </div>
                </div>
                <div className="w-full border-t flex lg:flex-row flex-col justify-between gap-5 pt-10 opacity-50">
                    <div className="space-y-8 text-sm text-gray-11">
                        <p className="text-gray-08">Copyright ©  {date.getFullYear()} Sarathealthcare,  Inc. All rights reserved.</p>
                    </div>
                    <div className={`flex flex-row gap-10 text-sm items-center lg:justify-end`}>
                        <NavLink to='/'>
                            Terms
                        </NavLink>
                        <NavLink to='/services'>
                            Privacy
                        </NavLink>
                    </div>
                </div>
            
            </div>
        </footer>
    )
}

export default Footer