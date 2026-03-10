export interface Project {
	readonly title: string;
	readonly href: string;
	readonly dates: string;
	readonly active: boolean;
	readonly description: string;
	readonly technologies: readonly string[];
	readonly links: readonly {
		readonly type: string;
		readonly href: string;
		readonly icon?: React.ReactNode;
	}[];
	readonly image: string;
	readonly video: string;
	readonly bullets: readonly string[];
}

export interface Work {
	readonly company: string;
	readonly href: string;
	readonly badges: readonly string[];
	readonly location: string;
	readonly title: string;
	readonly logoUrl: string;
	readonly start: string;
	readonly end?: string;
	readonly description: string;
}

export interface Hackathon {
	readonly title?: string;
	readonly dates?: string;
	readonly location?: string;
	readonly description?: string;
	readonly image?: string;
	readonly links?: readonly {
		readonly href: string;
		readonly icon?: React.ReactNode;
		readonly title: string;
	}[];
}
