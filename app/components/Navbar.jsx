import Link from 'next/link';
import { FaTasks } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2">
                    <FaTasks className="text-blue-500 text-2xl" />
                    <span className="font-bold text-xl text-gray-800">Gestor de Tareas</span>
                </Link>
                <div className="space-x-4">
                    {isAuthenticated ? (
                        <>
                            <Link href="/Tasks" className="text-gray-600 hover:text-blue-500">Tareas</Link>
                            <Link href="/" onClick={handleLogout} className="text-gray-600 hover:text-blue-500">Cerrar Sesión</Link>
                        </>
                    ) : (
                        <>
                            <Link href="/Login" className="text-gray-600 hover:text-blue-500">Iniciar Sesión</Link>
                            <Link href="/Register" className="text-gray-600 hover:text-blue-500">Registrarse</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}