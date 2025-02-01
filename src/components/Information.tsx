import Button from './Button';

import CocoTeal from '../assets/images/coco_teal.png';
import CocoBrown from '../assets/images/coco_brown.png';
import CocoWhite from '../assets/images/coco_white.png';

interface InformationProps {
	showTitle: boolean;
}

const Information: React.FC<InformationProps> = ({ showTitle }) => {
	return (
		<>
			<div className="pb-24 md:pb-20 px-6 md:px-48 text-center">
				{showTitle && (
					<h2
						className="relative background-image-1 text-lg md:text-2xl text-brown top-[-20px]"
						style={{ fontWeight: 600 }}
					>
						Impulsa tu negocio
					</h2>
				)}
				<div
					className="grid grid-cols-1 md:grid-cols-3 items-center mt-6 md:mt-12 space-x-0 md:space-x-12 space-y-6 md:space-y-0 text-sm md:text-lg text-brown"
					style={{ fontWeight: 600 }}
				>
					<p>Innovación constante</p>
					<p>Crecimiento acelerado</p>
					<p>Soluciones a la medida</p>
				</div>
				<p className="mt-12 text-sm md:text-lg text-teal max-w-4xl mx-auto">
					¿El software a medida es parte fundamental de tu éxito? En Coco Labs
					diseñamos, mejoramos y transformamos sistemas digitales que potencian
					tus resultados.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-sm md:text-lg text-brown">
					<div className="p-6">
						<div className="w-20 h-20 mx-auto mb-8 text-white rounded-full flex items-center justify-center">
							<img src={CocoTeal} alt="Icono coco azul" />
						</div>
						<h3 style={{ fontWeight: 600 }}>Desarrollo de Nuevos Productos</h3>
						<p className="mt-2">
							Creamos desarrollos a la medida desde cero, creando soluciones que
							destacan.
						</p>
					</div>
					<div className="p-6">
						<div className="w-20 h-20 mx-auto mb-8 text-white rounded-full flex items-center justify-center">
							<img src={CocoBrown} alt="Icono coco café" />
						</div>
						<h3 style={{ fontWeight: 600 }}>Optimización de Productos</h3>
						<p className="mt-2">
							Perfeccionamos tus herramientas existentes para maximizar su
							impacto.
						</p>
					</div>
					<div className="p-6">
						<div className="w-20 h-20 mx-auto mb-8 text-white rounded-full flex items-center justify-center">
							<img src={CocoWhite} alt="Icono coco blanco" />
						</div>
						<h3 style={{ fontWeight: 600 }}>Modernización de Sistemas</h3>
						<p className="mt-2">
							Actualizamos tu tecnología para que esté a la altura del futuro.
						</p>
					</div>
				</div>

				<Button text="Habla con un consultor" background="bg-brown" onClick={() => window.open("https://wa.me/573013301908?text=Hola,%20me%20gustaría%20obtener%20más%20información.", "_blank")} />
			</div>
		</>
	);
};

export default Information;