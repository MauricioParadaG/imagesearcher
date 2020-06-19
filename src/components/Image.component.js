import React from 'react';

const ImageComponent = props => {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={props.singleImage.previewURL} alt={props.singleImage.tags} className="card-img-top" />

                <div className="card-body">
                <p className="card-text">{props.singleImage.likes} Likes</p>
                <p className="card-text">{props.singleImage.views} Views</p>
                </div>
                
                <div className="card-footer">
                <a className="btn btn-success btn-block" 
                href={props.singleImage.largeImageURL}
                target="_blank"
                rel="noopener noreferrer"
                >View Image</a>
                </div>
            </div>
        </div>
    )
}

export default ImageComponent;
