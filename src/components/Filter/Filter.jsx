import { useDispatch } from 'react-redux';
import { addFilterAction } from 'redux/actions';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <input
      placeholder="find to do"
      onChange={e => dispatch(addFilterAction(e.target.value))}
    />
  );
};

export default Filter;
