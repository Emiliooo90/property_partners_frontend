import React, { useState, useEffect } from 'react';
import Navbar from '../app/components/Navbar';
import Footer from '../app/components/Footer';
import TaskList from '../app/components/tasks/TaskList';
import TaskForm from '../app/components/tasks/TaskForm';
import TaskFormModal from '../app/components/TaskFormModal';
import api from '../app/utils/api';

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.get('/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error('Failed to fetch tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const addTask = async (task) => {
    try {
      const response = await api.post('/tasks', task);
      setTasks((prevTasks) => [...prevTasks, response.data]);
    } catch (error) {
      console.error('Failed to add task:', error);
    }
  };

  const updateTask = async (updatedTask) => {
    try {
      const response = await api.put(`/tasks/${updatedTask.id}`, updatedTask);
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === updatedTask.id ? response.data : task))
      );
    } catch (error) {
      console.error('Failed to update task:', error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await api.delete(`/tasks/${taskId}`);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  };

  const completeTask = async (taskId) => {
    try {
      console.log(`Completing task with ID: ${taskId}`);
      const response = await api.patch(`/tasks/${taskId}/complete`);
      console.log('Task completed:', response.data);
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === taskId ? response.data : task))
      );
    } catch (error) {
      console.error('Failed to complete task:', error);
    }
  };

  const handleEditTask = (task) => {
    setTaskToEdit(task);
    setIsModalOpen(true);
  };

  return (
    <div>
      <Navbar />
      <div className="text-center mt-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Tareas</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Gestiona tus tareas de manera eficiente con nuestra herramienta.</h2>
      </div>
      <div className="container mx-auto px-6 py-3">
        <TaskForm onAddTask={addTask} />
        <TaskList
          tasks={tasks}
          onUpdateTask={handleEditTask}
          onDeleteTask={deleteTask}
          onCompleteTask={completeTask}
        />
        <TaskFormModal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          task={taskToEdit}
          onUpdateTask={updateTask}
        />
      </div>
      <Footer />
    </div>
  );
}
