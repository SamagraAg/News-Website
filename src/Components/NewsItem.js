import React, { Component } from 'react'
const defaultImgUrl = "https://st.depositphotos.com/1011646/1255/i/450/depositphotos_12553000-stock-photo-breaking-news-screen.jpg"
const defaultUrl = "https://timesofindia.indiatimes.com/"

export default class NewsItem extends Component {
    getDate = () => {
        const d = new Date(this.props.date);
        return d.toDateString();
    }
    render() {
        let { title, description, imageUrl, url, author, date, NewsSource } = this.props
        return (
            <div>
                <div className="my-2 mx-4 card">
                    <div className="position-absolute top-0 translate-middle badge rounded-pill bg-success">{NewsSource}</div>
                    <img src={imageUrl != null ? imageUrl : defaultImgUrl} style={{ height: "12rem" }} className="card-img-top" alt="..." />
                    <div style={{ backgroundColor: "black", color: "white" }} className="card-body">
                        <h5 className="card-title text-warning">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-light">By {!author ? "unknown" : author} on {this.getDate()}</small></p>
                        <a target='_blank' href={url} className="btn btn-sm btn-danger">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
