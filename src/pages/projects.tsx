
const projects = [
    {
        name: "Project One",
        description: "This is a brief description of Project One. It showcases my skills in React and Node.js.",
        link: "https://github.com/trevkillick88/project-one"
    },
    {
        name: "Project Two",
        description: "This is a brief description of Project Two. It highlights my experience with Python and Django.",
        link: "https://github.com/trevkillick88/project-two"
    },
    {
        name: "Project Three",
        description: "This is a brief description of Project Three. It demonstrates my proficiency in Java and Spring Boot.",
        link: "https://github.com/trevkillick88/project-three"
    }
];

const Projects = () => {
    return (
        <div className="relative isolate -z-10">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-14">
                <h1 className="text-4xl font-bold text-center mt-10">Projects</h1>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div key={project.name} className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold">{project.name}</h2>
                            <p className="mt-4">{project.description}</p>
                            <a href={project.link} className="text-blue-500 hover:underline mt-4 block">View on GitHub</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;