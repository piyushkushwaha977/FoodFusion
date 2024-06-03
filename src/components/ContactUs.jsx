import { HiExternalLink } from "react-icons/hi";

const details = {
  name: 'Piyush Kushwaha',
  bio: 'MERN Stack Developer',
  contact: {
    email: 'piyushkushwaha977@gmail.com',
    github: 'https://github.com/DineshRout779',
    linkedin: 'https://www.linkedin.com/in/dineshrout7',
    twitter: 'https://twitter.com/DineshRout779',
  },
};

const ContactUs = () => {
  return ( 
    <div className=" relative w-full md:w-10/12 md:mx-auto md:my-64 bg-[#eaeaea]">
    <div className='container-max mx-auto mt-24 ml-10 md:ml-96 '>
      <h1 className='text-2xl my-4 font-bold'>Contact</h1>
      <div>
        <h2 className='text-xl font-semibold'>Hi 👋, I'm {details.name} 👩‍💻</h2>
        <p className='text-lg'>{details.bio}</p>

        <div className='my-4 space-y-2'>
          <h3 className='text-lg font-semibold'>Connect with me</h3>
          <p className='flex flex-wrap items-center gap-2'>
            <span className='font-semibold'>Gmail: </span>
            <a href={details.contact.email} className='flex items-center gap-1'>
              {details.contact.email}
              <HiExternalLink className='w-4 h-4' />
            </a>
          </p>
          {/* <p className='flex flex-wrap items-center gap-2'>
            <span className='font-semibold'>Github: </span>{' '}
            <a
              href={details.contact.github}
              className='flex items-center gap-1'
            >
              {details.contact.github}
              <HiExternalLink className='w-4 h-4' />
            </a>
          </p>
          <p className='flex flex-wrap items-center gap-2'>
            <span className='font-semibold'>Linkedin: </span>{' '}
            <a
              href={details.contact.linkedin}
              className='flex items-center gap-1'
            >
              {details.contact.linkedin}
              <HiExternalLink className='w-4 h-4' />
            </a>
          </p>
          <p className='flex flex-wrap items-center gap-2'>
            <span className='font-semibold'>Twitter: </span>{' '}
            <a
              href={details.contact.twitter}
              className='flex items-center gap-1'
            >
              {details.contact.twitter}
              <HiExternalLink className='w-4 h-4' />
            </a>
          </p> */}
        </div>
      </div>
    </div>
</div>
  );
};

export default ContactUs;
