import { ToDoForm } from 'components/ToDoForm/ToDoForm';
import { ToDoList } from 'components/ToDoList/ToDoList';
import { Component } from 'react';

export class ModuleToDo extends Component {
  state = {
    toDoList: [],
  };
  onDeleteToDo = id => {
    this.setState(prevState => ({
      toDoList: prevState.toDoList.filter(item => item.id !== id),
    }));
  };
  onSubmit = text => {
    const isExsist = this.state.toDoList.find(
      elem => elem.text.toLowerCase() === text.toLowerCase()
    );
    if (isExsist) {
      alert('Text already exsist!');
      return;
    }
    this.setState(prevState => ({
      toDoList: [
        ...prevState.toDoList,
        {
          id: crypto.randomUUID(),
          text,
        },
      ],
    }));
  };
  render() {
    return (
      <>
        <ToDoForm onSubmit={this.onSubmit} />
        <ToDoList toDo={this.state.toDoList} onDeleteToDo={this.onDeleteToDo} />
      </>
    );
  }
}
