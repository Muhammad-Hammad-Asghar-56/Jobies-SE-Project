import React from "react";
// import { JobImg } from "../assets";
// import { Job_about_Img } from "../assets";
import { joblogo1 } from "../assets";



const About = () => {
  <style>
  {`
    @keyframes continuousFade {
      0%, 100% {
        opacity: 0;
      }

      50% {
        opacity: 1;
      }
    }
  `}
</style>
  return (
          
    <div className='container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 '>
      <div className='w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5'>
        <div className='w-full md:2/3 2xl:w-2/4'>
          <h1 className='text-3xl text-blue-900 font-bold mb-5 s-xl'>Welcome to Jobies Projectile – Your Launchpad to Career Opportunities!</h1>
          <h1 className='text-3xl text-blue-600 font-bold mb-5'>Who Are We?</h1>
          <p className='text-justify leading-7'>
          At Jobies Projectile, we believe in the power of
           connecting talent with opportunity. We've set out 
           to create a platform that revolutionizes the way
            companies find the right candidates and individuals
             discover their dream jobs. Our mission is to propel 
             careers and businesses forward by fostering meaningful 
             connections in the professional world.
          </p>
        </div>
        {/* <img src={joblogo1} alt='About' className='w-auto h-[500px]' /> */}
        <img
        src={joblogo1}
        alt='About'
        className='w-auto h-[500px]'
        style={{ opacity: 0, animation: 'continuousFade 3s infinite' }}
      />
      </div>

      <div className='leading-8 px-5 text-justify'>
        <h2 className='text-3xl text-blue-600 font-bold mb-5'>Our Vision</h2>
        <p className="text-justify leading-23 ">
        Jobies Projectile envisions a future where individuals find fulfilling careers that align with their aspirations, and companies build successful, diverse teams that drive innovation. We aspire to be the catalyst for these transformative connections.

        </p>

        {/* h3 for companies */}
        <h3 className='text-2xl text-blue-600 font-bold mb-5'>For Companies</h3>

        <h4 className='text-2xl text-blue-600 font-bold mb-5'>
        Effortless Recruitment:
        </h4>
        <p className='text-justify leading-17 '>
        Say goodbye to tedious hiring processes. 
        Jobies Projectile provides companies with 
        a streamlined platform to post job opportunities,
         review applicants, and find the perfect match for their team.
        </p>



        <h4 className='text-2xl text-blue-600 font-bold mb-5'>
        Exposure and Visibility:
        </h4>
        <p className='text-justify leading-17 '>
        Gain exposure to a diverse pool of talented individuals actively seeking career opportunities. Showcase your company culture, values, and job openings to attract top-notch candidates.
        </p>


        <h4 className='text-2xl text-blue-600 font-bold mb-5'>
        Efficient Talent Management:
        </h4>
        <p className='text-justify leading-17 '>
        Manage applications seamlessly, communicate with potential hires, and streamline your recruitment workflow—all in one place..
        </p>


        <h4 className='text-2xl text-blue-600 font-bold mb-5'>
        Inclusive Hiring
        </h4>
        <p className='text-justify leading-17 '>
        Jobies Projectile is committed to promoting diversity and inclusion in the workplace. Connect with a diverse pool of talented candidates, fostering innovation and representation within your organization
        </p>


        <h4 className='text-2xl text-blue-600 font-bold mb-5'>
        Data-Driven Insights:
        </h4>
        <p className='text-justify leading-17 '>
        Gain valuable insights into the recruitment process with our analytics tools. Track the performance of your job listings, monitor applicant demographics, and optimize your hiring strategy based on data-driven metrics.
        </p>


        <h4 className='text-2xl text-blue-600 font-bold mb-5'>
        Customized Company Profiles:
        </h4>
        <p className='text-justify leading-17 '>
        Showcase your company's unique identity with customizable profiles. Highlight your mission, values, and workplace culture to attract candidates who resonate with your brand.
        </p>

        <h4 className='text-2xl text-blue-600 font-bold mb-5'>
        Secure and Confidential:
        </h4>
        <p className='text-justify leading-17 '>
        Rest assured that your sensitive hiring information is secure and confidential. Jobies Projectile employs state-of-the-art security measures to protect your data throughout the recruitment process.
        </p>








        <h3 className='text-2xl text-blue-600 font-bold mb-5'>For Applicants</h3>

        <h4 className='text-2xl text-blue-600 font-bold mb-5'>
        Explore Exciting Opportunities
        </h4>
        <p className='text-justify leading-17 '>
        Discover a wide range of job opportunities from various industries. Whether you're a seasoned professional or a fresh graduate, Jobies Projectile has something for everyone.
        </p>



        <h4 className='text-2xl text-blue-600 font-bold mb-5'>
        Simple Application Process:
        </h4>
        <p className='text-justify leading-17 '>
        Applying for your dream job should be easy. With our user-friendly interface, you can submit applications with just a few clicks and keep track of your job search effortlessly.
        </p>


        <h4 className='text-2xl text-blue-600 font-bold mb-5'>
        Connect with Companies:
        </h4>
        <p className='text-justify leading-17 '>
        Engage with prospective employers, learn about company cultures, and make informed decisions about your career path.
        </p>

        <h1  className="text-3xl text-blue-900 font-bold mb-5 s-xl">
          Join Us on this Journey
          </h1>
          <p className="text-justify  leading-30" >
          Whether you're a company seeking top talent or an individual searching for the next chapter in your career, Jobies Projectile is here to guide you. Together, let's propel careers and businesses to new heights.

Ready to launch your career or find the perfect candidate? Join Jobies Projectile today!

          </p>


















        

        
      </div>
    </div>
  );
};

export default About;
