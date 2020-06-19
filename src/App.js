import React, {useState, useEffect} from 'react';
import FormComponent from './components/Form.component';
import ListingImagesComponent from './components/ListingImages.component';


function App() {

  const [formSearched, setFormSearchedState] = useState('');

  const [apiResult, setApiResultState] = useState([]);
  
  const [actualPage, setActualPageState] = useState(1);

  const [numberOfPages, setNumberOfPagesState] = useState(1);

  useEffect(() => {
    //console.log(formSearched.city);
    const checkingApi = async () =>{

      if(formSearched !==''){
        
        const imagesPerPage = 30;
        const appId = '17110992-721bd6557373ad88d048f01ed';
        const url =  `https://pixabay.com/api/?key=${appId}&q=${formSearched}&per_page=${imagesPerPage}`;
        // Getting the answer from that url query
        const res =  await fetch(url);
        const data = await res.json();
  
        //console.log(data);
        setApiResultState(data.hits);

        const howManyPages = Math.ceil(data.totalHits / imagesPerPage);
        setNumberOfPagesState(howManyPages);

      }
    };
    checkingApi();
  }, [formSearched]);


  const previousPage = () => {
    const newActualPage = actualPage - 1;
    if (newActualPage === 0) return;
    setActualPageState(newActualPage);
    console.log(newActualPage);
  }

  const nextPage = () => {
    const newActualPage = actualPage + 1;
    if (newActualPage > numberOfPages) return;
    setActualPageState(newActualPage);    
    console.log(newActualPage);
  }


  return (
      <div className="container">
        <div className="jumbotron">
          <p className="lead text-center">Images Searcher</p>

          <FormComponent
          setFormSearchedState={setFormSearchedState}
          />
         </div>

        <div className="row justify-content-center">
          <ListingImagesComponent
          apiResultState={apiResult}
          />

        <button type="button" className="btn btn-info mr-1" onClick={previousPage}>
        &laquo; Previous Page 
        </button>

        <button type="button" className="btn btn-info mr-1" onClick={nextPage}>
          Next Page &raquo;
        </button>

        </div>

      </div>
  );
}

export default App;
