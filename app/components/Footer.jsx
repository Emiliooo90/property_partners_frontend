import Link from 'next/link';
export default function Footer() {
    return (
        <footer className="bg-white text-black py-8">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <span className="font-bold text-xl">Gestor de Tareas</span>
                    <p className="text-sm mt-2">© 2024 Todos los derechos reservados.</p>
                </div>
                <div className="flex space-x-4">
                    <Link href="/about" className="hover:text-blue-300">Acerca de</Link>
                    <Link href="/contact" className="hover:text-blue-300">Contacto</Link>
                    <Link href="/privacy" className="hover:text-blue-300">Privacidad</Link>
                </div>
            </div>
        </footer>
    )
}