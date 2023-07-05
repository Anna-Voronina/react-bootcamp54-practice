import { useState } from 'react';
import { FormBtn, SearchFormStyled, InputSearch } from './ToDoForm.styled';
import { FiSearch } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoAction } from 'redux/actions';
import { selectToDos } from 'redux/selectors';

export const ToDoForm = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(selectToDos);
  const handleChangeValue = ({ target }) => {
    setValue(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isExsist = todos.find(
      elem => elem.text.toLowerCase() === value.toLowerCase()
    );
    if (isExsist) {
      alert('Text already exsist!');
      return;
    }

    dispatch(addTodoAction(value));
    setValue('');
  };
  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        value={value}
        onChange={handleChangeValue}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </SearchFormStyled>
  );
};
