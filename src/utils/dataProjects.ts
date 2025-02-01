export interface ProjectType {
	id: number;
	title: string;
	category: string;
	description: string;
	logo: string;
	images: string[];
}

export const projects: ProjectType[] = [
	{
		id: 1,
		title: 'Proyecto App',
		category: 'App',
		description: 'Descripción del proyecto App.',
		logo: 'url-del-logo',
		images: ['url-imagen-1', 'url-imagen-2', 'url-imagen-3'],
	},
	{
		id: 2,
		title: 'Proyecto Web',
		category: 'Web',
		description: 'Descripción del proyecto Web.',
		logo: 'url-del-logo',
		images: ['url-imagen-1', 'url-imagen-2', 'url-imagen-3'],
	},
	{
		id: 3,
		title: 'Proyecto App 2',
		category: 'App',
		description: 'Descripción del proyecto App 2.',
		logo: 'url-del-logo',
		images: ['url-imagen-1', 'url-imagen-2', 'url-imagen-3'],
	},
	{
		id: 4,
		title: 'Proyecto Web 2',
		category: 'Web',
		description: 'Descripción del proyecto Web 2.',
		logo: 'url-del-logo',
		images: ['url-imagen-1', 'url-imagen-2', 'url-imagen-3'],
	},
];