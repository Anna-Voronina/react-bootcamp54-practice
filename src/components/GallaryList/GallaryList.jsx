import React from 'react';

export const GalleryList = ({ images }) => {
  return (
    <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '15px',
      }}
    >
      {images.map(({ id, alt, src: { large } }) => (
        <li key={id}>
          <img src={large} alt={alt} width="150" />
        </li>
      ))}
    </ul>
  );
};
