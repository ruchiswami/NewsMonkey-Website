import React from "react";
import { useEffect,useState } from 'react';
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props)=>{ 
  const[articles, setArticles] = useState([]);
  const[loading, setLoading] = useState(true);
  const[page, setPage] = useState(1);
  const[totalResults, setTotalResults] = useState(0);
  
  
  const capitalizeFirstLetter=(s)=> {

    return s[0].toUpperCase() + s.slice(1);
}
 
  const updateNews=  async ()=>{
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9fffd1c5ce9646e195ecf963b9080af6&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }
  useEffect(() => {
    document.title= `${capitalizeFirstLetter(props.category)}-NewsMonkey`;
    // Your side effect code goes here
    updateNews();
}, []);


  const handlePrevClick = async () => {
    // console.log("Previous");
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9fffd1c5ce9646e195ecf963b9080af6&page=${this.state.page -1}&pageSize=${props.pageSize}`;
    // this.setState({loading: true})
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({page: this.state.page -1,
    //   articles: parsedData.articles,
    //   loading: false

    //})
    
    setPage(page-1);
    updateNews();
  }
  const handleNextClick = async () => {
  //   console.log("Next");
  //   if(!this.state.page +1 > Math.ceil (this.state.totalResults/props.pageSize )){
  //   }
  //   else {

    
  //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9fffd1c5ce9646e195ecf963b9080af6&page=${this.state.page +1}&pageSize=${props.pageSize}`;
  //   this.setState({loading: true})
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
    
  //   this.setState({
  //     page: this.state.page +1,
  //     articles: parsedData.articles,
  //     loading: false

  //   })
  // }
 setPage(page+1);
  updateNews();
  }
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9fffd1c5ce9646e195ecf963b9080af6&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(prevPage => page+1);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(prevArticles => [...prevArticles, ...parsedData.articles]);
    setTotalResults(parsedData.totalResults);
    
    
  };
  
    return (
      <>

        <h1 className ="text-center" style ={{margin : '35px 30px', marginTop:'90px'}}> NewsMonkey-Top{capitalizeFirstLetter(props.category)} </h1>
        {loading &&<Spinner />}
        <InfiniteScroll
          dataLength={articles?.length || 0}
          next={fetchMoreData}
          hasMore={articles?.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">

      
         
       
        <div className="row">
        { articles &&
        articles.map((element)=> {
          return <div className="col-md-4"  key ={ element.url}>
          <NewsItem  title={element.title ?element.title.slice (0,45): ""} description= {element.description ? element.description.slice (0,88) :""} imageUrl = {element.urlToImage} newsUrl= {element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
        </div>
        })}
          
          </div>
        </div>
        </InfiniteScroll>
        
      </>
    );
  }
    News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
  }

    News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}


export default News;
