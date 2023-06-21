import { BlogCard } from 'components/BlogCard/BlogCard';
import { Stats } from 'components/Stats/Stats';
import article from 'data/article.json';
import data from 'data/data.json';

export const ModuleOne = () => {
  return (
    <>
      <BlogCard {...article} />
      <Stats title="Main Statistics" stats={data} />
    </>
  );
};
