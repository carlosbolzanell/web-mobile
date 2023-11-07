import { useState } from "react";
import ToDoList from "./Components/ToDoList/ToDoList";
import Delivery from "./Components/Delivery";
import Header from "./Components/Header";

const App = () => {
  const [currentPage, setCurrentPage] = useState('Delivery');

  const changePage = (page) => {
    setCurrentPage(page);
  };

  let content = null;

  if (currentPage === 'ToDoList') {
    content = <ToDoList />;
  } else if (currentPage === 'Delivery') {
    content = <Delivery />;
  }

  return (
    <div>
      <Header changePage={changePage}/>
      {content}
    </div>
  )
};

export default App;