import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CocktailsList = ({ arr }) => {
  return (
    <ul>
      {arr.map(el => (
        <li key={el.idDrink}>
          <img src={el.strDrinkThumb} alt={el.strDrink} width="150" />
          <h3>{el.strDrink}</h3>
          <span>{el.strGlass}</span>
        </li>
      ))}
    </ul>
  );
};

// CocktailsList.propTypes = {
//     arr: propTypes.a
// };

export default CocktailsList;
