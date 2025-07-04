import React from "react";
import Footer from "./student/Footer";
import { useClerk, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const About = () => {
	const { user } = useUser();
	const { openSignIn } = useClerk();
	
	return (
		<>
			<div className="w-full mx-auto px-6 py-12 bg-gradient-to-b from-cyan-100/40">
				<h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
					About Green Forge
				</h1>
				<p className="text-lg text-gray-600 text-center mb-8">
					Empowering learners and educators with a seamless online learning
					experience.
				</p>

				{/* Section: Our Mission */}
				<div className=" p-8 rounded-lg shadow-lg mb-8">
					<h2 className="text-2xl font-semibold text-gray-700 mb-4">
						Our Mission
					</h2>
					<p className="text-gray-600">
						At Green Forge, we strive to make Technical Skill accessible and engaging
						for everyone. At our core, we believe that every individual—no matter their background,
						 education, or job title—deserves access to quality learning opportunities that can transform their future..
					</p>
				</div>

				{/* Section: Why Choose Us */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<div className="p-9 border rounded-lg shadow-md text-center">
						<h3 className="text-xl font-semibold text-gray-700">
						🎯 Career-Focused Curriculum
						</h3>
						<p className="text-gray-600 mt-2">
						Our courses are built with your goals in mind—not just academics. Each module is crafted by industry
						 professionals to match the skills employers actually want
						</p>
						<br/>
						<p className="text-gray-600 mt-2">"Learn today. Apply tomorrow."</p>
					</div>
					<div className="p-9 border rounded-lg shadow-md text-center">
						<h3 className="text-xl font-semibold text-gray-700">
						Affordable Pricing, Accessible Learning
						</h3>
						<p className="text-gray-600 mt-2">
						We believe quality education should be within everyone’s reach,
						 especially those working hard in small and medium businesses.
						</p>
						<br />
						<p className="text-gray-600 mt-2">"Invest in yourself, not in overpriced courses."</p>
					</div>
					<div className="p-9 border rounded-lg shadow-md text-center">
						<h3 className="text-xl font-semibold text-gray-700">
							🌍 Global Access
						</h3>
						<p className="p-3 text-gray-600 mt-2">
						Our mobile-friendly platform ensures your learning fits your lifestyle. Whether you’re on a break,
						 commuting, or relaxing at home, you can access lessons, take quizzes, and submit
						 projects with ease. No schedules. No pressure. Just learning at your own pace.
						</p>
					</div>
				</div>

				{/* Section: Join Us */}
				<div className="mt-12 text-center">
					<h2 className="text-2xl font-semibold text-gray-700 mb-4">
						Join Green Forge Today
					</h2>
					<p className="text-gray-600 mb-6">
						Whether you're a student looking to enhance your skills or an
						educator wanting to share your Valuable Skill, Green Forge is the perfect
						platform for you.
					</p>

					{user ? (
						<Link to="/" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"> Get Started</Link>
					) : (
						<button
							onClick={() => openSignIn()}
							className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
						>
							Get Started
						</button>
					)}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default About;
