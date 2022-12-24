import { useState, useEffect } from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { getFetch } from './Api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import Modal from './Modal/Modal';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [url, setUrl] = useState('');
  const [tags, setTags] = useState('');

  const handleQueryForm = newValue => {
    console.log(newValue);
    if (query === newValue) {
      return;
    }
    setResponse([]);
    setQuery(newValue);
    setPage(1);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function getNewFetch() {
      try {
        const newImages = await getFetch(query, page);
        console.log(newImages);
      } catch {}
    }
    getNewFetch();
  });

  return (
    <>
      <Searchbar onSubmit={handleQueryForm} />
      <ImageGallery>
        {response &&
          response.map(({ id, webformatURL, largeImageURL, tags }) => {
            return (
              <ImageGalleryItem
                key={id}
                originalUrl={largeImageURL}
                url={webformatURL}
                alt={tags}
                onClick={this.onClickModal}
              />
            );
          })}
      </ImageGallery>
      {isLoading && <Loader />}
      {response.length > 0 && <Button onLoad={this.loadMore} />}
      {showModal && <Modal onClose={this.closeModal} url={url} alt={tags} />}
    </>
  );
};

// export class App extends Component {
//   state = {
//     query: '',
//     page: 1,
//     response: [],
//     isLoading: false,
//     showModal: false,
//     url: '',
//     tags: '',
//   };
// async componentDidUpdate(prevProps, prevState) {
//   const { query, page } = this.state;
//   if (prevState.query !== query || prevState.page !== page) {
//     this.setState({ isLoading: true });
//     const newFetch = await getFetch(query, page);
//     console.log(newFetch);
//     this.setState(prevState => {
//       return {
//         response: [...prevState.response, ...newFetch],
//       };
//     });
//     this.setState({ isLoading: false });
//   }
// }

//   handleQueryForm = newValue => {
//     if (this.state.query !== newValue) {
//       this.setState({ response: [], query: newValue, page: 1 });
//     }
//     this.setState({ query: newValue });
//     console.log(newValue);
//   };

//   loadMore = () => {
//     this.setState(prevState => ({ page: prevState.page + 1 }));
//   };
//   closeModal = () => {
//     this.setState({ showModal: false });
//   };
//   onClickModal = (url, alt) => {
//     this.setState({ showModal: true, url: url, tags: alt });
//   };

//   render() {
//     console.log(this.state);
//     const { response, isLoading, showModal, url, tags } = this.state;
//     return (
//       <>
//         <Searchbar onSubmit={this.handleQueryForm} />
//         <ImageGallery>
//           {response &&
//             response.map(({ id, webformatURL, largeImageURL, tags }) => {
//               return (
//                 <ImageGalleryItem
//                   key={id}
//                   originalUrl={largeImageURL}
//                   url={webformatURL}
//                   alt={tags}
//                   onClick={this.onClickModal}
//                 />
//               );
//             })}
//         </ImageGallery>
//         {isLoading && <Loader />}
//         {response.length > 0 && <Button onLoad={this.loadMore} />}
//         {showModal && <Modal onClose={this.closeModal} url={url} alt={tags} />}
//       </>
//     );
//   }
// }
