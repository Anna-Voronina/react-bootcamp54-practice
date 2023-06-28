import { useState } from 'react';
import { FormBtn, SearchFormStyled, InputSearch } from './ToDoForm.styled';
import { FiSearch } from 'react-icons/fi';


export const ToDoForm =({onSubmit}) => {
 const [value, setValue] = useState('')
 
  const handleChangeValue = ({ target }) => {
  setValue(target.value)
  };
 
  const handleSubmit = e => {
    e.preventDefault();
  
    onSubmit(value);
   setValue('')
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
}

