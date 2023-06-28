import { EditForm } from 'components/EditForm/EditForm';
import Filter from 'components/Filter/Filter';
import { ToDoForm } from 'components/ToDoForm/ToDoForm';
import { ToDoList } from 'components/ToDoList/ToDoList';
import { useEffect, useState } from 'react';
import { load } from 'utils/localstorage';

const initialState = [];

export const ModuleToDo = () => {
   const [toDoList, setToDoList] = useState(() => load('toDoList') ?? initialState);
   const [filter, setFilter] = useState('');
   const [isEditing, setIsEditing] = useState(false);
   const [currentToDo, setCurrentToDo] = useState({});



useEffect(()=>{
  localStorage.setItem('toDoList', JSON.stringify(toDoList));
  },[toDoList])


  const handleFilter = e => {
  setFilter(e.target.value);
  };

 const onDeleteToDo = id => {
 setToDoList  ( prevState => prevState.filter(item => item.id !== id))
 };


  const onSubmit = text => {
    const isExsist = toDoList.find(
      elem => elem.text.toLowerCase() === text.toLowerCase()
    );
    if (isExsist) {
      alert('Text already exsist!');
      return;
    }
    setToDoList(prevState  => [...prevState,{id:crypto.randomUUID(),text}]
    );
  };

 const  getFilteredToDO = () => {

    return toDoList.filter(({ text }) =>
      text.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  };


  const handleEdit = toDo => {
    setIsEditing(true);
    setCurrentToDo(toDo);
  };

 const  handelCansel = () => {
  setIsEditing(false)
  };


  const handelInputEditChange = event => {
    setCurrentToDo (prevState => ({
       ...prevState, text: event.target.value,
    }));
  };

 const  handelUpDateToDo = event => {
    event.preventDefault();
    if (!currentToDo.text) {
      alert('Enter some text');
      return;
    }
setIsEditing(false);
setToDoList(prevState => prevState.map(toDo =>
  toDo.id === currentToDo.id ? currentToDo : toDo
))
};


    const filteredToDo = getFilteredToDO();
    return (
      <>
        {isEditing ? (
          <EditForm
            curentToDo={currentToDo}
            handelCansel={handelCansel}
            handelInputEditChange={handelInputEditChange}
            handelUpDateToDo={handelUpDateToDo}
          />
        ) : (
          <ToDoForm onSubmit={onSubmit} />
        )}

        <Filter handleFilter={handleFilter} />
        <ToDoList
          handleEdit={handleEdit}
          toDo={filteredToDo}
          onDeleteToDo={onDeleteToDo}
        />
      </>
    );
  
}
