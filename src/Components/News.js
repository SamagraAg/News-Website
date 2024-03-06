import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    render() {
        return (
            <div className='container my-2'>
                <h1>Top Headlines</h1>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title="She's On The Way: Taylor Swift Flying To Super Bowl To Watch Travis Kelce's Big Day - Deadline" description="Taylor Swift is in the air and expected to make the Super Bowl." imageUrl="https://deadline.com/wp-content/uploads/2024/02/GettyImages-1970250659-e1707242424930.jpg?w=1024" url="http://deadline.com/2024/02/taylor-swift-flying-super-bowl-1235821287/"></NewsItem>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="She's On The Way: Taylor Swift Flying To Super Bowl To Watch Travis Kelce's Big Day - Deadline" description="Taylor Swift is in the air and expected to make the Super Bowl." imageUrl="https://deadline.com/wp-content/uploads/2024/02/GettyImages-1970250659-e1707242424930.jpg?w=1024" url="http://deadline.com/2024/02/taylor-swift-flying-super-bowl-1235821287/"></NewsItem>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="She's On The Way: Taylor Swift Flying To Super Bowl To Watch Travis Kelce's Big Day - Deadline" description="Taylor Swift is in the air and expected to make the Super Bowl." imageUrl="https://deadline.com/wp-content/uploads/2024/02/GettyImages-1970250659-e1707242424930.jpg?w=1024" url="http://deadline.com/2024/02/taylor-swift-flying-super-bowl-1235821287/"></NewsItem>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="She's On The Way: Taylor Swift Flying To Super Bowl To Watch Travis Kelce's Big Day - Deadline" description="Taylor Swift is in the air and expected to make the Super Bowl." imageUrl="https://deadline.com/wp-content/uploads/2024/02/GettyImages-1970250659-e1707242424930.jpg?w=1024" url="http://deadline.com/2024/02/taylor-swift-flying-super-bowl-1235821287/"></NewsItem>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="She's On The Way: Taylor Swift Flying To Super Bowl To Watch Travis Kelce's Big Day - Deadline" description="Taylor Swift is in the air and expected to make the Super Bowl." imageUrl="https://deadline.com/wp-content/uploads/2024/02/GettyImages-1970250659-e1707242424930.jpg?w=1024" url="http://deadline.com/2024/02/taylor-swift-flying-super-bowl-1235821287/"></NewsItem>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="She's On The Way: Taylor Swift Flying To Super Bowl To Watch Travis Kelce's Big Day - Deadline" description="Taylor Swift is in the air and expected to make the Super Bowl." imageUrl="https://deadline.com/wp-content/uploads/2024/02/GettyImages-1970250659-e1707242424930.jpg?w=1024" url="http://deadline.com/2024/02/taylor-swift-flying-super-bowl-1235821287/"></NewsItem>
                    </div>
                </div>
            </div>
        )
    }
}

export default News