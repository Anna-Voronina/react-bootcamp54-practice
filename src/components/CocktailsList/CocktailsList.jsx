import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const CocktailsList = ({ arr }) => {
  const location = useLocation();
  return (
    <ul>
      {arr.map((el, index) => (
        <li key={el.idDrink + index}>
          <Link to={`/searchcocktails/${el.idDrink}`} state={{from: location}}>
            <img src={el.strDrinkThumb} alt={el.strDrink} width="150" />
            <h3>{el.strDrink}</h3>
            <span>{el.strGlass}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

// CocktailsList.propTypes = {
//     arr: propTypes.a
// };

export default CocktailsList;
