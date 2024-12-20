import React from "react";

const Privacy = () => {
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
                className="absolute dark:hidden inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
            />
            <div className="px-6 pt-14 lg:px-8">
                <div className="mx-auto max-w-2xl pt-24 text-center sm:pt-40">
                    <h1 className="text-5xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-7xl">Privacy policy</h1>
                    <p className="mt-8 text-pretty text-lg font-medium text-gray-600 dark:text-gray-400 sm:text-xl/8">
                        Last updated on December 20, 2024
                    </p>
                </div>
            </div>
            <div className="relative px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-[40rem]">
                    <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">This privacy policy explains how your data is handled when you use this website. The website is committed to protecting your privacy and does not collect, use, or store personal or identifiable information.</p>

                    <h2 className="mt-6 text-2xl font-semibold text-gray-900 dark:text-white">Data Collection</h2>
                    <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">This website does not collect any personal or identifiable data from its users.</p>

                    <h2 className="mt-6 text-2xl font-semibold text-gray-900 dark:text-white">Cookies and Local Storage</h2>
                    <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">This website does not use cookies. However, it uses the browser's localStorage feature to store your preference for the site theme. Specifically:</p>
                    <ul className="pl-5 l list-disc list-inside mt-3 text-lg/8 text-gray-600 dark:text-gray-300">
                        <li><strong>Stored Data:</strong> The only data stored in localStorage is theme, which records your preferred theme for the website.</li>
                        <li><strong>Purpose:</strong> This ensures your theme preference is remembered when you revisit the site.</li>
                        <li><strong>Accessibility:</strong> The data stored in localStorage is only accessible on your device and is not transmitted to the website or any third party.</li>
                    </ul>
                    <h2 className="mt-6 text-2xl font-semibold text-gray-900 dark:text-white">Analytics</h2>
                    <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">We use TelemetryDeck to collect anonymized usage data. This helps us understand how our users are using our site and how we can improve it.</p>
                    <ul className="pl-5 l list-disc list-inside mt-3 text-lg/8 text-gray-600 dark:text-gray-300">
                        <li><strong>Anonymous Tracking:</strong> TelemetryDeck does not collect any personally identifiable information.</li>
                        <li><strong>No Cookies:</strong> Analytics do not rely on cookies or any other tracking technology that could store information on your device.</li>
                        <li><strong>Purpose:</strong> Data is used solely to understand website traffic and usage patterns to improve the user experience.</li>
                    </ul>
                    <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">You can read more about TelemetryDeck's privacy policy at <a href="https://telemetrydeck.com/privacy" target="_blank" className="text-indigo-500" rel="nofollow">https://telemetrydeck.com/privacy.</a></p>

                    <h2 className="mt-6 text-2xl font-semibold text-gray-900 dark:text-white">Third-Party Services</h2>
                    <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">Apart from TelemetryDeck for analytics, this website does not use any third-party services, integrations, or trackers.</p>

                    <h2 className="mt-6 text-2xl font-semibold text-gray-900 dark:text-white">Your Rights</h2>
                    <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">Since this website does not collect any personal data, there is no data to access, update, or delete.</p>

                    <h2 className="mt-6 text-2xl font-semibold text-gray-900 dark:text-white">Contact</h2>
                    
                    <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">If you have questions or concerns about this privacy policy, please contact: <a href="mailto:trev@trevkillick.dev" className="text-indigo-500" target="_blank">trev@trevkillick.dev</a></p>

                </div>
            </div>

        </React.Fragment>
    )
}
export default Privacy;