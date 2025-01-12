import React, {ReactElement} from "react";

/* Navigation Item Class */
class NavigationItem {
    name: string;
    href: string;
    showInNavBar: boolean;

    constructor(name: string, href: string, showInNavBar = true) {
        this.name = name;
        this.href = href;
        this.showInNavBar = showInNavBar;
    }
}

/* Single List of Navigation for the project */
export const NavigationList: NavigationItem[] = [
    new NavigationItem('Home', '/'),
    new NavigationItem('Projects', '/projects'),
    new NavigationItem('Privacy', '/privacy', false),
    /*new NavigationItem('About', 'about'),*/
];

/* Social Item Class */
class SocialItem {
    name: string;
    label: string;
    href: string;
    icon: (props: React.HTMLProps<SVGSVGElement>) => ReactElement<SVGSVGElement>;

    constructor(name: string, label: string, href: string, icon: (props: React.HTMLProps<SVGSVGElement>) => ReactElement<SVGSVGElement>) {
        this.name = name;
        this.label = label;
        this.href = href;
        this.icon = icon;
    }
}

/* Single List of Social Links for the project */
export const SocialList: SocialItem[] = [
    new SocialItem(
        'LinkedIn',
        'Check out my profile on LinkedIn',
        'https://www.linkedin.com/in/trev-killick/',
        (props: React.HTMLProps<SVGSVGElement>) => (
            <svg
                fill="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        )
    ),
    new SocialItem(
        'X',
        'Check out my profile on X',
        'https://x.com/TrevKillick',
        (props: React.HTMLProps<SVGSVGElement>) => (
            <svg
                fill="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
            </svg>
        )
    ),
    new SocialItem(
        'Email',
        'Send me an Email',
        'mailto:trev@trevkillick.dev',
        (props: React.HTMLProps<SVGSVGElement>) => (
            <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />

                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
        )
    ),
    new SocialItem(
        'GitHub',
        'Check out my GitHub',
        'https://github.com/trevkillick88',
        (props: React.HTMLProps<SVGSVGElement>) => (
            <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    fillRule="evenodd"
                />
            </svg>
        )
    ),
];