import React from 'react'
import PropTypes from 'prop-types';
import './Item.css'

const Item = (props) => {
  const { details } = props;
  return (
        <div className='Item'>
            <img className='ItemImg' src={'http://media.4rgos.it/s/Argos/' + details.id + '_R_SET%3Fw=220&h=220'} />
            <div> Title {details.attributes.name} </div>
            <div> Price: {details.attributes.price} </div>
            <div> StarRatings: {_.ceil(details.attributes.avgRating)} </div>
            <div> Reviews: {_.ceil(details.attributes.reviewsCount)} </div>
            <div> FastTrack: {details.attributes.fastTrack ? 'Yes' : 'No'} </div>
            <a href={"http://www.argos.co.uk/product/" + details.id}> More Info about the product! </a>
            <br />
            <button> <b>Add to trolley </b> </button>
        </div>)
}

Item.propTypes = {
  details: PropTypes.object
}

export default Item