'use client'

import Link from 'next/link';
import { motion } from 'framer-motion'
import { FaUserPlus, FaSignInAlt, FaCheckCircle, FaChartLine, FaMobileAlt } from 'react-icons/fa'
import Navbar from './Navbar'
import Footer from './Footer'

export default function LandingPage() {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Bienvenido a Gestor de Tareas
                    </h1>
                    <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                        Gestiona tus tareas de manera eficiente con nuestra poderosa herramienta. Optimiza tu productividad hoy mismo.
                    </p>
                </motion.div>

                <div className="flex justify-center space-x-4 mb-16">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link href="/Login" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md flex items-center">
                            <FaSignInAlt className="mr-2" />
                            Iniciar Sesión
                        </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link href="/Register" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md flex items-center">
                            <FaUserPlus className="mr-2" />
                            Registrarse
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <Feature
                        icon={<FaCheckCircle className="text-4xl text-green-500 mb-4" />}
                        title="Organización Simplificada"
                        description="Mantén tus tareas organizadas y accesibles en un solo lugar."
                    />
                    <Feature
                        icon={<FaChartLine className="text-4xl text-blue-500 mb-4" />}
                        title="Seguimiento de Progreso"
                        description="Visualiza tu progreso y mejora tu productividad con análisis detallados."
                    />
                    <Feature
                        icon={<FaMobileAlt className="text-4xl text-purple-500 mb-4" />}
                        title="Acceso Móvil"
                        description="Gestiona tus tareas desde cualquier lugar con nuestra aplicación móvil."
                    />
                </div>
            </main>
            <Footer />
        </div>
    )
}

function Feature({ icon, title, description }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-lg shadow-md text-center"
        >
            {icon}
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </motion.div>
    )
}