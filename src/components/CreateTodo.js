import Lottie from 'react-lottie';
import animationData from '../assets/lotties/animation2.json';
import '../assets/styles/CreateTodo.css';

// new component
function CreateTodo(props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <>
      <div className="create-todo-container">
        <h1>Create new task</h1>
        <p>Task Name</p>
        <input placeholder="Launch rocket to the moon" />
        <button>Create</button>
        <div>
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      </div>
    </>
  );
}

export { CreateTodo };
//named export, to avoid importing with different names
