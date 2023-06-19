export const StatsItem = ({ total, title }) => {
  return (
    <li>
      {/* Тут має бути іконка */}
      <h3>{total}</h3>
      <p>{title}</p>
    </li>
  );
};
