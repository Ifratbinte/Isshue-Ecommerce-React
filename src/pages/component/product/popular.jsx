import React, {useState} from 'react'
import PopularItem from './popularItem'

function Popular() {
    const [popular] = useState(PopularItem)
  return (
    <div className="feature-category">
        {
            popular.map((currentItem) => {
                const{id, image, title, oldPrice, price} = currentItem;
                return <div kay={id} className="feature-item widget">       
                    <div className="media mb-3">
                        <a className="entry-thumb d-block position-relative bg-white mr-3" href="/product-details">
                            <img src={image} alt="image" width="64"/>
                        </a>
                        <div className="media-body">
                            <h6 className="entry-title product-name overflow-hidden">
                                <a href="/product-details" className="d-block">{title}</a>
                            </h6>
                            <div className="star-rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>                            
                            </div>
                            <p className="entry-meta"><del className="text-muted mr-1">${oldPrice} </del>${price}</p>
                        </div>
                    </div>                                    
                </div> 
            })
        }
            
            
        </div>
  )
}
export default Popular;