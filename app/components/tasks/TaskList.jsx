import React from 'react';
import TaskItem from './TaskItem';

export default function TaskList({ tasks = [], onUpdateTask, onDeleteTask, onCompleteTask }) {
  return (
    <ul className="divide-y divide-gray-200">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onUpdate={onUpdateTask}
          onDelete={onDeleteTask}
          onComplete={onCompleteTask}
        />
      ))}
    </ul>
  );
}
