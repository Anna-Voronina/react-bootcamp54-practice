import { FormBtn, SearchFormStyled, InputSearch } from './ToDoForm.styled';
import { FiSearch } from 'react-icons/fi';
import { Component } from 'react';

export class ToDoForm extends Component {
  state = {
    value: '',
  };
  handleChangeValue = ({ target }) => {
    this.setState({ value: target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };
  render() {
    const { value } = this.state;
    return (
      <SearchFormStyled onSubmit={this.handleSubmit}>
        <FormBtn type="submit">
          <FiSearch size="16px" />
        </FormBtn>
        <InputSearch
          value={value}
          onChange={this.handleChangeValue}
          placeholder="What do you want to write?"
          name="search"
          required
          autoFocus
        />
      </SearchFormStyled>
    );
  }
}

// export const ToDoForm = () => {
//   return (
//     <SearchFormStyled>
//       <FormBtn type="submit">
//         <FiSearch size="16px" />
//       </FormBtn>
//       <InputSearch
//         placeholder="What do you want to write?"
//         name="search"
//         required
//         autoFocus
//       />
//     </SearchFormStyled>
//   );
// };
