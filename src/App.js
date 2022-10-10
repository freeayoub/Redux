
import './App.css';
import Addtodo from './Components/Addtodo';
import Navigation from './Components/Navigation';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className="App">
    <Navigation/>
   <Addtodo/>
   <TodoList />
    </div>
  );
}

export default App;
