import React, { Component } from 'react'
import PriceRange from '../reactActions/priceRange'

class ProductPageleft extends Component {
  render() {
    return (
        <div className="col-md-3">
            <div className="left-sidebar p-3 rounded">
                <div className="card mb-4">
                    <div className="card-header d-flex align-items-center justify-content-between">
                        <h5 className="mb-0">Travel</h5>
                        <i className="fa fa-sliders card-header_icon" aria-hidden="true"></i>
                    </div>
                    
                    <div className="card-body">
                        <ul className="subcategories list-unstyled">
                            <li>
                                <a href="" className="d-flex align-items-center mb-2 text-black">
                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                    <span className="name">Travel</span>
                                    <span className="total text-black-50 ml-2">(9)</span>
                                </a>
                            </li>
                            
                            <li>
                                <a href="" className="d-flex align-items-center mb-2 text-black">
                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                    <span className="name">Tshirt</span>
                                    <span className="total text-black-50 ml-2">(0)</span>
                                </a>
                            </li>
                            
                            <li>
                                <a href="" className="d-flex align-items-center mb-2 text-black">
                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                    <span className="name">Shoes</span>
                                    <span className="total text-black-50 ml-2">(0)</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="card mb-4">
                    <div className="card-header d-flex align-items-center justify-content-between">
                        <h5 className="mb-0">Price</h5>
                        <i className="fa fa-sliders card-header_icon" aria-hidden="true"></i>
                    </div>
                    
                    <div className="card-body">
                        <PriceRange />
                    </div>
                </div>

                <div className="card mb-4">
                    <div className="card-header d-flex align-items-center justify-content-between">
                        <h5 className="mb-0">Brand</h5>
                        <i className="fa fa-sliders card-header_icon" aria-hidden="true"></i>
                    </div>
                    
                    <div className="card-body">
                        <div className="custom-control custom-checkbox mr-sm-2 py-2">
                            <input type="checkbox" className="custom-control-input" id="customControlAutosizing"/>
                            <label className="custom-control-label" htmlFor="customControlAutosizing">Bata</label>
                        </div>

                        <div className="custom-control custom-checkbox mr-sm-2 py-2">
                            <input type="checkbox" className="custom-control-input" id="customControlAutosizing1"/>
                            <label className="custom-control-label" htmlFor="customControlAutosizing1">Apex</label>
                        </div>

                        <div className="custom-control custom-checkbox mr-sm-2 py-2">
                            <input type="checkbox" className="custom-control-input" id="customControlAutosizing2"/>
                            <label className="custom-control-label" htmlFor="customControlAutosizing2">Samsung</label>
                        </div>

                        <div className="custom-control custom-checkbox mr-sm-2 py-2">
                            <input type="checkbox" className="custom-control-input" id="customControlAutosizing3"/>
                            <label className="custom-control-label" htmlFor="customControlAutosizing3">Vivo</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
export default ProductPageleft;