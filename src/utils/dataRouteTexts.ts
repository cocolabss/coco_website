type RouteTexts = {
	[key in '/design' | '/optimization' | '/modernization' | '/projects' | '/']: {
		img: string;
		title: string;
		description1: string;
		description2?: string;
		buttonText: string;
	};
};

export const routeTexts: RouteTexts = {
	'/': {
		img: '',
		title: 'Desarrollo de software a la medida + Diseño',
		description1: 'Sabes el destino de tu empresa. Nosotros te ayudamos a alcanzarlo.',
		buttonText: 'Consulta Gratis'
	},
	'/design': {
		img: '',
		title: 'Diseño y desarrollo de nuevos productos',
		description1: 'Descubre cómo nuestro equipo, con años de',
		description2: 'experiencia, trabaja para resolver los desafíos de software personalizado de tu negocio',
		buttonText: 'Consulta Gratis'
	},
	'/optimization': {
		img: '',
		title: 'Optimización de productos de software',
		description1: 'En Coco te apoyamos con un desarrollo de software',
		description2: 'que requiere ser actualizado, optimizado o agregar nuevas funcionalidades',
		buttonText: 'Consulta Gratis'
	},
	'/modernization': {
		img: '',
		title: 'Modernización de sistemas',
		description1: 'Impulsa el futuro de tu negocio con soluciones',
		description2: 'modernas y efectivas',
		buttonText: 'Consulta gratis'
	},
	'/projects': {
		img: '',
		title: 'Nuestros proyectos',
		description1: 'Cumpliendo con la confianza depositada en Coco',
		description2: 'buscamos siempre cumplir nuestros objetivos',
		buttonText: 'Consulta Gratis'
	}
};