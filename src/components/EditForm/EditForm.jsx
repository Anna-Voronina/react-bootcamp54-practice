import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import {
  BtnEdit,
  FormBtn,
  InputSearch,
  SearchFormStyled,
} from './EditForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { editTodoThunk } from 'redux/todo/operations';
import { toggleEditing } from 'redux/todo/todoSlice';
import { selectCurrentTodo } from 'redux/selectors';
import { useState } from 'react';

export const EditForm = () => {
  const currentTodo = useSelector(selectCurrentTodo);
  const dispatch = useDispatch();
  const [text, setText] = useState(currentTodo.text);
  const handleChange = e => {
    setText(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editTodoThunk({ id: currentTodo.id, text }));
  };
  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <BtnEdit type="button" onClick={() => dispatch(toggleEditing())}>
        <MdOutlineCancel size="16px" color="red" />
      </BtnEdit>

      <FormBtn type="submit">
        <RiSaveLine size="16px" color="green" />
      </FormBtn>

      <InputSearch
        onChange={handleChange}
        placeholder="EDIT TODO"
        name="edit"
        value={text}
        required
        autoFocus
      />
    </SearchFormStyled>
  );
};
