import React from 'react';
import { Mail, Phone, MapPin, Briefcase, GraduationCap, User } from 'lucide-react';

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.39-3.6 5.1 5.1 0 0 0-.13-3.55s-1.14-.36-3.74 1.4a12.8 12.8 0 0 0-6.8 0c-2.6-1.76-3.74-1.4-3.74-1.4a5.1 5.1 0 0 0-.13 3.55 5.2 5.2 0 0 0-1.39 3.6c0 5.22 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24v4" />
    <path d="M9 19c-5 1.5-5-2.5-7-3" />
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function CVPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-blue-200 dark:selection:bg-blue-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto bg-white dark:bg-neutral-900 shadow-xl rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 transition-all duration-300 hover:shadow-2xl">
        <div className="md:flex">
          {/* Left Sidebar */}
          <div className="md:w-1/3 bg-neutral-100 dark:bg-neutral-900/50 p-8 border-r border-neutral-200 dark:border-neutral-800 flex flex-col items-center md:items-start text-center md:text-left transition-colors duration-300">
            <div className="w-40 h-40 rounded-full bg-neutral-300 dark:bg-neutral-700 mb-6 flex items-center justify-center overflow-hidden border-4 border-white dark:border-neutral-800 shadow-sm relative group">
              <User size={64} className="text-neutral-400 group-hover:text-neutral-500 transition-colors duration-300" strokeWidth={1.5} />
              {/* Tip: Add an <img> tag here to include your own profile picture! Example: */}
              {/* <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" /> */}
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white mb-2">Hila Shtein</h1>
            <h2 className="text-lg font-medium tracking-wide text-blue-600 dark:text-blue-400 mb-6 uppercase">Senior Backend Developer</h2>

            <div className="w-full mb-8">
              <h3 className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-4 border-b border-neutral-200 dark:border-neutral-800 pb-2">Contact</h3>
              <ul className="space-y-4 text-sm text-neutral-600 dark:text-neutral-300">
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-blue-600 dark:text-blue-400 shrink-0" />
                  <a href="mailto:write2hila@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">hello@example.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-blue-600 dark:text-blue-400 shrink-0" />
                  <a href="tel:+972544474245" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">+1 (234) 567-890</a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={18} className="text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>Holon, Israel</span>
                </li>
              </ul>
            </div>

            <div className="w-full mb-8">
              <h3 className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-4 border-b border-neutral-200 dark:border-neutral-800 pb-2">Social</h3>
              <ul className="space-y-4 text-sm text-neutral-600 dark:text-neutral-300">
                <li className="flex items-center gap-3 group">
                  <GithubIcon size={18} className="text-neutral-900 dark:text-neutral-100 shrink-0 group-hover:scale-110 transition-transform" />
                  <a href="https://github.com/hila-sh" target="_blank" rel="noreferrer" className="hover:text-neutral-900 dark:hover:text-white transition-colors">github.com/johndoe</a>
                </li>
                <li className="flex items-center gap-3 group">
                  <LinkedinIcon size={18} className="text-blue-600 dark:text-blue-500 shrink-0 group-hover:scale-110 transition-transform" />
                  <a href="https://linkedin.com/in/hila-shtein" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">linkedin.com/in/johndoe</a>
                </li>
              </ul>
            </div>

            <div className="w-full">
              <h3 className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-4 border-b border-neutral-200 dark:border-neutral-800 pb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['PHP', 'Git', 'GitHub', 'Scrum', 'MySQL', 'Java', 'Cloud'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs font-medium rounded-md shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="md:w-2/3 p-8 lg:p-12 transition-colors duration-300">
            <section className="mb-10 group">
              <div className="flex items-center gap-3 mb-4">
                <User className="text-blue-600 dark:text-blue-400 shrink-0 group-hover:scale-110 transition-transform" size={24} />
                <h3 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">Profile</h3>
              </div>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-[15px]">
                Passionate 𝗦𝗲𝗻𝗶𝗼𝗿 𝗕𝗮𝗰𝗸𝗲𝗻𝗱 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 with over a decade of expertise in crafting robust, scalable solutions in the 𝗔𝗱𝗧𝗲𝗰𝗵 𝗶𝗻𝗱𝘂𝘀𝘁𝗿𝘆. My tech arsenal includes 𝗣𝗛𝗣, 𝗝𝗮𝘃𝗮, 𝗠𝘆𝗦𝗤𝗟, 𝗚𝗜𝗧 and 𝗝𝗜𝗥𝗔, which I leverage to transform complex systems and drive innovation.
              </p>
            </section>

            <section className="mb-10 group">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-blue-600 dark:text-blue-400 shrink-0 group-hover:scale-110 transition-transform" size={24} />
                <h3 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">Experience</h3>
              </div>

              <div className="space-y-8">
                {/* Job 1 */}
                <div className="relative pl-6 border-l border-neutral-200 dark:border-neutral-800 hover:border-blue-300 dark:hover:border-blue-700 transition-colors duration-300">
                  <span className="absolute -left-[5px] top-1.5 w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-400 border-[3px] border-white dark:border-neutral-900 ring-2 ring-neutral-100 dark:ring-neutral-800 shadow-sm"></span>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                    <h4 className="text-lg font-bold text-neutral-900 dark:text-white">Backend Developer (PHP)</h4>
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded-full inline-block mt-1 sm:mt-0">2022 - 2024</span>
                  </div>
                  <h5 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-3 uppercase tracking-wide">IronSource</h5>
                  <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-1.5 text-[15px] leading-relaxed">
                    <li>Collaborated on the transformation of backend architecture from monolithic to modular, multi-repository and microservices-oriented structure, contributing to significantly enhanced code quality, maintainability, and improved alignment with team structures and responsibilities.</li>
                    <li>Worked as part of a cross-functional team to integrate Twitter and TikTok social networks into the platform, collectively expanding its social media connectivity and engagement capabilities.</li>
                    <li>Participated in a team effort to integrate major Mobile Measurement Partner (MMP) APIs (Appsflyer, Adjust, Singular, Branch), jointly revolutionizing the platform's analytics and marketing attribution functionalities.</li>
                    <li>Provided junior guidance throughout these projects, mentoring less experienced team members on backend best practices, code reviews, and API integrations.</li>
                  </ul>
                </div>

                {/* Job 2 */}
                <div className="relative pl-6 border-l border-neutral-200 dark:border-neutral-800 hover:border-blue-300 dark:hover:border-blue-700 transition-colors duration-300">
                  <span className="absolute -left-[5px] top-1.5 w-3 h-3 rounded-full bg-neutral-400 dark:bg-neutral-600 border-[3px] border-white dark:border-neutral-900 ring-2 ring-neutral-100 dark:ring-neutral-800 shadow-sm"></span>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                    <h4 className="text-lg font-bold text-neutral-900 dark:text-white">Scrum Master + Project Manager + Backend Developer (PHP)</h4>
                    <span className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded-full inline-block mt-1 sm:mt-0">2018 - 2021</span>
                  </div>
                  <h5 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-3 uppercase tracking-wide">Bidalgo</h5>
                  <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-1.5 text-[15px] leading-relaxed">
                    <li>Managed the API knowledge base for utilized channels, ensuring comprehensive documentation and accessibility for team members.</li>
                    <li>Championed the adoption of Agile methodologies, implementing scrum practices that optimized project management and fostered seamless team communication.</li>
                    <li>Successfully led and deployed an innovative naming engine, automating entity naming based on client preferences. This breakthrough shifted processes from manual to automatic, empowering users with enhanced advertising control and driving improved campaign results.</li>
                    <li>Integrated major advertising platforms (Google, Snapchat, Apple, Pinterest) into the product, significantly expanding the platform's advertising arsenal and user capabilities.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="group">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="text-blue-600 dark:text-blue-400 shrink-0 group-hover:scale-110 transition-transform" size={24} />
                <h3 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">Education</h3>
              </div>

              <div className="space-y-6">
                <div className="relative pl-6 border-l border-neutral-200 dark:border-neutral-800 hover:border-blue-300 dark:hover:border-blue-700 transition-colors duration-300">
                  <span className="absolute -left-[5px] top-1.5 w-3 h-3 rounded-full bg-neutral-400 dark:bg-neutral-600 border-[3px] border-white dark:border-neutral-900 ring-2 ring-neutral-100 dark:ring-neutral-800 shadow-sm"></span>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                    <h4 className="text-lg font-bold text-neutral-900 dark:text-white">B.S. in Software Engineering</h4>
                    <span className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded-full inline-block mt-1 sm:mt-0">2014 - 2018</span>
                  </div>
                  <h5 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wide">Ben Gurion University of the Negev</h5>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
