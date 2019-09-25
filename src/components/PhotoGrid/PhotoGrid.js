import React from 'react';
import PhotoGridItem from './PhotoGridItem.js';
import './PhotoGrid.css';

const PhotoGrid = (props) => {
    return (<div className={`${props.className} photo-grid`}>
        <ul>
            <PhotoGridItem />
        </ul>
    </div>);
}

export default PhotoGrid;