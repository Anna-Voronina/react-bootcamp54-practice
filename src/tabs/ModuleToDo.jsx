import { EditForm } from 'components/EditForm/EditForm';
import Filter from 'components/Filter/Filter';
import { ToDoForm } from 'components/ToDoForm/ToDoForm';
import { ToDoList } from 'components/ToDoList/ToDoList';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { useState } from 'react';

export const ModuleToDo = () => {
  const [toDoList, setToDoList] = useLocalStorage('toDoList', []);
  const [filter, setFilter] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentToDo, setCurrentToDo] = useState({});
  const [select, setSelect] = useState(false);

  const handleFilter = e => {
    setFilter(e.target.value);
  };

  const onDeleteToDo = id => {
    setToDoList(prevState => prevState.filter(item => item.id !== id));
  };

  const onSubmit = text => {
    const isExsist = toDoList.find(
      elem => elem.text.toLowerCase() === text.toLowerCase()
    );
    if (isExsist) {
      alert('Text already exsist!');
      return;
    }
    setToDoList(prevState => [...prevState, { id: crypto.randomUUID(), text }]);
  };

  const handleEdit = toDo => {
    setIsEditing(true);
    setCurrentToDo(toDo);
  };

  const handelCansel = () => {
    setIsEditing(false);
  };

  const handelInputEditChange = event => {
    setCurrentToDo(prevState => ({
      ...prevState,
      text: event.target.value,
    }));
  };

  const handelUpDateToDo = event => {
    event.preventDefault();
    if (!currentToDo.text) {
      alert('Enter some text');
      return;
    }
    setIsEditing(false);
    setToDoList(prevState =>
      prevState.map(toDo => (toDo.id === currentToDo.id ? currentToDo : toDo))
    );
  };

  // const filteredToDo = getFilteredToDO();
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
      <button onClick={() => setSelect(prev => !prev)}>Change select</button>
      <Filter handleFilter={handleFilter} />
      <ToDoList
        theme={select}
        filter={filter}
        handleEdit={handleEdit}
        toDo={toDoList}
        onDeleteToDo={onDeleteToDo}
      />
    </>
  );
};
