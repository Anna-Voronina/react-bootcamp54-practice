import { BlogCard } from './BlogCard/BlogCard';
import article from 'data/article.json';
import { Stats } from './Stats/Stats';
import data from 'data/data.json';

export const App = () => {
  return (
    <>
      <BlogCard {...article} />
      <Stats title="Main Statistics" stats={data} />{' '}
    </>
  );
};
