import {
  DeleteButton,
  EditButton,
  Grid,
  GridItem,
  Text,
  TodoWrapper,
} from './ToDoList.styled';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';

export const ToDoList = ({ toDo, onDeleteToDo }) => {
  return (
    <Grid>
      {toDo.map((item, index) => (
        <GridItem key={item.id}>
          <TodoWrapper>
            <Text textAlign="center" marginBottom="20px">
              TODO #{index + 1}
            </Text>
            <Text>{item.text}</Text>
            <DeleteButton type="button" onClick={() => onDeleteToDo(item.id)}>
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
