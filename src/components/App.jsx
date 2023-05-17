import { useState, useEffect } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Searchbar } from './Searchbar/Searchbar';
import { getFetch } from './Api';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [url, setUrl] = useState('');
  const [tags, setTags] = useState('');
  const [error, setError] = useState(false);
  const [isEmpty, setEmpty] = useState(false);
  const [total, setTotal] = useState(1);

  const handleQueryForm = newValue => {
    if (query !== newValue) {
      setResponse([]);
      setQuery(newValue);
      setPage(1);
    }
    
    setQuery(newValue)
  };
  useEffect(()=>{
    
         async function getRequest(){
          setIsLoading(true)
          try{
            const response = await getFetch(query, page)
            const newImages = response.hits;
            const totalHits = response.totalHits;
            if(totalHits === 0){
              setEmpty(true)
              setIsLoading(true)
              return
            }
            
            setResponse(prevResponse=>[...prevResponse, ...newImages]);
            setEmpty(false);
            setTotal(totalHits)
          }
          catch(error){
            
            setError(true)
          }
          finally{
            
            setIsLoading(false)
          }
        }
        if(query)
        {getRequest()}
    }, [query, page])

  
  const onClickModal = (url, alt) => {
    setShowModal(true);
    setUrl(url);
    setTags(alt);

  
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (<>
    <Searchbar onSubmit={handleQueryForm} />
        {!isLoading && isEmpty && <p className='No-image'>No image</p>}
        {error && <p className="Error-message">
No images for your request</p>}
        {response.length >0 && <ImageGallery images={response} onClick={onClickModal}/>}
        {isLoading && <Loader />}
        {!isLoading && total/12 > page && <Button onLoad={() => setPage(prevPage => prevPage + 1)} />}
        {showModal && <Modal onClose={closeModal} url={url} alt={tags} />}
      </>
    
  );
  }

  


  

  



