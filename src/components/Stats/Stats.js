import { StatsItem } from 'components/StatsItem/StatsItem';

export const Stats = ({ title, stats }) => {
  return (
    <>
      {title && <h2>{title}</h2>}
      <ul>
        {stats.map(item => (
          <StatsItem {...item} key={item.id} />
        ))}
      </ul>
    </>
  );
};
