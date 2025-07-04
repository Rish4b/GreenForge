import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { FacebookLogo, GitBranch, GithubLogo, LinkedinLogo, TwitterLogo, WhatsappLogo } from 'phosphor-react'
// import SocialIcons from '../SocialIcons'
import Footer from '../student/Footer'
// const Footer = () => {
//   const navigate = useNavigate();
//   return (
//     <footer className='flex md:flex-row flex-col-reverse items-center justify-between text-left w-full px-8 border-t'>
//       <div className='flex items-center gap-4 cursor-pointer' onClick={()=>navigate('/')}>
//         <img className='hidden md:block w-20' src={assets.logo} alt="logo" />
//         <div className='hidden md:block h-7 w-px bg-gray-500/60'></div>
//         <p className='py-4 text-center text-xs md:text-sm text-gray-500'>
//           Copyright 2025 © Green Forge. All Right Reserved.
//         </p>
//       </div>

//       <div className=''>
       
//       </div>
//     </footer>
  
// )

// }
<Footer/>
export default Footer
