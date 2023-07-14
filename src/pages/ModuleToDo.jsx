import { EditForm } from 'components/EditForm/EditForm';
import Filter from 'components/Filter/Filter';
import { ToDoForm } from 'components/ToDoForm/ToDoForm';
import { ToDoList } from 'components/ToDoList/ToDoList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsEditing } from 'redux/selectors';
import { fetchAllTodos } from 'redux/todo/operations';

const ModuleToDo = () => {
  const isEditing = useSelector(selectIsEditing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllTodos());
  }, [dispatch]);

  return (
    <>
      {isEditing ? <EditForm /> : <ToDoForm />}
      <Filter />
      <ToDoList />
    </>
  );
};

export default ModuleToDo;
