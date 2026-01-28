export type Project = {
	title: string;
	type: 'web' | 'android' | 'api' | 'design';
	slug: string;
	thumbnail?: string;
	desctiption: string[];
};
