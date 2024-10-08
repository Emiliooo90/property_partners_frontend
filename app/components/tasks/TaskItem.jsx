import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Import the check icon
import '@/app/globals.css';

export default function TaskItem({ task, onUpdate, onDelete, onComplete }) {
    if (!task) return null; // Salvaguarda contra tarea indefinida

    return (
        <li className={`task-item bg-white shadow-md rounded-lg p-4 mb-6 mx-4 ${task.completed ? 'bg-green-100' : ''}`}>
            <div className="flex items-center">
                {task.completed && <FaCheckCircle className="text-green-500 mr-2" />} {/* Check icon */}
                <div>
                    <h3 className="text-lg font-semibold">{task.title}</h3>
                    <p className="text-gray-600">{task.description}</p>
                    <p className="text-sm text-gray-500">Estado: {task.completed ? 'Completada' : 'Pendiente'}</p>
                    <p className="text-sm text-gray-500">Usuario: {task.userId}</p> {/* Added task.userId */}
                </div>
            </div>
            <div className="mt-4 flex space-x-2">
                <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={() => onUpdate(task)}
                >
                    Actualizar
                </button>
                <button 
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    onClick={() => onDelete(task.id)}
                >
                    Eliminar
                </button>
                {!task.completed && (
                    <button 
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                        onClick={() => onComplete(task.id)}
                    >
                        Completar
                    </button>
                )}
            </div>
        </li>
    );
}