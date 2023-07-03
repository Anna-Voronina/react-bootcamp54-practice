import { GalleryList } from 'components/GallaryList/GallaryList';
import { ToDoForm } from 'components/ToDoForm/ToDoForm';
import { getImages } from 'service/image.Api';
import { useState, useEffect } from 'react';
import { Modal } from 'components/Modal/Modal';

const Gallery = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [showBtn, setShowBtn] = useState(false);
  const [largeImg, setLargeImg] = useState('');
  const [altImg, setAltImg] = useState('');

  useEffect(() => {
    if (!query) return;
    getImages(query, page).then(({ photos, total_results }) => {
      setImages(prev => [...prev, ...photos]);
      setShowBtn(page < Math.ceil(total_results / 15));
    });
  }, [page, query]);

  const handelSubmit = query => {
    setQuery(query);
    setPage(1);
    setImages([]);
    setShowBtn(false);
  };

  const onClickButton = () => {
    setPage(prevState => prevState + 1);
  };

  const openModal = ({ large, alt }) => {
    setLargeImg(large);
    setAltImg(alt);
  };

  const closeModal = () => {
    setLargeImg('');
    setAltImg('');
  };

  return (
    <>
      <ToDoForm onSubmit={handelSubmit} />
      <GalleryList images={images} openModal={openModal} />
      {showBtn && (
        <button onClick={onClickButton} type="button">
          Load more
        </button>
      )}
      {largeImg && (
        <Modal largeImg={largeImg} altImg={altImg} closeModal={closeModal} />
      )}
    </>
  );
};

export default Gallery;
