import ToDoList from "./Components/ToDoList/ToDoList";
import Delivery from "./Components/Delivery";
import Header from "./Components/Header";

const App = () => {

  return (
    <div>
        <Header/>
        <ToDoList/>
        <Delivery/>
    </div>
  )
};

export default App;