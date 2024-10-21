import Confetti from 'react-confetti';
import {
	CreateTodo,
	TodoCounter,
	TodoError,
	TodoItem,
	TodoList,
	TodoLoading,
	YourTask,
} from '../todos/components';
import { TodoContext } from '../todos/TodoContext';

function AppUI() {
	return (
		// This is not HTML, this is JSX, js with xml syntax
		<div className='app-container'>
			<TodoContext.Consumer>
				{({ addTask }) => (
					<CreateTodo className='create-todo' addTask={addTask} />
				)}
			</TodoContext.Consumer>

			<YourTask>
				<TodoContext.Consumer>
					{({
						displayedTodos,
						completed,
						total,
						deleteTask,
						completeTask,
						searchTasks,
						showConfetti,
						loading,
						error,
					}) => (
						<>
							<TodoCounter
								completed={completed}
								total={total}
								searchTasks={searchTasks}
							/>

							<TodoList>
								{showConfetti && <Confetti />}
								{loading && <TodoLoading />}
								{error && <TodoError error={error} />}
								{!loading &&
									displayedTodos.map(todo => (
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
						</>
					)}
				</TodoContext.Consumer>
			</YourTask>
		</div>
	);
}

export { AppUI };
