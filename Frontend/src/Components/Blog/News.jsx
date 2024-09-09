import React, { useState, useEffect, useRef } from 'react';
import Newsitem from './Newsitem';
import InfiniteScroll from "react-infinite-scroll-component";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import the right arrow icon
import { BASE_URL } from '../../config';
const News = () => {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const scrollContainerRef = useRef(null); // Reference to the scroll container

    const fetchNews = async () => {
        
        
        const url = `${BASE_URL}/news/get`
        
        const response = await fetch(url);
        const result = await response.json();
        const data=result.data
        setArticles((prevArticles) => [...prevArticles, ...data.articles]);
        setTotalResults(data.totalResults);
    };

    useEffect(() => {
        fetchNews(); // Fetch on component mount
    }, []);  

    const fetchMoreData = () => {
        setPage((prevPage) => prevPage + 1);
        fetchNews(page + 1);
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 400, // Scrolls by 400px; adjust as needed
                behavior: 'smooth' // Smooth scrolling effect
            });
        }
    };
    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -400, // Scrolls left by 400px; adjust as needed
                behavior: 'smooth' // Smooth scrolling effect
            });
        }
    };    

    return (
        <>
            <div className="p-2 bg-secondary text-{text__para} mb-2 relative"> {/* Added relative positioning */}
                

                {/* Infinite Scroll */}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    style={{ overflowX: 'hidden' }} // Prevent vertical scrollbars
                >
                    <div className="container-fluid relative"> {/* Added relative positioning */}
                        <div 
                            className="row flex-nowrap" 
                            style={{ 
                                overflowX: 'auto', // Enable horizontal scrolling
                                whiteSpace: 'nowrap', // Ensure items are in a single line
                                scrollbarWidth: 'none', // For Firefox
                                msOverflowStyle: 'none' // For Internet Explorer and Edge
                            }}
                            ref={scrollContainerRef} // Reference to the scroll container
                        >
                            <div 
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-sky-400 rounded-full p-3 shadow-lg cursor-pointer z-10"
                            onClick={scrollLeft} // Add onClick handler to the icon
                        >
                            <FaArrowLeft size={24} color="white" /> {/* Adjust size and color as needed */}
                        </div>
                            {articles.map((article,index) => (
                                <div 
                                    className="col-md-3 d-inline-block mb-[70px]" 
                                    key={`${article.url}-${index}`}
                                    style={{ display: 'inline-block', width: '400px' }} // Increase width of each card
                                >
                                    <Newsitem key={article.url}
                                        title={article.title || "No title"} 
                                        description={article.description || "No description"} 
                                        imageUrl={article.urlToImage} 
                                        newsUrl={article.url} 
                                        author={article.author} 
                                        date={article.publishedAt} 
                                        source={article.source.name} 
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Icon */}
                        <div 
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-sky-400 rounded-full p-3 shadow-lg cursor-pointer z-10"
                            onClick={scrollRight} // Add onClick handler to the icon
                        >
                            <FaArrowRight size={24} color="white" /> {/* Adjust size and color as needed */}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        </>
    );
};

export default News;
