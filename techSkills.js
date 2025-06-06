const techSkills = [
    {
        title: "Languages",
        skills: [
            { icon: `<i class="fa-brands fa-square-js text-yellow-500"></i>`, name: "JavaScript", label: "Expert" },
            { icon: `<i class="fa-brands fa-flutter text-yellow-500"></i>`, name: "Flutter Dart", label: "Expert" },
            { icon: `<i class="fa-brands fa-python text-yellow-500"></i>`, name: "Python", label: "Expert" },
            { icon: `<i class="fa-brands fa-swift text-yellow-500"></i>`, name: "Swift", label: "Intermediate" },
            { icon: `<i class="fa-brands fa-html5 fa-lg text-green-600"></i>`, name: "HTML5", label: "Expert" },
            { icon: `<i class="fa-brands fa-css3-alt fa-lg text-blue-600"></i>`, name: "CSS3", label: "Expert" },
            { icon: `<i class="fa-brands fa-php fa-sm text-red-600"></i>`, name: "PHP", label: "Intermediate" },
            { icon: `<i class="fa-brands fa-kotlin fa-sm text-red-600"></i>`, name: "kotlin", label: "Intermediate" },
            { icon: `<i class="fa-brands fa-c fa-sm text-red-600"></i>`, name: "C/C++", label: "Intermediate" },
            { icon: `<i class="fa-brands fa-java fa-sm text-red-600"></i>`, name: "Java", label: "Intermediate" }
        ]
    },
    {
        title: "Front-end",
        skills: [
            { icon: `<i class="fa-brands fa-react text-yellow-600"></i>`, name: "React", label: "Expert" },
            { icon: `<i class="fa-solid fa-fire text-red-600"></i>`, name: "Firebase", label: "Expert" },
            { icon: `<i class="fa-brands fa-bootstrap text-green-600"></i>`, name: "Bootstrap", label: "Expert" },
            { icon: `<i class="fa-solid fa-code fa-xs text-green-600"></i>`, name: "Tailwind", label: "Expert" },
            { icon: `<i class="fa-solid fa-code fa-xs text-green-600"></i>`, name: "JQuary", label: "Intermediate" },
            { icon: `<i class="fa-solid fa-android fa-xs text-green-600"></i>`, name: "Android", label: "Intermediate" }
        ]
    },
    {
        title: "Back-end",
        skills: [
            { icon: `<i class="fa-brands fa-node fa-sm text-green-600"></i>`, name: "Node.js", label: "Expert" },
            { icon: `<i class="fa-brands fa-node-js text-green-600"></i>`, name: "Express.js", label: "Expert" }
        ]
    },
    {
        title: "Database",
        skills: [
            { icon: `<i class="fa-solid fa-server fa-xs text-green-700"></i>`, name: "MongoDB", label: "Expert" },
            { icon: `<i class="fa-solid fa-server fa-xs text-green-700"></i>`, name: "MySql", label: "Expert" },
            { icon: `<i class="fa-solid fa-server fa-xs text-green-700"></i>`, name: "Mongoose", label: "Expert" },
        ]
    },
    {
        title: "Dev Tools",
        skills: [
            { icon: `<i class="fa-brands fa-git text-yellow-500"></i>`, name: "Git", label: "Expert" },
            { icon: `<i class="fa-brands fa-github"></i>`, name: "GitHub", label: "Expert" },
            { icon: `<i class="fa-sharp fa-solid fa-laptop-code fa-xs text-blue-500"></i>`, name: "VS", label: "Expert" },
        ]
    },
    {
        title: "Design Tools",
        skills: [
            { icon: `<i class="fa-brands fa-figma  text-orange-400"></i>`, name: "Figma", label: "Intermediate" },
            { icon: `<i class="fa-brands fa-canva  text-orange-400"></i>`, name: "Canva", label: "Intermediate" },
            { icon: `<i class="fa-solid fa-bezier-curve fa-xs text-yellow-400"></i>`, name: "Adobe Photoshop", label: "Junior" },
        ]
    },
];

const parent = document.getElementById("tech-skills");
const getSkill = (skills) => {
    const skillHtml = skills.map(skill =>
        `<p class="text-md text-gray-700 dark:text-gray-200">
            ${skill.icon}
            ${skill.name}
            <code class="text-sm text-gray-500 dark:text-gray-300">${skill.label}</code>
        </p>`);

    return skillHtml.join(" ");
}
const html = techSkills.map(tech =>
    `<div>
        <h2 class="text-xl font-medium text-gray-800 dark:text-gray-100 mb-2">${tech.title}</h2>
        ${getSkill(tech.skills)}
    </div>`
);
parent.innerHTML = html.join(" ");