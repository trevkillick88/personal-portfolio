
import React from "react";
import { useTelemetryDeck } from "@typedigital/telemetrydeck-react";
import { useLocation  } from "react-router-dom";

/**
 * NotFound Page Function
 * @returns {React.ReactElement} - React Element
 */
function NotFound():React.ReactElement {
    const location = useLocation();
    const { signal } = useTelemetryDeck();
    React.useEffect(() => {
        (async () => {
        const { pathname } = window.location;
        await signal("pageview", { component: "Page", path: pathname });
        })();
    }, [location,signal]);
    return (
        <>
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
            >
                <div
                    className="aspect-1108/632 w-[69.25rem] flex-none bg-linear-to-r from-[#80caff] to-[#4f46e5] opacity-25"
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
                        404 Not Found
                    </h1>

                    <p className="mt-8 text-pretty text-lg font-medium text-gray-600 dark:text-gray-400 sm:text-xl/8">
                        Sorry the page you are looking for does not exist.
                    </p>
                </div>
            </div>
        </>
    );
}

export default NotFound;