import { Icons } from "@/components/icons";
import { HomeIcon, icons, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";

export const DATA = {
	name: "Oseni Ayomide Daniel",
	initials: "OA",
	url: "https://spaark.dev",
	location: "Lagos, Nigeria",
	locationLink: "https://www.google.com/maps/place/Lagos,Nigeria",
	description:
		"Product Engineer & Full-Stack Developer. I build scalable SaaS solutions, AI-integrated applications, and enterprise-grade automation.",
	summary:
		"I am a Product Engineer and Full-Stack Developer specializing in building scalable SaaS solutions, AI-integrated applications, and enterprise-grade automation. With deep expertise in Python (Django, FastAPI) and the Modern Web Stack (Next.js, TypeScript, Node.js), I focus on transforming complex technical challenges into high-performance products. From architecting multi-platform AI auditing tools to engineering automated content pipelines, I thrive on bridging the gap between robust backend systems and intuitive user experiences.",
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
		{ name: "Kubernetes", icon: Kubernetes },
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
			company: "HNG Tech",
			href: "https://hng.tech/internship",
			badges: [],
			location: "Remote",
			title: "Backend Software Developer",
			logoUrl: "/hng.svg",
			start: "July 2024",
			end: "September 2024",
			description:
				"Engineered and optimized RESTful APIs using Python, improving data retrieval speeds and ensuring seamless integration for customer-facing features. Collaborated in an Agile cross-functional team of PMs, Frontend Devs, and QA Engineers to accelerate sprint delivery and maintain high code quality. Architected scalable database schemas and backend logic, reducing system bottlenecks and enhancing overall platform reliability. Spearheaded debugging and automated testing initiatives, resulting in a more stable deployment pipeline and a 20% reduction in post-launch bugs.",
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
			title: "Clutterscore",
			href: "https://clutterscore.vercel.app",
			dates: "2025 - Present",
			active: true,
			description:
				"An intelligent self-service agent that continuously audits, scores, and organizes fragmented digital workspaces across major enterprise platforms — your AI-Powered Digital Janitor.",
			technologies: [
				"Python",
				"Django",
				"Next.js",
				"TypeScript",
				"OAuth",
				"Webhooks",
				"OpenAI API",
				"Google Workspace",
				"Slack",
				"Notion",
				"Dropbox",
				"PostgreSQL",
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
				"Engineered seamless integrations with Google Workspace, Slack, Notion, and Dropbox, utilizing OAuth and webhooks to monitor data sprawl in real-time.",
				"Architected an AI-driven auditing engine that analyzes workspace activity to identify 'digital clutter' and automatically suggests or executes cleanup workflows.",
				"Developed a centralized 'Clutter Score' dashboard, providing users with actionable insights into their document health and team collaboration efficiency.",
				"Implemented secure, cross-platform data processing, ensuring high privacy standards while handling sensitive information across Jira, Linear, and Figma.",
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
				},
				{
					type: "Source",
					href: "https://github.com/Oseni03/spaark",
				},
			],
			image: "",
			video: "",
			bullets: [
				"Implemented a multi-tenant architecture supporting custom domains and white-labeling for 100+ potential users.",
				"Integrated secure authentication and payment workflows using Clerk and Stripe, enabling a seamless transition from free to premium tiers.",
				"Developed a custom Markdown-based CMS with Next.js, allowing users to manage blogs and projects without touching code.",
			],
		},
		{
			title: "NoteApp — Next.js SaaS Boilerplate",
			href: "https://multi-tenant-note-app.vercel.app",
			dates: "2024 - Present",
			active: true,
			description:
				"A production-ready, multi-tenant SaaS notes application and boilerplate built with Next.js, demonstrating enterprise-grade tenancy, authentication, and subscription management patterns.",
			technologies: [
				"Next.js 14",
				"TypeScript",
				"PostgreSQL",
				"Prisma",
				"BetterAuth",
				"Polar.sh",
				"Resend",
				"Zustand",
				"TailwindCSS",
				"shadcn/ui",
				"Vercel",
			],
			links: [
				{
					type: "Website",
					href: "https://multi-tenant-note-app.vercel.app",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "Source",
					href: "https://github.com/Oseni03/Noteapp---Next.js-saas-boilerplate",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "/projects/noteapp.png",
			video: "",
			bullets: [
				"Architected a shared-schema multi-tenancy system with strict `organizationId` data isolation, ensuring zero cross-tenant data leakage across all API endpoints.",
				"Implemented JWT-based authentication with role-based access control (Admin/Member), supporting OAuth via Google and secure user invitation flows.",
				"Engineered a tiered subscription system using Polar.sh — enforcing Free plan limits (3 users, 50 notes) and unlocking unlimited access for Pro plan organizations.",
				"Built a clean server-first architecture separating business logic (`src/server/`) from thin API route wrappers, with Zustand for client-side state synchronization.",
			],
		},
		{
			title: "SatiricTech",
			href: "https://satiric-tech.info",
			dates: "December 2024 - January 2025",
			active: true,
			description:
				"An automated satirical news platform leveraging Generative AI to provide sharp industry insights with a humorous twist.",
			technologies: [
				"Next.js",
				"TypeScript",
				"LangGraph",
				"OpenAI API",
				"Authentication",
				"SEO",
				"Automation",
			],
			links: [
				{
					type: "Website",
					href: "https://satiric-tech.info",
					icon: <Icons.globe className="size-3" />,
				},
			],
			image: "/projects/satirictech.png",
			video: "",
			bullets: [
				"Architected an automated content pipeline using LangGraph and OpenAI to generate and publish contextually aware tech satire.",
				"Optimized for Core Web Vitals and SEO, achieving high performance scores and improving organic discoverability.",
				"Engineered secure API interactions and user management systems to handle automated data extraction and content delivery.",
			],
		},
	],
	hackathons: [],
} as const;
