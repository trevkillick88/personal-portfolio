import React from "react";
import {
    AcademicCapIcon,
    SparklesIcon,
    SunIcon,
} from '@heroicons/react/20/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonBiking,faPersonRunning,faHouseSignal,faHandHoldingHeart,faCalendarDay,faFlagCheckered } from '@fortawesome/free-solid-svg-icons'

const areas = [
    {
        name: 'Front End Technology',
        description: 'Everything you need to get started.',
        skillsLabel:'Languages & Frameworks',
        skills: [
            'JavaScript',
            'TypeScript',
            'PHP',
            'CSS',
            'AngularJS',
            'JQuery',
            'Petite Vue',
            'React',
        ],
        tools:[
            'VSCode',
            'SVN',
            'Bootstrap',
            'TailwindCSS',
            'Figma',
            'NodeJS',
            ''
        ]
    },
    {
        name: 'Back End Technology',
        description: 'All the extras for your growing team.',
        skillsLabel:'Languages',
        skills: [
            'Python',
            'GoLang',
            'C#',
            'JavaScript'
        ],
        tools:[
            'Git',
            'Google Cloud Platform',
            'Azure Cloud',
            'Docker',
            'Kubernetes',
            'Jupyter Notebook',
            'Unix Shell'
        ]
    },
    {
        name: 'Marketing',
        description: 'Added flexibility at scale.',
        skillsLabel:'Skills',
        skills: [
            'Public Speaking',
            'Product Management',
            'Digital Marketing'
        ],
        tools: [
            'Adobe Illustrator',
            'Adobe Premier Pro',
            'HubSpot'
            
        ],
    },
];

const yearsInDev: number = new Date().getFullYear() - new Date(import.meta.env.VITE_DATE_STARTED_DEV).getFullYear();
const yearsManagingTeam: number = new Date().getFullYear() - new Date(import.meta.env.VITE_DATE_STARTED_MANAGING).getFullYear();
const yearsInTech: number = new Date().getFullYear() - new Date(import.meta.env.VITE_DATE_STARTED_TECH).getFullYear();
const stats = [
    { label: `${yearsInDev} years in development`, value: new Date(import.meta.env.VITE_DATE_STARTED_DEV).getFullYear() },
    { label: 'Years managing technical team', value: `${yearsManagingTeam}+` },
    { label: 'Team awards won', value: '10+' },
    { label: 'Years working in technology roles', value: `${yearsInTech}` },
];

const interests = [
    {
        name: 'Running',
        description: 'There is no better start to a weekend than the 9am park run, regularly running at lunchtime around work and meetings.',
        type: 'FA',
        faIcon: faPersonRunning,
    },
    {
        name: 'Cycling',
        description: 'MTB, E-MTB, Road, you name it, I love it. The best way to clear the mind and have fun with mates.',
        type: 'FA',
        faIcon: faPersonBiking,
    },
    {
        name: 'Home Automation',
        description: 'Terrible when the internet goes down but I do enjoy having Home Assistant set up controlling the house.',
        type: 'FA',
        faIcon: faHouseSignal,
    },
    {
        name: 'Always learning.',
        description: 'From building my own PC\'s to maintaining and modifying my own bikes, I love to learn new things, sometimes the hard way.',
        type: 'Hero',
        icon: AcademicCapIcon,
    },
    {
        name: 'AI/ML.',
        description: 'I have had a long term interest in AI/ML, long before GenAI rose in popularity.',
        type: 'Hero',
        icon: SparklesIcon,
    },
    {
        name: 'Enjoy downtime.',
        description: 'Some weekends, there is nothing better than a cup of tea, slice of cake and a good movie on the sofa with the family.',
        type: 'Hero',
        icon: SunIcon,
    },
    {
        name: 'Charity.',
        description: 'Multiple half marathons run in aid of Special Effect as well as donations of Christmas gifts to under privileged children at our children\'s primary school.',
        type: 'FA',
        faIcon: faHandHoldingHeart,
    },
    {
        name: 'Volunteering.',
        description: 'ParkRun isn\'t just about the running, I am a regular volunteer at our local event trying to maintain a 10% volunteer/run ratio.',
        type: 'FA',
        faIcon: faCalendarDay,
    },
    {
        name: 'MotorSport.',
        description: 'Shared passion with my youngest son, we love to watch the F1 although he does cheer for the opposite drivers to me.',
        type: 'FA',
        faIcon: faFlagCheckered,
    },
]

