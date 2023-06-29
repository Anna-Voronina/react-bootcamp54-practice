import { GalleryList } from 'components/GallaryList/GallaryList';
import { ToDoForm } from 'components/ToDoForm/ToDoForm';
import { getImages } from 'service/image.Api';
import { useState, useEffect } from 'react';
import { Modal } from 'components/Modal/Modal';

export const Gallery = () => {
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

// export class Gallery extends Component {
//   state = {
//     page: 1,
//     query: '',
//     images: [],
//     showBtn: false,
//   };

// componentDidUpdate(prevProps, prevState) {
//   const { page, query } = this.state;
//   if (prevState.page !== page || prevState.query !== query) {
//     getImages(query, page).then(({ photos, total_results }) => {
//       console.log(photos);
//       this.setState(prevState => ({
//         images: [...prevState.images, ...photos],
//         showBtn: page < Math.ceil(total_results / 15),
//       }));
//     });
//   }
// }

// handelSubmit = query => {
//   this.setState({
//     query: query,
//     page: 1,
//     images: [],
//     showBtn: false,
//   });
// };
// onClickButton = () => {
//   this.setState(prevState => ({
//     page: prevState.page + 1,
//   }));
// };

//   render() {
//     const { images, showBtn } = this.state;
//     return (
// <>
//   <ToDoForm onSubmit={this.handelSubmit} />
//   <GalleryList images={images} />
//   {showBtn && (
//     <button onClick={this.onClickButton} type="button">
//       Load more
//     </button>
//   )}
// </>
//     );
//   }
// }
