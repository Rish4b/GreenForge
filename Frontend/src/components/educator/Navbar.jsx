import React from "react";
import { assets, dummyEducatorData } from "../../assets/assets";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Link , useNavigate} from "react-router-dom";
import Logger from "../Logger";
const Navbar = () => {
	const educatorData = dummyEducatorData;
	const { user } = useUser();
	const navigate = useNavigate();
	return (
		<div className="flex justify-between items-start w-full px-4 sm:px-10 md:px-14 lg:px-36 py-3 border-b border-gray-500 bg-cyan-100/70">
			{/* Left: Logo and Company Name */}
			<div className="flex items-center cursor-pointer" onClick={()=>navigate('/')}> 
				<img
					src={assets.logo}
					alt="Logo"
					className="w-28 lg:w-32"
				/>
				<span className="ml-2 text-2xl font-bold text-green-800 select-none">GreenForge</span>
			</div>

			{/* Right: Greeting, Logger, User Button */}
			<div className="flex items-center gap-5 text-gray-500">
				<div className="hidden md:block">
					<Logger />
				</div>
				{/* <p className="flex items-center gap-2">Hi! {user ? user.fullName : "Developers"}</p> */}
				{user ? (
					<UserButton />
				) : (
					<img className="max-w-8" src={assets.profile_img} alt="profile_img" />
				)}
			</div>
		</div>
	);
};

export default Navbar;
