import React from 'react';
import ImageComponent from './Image.component';

const ListingImagesComponent = props => {
    return (
        <div className="col-12 p-5 row">
            {props.apiResultState.map(image => (
                <ImageComponent
                    key={image.id}
                    singleImage={image}
                />
            ))}
        </div>
    )
}

export default ListingImagesComponent;
