import CocktailsList from 'components/CocktailsList/CocktailsList';
import React, { useEffect, useState } from 'react';
import { getTrendingCocktails } from 'service/CoctailsApi';
import styled from 'styled-components';

const Coctails = () => {
  const [cocktails, setCocktails] = useState([]);
  useEffect(() => {
    getTrendingCocktails().then(resp => {
      const normalizeResponse = resp.map(cocktail => cocktail.drinks[0]);
      console.log(normalizeResponse);
      setCocktails(normalizeResponse);
    });
  }, []);
  return <CocktailsList arr={cocktails} />;
};

export default Coctails;
