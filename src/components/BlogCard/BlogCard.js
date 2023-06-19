import { formatDateToNow } from 'service/formatDate';

export const BlogCard = ({
  name,
  postedAt,
  poster,
  tag,
  title,
  description,
  avatar,
}) => {
  return (
    <div>
      <div>
        <img src={poster} alt={tag} />
      </div>
      <div>
        <h2>{tag}</h2>
        <p>{title}</p>
        <p>{description}</p>
      </div>
      <div>
        <div>
          <img src={avatar} alt={name} />
          <div>
            <h3>{name}</h3>
            <p>{formatDateToNow(postedAt)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
