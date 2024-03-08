import React, { Component } from 'react'
const defaultImgUrl = "https://st.depositphotos.com/1011646/1255/i/450/depositphotos_12553000-stock-photo-breaking-news-screen.jpg"
const defaultUrl = "https://timesofindia.indiatimes.com/"

export default class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, url } = this.props
        return (
            <div>
                <div className="my-2 mx-4 card">
                    <img src={imageUrl != null ? imageUrl : defaultImgUrl} style={{height: "12rem" }} className="card-img-top" alt="..." />
                    <div style={{backgroundColor:"black", color:"white"}} className="card-body">
                        <h5 className="card-title text-success">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a target='_blank' href={url} className="btn btn-sm btn-danger">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
