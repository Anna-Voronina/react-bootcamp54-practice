import CocktailsList from 'components/CocktailsList/CocktailsList';
import { ToDoForm } from 'components/ToDoForm/ToDoForm';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getFilteredCocktails } from 'service/CoctailsApi';

const SearchCocktails = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [cocktails, setCocktails] = useState([]);
  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) {
      return;
    }
    getFilteredCocktails(query).then(({ drinks }) => setCocktails(drinks));
  }, [searchParams]);
  const handleSubmit = q => {
    setSearchParams({ query: q });
  };

  return (
    <>
      {' '}
      <ToDoForm onSubmit={handleSubmit} />
      <CocktailsList arr={cocktails} />
    </>
  );
};

export default SearchCocktails;
