import { EditForm } from 'components/EditForm/EditForm';
import Filter from 'components/Filter/Filter';
import { ToDoForm } from 'components/ToDoForm/ToDoForm';
import { ToDoList } from 'components/ToDoList/ToDoList';
import { Component } from 'react';

export class ModuleToDo extends Component {
  state = {
    toDoList: [],
    filter: '',
    isEditing: false,
    curentToDo: {},
  };

  handleFilter = e => {
    this.setState({ filter: e.target.value });
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

  getFilteredToDO = () => {
    const { filter, toDoList } = this.state;
    return toDoList.filter(({ text }) =>
      text.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  };
  handleEdit = toDo => {
    this.setState({ isEditing: true, curentToDo: { ...toDo } });
  };

  handelCansel = () => {
    this.setState({ isEditing: false });
  };
  handelInputEditChange = event => {
    this.setState(prevState => ({
      curentToDo: { ...prevState.curentToDo, text: event.target.value },
    }));
  };

  handelUpDateToDo = event => {
    event.preventDefault();
    const { curentToDo } = this.state;
    if (!curentToDo.text) {
      alert('Enter some text');
      return;
    }
    this.setState(prevState => ({
      isEditing: false,
      toDoList: prevState.toDoList.map(toDo =>
        toDo.id === curentToDo.id ? curentToDo : toDo
      ),
    }));
  };

  render() {
    const { curentToDo } = this.state;
    const filteredToDo = this.getFilteredToDO();
    return (
      <>
        {this.state.isEditing ? (
          <EditForm
            curentToDo={curentToDo}
            handelCansel={this.handelCansel}
            handelInputEditChange={this.handelInputEditChange}
            handelUpDateToDo={this.handelUpDateToDo}
          />
        ) : (
          <ToDoForm onSubmit={this.onSubmit} />
        )}

        <Filter handleFilter={this.handleFilter} />
        <ToDoList
          handleEdit={this.handleEdit}
          toDo={filteredToDo}
          onDeleteToDo={this.onDeleteToDo}
        />
      </>
    );
  }
}
