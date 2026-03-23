const contactEmail = "zchalmers21@gmail.com";

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

function loadProjects() {
    const projectsGrid = document.getElementById("projects-grid");

    if (!projectsGrid) {
        return;
    }

    projectsGrid.innerHTML = "";

    projects.forEach((project) => {
        const projectCard = document.createElement("article");
        projectCard.className = "project-card reveal-on-scroll";

        const techTags = project.tech
            .map((tech) => `<span class="tech-tag">${tech}</span>`)
            .join("");

        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <span class="project-type">${project.type}</span>
            <p>${project.description}</p>
            <div class="project-tech">
                ${techTags}
            </div>
            <div class="project-links">
                <a href="${project.github}" class="project-link" target="_blank" rel="noreferrer">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 0 0 8.2 11.39c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.06 1.83 2.8 1.3 3.49.99.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.21.69.82.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12Z"/>
                    </svg>
                    View on GitHub
                </a>
            </div>
        `;

        projectsGrid.appendChild(projectCard);
    });
}

function loadStats() {
    const statsContainer = document.getElementById("portfolio-stats");

    if (!statsContainer) {
        return;
    }

    const uniqueTech = new Set(projects.flatMap((project) => project.tech)).size;
    const uniqueTypes = new Set(projects.map((project) => project.type)).size;

    const stats = [
        { value: String(projects.length).padStart(2, "0"), label: "featured repos" },
        { value: String(uniqueTech).padStart(2, "0"), label: "technologies used" },
        { value: String(uniqueTypes).padStart(2, "0"), label: "project categories" }
    ];

    statsContainer.innerHTML = stats
        .map(
            (stat) => `
                <div class="stat-card">
                    <strong>${stat.value}</strong>
                    <span>${stat.label}</span>
                </div>
            `
        )
        .join("");
}

function fallbackCopyText(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.setAttribute("readonly", "");
    textArea.style.position = "absolute";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
}

async function copyEmailToClipboard() {
    if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(contactEmail);
        return;
    }

    fallbackCopyText(contactEmail);
}

function setupCopyEmail() {
    const copyButton = document.querySelector("[data-copy-email]");
    const feedback = document.getElementById("copy-feedback");

    if (!copyButton || !feedback) {
        return;
    }

    copyButton.addEventListener("click", async () => {
        const defaultMessage = "Copy the email to your clipboard.";

        try {
            await copyEmailToClipboard();
            feedback.textContent = "Email copied. Paste it anywhere you need.";
        } catch (error) {
            feedback.textContent = "Copy failed. Use zchalmers21@gmail.com directly.";
        }

        window.setTimeout(() => {
            feedback.textContent = defaultMessage;
        }, 2400);
    });
}

function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (event) => {
            const target = document.querySelector(anchor.getAttribute("href"));

            if (!target) {
                return;
            }

            event.preventDefault();
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });
}

function setupRevealAnimations() {
    const revealItems = document.querySelectorAll(".reveal-on-scroll");

    if (!("IntersectionObserver" in window)) {
        revealItems.forEach((item) => {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        });
        return;
    }

    const observer = new IntersectionObserver(
        (entries, animationObserver) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                animationObserver.unobserve(entry.target);
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -60px 0px"
        }
    );

    revealItems.forEach((item, index) => {
        item.style.opacity = "0";
        item.style.transform = "translateY(20px)";
        item.style.transition = `opacity 0.6s ease ${index * 0.05}s, transform 0.6s ease ${index * 0.05}s`;
        observer.observe(item);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    loadProjects();
    loadStats();
    setupCopyEmail();
    setupSmoothScrolling();
    setupRevealAnimations();
});
