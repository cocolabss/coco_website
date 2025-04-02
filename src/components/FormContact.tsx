import { useState } from 'react';

import Button from './Button';

import contactIcon from "../assets/icons/contact.svg";

const FormContact = () => {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setIsSubmitting(true);

        const numeroWhatsApp = "573013301908";
        const mensajeWhatsApp = `Hola, mi nombre es *${nombre}*.\nCorreo: *${correo}*.\n\n${mensaje}`;
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeWhatsApp)}`;

        window.open(url, "_blank");

        setTimeout(() => {
            setIsSubmitting(false);
            setNombre("");
            setCorreo("");
            setMensaje("");
        }, 1000);
    };

    return (
        <div id='contact' className="pb-16 px-6 bg-brown">
            <div className="flex row justify-between items-center pt-8 max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl text-white font-semibold">
                    Contáctanos
                </h2>
                <img
                    src={contactIcon}
                    alt="Contact icon"
                    className="w-16 h-16 md:w-20 md:h-20"
                />
            </div>

            <div className="mt-8 max-w-2xl mx-auto">
                <form
                    className="grid grid-cols-1 gap-6 text-sm md:text-base"
                    onSubmit={handleSubmit}
                >
                    <label className="block">
                        <span className="text-white font-medium">Nombre</span>
                        <input
                            type="text"
                            placeholder="Tu nombre"
                            className="mt-2 block py-3 px-4 w-full rounded-none border-0
                        bg-brown-600 text-white placeholder-brown-300
                        focus:ring-2 focus:ring-blue focus:outline-none"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                        />
                    </label>

                    <label className="block">
                        <span className="text-white font-medium">Correo Electrónico</span>
                        <input
                            type="email"
                            placeholder="Tu correo electrónico"
                            className="mt-2 block py-3 px-4 w-full rounded-none border-0
                        bg-brown-600 text-white placeholder-brown-300
                        focus:ring-2 focus:ring-blue focus:outline-none"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            required
                        />
                    </label>

                    <label className="block">
                        <span className="text-white font-medium">Mensaje</span>
                        <textarea
                            placeholder="Escribe tu mensaje aquí"
                            rows={5}
                            className="mt-2 block py-3 px-4 w-full rounded-none border-0
                        bg-brown-600 text-white placeholder-brown-300
                        focus:ring-2 focus:ring-blue focus:outline-none"
                            value={mensaje}
                            onChange={(e) => setMensaje(e.target.value)}
                            required
                        ></textarea>
                    </label>

                    <div className="flex justify-end">
                        <Button
                            text="Enviar"
                            type="submit"
                            disabled={isSubmitting}
                            onClick={() => { }} 
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormContact;