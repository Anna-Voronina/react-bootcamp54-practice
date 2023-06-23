import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import {
  BtnEdit,
  FormBtn,
  InputSearch,
  SearchFormStyled,
} from './EditForm.styled';

export const EditForm = ({
  curentToDo,
  handelCansel,
  handelInputEditChange,
  handelUpDateToDo,
}) => {
  return (
    <SearchFormStyled onSubmit={handelUpDateToDo}>
      <BtnEdit type="button" onClick={handelCansel}>
        <MdOutlineCancel size="16px" color="red" />
      </BtnEdit>

      <FormBtn type="submit">
        <RiSaveLine size="16px" color="green" />
      </FormBtn>

      <InputSearch
        onChange={handelInputEditChange}
        placeholder="EDIT TODO"
        name="edit"
        required
        autoFocus
        value={curentToDo.text}
      />
    </SearchFormStyled>
  );
};
