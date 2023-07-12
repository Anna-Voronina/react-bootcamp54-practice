import { EditForm } from 'components/EditForm/EditForm';
import Filter from 'components/Filter/Filter';
import { ToDoForm } from 'components/ToDoForm/ToDoForm';
import { ToDoList } from 'components/ToDoList/ToDoList';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllTodos } from 'redux/todo/operations';

const ModuleToDo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentToDo, setCurrentToDo] = useState({});
  const [select] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllTodos());
  }, [dispatch]);
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

    // setToDoList(prevState =>
    //   prevState.map(toDo => (toDo.id === currentToDo.id ? currentToDo : toDo))
    // );
  };

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
        <ToDoForm />
      )}
      <Filter />
      <ToDoList theme={select} handleEdit={handleEdit} />
    </>
  );
};

export default ModuleToDo;
