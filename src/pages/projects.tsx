
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub,faReact } from '@fortawesome/free-brands-svg-icons'
import { isDark } from '../types/theme.tsx';
import { useTheme } from '../context/theme.tsx';
import { useTelemetryDeck } from "@typedigital/telemetrydeck-react";
import { useLocation  } from "react-router-dom";

/**
 * Project Page Function
 * @returns {React.ReactElement} - React Element
 */
function Projects():React.ReactElement {
    const location = useLocation();
    const { signal } = useTelemetryDeck();
    React.useEffect(() => {
        (async () => {
        const { pathname } = window.location;
        await signal("pageview", { component: "Page", path: pathname });
        })();
    }, [location,signal]);
    //-- Consume the context provider for updates
    useTheme();
    //-- Use to switch screenplays
    const isThemeDark = isDark();

    return (
        <>
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
            >
                <div
                    className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
                    style={{
                        clipPath:
                            'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                    }}
                />
            </div>

            <div
                aria-hidden="true"
                className="absolute dark:hidden inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-sky-400/10 ring-1 ring-sky-400 sm:-mr-80 lg:-mr-96"
            />

            <div className="px-6 pt-14 lg:px-8">
                <div className="mx-auto max-w-2xl pt-24 text-center sm:pt-40">
                    <h1 className="text-5xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-7xl">
                        Projects
                    </h1>

                    <p className="mt-8 text-pretty text-lg font-medium text-gray-600 dark:text-gray-400 sm:text-xl/8">
                        I have worked on a variety of projects using different technologies. Here are a few examples.
                    </p>
                </div>
            </div>

            <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 mt-20 ">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <p className="text-base/7 font-semibold text-sky-500 dark:text-sky-400">
                                    Portfolio
                                </p>

                                <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                                    TrevKillick.dev
                                </h1>

                                <p className="mt-6 text-xl/8 text-gray-600 dark:text-gray-300">
                                    Whilst interested in developing my understanding of JS Frameworks outside of AngularJS I created TrevKillick.dev as a way to explore react, not the best choice for a static personal site but the project allowed me to explore the framework and tooling.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        <img
                            alt="TrevKillick.dev"
                            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                            height="912px"
                            src={isThemeDark?"./assets/trevkillick_dev_dark.webp":"./assets/trevkillick_dev_light.webp"}
                            width="788px"
                        />
                    </div>

                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="max-w-xl text-base/7 text-gray-600 dark:text-gray-300 lg:max-w-lg">
                                <p>
                                    Here are just a few of the technologies I got to explore whilst working on this project, I have dabbled with most in the past but its always a better experience and you learn more to create something from scratch and go through the learning curve getting it to build and deploy to production
                                </p>

                                <ul className="mt-8 space-y-8 text-gray-600 dark:text-gray-400">
                                    <li className="flex gap-x-3">
                                        <FontAwesomeIcon
                                            aria-hidden="true"
                                            className="mt-1 size-5 flex-none text-sky-500 dark:text-sky-400"
                                            icon={faReact}
                                        />

                                        <span>
                                            <strong className="font-semibold text-gray-900 dark:text-white">
                                                React.
                                            </strong>

                                            {' '}
                                            Initially setup using Vite, I got to grips with a very different way of working in react.
                                        </span>
                                    </li>

                                    <li className="flex gap-x-3">
                                        <svg
                                            className="mt-1 size-5 flex-none text-sky-500 dark:text-sky-400"
                                            viewBox="0 0 128 128"
                                        >
                                            <path
                                                className="fill-white dark:fill-none"
                                                d="M22.67 47h99.67v73.67H22.67z"
                                                fill=""
                                            />

                                            <path
                                                d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
                                                data-name="original"
                                                fill="currentColor"
                                            />
                                        </svg>

                                        <span>
                                            <strong className="font-semibold text-gray-900 dark:text-white">
                                                TypeScript.
                                            </strong>

                                            {' '}
                                            My professional day to day is spent working with JS so using this project to work a little more with TypeScript.
                                        </span>
                                    </li>

                                    <li className="flex gap-x-3">
                                        <FontAwesomeIcon
                                            aria-hidden="true"
                                            className="mt-1 size-5 flex-none text-sky-500 dark:text-sky-400"
                                            icon={faSquareGithub}
                                        />

                                        <span>
                                            <strong className="font-semibold text-gray-900 dark:text-white">
                                                GitHub Actions.
                                            </strong>

                                            {' '}
                                            On commit the project is linted, built and if no errors pushed to my hosting provider with Git Hub Actions.
                                        </span>
                                    </li>

                                    <li className="flex gap-x-3">
                                        <svg
                                            className="mt-1 size-5 flex-none text-sky-500 dark:text-sky-400"
                                            viewBox="0 0 128 128"
                                        >
                                            <path
                                                d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                                                fill="currentColor"
                                            />
                                        </svg>

                                        <span>
                                            <strong className="font-semibold text-gray-900 dark:text-white">
                                                TailWindCSS.
                                            </strong>

                                            {' '}
                                            TailWindCSS allows me to create great looking pages without having to worry about all the CSS styles I need to setup.
                                        </span>
                                    </li>
                                </ul>

                                <p className="mt-8">
                                    I still have a lot to learn with regards to React but it was a great learning experience, I even managed to get some pretty decent Lighthouse scores especially for accessibility.
                                </p>

                                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Open Source
                                </h2>

                                <p className="mt-6">
                                    With so much of my development experience being proprietary and not Open Source, this project was a good start to publishing code publicly. View project on{' '}
                                    <a
                                        className="text-sky-500 dark:text-sky-400 hover:text-sky-500/60 dark:hover:text-sky-400/60"
                                        href="https://github.com/trevkillick88/personal-portfolio"
                                        rel="noreferrer nofollow"
                                        target="_blank"
                                    >
                                        GitHub.
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Projects;