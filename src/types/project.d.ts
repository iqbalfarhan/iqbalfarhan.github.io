export type Project = {
	title: string;
	type: 'web' | 'android' | 'api' | 'design';
	slug: string;
	thumbnail?: string;
	client?: string;
	desctiption: string[];
};
