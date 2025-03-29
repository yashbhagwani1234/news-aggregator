import React, { Component } from 'react'

export class NewsUpdate extends Component {
  render() {
    let {title,description,imageUrl,newUrl }=this.props;
    return (
      <div className='my-3'>
        <div className='card' style={{width:"18rem"}}>
            <img src={imageUrl} class='card-img-top' alt='...'/>
            <div className='card-body'>
                <h5 className='card-title'>{title}</h5>
                <p className='card-text'>{description}....</p>
                <a href={newUrl} className='btn btn-primary'>Read</a>
            </div>

        </div>
      </div>
    )
  }
}

export default NewsUpdate
