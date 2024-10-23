import Link from "next/link";
import {
  FaFacebook,
  FaGithub,
  FaGlobe,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className='bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10'>
      <div className='prose prose-xl mx-auto flex justify-between flex-col sm:flex-row'>
        <h1 className='text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0'>
          <Link
            href={"/"}
            className='text-white/90 no-underline hover:text-white'
          >
            Emmanuel Peter Ekpobimi
          </Link>
        </h1>
        <div className='flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-3xl lg:text-4xl'>
          <Link
            href={"https://emmanuel4real.netlify.app/"}
            target='_blank'
            rel='noopener noreferrer'
            className='text-white/90 hover:text-white'
          >
            <FaGlobe />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/emmanuel-ekpobimi-7ab32b9b/"}
            target='_blank'
            rel='noopener noreferrer'
            className='text-white/90 hover:text-white'
          >
            <FaLinkedinIn />
          </Link>
          <Link
            href={"https://github.com/Noble-247"}
            target='_blank'
            rel='noopener noreferrer'
            className='text-white/90 hover:text-white'
          >
            <FaGithub />
          </Link>
          <Link
            href={"https://x.com/Nobleman247"}
            target='_blank'
            rel='noopener noreferrer'
            className='text-white/90 hover:text-white'
          >
            <FaTwitter />
          </Link>
          <Link
            href={"https://web.facebook.com/emmanuel.ekpobimi"}
            target='_blank'
            rel='noopener noreferrer'
            className='text-white/90 hover:text-white'
          >
            <FaFacebook />
          </Link>
        </div>
      </div>
    </nav>
  );
}