const Home = () => {
    return (
        <React.Fragment>
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                    }}
                    className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
                />
            </div>
            <div
                aria-hidden="true"
                className="absolute dark:hidden inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-sky-400/10 ring-1 ring-sky-400 sm:-mr-80 lg:-mr-96"
            />
            <div className="px-6 pt-14 lg:px-8">
                <div className="mx-auto max-w-2xl pt-24 text-center sm:pt-40">
                    <h1 className="text-5xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-7xl">Full Stack Engineer</h1>
                    <p className="mt-8 text-pretty text-lg font-medium text-gray-600 dark:text-gray-400 sm:text-xl/8">
                        Experienced AI Practice Lead and Software Engineer with {yearsInDev} years of expertise in AI, Front End Development, Backend Integrations, SaaS, and cloud technologies.
                    </p>
                </div>
            </div>

            {/* Content section */}
            <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                    <div className="grid max-w-xl grid-cols-1 gap-8 text-base/7 text-gray-600 dark:text-gray-300 lg:max-w-none lg:grid-cols-2">
                        <div>
                            <p>
                                I currently head up the technical team delivering AI Solutions for <strong>Hornbill</strong>, a leading provider of SaaS solutions. The role is varied and challenging, with a focus 
                                on delivering high-quality products that drive business growth and improve user experiences. I am responsible for leading a team of developers, managing projects from inception to delivery,
                                and ensuring that business requirements are met and always getting my hands dirty as a lead contributor. I also work closely with stakeholders to identify opportunities for innovation and 
                                improvement, and I am always looking for new ways to push the boundaries of what is possible with technology.
                            </p>
                            <p className="mt-8">
                                In 2024 I stepped completely outside of my comfort zone to deliver four AI KeyNotes at our <strong>Customer Events</strong> in London & Manchester, covering topics from AI Governance to Ethics  
                                 and <strong>AI in the workplace</strong>. This was a huge step for me, and one that I am proud to have achieved overcoming years of anxiety towards public speaking.
                            </p>
                        </div>
                        <div>
                            <p>
                                I have been working in the technology industry for 
                                over <strong>{yearsInTech}</strong> years, and I have a passion for creating innovative software solutions that drive business growth and improve user experiences. I have a strong 
                                background in AI, Front End Development, Backend Integrations, SaaS, and cloud technologies, and I am always looking for new ways to push the boundaries of what 
                                is possible with technology. 
                            </p>
                            <p className="mt-8">
                                Leading a technical team for <strong>{yearsManagingTeam}</strong> years has given me a unique perspective on the industry and the challenges faced by teams. 
                                I have a proven track record of delivering high-quality projects, and I am always eager to learn and adapt to new challenges. Within the team we have 
                                won multiple internal awards for both our work and our dedication to the projects we have worked on. These include 'Employee of the quarter' and 'Employee of the year' for multiple team members, 
                                as well as 'ShipIt day' wins. Nurturing and mentoring the team has been a key focus for me, ensuring that the team is always learning and growing in line with their personal development plans and operational objectives.
                            </p>
                        </div>
                    </div>
                    <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
                        {stats.map((stat, statIdx) => (
                            <div key={statIdx} className="flex flex-col-reverse gap-y-3 border-l border-gray/20 dark:border-white/20 pl-6">
                                <dt className="text-base/7 text-gray-600 dark:text-gray-300">{stat.label}</dt>
                                <dd className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>

            {/* Image section */}
            <div className="py-24 sm:py-32">
                <div className="relative mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
                        {areas.map((area) => (
                            <div
                                key={area.name}
                                className="-m-2 grid grid-cols-1 rounded-[2rem] shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 dark:shadow-sky-400/20 max-lg:mx-auto max-lg:w-full max-lg:max-w-md"
                            >
                                <div className="grid grid-cols-1 rounded-[2rem] p-2 shadow-md shadow-black/5  dark:shadow-sky-400/20">
                                    <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5 dark:bg-white/5 dark:ring-sky-400/20">
                                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                            {area.name}
                                        </h2>
                                        
                                        <div className="mt-8">
                                            <h3 className="text-base/6 font-medium text-sky-500 dark:text-sky-400">{area.skillsLabel}</h3>
                                            <ul className="mt-1 min-h-[48px]">
                                                <li className="group flex items-start text-sm text-gray-600 dark:text-gray-300"> {area.skills.join(", ")} </li>                                
                                            </ul>
                                            <h3 className="text-base/6 font-medium mt-3 text-sky-500 dark:text-sky-400">Tools Used</h3>
                                            <ul className="mt-1">
                                                {area.tools.map((highlight,index) => (
                                                    <li key={index} className="group flex items-start text-sm text-gray-600 dark:text-gray-300">
                                                        {highlight}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Values section */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto lg:mx-0">
                    <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">Hobbies & Interests</h2>
                    <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
                        When I'm not immersed in tech, I love spending time with my family, starting the weekend with a ParkRun, or exploring the Chiltern Hills on my electric mountain bike. I'm also a fan of tinkering with home automation projects and finding new ways to combine tech with everyday life—though my family may not always share my enthusiasm when the lights need voice commands!
                    </p>
                </div>
                <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 text-gray-600 dark:text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-16">
                    {interests.map((value) => (
                        <div key={value.name} className="relative pl-9">
                            <dt className="inline font-semibold text-gray-900 dark:text-white">
                                {(value.type === "FA" && value.faIcon) ? (
                                    <FontAwesomeIcon icon={value.faIcon} aria-hidden="true" className="absolute left-1 top-1 size-5 text-sky-500 dark:text-sky-400" />
                                ) : (
                                    value.icon && value.type === "Hero" && <value.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-sky-500 dark:text-sky-400" />
                                )}
                                {value.name}
                            </dt>{' '}
                            <dd className="inline">{value.description}</dd>
                        </div>
                    ))}
                </dl>
            </div>

            {/* CTA section */}
            <div className="relative isolate -z-10 mt-20">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="-m-2 rounded-[2rem] shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 dark:ring-white/10">
                        <div className="rounded-[2rem] p-2 shadow-md shadow-black/5 dark:shadow-white/10">
                            <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5 dark:bg-white/5 dark:ring-white/10">
                                <div className="mx-auto flex max-w-2xl flex-col gap-16 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
                                    <img
                                        width="384px"
                                        height="384px"
                                        alt="Trev Killick - Lets Connect"
                                        src="./assets/trev.webp"
                                        className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
                                    />
                                    <div className="w-full flex-auto">
                                        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                                            Let's Connect!
                                        </h2>
                                        <p className="mt-6 text-pretty text-lg/8 text-gray-600 dark:text-gray-300">
                                            I'm always excited to collaborate on innovative projects, share ideas, or explore new opportunities. Whether you're looking to discuss AI solutions, software development, or simply want to chat about the latest tech trends, feel free to reach out. Drop me a message via the contact form or connect with me on <a href="https://www.linkedin.com/in/trev-killick/" className="text-sky-500 dark:text-sky-400 hover:text-sky-500/60 dark:hover:text-sky-400/60" target="_blank" rel="nofollow">LinkedIn</a>. I look forward to hearing from you!
                                        </p>
                                        <div className="mt-10 flex">
                                            <a href="mailto:trev@trevkillick.dev" target="_blank" className="text-sm/6 font-semibold text-sky-500 dark:text-sky-400 hover:text-sky-500/60 dark:hover:text-sky-400/60">
                                                Get in touch <span aria-hidden="true">&rarr;</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                        }}
                        className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
                    />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Home;