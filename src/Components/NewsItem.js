import React from 'react'
const defaultImgUrl = "https://st.depositphotos.com/1011646/1255/i/450/depositphotos_12553000-stock-photo-breaking-news-screen.jpg"

const NewsItem = (props) => {
    let { title, description, imageUrl, url, author, date, NewsSource } = props
    return (
        <div>
            <div className="my-2 mx-4 card">
                <div style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: "0" }}>
                    <span className="badge rounded-pill bg-success">{NewsSource}</span>
                </div>
                <img src={imageUrl != null ? imageUrl : defaultImgUrl} style={{ height: "12rem" }} className="card-img-top" alt="..." />
                <div style={{ backgroundColor: "black", color: "white" }} className="card-body">
                    <h5 className="card-title text-warning">{title ? title : "NEWS"}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-light">By {!author ? "unknown" : author} on {new Date(props.date).toDateString()}</small></p>
                    <a target='_blank' href={url} className="btn btn-sm btn-danger">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
