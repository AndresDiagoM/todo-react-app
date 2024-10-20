import React from 'react';
import './TodoError.css';

function TodoError({ error, onRetry }) {
    return (
        <div className="todo-error">
            <h2>Something went wrong!</h2>
            <p>{error.message || 'An unexpected error occurred.'}</p>
            <button onClick={onRetry}>Retry</button>
        </div>
    );
}

export { TodoError };