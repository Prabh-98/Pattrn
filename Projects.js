/*
    Project Database- This file contains an array of project objects, each with properties such as name, address, 
    description, picture URL, and related information. Each project object also contains a relatedInfo object 
    with additional details about the project, such as start date, end date, team size, and status. 
    This structure allows for easy access and management of project data within the application.
 */

const projects = [
    {
        name: "Kenmuir Residence",
        address: "123 Main Street, Cityville",
        description: "A cutting-edge project focused on AI development.",
        picture: "https://example.com/images/project-alpha.jpg",
        relatedInfo: {
            startDate: "2023-01-01",
            endDate: "2023-12-31",
            teamSize: 10,
            status: "In Progress"
        }
    },
    {
        name: "Crestview Village",
        address: "456 Elm Street, Townsville",
        description: "A community-driven project for renewable energy solutions.",
        picture: "https://example.com/images/project-beta.jpg",
        relatedInfo: {
            startDate: "2022-06-01",
            endDate: "2024-05-31",
            teamSize: 15,
            status: "Ongoing"
        }
    },
    {
        name: "Kipling Residence",
        address: "789 Oak Avenue, Villagetown",
        description: "An innovative project for smart home technology.",
        picture: "https://example.com/images/project-gamma.jpg",
        relatedInfo: {
            startDate: "2023-03-15",
            endDate: "2023-11-30",
            teamSize: 8,
            status: "Completed"
        }
    },
    {
        name: "Ossington Residence",
        address: "789 Oak Avenue, Villagetown",
        description: "An innovative project for smart home technology.",
        picture: "https://example.com/images/project-gamma.jpg",
        relatedInfo: {
            startDate: "2023-03-15",
            endDate: "2023-11-30",
            teamSize: 8,
            status: "Completed"
        }
    },
    {
        name: "Cawthra Park Esates",
        address: "789 Oak Avenue, Villagetown",
        description: "An innovative project for smart home technology.",
        picture: "https://example.com/images/project-gamma.jpg",
        relatedInfo: {
            startDate: "2023-03-15",
            endDate: "2023-11-30",
            teamSize: 8,
            status: "Completed"
        }
    },
    {
        name: "Woodbridge Residence",
        address: "789 Oak Avenue, Villagetown",
        description: "An innovative project for smart home technology.",
        picture: "https://example.com/images/project-gamma.jpg",
        relatedInfo: {
            startDate: "2023-03-15",
            endDate: "2023-11-30",
            teamSize: 8,
            status: "Completed"
        }
    },
    {
        name: "Trotwood Residence",
        address: "789 Oak Avenue, Villagetown",
        description: "An innovative project for smart home technology.",
        picture: "https://example.com/images/project-gamma.jpg",
        relatedInfo: {
            startDate: "2023-03-15",
            endDate: "2023-11-30",
            teamSize: 8,
            status: "Completed"
        }
    },
    {
        name: "Lakeshore Residence",
        address: "789 Oak Avenue, Villagetown",
        description: "An innovative project for smart home technology.",
        picture: "https://example.com/images/project-gamma.jpg",
        relatedInfo: {
            startDate: "2023-03-15",
            endDate: "2023-11-30",
            teamSize: 8,
            status: "Completed"
        }
    }
];

console.log(projects);


// Automatically render projects to HTML
// Removed duplicate rendering to avoid rendering twice
// Modify the renderProjectsToHTML function to allow specifying a target container
const renderProjectsToTarget = (projects, targetSelector) => {
    const container = document.querySelector(targetSelector);
    if (!container) {
        console.error(`Target container "${targetSelector}" not found.`);
        return;
    }

    container.className = 'projects-container';

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';

        projectDiv.innerHTML = `
            <h2>${project.name}</h2>
            <p><strong>Address:</strong> ${project.address}</p>
            <p>${project.description}</p>
            <img src="${project.picture}" alt="${project.name}" />
            <div class="related-info">
                <p><strong>Start Date:</strong> ${project.relatedInfo.startDate}</p>
                <p><strong>End Date:</strong> ${project.relatedInfo.endDate}</p>
                <p><strong>Team Size:</strong> ${project.relatedInfo.teamSize}</p>
                <p><strong>Status:</strong> ${project.relatedInfo.status}</p>
            </div>
        `;

        container.appendChild(projectDiv);
    });
};

// Automatically render projects to a specific container in the HTML
document.addEventListener('DOMContentLoaded', () => {
    renderProjectsToTarget(projects, '#projects-section'); // Replace '#projects-section' with your desired container's selector
});














//Contact Page

const renderContactForm = (targetSelector) => {
    const container = document.querySelector(targetSelector);
    if (!container) {
        console.error(`Target container "${targetSelector}" not found.`);
        return;
    }

    const formHTML = `
        <form id="contactForm">
            <h2>Contact Us</h2>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />
            
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
            
            <button type="submit">Send Message</button>
        </form>
        <div id="formResponse"></div>
    `;

    container.innerHTML = formHTML;

    const contactForm = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        formResponse.innerHTML = `
            <h3>Thank you for your message!</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${message}</p>
        `;

        contactForm.reset();
    });
};


//Contact Page
document.addEventListener('DOMContentLoaded', () => {
    renderContactForm('#contact-form'); // Replace '#contact-section' with your desired container's selector
});

























//Button Functions
document.getElementById('AboutButton').addEventListener('click', () => {
    window.location.href = '/About.html'; 
});

document.getElementById('ServicesButton').addEventListener('click', () => {
    window.location.href = '/Services.html'; 
});

document.getElementById('ProjectsButton').addEventListener('click', () => {
    window.location.href = '/Projects.html'; 
});

document.getElementById('ContactButton').addEventListener('click', () => {
    window.location.href = '/Contact.html'; 
});


