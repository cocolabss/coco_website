import desarrolloIcon from '../assets/icons/cards/desarrollo_white.svg';
import optimizacionIcon from '../assets/icons/cards/optimizacion_white.svg';
import modernizacionIcon from '../assets/icons/cards/modernizacion_white.svg';
import bannerProductoUnoImage from '../assets/images/banner_producto1.png';
import bannerProductoDosImage from '../assets/images/banner_producto2.png';
import bannerProductoTresImage from '../assets/images/banner_casasodeestudio.png';

type RouteTexts = {
    [key in '/development' | '/optimization' | '/modernization' | '/projects' | '/']: {
		img?: string;
        icon?: string;
		title: string;
		description: string;
		buttonText?: string;
	};
};

export const routeTexts: RouteTexts = {
	'/': {
		img: '',
        icon: '',
		title: 'Desarrollo de software a la medida + Diseño',
		description: 'Sabes el destino de tu empresa. Nosotros te ayudamos a alcanzarlo.',
		buttonText: 'Consulta Gratis'
	},
	'/development': {
		img: bannerProductoDosImage,
        icon: desarrolloIcon,
		title: 'Desarrollo de Nuevos Productos',
        description: 'Sabes el destino de tu empresa. Nosotros te ayudamos a alcanzarlo.',
		buttonText: 'Consulta Gratis'
	},
	'/optimization': {
		img: bannerProductoUnoImage,
        icon: optimizacionIcon,
		title: 'Optimización de Productos',
        description: 'Sabes el destino de tu empresa. Nosotros te ayudamos a alcanzarlo.',
		buttonText: 'Consulta Gratis'
	},
	'/modernization': {
		img: bannerProductoDosImage,
        icon: modernizacionIcon,
		title: 'Modernización de Sistemas',
        description: 'Sabes el destino de tu empresa. Nosotros te ayudamos a alcanzarlo.',
		buttonText: 'Consulta gratis'
	},
	'/projects': {
		img: bannerProductoTresImage,
		title: 'Nuestros Casos de Estudio y Portafolio',
        description: 'Conoce más sobre nuestros casos de estudio existosos y enterate sobre como trabajamos y desarrollamos productos de alto nivel con los mejores precios del mercado.',
	}
};