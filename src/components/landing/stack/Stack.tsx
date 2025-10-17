import { FaReact, FaAngular, FaPython, FaPhp, FaDatabase, FaUbuntu, FaBug } from 'react-icons/fa';
import { SiTailwindcss, SiFlask, SiPostgresql, SiMysql, SiNginx } from 'react-icons/si';
import { MdApi } from 'react-icons/md';

export const Stack = () => {
  return (
    <section id='stack' className='min-h-screen py-4'>
      <h2 className='text-(--primary) text-2xl text-pretty'>Tech Stacks</h2>
      
      {/* Primary Stack */}
      <div className='py-4 flex flex-col'>
        <h3 className='text-lg bg-(--secondary) text-pretty text-(--contrast) text-center rounded-t-sm'>
          Full-Stack Web Development
        </h3>
        <span className='bg-(--primary) text-pretty p-1 w-1/3 text-center rounded-b-sm text-(--secondary)'>
          Primary Stack
        </span>
        <ul>
          <li className='flex flex-col'>
            <p className='bg-(--tertiary) text-(--contrast) text-pretty text-center'>
              Front-end
            </p>
            <ul className='flex gap-6 justify-center border-2 border-(--tertiary) items-center list-none'>
              <li className='flex items-center gap-2'>
                <FaReact className='text-blue-500 text-2xl' />
                <span>React</span>
              </li>
              <li className='flex items-center gap-2'>
                <FaAngular className='text-red-600 text-2xl' />
                <span>Angular</span>
              </li>
              <li className='flex items-center gap-2'>
                <SiTailwindcss className='text-cyan-500 text-2xl' />
                <span>Tailwind CSS</span>
              </li>
            </ul>
          </li>
          <li className='flex flex-col'>
            <p className='bg-(--tertiary) text-(--contrast) text-pretty text-center'>
              Back-end
            </p>
            <ul className='flex gap-6 justify-center border-2 border-(--tertiary) items-center list-none'>
              <li className='flex items-center gap-2'>
                <SiFlask className='text-gray-700 text-2xl' />
                <span>Flask (Python)</span>
              </li>
              <li className='flex items-center gap-2'>
                <FaPhp className='text-indigo-600 text-2xl' />
                <span>PHP</span>
              </li>
            </ul>
          </li>
          <li className='flex flex-col'>
            <p className='bg-(--tertiary) text-(--contrast) text-pretty text-center'>
              Databases
            </p>
            <ul className='flex gap-6 justify-center border-2 border-(--tertiary) items-center list-none'>
              <li className='flex items-center gap-2'>
                <SiPostgresql className='text-blue-700 text-2xl' />
                <span>PostgreSQL</span>
              </li>
              <li className='flex items-center gap-2'>
                <SiMysql className='text-blue-500 text-2xl' />
                <span>MySQL</span>
              </li>
            </ul>
          </li>
          <li className='flex flex-col'>
            <p className='bg-(--tertiary) text-(--contrast) text-pretty text-center'>
              APIs
            </p>
            <ul className='flex gap-6 justify-center border-2 border-(--tertiary) items-center list-none'>
              <li className='flex items-center gap-2'>
                <MdApi className='text-green-600 text-2xl' />
                <span>RESTful APIs</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Mid-Level Stack */}
      <div className='py-4 flex flex-col'>
        <h3 className='text-lg bg-(--secondary) text-pretty text-(--contrast) text-center rounded-t-sm'>
          Back-end & Data Processing (FinTech-focused)
        </h3>
        <span className='bg-(--primary) text-pretty p-1 w-1/3 text-center rounded-b-sm text-(--secondary)'>
          Mid-Level Stack
        </span>
        <ul>
          <li className='flex flex-col'>
            <p className='bg-(--tertiary) text-(--contrast) text-pretty text-center'>
              Languages
            </p>
            <ul className='flex gap-6 justify-center border-2 border-(--tertiary) items-center list-none'>
              <li className='flex items-center gap-2'>
                <FaPhp className='text-indigo-600 text-2xl' />
                <span>PHP</span>
              </li>
              <li className='flex items-center gap-2'>
                <FaPython className='text-yellow-500 text-2xl' />
                <span>Python</span>
              </li>
            </ul>
          </li>
          <li className='flex flex-col'>
            <p className='bg-(--tertiary) text-(--contrast) text-pretty text-center'>
              Databases
            </p>
            <ul className='flex gap-6 justify-center border-2 border-(--tertiary) items-center list-none'>
              <li className='flex items-center gap-2'>
                <SiPostgresql className='text-blue-700 text-2xl' />
                <span>PostgreSQL</span>
              </li>
              <li className='flex items-center gap-2'>
                <SiMysql className='text-blue-500 text-2xl' />
                <span>MySQL</span>
              </li>
            </ul>
          </li>
          <li className='flex flex-col'>
            <p className='bg-(--tertiary) text-(--contrast) text-pretty text-center'>
              Tools
            </p>
            <ul className='flex gap-6 justify-center border-2 border-(--tertiary) items-center list-none'>
              <li className='flex items-center gap-2'>
                <FaDatabase className='text-gray-600 text-2xl' />
                <span>SQL</span>
              </li>
              <li className='flex items-center gap-2'>
                <MdApi className='text-green-600 text-2xl' />
                <span>RESTful APIs</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Learning Stack */}
      <div className='py-4 flex flex-col'>
        <h3 className='text-lg bg-(--secondary) text-pretty text-(--contrast) text-center rounded-t-sm'>
          Cloud / DevOps
        </h3>
        <span className='bg-(--primary) text-pretty p-1 w-1/3 text-center rounded-b-sm text-(--secondary)'>
          Learning Stack
        </span>
        <ul>
          <li className='flex flex-col'>
            <p className='bg-(--tertiary) text-(--contrast) text-pretty text-center'>
              Cloud Services
            </p>
            <ul className='flex gap-6 justify-center border-2 border-(--tertiary) items-center list-none'>
              <li className='flex items-center gap-2'>
                <SiNginx className='text-green-700 text-2xl' />
                <span>Nginx</span>
              </li>
              <li className='flex items-center gap-2'>
                <FaUbuntu className='text-orange-500 text-2xl' />
                <span>Ubuntu Server</span>
              </li>
            </ul>
          </li>
          <li className='flex flex-col'>
            <p className='bg-(--tertiary) text-(--contrast) text-pretty text-center'>
              Testing / Support
            </p>
            <ul className='flex gap-6 justify-center border-2 border-(--tertiary) items-center list-none'>
              <li className='flex items-center gap-2'>
                <FaBug className='text-red-500 text-2xl' />
                <span>Debugging</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  )
}