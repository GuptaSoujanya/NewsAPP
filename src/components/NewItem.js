import React, { Component } from 'react'

export default class NewItem extends Component {
  render() {
    let {title,description,imageUrl,url,publish,author,source} = this.props;
    return (
        <div>
        <div className="card my-2">
           <img src={imageUrl} className="card-img-top" height={"200vh"} alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}... 
                  <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%", zIndex:"1"}}>
                      {source}
                   </span>
                </h5>
                <p className="card-text">{description}...<a href={url} className="text-dark">read more</a></p>
                <a href={url} className="btn btn-sm btn-dark">Read More</a>
                <p className="text-end"><small className="text-muted">{author?"By "+author:"unknown Author"} on { new Date(publish).toUTCString()}</small></p>
            </div>
        </div>
        </div>
    )
  }
}
