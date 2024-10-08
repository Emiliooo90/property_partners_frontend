import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus, FiEdit2, FiAlertCircle } from 'react-icons/fi'

export default function TaskForm({ onAddTask, onUpdateTask, taskToEdit }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title)
      setDescription(taskToEdit.description)
    } else {
      setTitle('')
      setDescription('')
    }
  }, [taskToEdit])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) return

    if (taskToEdit) {
      onUpdateTask({ ...taskToEdit, title, description })
    } else {
      onAddTask({ title, description, completed: false })
    }

    setTitle('')
    setDescription('')
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 3000)
  }

  return (
    <div className="max-w-lg mx-auto p-4">
      <AnimatePresence>
        {showAlert && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md shadow-sm"
            role="alert"
          >
            <div className="flex items-center">
              <FiAlertCircle className="w-5 h-5 mr-2" />
              <span className="block sm:inline">
                {taskToEdit ? '¡Tarea actualizada con éxito!' : '¡Tarea añadida con éxito!'}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            Título de la Tarea
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            required
            placeholder="Introduce el título de la tarea"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
            Descripción
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            rows={3}
            placeholder="Introduce la descripción de la tarea (opcional)"
          ></textarea>
        </div>
        <div className="flex items-center justify-end">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out flex items-center"
          >
            {taskToEdit ? (
              <>
                <FiEdit2 className="mr-2" />
                Actualizar Tarea
              </>
            ) : (
              <>
                <FiPlus className="mr-2" />
                Añadir Tarea
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}
