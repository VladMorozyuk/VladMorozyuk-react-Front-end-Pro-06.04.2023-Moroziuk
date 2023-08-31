import React from 'react';

const Todo = ({ todo, toggleTodo }) => {
    return (
        <div className={`todo ${todo.completed ? 'completed' : ''}`} onClick={() => toggleTodo(todo.id)}>
            {todo.text}
        </div>
    );
};

export default Todo;