import React, { Component } from 'react'
import NewsItem from './NewsItem'

const apiKey = "d0081e97c02642b0a7efae8e5d07a213"
const pageSize = 9

export class News extends Component {
    constructor() {
        super()
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResultsFetch: 0
        }
    }
    async componentDidMount() {
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&pageSize=${pageSize}&page=${this.state.page}`
        const response = await fetch(url);
        const parsedResponse = await response.json()
        this.setState({ articles: parsedResponse.articles })
        this.setState({ totalResultsFetch: parsedResponse.totalResults })
    }
    handlePrevClick = async () => {
        console.log(`Prev Click`);
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&pageSize=${pageSize}&page=${this.state.page - 1}`
        const response = await fetch(url);
        const parsedResponse = await response.json()
        this.setState({ articles: parsedResponse.articles })
        this.setState({ page: this.state.page - 1 })
    }
    handleNextClick = async () => {
        console.log(`Next Click`);
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&pageSize=${pageSize}&page=${this.state.page + 1}`
        const response = await fetch(url);
        const parsedResponse = await response.json()
        this.setState({ articles: parsedResponse.articles })
        this.setState({ page: this.state.page + 1 })
    }
    render() {
        return (
            <div>
                <div className='container my-2'>
                    <h1>Top Headlines</h1>
                    <div className="row">
                        {this.state.articles.map((article) => {
                            return <div className="col-md-4" key={article.url}>
                                <NewsItem title={article.title} description={article.description} imageUrl={article.urlToImage} url={article.url}></NewsItem>
                            </div>
                        })}

                    </div>
                </div>
                <div className="container mt-3 d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark btn-sm" onClick={this.handlePrevClick}>&laquo; Previous</button>
                    <p>Page: {this.state.page}</p>
                    <button disabled={this.state.page + 1 > (this.state.totalResultsFetch / pageSize)} type="button" className="btn btn-dark btn-sm" onClick={this.handleNextClick}>Next &raquo;</button>
                </div>
            </div>
        )
    }
}

export default News