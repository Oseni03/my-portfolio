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
		// { href: "/blog", icon: NotebookIcon, label: "Blog" },
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
				"Unblocked a client's stalled product launch by diagnosing and fixing a broken AI integration — identifying misconfigured prompt chains and unreliable API error handling — resulting in a stable, production-ready feature shipped on schedule. Delivered clean, well-documented backend code for API clients, resulting in seamless handoff and zero rework requests post-delivery.",
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
				"Improved sprint delivery velocity by collaborating in an Agile squad of 8 across PM, Frontend, and QA — conducting structured PR reviews and pair-programming — resulting in faster feature turnaround and consistently clean releases. Reduced post-launch bugs by 20% by leading debugging and automated testing initiatives, resulting in a more stable CI/CD pipeline and fewer production incidents. Improved API response times by engineering and optimizing RESTful endpoints in Python, resulting in faster page loads and a more reliable experience for customer-facing features. Eliminated system bottlenecks by architecting normalized database schemas and modular backend logic, resulting in improved query performance and long-term platform scalability.",
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
			description:
				"Applied linear algebra, probability, statistics, and combinatorial optimization to algorithms and system design, building rigorous analytical thinking directly transferable to software engineering.",
		},
	],

	projects: [
		// {
		// 	title: "Notall",
		// 	href: "https://notall.vercel.app",
		// 	dates: "2024 - Present",
		// 	active: true,
		// 	description:
		// 		"The note-taking app that remembers everything. A production multi-tenant SaaS platform with a Notion-like block editor, AI memory, note version control, and tiered subscriptions.",
		// 	technologies: [
		// 		"Next.js 14",
		// 		"TypeScript",
		// 		"PostgreSQL",
		// 		"Prisma",
		// 		"BetterAuth",
		// 		"Polar.sh",
		// 		"OpenAI API",
		// 		"Zustand",
		// 		"TailwindCSS",
		// 		"shadcn/ui",
		// 		"Vercel",
		// 	],
		// 	links: [
		// 		{
		// 			type: "Website",
		// 			href: "https://notall.vercel.app",
		// 			icon: <Icons.globe className="size-3" />,
		// 		},
		// 		{
		// 			type: "Source",
		// 			href: "https://github.com/Oseni03/notall",
		// 			icon: <Icons.github className="size-3" />,
		// 		},
		// 	],
		// 	image: "/projects/noteapp.png",
		// 	video: "",
		// 	bullets: [
		// 		"Delivered enterprise-grade data security from day one by architecting shared-schema multi-tenancy with strict organizationId isolation across every API route, resulting in zero cross-tenant data leakage.",
		// 		"Eliminated user friction by building a Notion-like block-based rich text editor, resulting in an instantly familiar interface that removes the learning curve for new users.",
		// 		"Prevented data loss by implementing full note version control with change history and one-click restore, resulting in confident, worry-free editing for every user.",
		// 		"Created a clear revenue model by engineering tiered subscription gating via Polar.sh, enforcing Free plan limits and unlocking unlimited access for Pro users, resulting in a built-in upgrade path.",
		// 	],
		// },
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
			image: "/projects/adminsupport.png",
			video: "",
			bullets: [
				"Eliminated repetitive admin overhead by deploying an MCP server on Cloudflare Workers integrating Gmail, Calendar, Drive, Notion, and Slack via OAuth, resulting in a fully automated pipeline for inbox triage, meeting scheduling, and file organization.",
				"Reduced context-switching for knowledge workers by consolidating five separate tools into a single AI-driven interface, resulting in seamless cross-platform workflow automation with no manual handoff.",
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
			image: "/projects/siliconbabylon.png",
			video: "",
			bullets: [
				"Removed the human bottleneck from content production by architecting a LangGraph + OpenAI pipeline that generates and publishes contextually aware tech satire, resulting in a consistently updated publication requiring zero manual writing.",
				"Maximized organic reach by optimizing Core Web Vitals and on-page SEO, resulting in high Lighthouse performance scores and measurably improved search engine discoverability.",
			],
		},
		// ✅ ADDED FROM PDF
		{
			title: "TempTrap",
			href: "https://temptrap.vercel.app",
			dates: "2025 - Present",
			active: true,
			description:
				"A deterministic email verification platform that uses parallel DNS MX lookups, SMTP mailbox probing, and RDAP domain-age checks to deliver fast, reliable verdicts with zero LLM inference cost.",
			technologies: [
				"Next.js",
				"TypeScript",
				"PostgreSQL",
				"Prisma",
				"BetterAuth",
				"Redis (Upstash)",
				"REST API",
				"SMTP",
				"DNS",
				"RDAP",
			],
			links: [
				{
					type: "Website",
					href: "https://temptrap.vercel.app",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "Source",
					href: "https://github.com/Oseni03/temptrap",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "/projects/temptrap.png",
			video: "",
			bullets: [
				"Eliminated unreliable third-party dependency by engineering a deterministic email verification engine using parallel DNS MX lookups, SMTP mailbox probing, and RDAP domain-age checks, resulting in fast, consistent verdicts with zero LLM inference cost.",
				"Reduced repeated SMTP probe latency by 90%+ by architecting a Redis (Upstash) domain-level caching layer that returns cached verdicts instantly, resulting in dramatically faster API responses for high-traffic domains like Gmail and Outlook.",
				"Shipped a production-ready multi-tenant SaaS by integrating BetterAuth for organization scaffolding, API key generation, and per-key usage tracking, resulting in a secure, self-service onboarding flow with automatic Personal Project provisioning on sign-up.",
			],
		},
	],
	hackathons: [],
} as const;
