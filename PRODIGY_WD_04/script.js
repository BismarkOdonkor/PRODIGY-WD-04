// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Dynamically load projects
    const projects = [
        {
            title: 'Project 1',
            description: 'Products CRUDs.',
            image: 'images/project1.gif',
            link: 'https://github.com/BismarkOdonkor/Products_CRUDS'
        },
        {
            title: 'Project 2',
            description: 'Land of Boxes Order Form.',
            image: 'images/project2.jpg',
            link: 'https://github.com/BismarkOdonkor/Land-of-Boxes-Order-Form'
        },
        {
            title: 'Project 3',
            description: 'Clients Data Management.',
            image: 'images/project3.jpg',
            link: 'https://github.com/BismarkOdonkor/Clients-data-management'
        },
    ];

    const projectsList = document.getElementById('projectsList');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        projectElement.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View on GitHub</a>
        `;
        projectsList.appendChild(projectElement);
    });

    // Handle contact form submission
    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Message sent!');
    });
});

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
