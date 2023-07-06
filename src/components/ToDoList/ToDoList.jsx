import { useDispatch, useSelector } from 'react-redux';
import {
  DeleteButton,
  EditButton,
  Grid,
  GridItem,
  Text,
  TodoWrapper,
} from './ToDoList.styled';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { selectFilter, selectToDos } from 'redux/selectors';
import { deleteTodo } from 'redux/todoSlice';

export const ToDoList = ({ theme, handleEdit }) => {
  const todos = useSelector(selectToDos);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const getFilterTodo = () => {
    return todos.filter(({ text }) =>
      text.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  };
  const filteredTodos = getFilterTodo();

  return (
    <Grid select={theme}>
      {filteredTodos.map((item, index) => (
        <GridItem key={item.id}>
          <TodoWrapper>
            <Text textAlign="center" marginBottom="20px">
              TODO #{index + 1}
            </Text>
            <Text>{item.text}</Text>
            <DeleteButton
              type="button"
              onClick={() => dispatch(deleteTodo(item.id))}
            >
              <RiDeleteBinLine size={24} />
            </DeleteButton>

            <EditButton type="button" onClick={() => null}>
              <RiEdit2Line size={24} />
            </EditButton>
          </TodoWrapper>
        </GridItem>
      ))}
    </Grid>
  );
};
