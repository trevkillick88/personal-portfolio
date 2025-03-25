import React from "react";

/**
 * About Page Function
 * @returns {React.ReactElement} - React Element
 */
function About():React.ReactElement {
    return (
        <div className="relative isolate -z-10">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-14">
                <h1 className="text-4xl font-bold text-center mt-10">
                    About Me
                </h1>

                <div className="mt-10">
                    <p className="text-lg">
                        Hello! I&apos;m Trevor Killick, a passionate software developer with 13 years of experience in the industry. Over the years, I have worked on numerous projects, honing my skills in various programming languages and frameworks.
                    </p>

                    <p className="mt-4 text-lg">
                        My journey began with a strong interest in technology and a desire to create impactful software solutions. I have a proven track record of delivering high-quality projects, and I am always eager to learn and adapt to new challenges.
                    </p>

                    <p className="mt-4 text-lg">
                        This website serves as a showcase of my work and achievements. Feel free to explore my projects and get in touch if you have any questions or opportunities.
                    </p>

                    <p className="mt-4 text-lg">
                        You can download my resume 
                        {' '}
                        <a
                            className="text-blue-500 hover:underline"
                            href="/TrevorKillickResume.pdf"
                        >
                            here.
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;