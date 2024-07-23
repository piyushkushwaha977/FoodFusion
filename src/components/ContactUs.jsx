import { HiExternalLink } from "react-icons/hi";
import { Links } from "../utils/constant";

const details = {
  NAME: 'Piyush Kushwaha',
  SKILLS: 'MERN Stack Developer',
  EMAIL: 'piyushkushwaha977@gmail.com',
};

const ContactUs = () => {
  return ( 
    <div className=" relative  w-full     bg-[#eaeaea]">
    <div className='container-max w-[600px] mx-2 md:mx-auto my-40 shadow-sm '>
      <h1 className='text-2xl my-4 font-bold'>Contact</h1>
      <div>
        <h2 className='text-xl font-semibold'>Hi 👋, I'm {details.NAME} 👩‍💻</h2>
        <p className='text-lg'>{details.SKILLS}</p>

        <div className='my-4 space-y-2'>
          <h3 className='text-lg font-semibold'>Connect with me</h3>
          <p className='flex flex-wrap items-center gap-2'>
            <span className='font-semibold'>Gmail: </span>
            <p href={details.EMAIL} className='flex items-center gap-1'>
              {details.EMAIL}
              {/* <HiExternalLink className='w-4 h-4' /> */}
            </p>
          </p>
          <p className='flex flex-wrap items-center gap-2'>
            <span className='font-semibold'>Github: </span>{' '}
            <a
              href={Links.github}
              className='flex items-center gap-1'
            >
              {Links.github}
              <HiExternalLink className='w-4 h-4' />
            </a>
          </p>
          <p className='flex flex-wrap items-center gap-2'>
            <span className='font-semibold'>Linkedin: </span>{' '}
            <a
              href={Links.linkedin}
              className='flex items-center gap-1'
            >
              {Links.linkedin}
              <HiExternalLink className='w-4 h-4' />
            </a>
          </p>
          <p className='flex flex-wrap items-center gap-2'>
            <span className='font-semibold'>Twitter: </span>{' '}
            <a
              href={Links.twitter}
              className='flex items-center gap-1'
            >
              {Links.twitter}
              <HiExternalLink className='w-4 h-4' />
            </a>
          </p>
        </div>
      </div>
    </div>
</div>
  );
};

export default ContactUs;
