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
import { selectToDos } from 'redux/selectors';
import { deleteTodoAction } from 'redux/actions';

// const getFilteredToDO = (toDoList, filter) => {
//   let count = 0;
//   for (let i = 0; i < 100000000; i++) {
//     count += i;
//   }
//   console.log(count);
//   return toDoList.filter(({ text }) =>
//     text.toLowerCase().includes(filter.toLocaleLowerCase())
//   );
// };

export const ToDoList = ({ theme, toDo, onDeleteToDo, handleEdit, filter }) => {
  // console.time('filter');
  // const todos = useMemo(() => getFilteredToDO(toDo, filter), [toDo, filter]);
  // console.timeEnd('filter');
  const todos = useSelector(selectToDos);
  const dispatch = useDispatch();
  return (
    <Grid select={theme}>
      {todos.map((item, index) => (
        <GridItem key={item.id}>
          <TodoWrapper>
            <Text textAlign="center" marginBottom="20px">
              TODO #{index + 1}
            </Text>
            <Text>{item.text}</Text>
            <DeleteButton
              type="button"
              onClick={() => dispatch(deleteTodoAction(item.id))}
            >
              <RiDeleteBinLine size={24} />
            </DeleteButton>

            <EditButton type="button" onClick={() => handleEdit(item)}>
              <RiEdit2Line size={24} />
            </EditButton>
          </TodoWrapper>
        </GridItem>
      ))}
    </Grid>
  );
};
