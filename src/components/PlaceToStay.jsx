import React from "react"
import './css/PlaceToStay.css'
import { GoSettings } from "react-icons/go";
function PlaceToStay() {
    return (
        <div className="place_to_stay">
            <div className="place_to_stay_inner">
                <div className="filters">
                    <div className="filter_inner">
                        <div className="filter_items">
                            <p>Resturant</p>
                            <p>Cottage</p>
                            <p>Castle</p>
                            <p>fantast city</p>
                            <p>beach</p>
                            <p>Carbins</p>
                            <p>Off-grid</p>
                            <p>Farm</p>
                            <p id="flt">Location <GoSettings id="flt_icon" /></p>
                        </div>
                        {/* <div className="filter_name">
                            <p>Location <GoSettings /></p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PlaceToStay