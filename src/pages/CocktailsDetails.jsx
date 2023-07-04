import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getCocktailInfo } from 'service/CoctailsApi';

const CocktailsDetails = () => {  
  const [cocktailInfo, setCoctailInfo] = useState(null);
  const { cocktailId } = useParams();
  const location = useLocation();
  useEffect(() => {
    getCocktailInfo(cocktailId).then(data => setCoctailInfo(data));
  }, [cocktailId]);

  if (!cocktailInfo) return;
  return <>
  <Link to={location?.state?.from || '/'}>Go back</Link>
  <img src={cocktailInfo.strDrinkThumb} alt={cocktailInfo.strDrink}/>
  <h1>{cocktailInfo.strDrink}</h1>  
  </>;
};

export default CocktailsDetails;
