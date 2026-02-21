// Project data - customize this with your actual projects
const projects = [
    {
        title: "AI Agent System",
        type: "AI/ML",
        description: "Intelligent agent system with autonomous decision-making capabilities and advanced AI interactions.",
        tech: ["Python", "AI", "Machine Learning"],
        github: "https://github.com/zchalmers/AIAgent"
    },
    {
        title: "Canvas MCP",
        type: "Development Tool",
        description: "Model Context Protocol implementation for canvas-based interactions.",
        tech: ["JavaScript", "Node.js", "MCP"],
        github: "https://github.com/zchalmers/canvas-mcp"
    },
    {
        title: "Music Recommender",
        type: "Web App",
        description: "Intelligent music recommendation system using machine learning algorithms.",
        tech: ["Python", "ML", "Data Analysis"],
        github: "https://github.com/zchalmers/musicrec"
    },
    {
        title: "Swift Backend Server",
        type: "Backend",
        description: "Backend server built with Swift for learning modern server-side development.",
        tech: ["Swift", "MySQL", "Backend"],
        github: "https://github.com/zchalmers/LearnSwiftBackend"
    },
    {
        title: "MCP AI Interaction Server",
        type: "AI/ML",
        description: "Server implementation for AI model interactions using Model Context Protocol.",
        tech: ["Python", "AI", "MCP"],
        github: "https://github.com/zchalmers/MCP-Server_AI-interaction"
    },
    {
        title: "CSE 360 Team Project",
        type: "Academic",
        description: "Collaborative software engineering project demonstrating team development practices.",
        tech: ["Java", "Team Development", "Software Engineering"],
        github: "https://github.com/zchalmers/CSE360-TeamProject"
    },
    {
        title: "File AI Assistant",
        type: "Utility",
        description: "AI-powered file management and organization tool.",
        tech: ["Python", "AI", "File Management"],
        github: "https://github.com/zchalmers/FileAI"
    },
    {
        title: "Ollama Remote Server",
        type: "AI Infrastructure",
        description: "Remote server setup for running Ollama models with API access.",
        tech: ["Python", "Docker", "AI"],
        github: "https://github.com/zchalmers/ollama-remote-server"
    }
];

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Dynamically load projects
function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        const techTags = project.tech.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');
        
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <span class="project-type">${project.type}</span>
            <p>${project.description}</p>
            <div class="project-tech">
                ${techTags}
            </div>
            <div class="project-links">
                <a href="${project.github}" class="project-link" target="_blank">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                </a>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Load projects when DOM is ready
document.addEventListener('DOMContentLoaded', loadProjects);

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards for animation
setTimeout(() => {
    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}, 100);
