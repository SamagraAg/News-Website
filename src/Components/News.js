import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading'
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResultsFetch, setTotalResultsFetch] = useState(0)

    document.title = `KhabarDaar - ${capitalizeFirstLetter(props.category)}`
    const loadNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?category=${props.category
            }&country=${props.country}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`
        const response = await fetch(url);
        const parsedResponse = await response.json()
        setArticles(parsedResponse.articles)
        setTotalResultsFetch(parsedResponse.totalResults)
        setLoading(false);
    }
    useEffect(() => {
        loadNews()
    }, [])
    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?category=${props.category
    }&country=${props.country}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page+1}`
    setPage(page + 1)
        const response = await fetch(url);
        const parsedResponse = await response.json()
        setArticles(articles.concat(parsedResponse.articles))
    }
    return (
        <>
            <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length < totalResultsFetch} loader={<Loading></Loading>}>
                <div className='container my-2'>
                    <h1 className='text-center' style={{marginTop:"4rem",color: "#FFE5AD" }}>Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                    {loading && <Loading></Loading>}

                    <div className="row">
                        {!loading && articles.map((article) => {
                            return <div className="col-md-4" key={article.url}>
                                <NewsItem title={article.title} description={article.description} imageUrl={article.urlToImage} url={article.url} author={article.author} date={article.publishedAt} NewsSource={article.source.name}></NewsItem>
                            </div>
                        })}

                    </div>
                </div >
            </InfiniteScroll>
        </>
    )
}

News.propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string
}

News.defaultProps = {
    pageSize: 9,
    country: "in",
    category: "general"
}

export default News