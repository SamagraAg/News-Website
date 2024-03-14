import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading'
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const apiKey = "bc1fd5b3920b4c1ca0577ab4ef63ca5d"
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
export class News extends Component {
    static propTypes = {
        pageSize: PropTypes.number,
        country: PropTypes.string,
        category: PropTypes.string
    };
    static defaultProps = {
        pageSize: 9,
        country: "in",
        category: "general"
    }
    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResultsFetch: 0
        }
        document.title = `NewsMonkey - ${capitalizeFirstLetter(this.props.category)}`
    }
    async componentDidMount() {
        const url = `https://newsapi.org/v2/top-headlines?category=${this.props.category
            }&country=${this.props.country}&apiKey=${apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`
        const response = await fetch(url);
        const parsedResponse = await response.json()
        this.setState({ articles: parsedResponse.articles, totalResultsFetch: parsedResponse.totalResults, loading: false })
    }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?category=${this.props.category
            }&country=${this.props.country}&apiKey=${apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`
        const response = await fetch(url);
        const parsedResponse = await response.json()
        this.setState({ articles: this.state.articles.concat(parsedResponse.articles) })
    }
    render() {
        return (
            <>
                <InfiniteScroll dataLength={this.state.articles.length} next={this.fetchMoreData} hasMore={this.state.articles.length < this.state.totalResultsFetch} loader={<Loading></Loading>}>
                    <div className='container my-2'>
                        <h1 className='text-center' style={{ color: "#FFE5AD" }}>Top {capitalizeFirstLetter(this.props.category)} Headlines</h1>
                        {this.state.loading && <Loading></Loading>}

                        <div className="row">
                            {!this.state.loading && this.state.articles.map((article) => {
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
}

export default News