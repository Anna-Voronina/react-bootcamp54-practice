import { GalleryList } from 'components/GallaryList/GallaryList';
import { ToDoForm } from 'components/ToDoForm/ToDoForm';
import { Component } from 'react';
import { getImages } from 'service/image.Api';

export class Gallery extends Component {
  state = {
    page: 1,
    query: '',
    images: [],
    showBtn: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, query } = this.state;
    if (prevState.page !== page || prevState.query !== query) {
      getImages(query, page).then(({ photos, total_results }) => {
        console.log(photos);
        this.setState(prevState => ({
          images: [...prevState.images, ...photos],
          showBtn: page < Math.ceil(total_results / 15),
        }));
      });
    }
  }

  handelSubmit = query => {
    this.setState({
      query: query,
      page: 1,
      images: [],
      showBtn: false,
    });
  };
  onClickButton = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, showBtn } = this.state;
    return (
      <>
        <ToDoForm onSubmit={this.handelSubmit} />
        <GalleryList images={images} />
        {showBtn && (
          <button onClick={this.onClickButton} type="button">
            Load more
          </button>
        )}
      </>
    );
  }
}
