import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading'

const apiKey = "d0081e97c02642b0a7efae8e5d07a213"
const pageSize = 9

export class News extends Component {
    constructor() {
        super()
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResultsFetch: 0
        }
    }
    async componentDidMount() {
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`
        const response = await fetch(url);
        const parsedResponse = await response.json()
        this.setState({ articles: parsedResponse.articles, totalResultsFetch: parsedResponse.totalResults, loading: false })
    }
    handlePrevClick = async () => {
        this.setState({ loading: true });
        console.log(`Prev Click`);
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page - 1}`
        const response = await fetch(url);
        const parsedResponse = await response.json()
        this.setState({ articles: parsedResponse.articles, page: this.state.page - 1, loading: false })
    }
    handleNextClick = async () => {
        this.setState({ loading: true });
        console.log(`Next Click`);
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page + 1}`
        const response = await fetch(url);
        const parsedResponse = await response.json()
        this.setState({ articles: parsedResponse.articles, page: this.state.page + 1, loading: false })
    }
    render() {
        return (
            <div>
                <div className='container my-2'>
                    <h1 className='text-center'>Top Headlines</h1>
                    {this.state.loading && <Loading></Loading>}
                    <div className="row">
                        {!this.state.loading && this.state.articles.map((article) => {
                            return <div className="col-md-4" key={article.url}>
                                <NewsItem title={article.title} description={article.description} imageUrl={article.urlToImage} url={article.url}></NewsItem>
                            </div>
                        })}

                    </div>
                </div>
                <div className="container mt-3 d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark btn-sm" onClick={this.handlePrevClick}>&laquo; Previous</button>
                    <p>Page: {this.state.page}</p>
                    <button disabled={this.state.page + 1 > (this.state.totalResultsFetch / this.props.pageSize)} type="button" className="btn btn-dark btn-sm" onClick={this.handleNextClick}>Next &raquo;</button>
                </div>
            </div>
        )
    }
}

export default News