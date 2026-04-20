import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";

export const DATA = {
    name: "Oseni Ayomide Daniel",
    initials: "OA",
    url: "https://oseni-ayomide.vercel.app",
    location: "Lagos, Nigeria",
    locationLink: "https://www.google.com/maps/place/Lagos,Nigeria",
    description:
        "Full-Stack Software Engineer. I build production-grade SaaS products, AI-powered pipelines, and backend APIs that ship to real users.",
    summary:
        "Full-Stack Software Engineer with 3+ years building production-grade SaaS products, AI-powered pipelines, and backend APIs. I specialize in Python (Django, FastAPI) and TypeScript (Next.js, Node.js, NestJS), with deep expertise in multi-tenant architecture, third-party API integration, and LLM-driven automation. I'm comfortable owning an entire product — from database schema to live deployment — and I thrive in agile, fast-moving teams.",
    avatarUrl: "",
    skills: [
        { name: "Python", icon: Python },
        { name: "TypeScript", icon: Typescript },
        { name: "JavaScript", icon: ReactLight },
        { name: "Node.js", icon: Nodejs },
        { name: "React.js", icon: ReactLight },
        { name: "Next.js", icon: NextjsIconDark },
        { name: "Django", icon: Python },
        { name: "FastAPI", icon: Python },
        { name: "PostgreSQL", icon: Postgresql },
        { name: "MongoDB", icon: Icons.mongo },
        { name: "Redis", icon: Icons.redis },
        { name: "Docker", icon: Docker },
        { name: "Git", icon: Icons.git },
    ],
    navbar: [
        { href: "/", icon: HomeIcon, label: "Home" },
        { href: "/blog", icon: NotebookIcon, label: "Blog" },
    ],
    contact: {
        email: "oseniayomide57@gmail.com",
        tel: "+2348024413341",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/Oseni03",
                navbar: true,
                icon: Icons.github,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://linkedin.com/in/oseni03",
                navbar: true,
                icon: Icons.linkedin,
            },
            X: {
                name: "X",
                url: "https://x.com/oseni03",
                icon: Icons.x,
                navbar: true,
            },
            email: {
                name: "Send Email",
                url: "mailto:oseniayomide57@gmail.com",
                icon: Icons.email,
                navbar: false,
            },
        },
    },

    work: [
        {
            company: "Freelance",
            href: "",
            badges: ["Contract"],
            location: "Remote",
            title: "Backend Developer",
            logoUrl: "",
            start: "June 2025",
            end: "August 2025",
            description:
                "Contracted to diagnose and resolve broken AI integrations for client products, unblocking stalled launches. Unblocked a client's product launch by identifying and fixing misconfigured prompt chains and unreliable API error-handling in a broken AI integration — delivering a production-stable feature on schedule. Delivered clean, well-documented backend code with zero rework requests, enabling smooth client handoff and immediate deployment.",
        },
        {
            company: "HNG Tech",
            href: "https://hng.tech/internship",
            badges: [],
            location: "Remote",
            title: "Backend Software Developer",
            logoUrl: "/hng.svg",
            start: "July 2024",
            end: "September 2024",
            description:
                "Reduced post-launch bugs by 20% by leading debugging and automated testing initiatives, resulting in a more stable CI/CD pipeline and fewer production incidents. Improved API response times by engineering and optimizing RESTful endpoints in Python, resulting in faster page loads for customer-facing features. Eliminated system bottlenecks by architecting normalized database schemas and modular backend logic, resulting in improved query performance and long-term scalability. Accelerated sprint delivery by collaborating across a cross-functional Agile squad of PMs, Frontend Devs, and QA Engineers via structured code reviews and pair-programming.",
        },
    ],

    education: [
        {
            school: "University of Lagos",
            href: "https://unilag.edu.ng",
            degree: "Bachelor of Science — Mathematics",
            logoUrl: "/unilag.jpg",
            start: "2021",
            end: "2026 (Expected)",
        },
    ],

    projects: [
        {
            title: "Notall",
            href: "https://notall.vercel.app",
            dates: "2024 - Present",
            active: true,
            description:
                "The note-taking app that remembers everything. A production multi-tenant SaaS platform with a Notion-like block editor, AI memory, note version control, and tiered subscriptions.",
            technologies: [
                "Next.js 14",
                "TypeScript",
                "PostgreSQL",
                "Prisma",
                "BetterAuth",
                "Polar.sh",
                "OpenAI API",
                "Zustand",
                "TailwindCSS",
                "shadcn/ui",
                "Vercel",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://notall.vercel.app",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/Oseni03/notall",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "/projects/noteapp.png",
            video: "",
            bullets: [
                "Delivered enterprise-grade data security from day one by architecting shared-schema multi-tenancy with strict organizationId isolation across every API route, resulting in zero cross-tenant data leakage.",
                "Eliminated user friction by building a Notion-like block-based rich text editor, resulting in an instantly familiar interface that removes the learning curve for new users.",
                "Prevented data loss by implementing full note version control with change history and one-click restore, resulting in confident, worry-free editing for every user.",
                "Created a clear revenue model by engineering tiered subscription gating via Polar.sh, enforcing Free plan limits and unlocking unlimited access for Pro users, resulting in a built-in upgrade path.",
            ],
        },
        {
            title: "Clutterscore",
            href: "https://clutterscore.vercel.app",
            dates: "2025 - Present",
            active: true,
            description:
                "An intelligent self-service agent that continuously audits, scores, and organizes fragmented digital workspaces across major enterprise platforms — your AI-Powered Digital Janitor.",
            technologies: [
                "Next.js",
                "TypeScript",
                "OpenAI API",
                "OAuth 2.0",
                "Webhooks",
                "PostgreSQL",
                "Google Workspace",
                "Slack",
                "Notion",
                "Dropbox",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://clutterscore.vercel.app",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/Oseni03/Clutterscore",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "/projects/clutterscore.png",
            video: "",
            bullets: [
                "Gave teams real-time visibility across their entire digital workspace by engineering OAuth + webhook integrations with Google Workspace, Slack, Notion, and Dropbox, resulting in a live view of data sprawl without any manual auditing.",
                "Saved hours of weekly cleanup by architecting an AI-driven auditing engine that identifies digital clutter and auto-executes remediation workflows across Jira, Linear, and Figma, resulting in reclaimed productivity for engineering teams.",
                "Built a centralized Clutter Score dashboard by processing cross-platform signals through an OpenAI-powered scoring model, resulting in actionable insights into document health and team collaboration efficiency.",
            ],
        },
        {
            title: "Admin Support Assistant",
            href: "https://github.com/Oseni03/admin-support-assistant-mcp",
            dates: "2025 - Present",
            active: true,
            description:
                "An AI virtual assistant MCP server deployed on Cloudflare Workers that automates routine administrative workflows across Gmail, Google Calendar, Drive, Notion, and Slack.",
            technologies: [
                "TypeScript",
                "Node.js",
                "Cloudflare Workers",
                "Model Context Protocol (MCP)",
                "OAuth 2.0",
                "Gmail API",
                "Google Calendar API",
                "Google Drive API",
                "Notion API",
                "Slack API",
            ],
            links: [
                {
                    type: "Source",
                    href: "https://github.com/Oseni03/admin-support-assistant-mcp",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "",
            video: "",
            bullets: [
                "Eliminated repetitive admin overhead by deploying an MCP server on Cloudflare Workers integrating Gmail, Calendar, Drive, Notion, and Slack via OAuth, resulting in a fully automated pipeline for inbox triage, meeting scheduling, and file organization.",
                "Reduced context-switching for knowledge workers by consolidating five separate tools into a single AI-driven interface, resulting in seamless cross-platform workflow automation with no manual handoff.",
            ],
        },
        {
            title: "Spaark",
            href: "https://spaark.dev",
            dates: "December 2024 - Present",
            active: true,
            description:
                "A high-performance, open-source SaaS platform that enables developers to launch professional portfolios in minutes. Built with a focus on customizability and SEO.",
            technologies: [
                "Next.js",
                "TypeScript",
                "PostgreSQL",
                "TailwindCSS",
                "Clerk",
                "Stripe",
                "CMS",
                "SEO",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://spaark.dev",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/Oseni03/spaark",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "",
            video: "",
            bullets: [
                "Enabled multi-brand deployments by implementing a multi-tenant architecture supporting custom domains and white-labeling, resulting in a platform ready for 100+ independent user portfolios.",
                "Removed the payments complexity by integrating Clerk and Stripe for authentication and subscription management, resulting in a seamless free-to-premium upgrade flow.",
                "Empowered non-technical users by developing a custom Markdown-based CMS with Next.js, resulting in full blog and project management without touching a single line of code.",
            ],
        },
        {
            title: "SiliconBabylon",
            href: "https://siliconbabylon.vercel.app",
            dates: "December 2024 - Present",
            active: true,
            description:
                "A fully automated AI-driven satirical tech news platform. A LangGraph + OpenAI pipeline generates and publishes contextually aware tech satire with zero manual writing.",
            technologies: [
                "Next.js",
                "TypeScript",
                "LangGraph",
                "OpenAI API",
                "Automation",
                "SEO",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://siliconbabylon.vercel.app",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/Oseni03/Silicon-Babylon",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "",
            video: "",
            bullets: [
                "Removed the human bottleneck from content production by architecting a LangGraph + OpenAI pipeline that generates and publishes contextually aware tech satire, resulting in a consistently updated publication requiring zero manual writing.",
                "Maximized organic reach by optimizing Core Web Vitals and on-page SEO, resulting in high Lighthouse performance scores and measurably improved search engine discoverability.",
            ],
        },
    ],
    hackathons: [],
} as const;
