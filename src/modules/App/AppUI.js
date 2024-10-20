import Confetti from 'react-confetti';
import {
	CreateTodo,
	TodoCounter,
	TodoItem,
	TodoList,
	YourTask,
} from '../todos/components';

function AppUI({
	displayedTodos,
	completed,
	total,
	addTask,
	deleteTask,
	completeTask,
	searchTasks,
	showConfetti,
  loading,
  error,
  setError,
}) {
	return (
		// This is not HTML, this is JSX, js with xml syntax
		<div className='app-container'>
			<CreateTodo className='create-todo' addTask={addTask} />

			<YourTask>
				<TodoCounter
					completed={completed}
					total={total}
					searchTasks={searchTasks}
				/>

				<TodoList>
					{showConfetti && <Confetti />}
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}
					{!loading && displayedTodos.map(todo => (
						<TodoItem
							key={todo.text}
							text={todo.text}
							completed={todo.completed}
							className='todo-item'
							completeTask={completeTask}
							deleteTask={deleteTask}
						/>
					))}
				</TodoList>
			</YourTask>
		</div>
	);
}

export { AppUI };
