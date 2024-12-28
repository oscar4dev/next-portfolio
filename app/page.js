import PageNavigation from './ui/PageNavigation'
import Link from 'next/link'
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiSupabase } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import Footer from './ui/Footer';
import ScrollIndicator from './ui/ScrollIndicator';
import ScrollToTop from './ui/ScrollToTop';

export default function page() {

    return (
      <div className=''>
      <div className='fixed w-full z-10 top-14'>
        <ScrollIndicator />
      </div>

      <main className='lg:max-w-[1024px] lg:mx-auto'>
        <div className=''>
          <PageNavigation />
        </div>

        <div className='p-4'>
          <p className='mt-4'>
            I am a web developer with special interest in 
            React + Next.js. I try to keep up with security and best 
            practices, and I am always looking for new 
            things to learn.
          </p>

          <div className='mt-8 space-y-2'>
            <span className='font-bold text-lg'>
              Next.js Specialist
            </span>
            <p>
              My special interest in Next.js extends my
              capabilities in developing dynamic and
              efficient web applications.
            </p>
          </div>

          <div className='mt-8 space-y-2'>
            <span className='font-bold text-lg'>
              User-Friendly Solutions
            </span>
            <p>
              I thrive on creating tools that prioritize
              user-friendliness, simplicity, and a
              delightful experience.
            </p>
          </div>

          <div className='mt-8 space-y-2'>
            <span className='font-bold text-lg'>
              Global Collaboration
            </span>
            <p>
              Throughout my learning journey, I've
              collaborated with large specialized teams
              across diverse time zones, refining my working
              style to prioritize flexibility, clarity, and
              effective collaboration.
            </p>
          </div>

          <p className='mt-8'>
            With 2+ years of experience, I specialize in 
            building scalable and high-performance web 
            applications using React and Next.js. I'm passionate about 
            crafting intuitive user interfaces and 
            delivering exceptional results.
            Some of my technical skills and relevant soft 
            skills include Problem-solving, Communication, Teamwork, 
            etc. Dedicated to delivering excellence, 
            I offer a comprehensive range of services 
            tailored to your needs. Whether it's a quick 
            one-hour task, ongoing daily support, or a 
            long-term partnership, I'm committed to 
            providing meticulous attention to detail and 
            exceptional results. I'm eager to discuss how 
            I can contribute to your project's success.
          </p>

          <p className='mt-8'>
            Here is a 
            <Link 
              href={ 'https://v1.scrimba.com/certificate/uwqg4kur/gfrontend' }
              className='mx-1 text-blue-500 underline'
            >certificate</Link> 
            I got from 
            <Link 
              href={ 'https://scrimba.com/home' }
              className='mx-1 text-blue-500 underline'
            >Scrimba</Link> 
            after completing the Frontend Developer 
            Career Path.
          </p>

          <p className='mt-8'>
            Here is a 
            <Link 
              className='text-blue-500 mx-1 underline'
              href={ 'https://www.udemy.com/certificate/UC-7637e3af-fb05-4219-ba9f-c3c7753c7760/' }
            >certificate</Link> 
            I got from  
            <Link 
              href={ 'https://www.udemy.com/course/the-ultimate-react-course/' }
              className='mx-1 text-blue-500 underline'
            >Udemy</Link>
            after completing the Ultimate React Course 
            created by Jonas Schmedtmann.
          </p>

          <ul className='mt-8'>
            <p className='mb-2'>
              These are a few of the technologies that I 
              utilize...
            </p>
            <li className='flex items-center gap-2 mb-1'>
              <span><FaReact /></span>
              <span>React</span>
            </li>
            <li className='flex items-center gap-2 mb-1'>
              <span><SiRedux /></span>
              <span>Redux Toolkit</span>
            </li>
            <li className='flex items-center gap-2 mb-1'>
              <span><SiTailwindcss /></span>
              <span>TailwindCSS</span>
            </li>
            <li className='flex items-center gap-2 mb-1'>
              <span><SiSupabase /></span>
              <span>Supabase</span>
            </li>
            <li className='flex items-center gap-2'>
              <span><RiNextjsFill /></span>
              <span>Next.js</span>
            </li>
          </ul>

          <p className='mt-8'>
            These are a few of the 
            <Link 
              href={ '/projects' }
              className='bg-indigo-200 text-slate-0 text-sm p-1 mx-1 hover:underline dark:bg-slate-700'
            >projects</Link> 
            I am currently working on.
          </p>

          <p>
            You can 
            <Link 
              href={ '/contact' }
              className='bg-indigo-200 text-sm p-1 mx-1 hover:underline dark:bg-slate-700'
            >contact me here.</Link>
          </p>

          <p className='mt-8'>
            Thank you for visiting my profile. I'm eager 
            to discuss how I can contribute to your 
            project's success.
          </p>
        </div>

        <div className='fixed bottom-5 right-2'>
          <ScrollToTop />
        </div>

        <Footer />
      </main>
      </div>
    )
}
