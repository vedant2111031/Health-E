import React, { useState, useEffect } from 'react';
import Newsitem from './Newsitem';
import InfiniteScroll from "react-infinite-scroll-component";
import { BASE_URL } from '../../config';

const News = () => {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const fetchNews = async (page = 1) => {
        const url = `${BASE_URL}/news/get?page=${page}`;
        
        const response = await fetch(url);
        const result = await response.json();
        
        const data = result.data;
        setArticles((prevArticles) => [...prevArticles, ...data.articles]);
        setTotalResults(data.totalResults);
    };

    useEffect(() => {
        fetchNews(); // Fetch on component mount
    }, []);  // Empty dependency array to fetch only on the first render

    const fetchMoreData = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        fetchNews(nextPage);
    };

    return (
        <>
            <div className="bg-secondary text-{headingColor} py-8 px-4">
                <div className='justify-center flex flex-col mx-auto container'>
                    <h1 className="text-center text-3xl font-bold mb-6">
                        Health Blogs...
                    </h1>
                    <p className='text-{text__para} m-auto items-center font-serif text-grey-400  text-center'>
                        "The doctor of the future will give no medicine, but will instruct his patients in care of the human frame,
                        <br/> in diet, and in the cause and prevention of disease.” –  Thomas Edison
                    </p>
                </div>

                {/* Infinite Scroll */}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<h4>Loading...</h4>}
                >
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {articles.map((article, index) => (
                                <div key={`${article.url}-${index}`}>
                                    <Newsitem
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
                    </div>
                </InfiniteScroll>
            </div>
        </>
    );
};

export default News;
