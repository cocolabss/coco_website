import garcesReyesLogo from '../assets/images/projects/garcesReyes/casos_garcesreyes_portfolio.png';
import laborUsLogo from '../assets/images/projects/laborUs/casos_laborus_portfolio.png';

export interface ProjectType {
    id: number;
    title: string;
    shortDescription?: string;
    description: string;
    category: string;
    technologies: string[];
    logo: string;
    images?: string[];
    client?: string;
    year?: string;
    challenge?: string;
    solution?: string;
    results?: string;
    url?: string;
}

export const projects: ProjectType[] = [
    {
        id: 1,
        title: "Garcés Reyes SAS",
        shortDescription: "Breve descripción para la vista de lista...",
        description: "Descripción completa del proyecto...",
        category: "Desarrollo Web",
        technologies: ["Zeplin", "Microsoft .Net", "XCode", "Swift"],
        logo: garcesReyesLogo,
        images: [],
        client: "Cliente XYZ",
        year: "2023",
        challenge: "Desafío que enfrentó el cliente...",
        solution: "Cómo lo resolvimos...",
        results: "Resultados obtenidos...",
        url: "https://www.garcesreyes.com/"
    },
    {
        id: 2,
        title: "LaborUs.co",
        shortDescription: "Breve descripción para la vista de lista...",
        description: "Descripción completa del proyecto...",
        category: "Aplicaciones Móvil",
        technologies: ["Zeplin", "Microsoft .Net", "XCode", "Swift"],
        logo: laborUsLogo,
        images: [],
        client: "Cliente XYZ",
        year: "2023",
        challenge: "Desafío que enfrentó el cliente...",
        solution: "Cómo lo resolvimos...",
        results: "Resultados obtenidos...",
        url: "https://laborus.co/"
    },
];