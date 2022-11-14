import React from "react"
import './css/PlaceToStay.css'
import { GoSettings } from "react-icons/go";
import { useState } from "react";
import image5 from './images/Vector 4.png'
import image6 from './images/MBToken.png'
import image7 from './images/OpenSea.png'
import image8 from './images/metamask.png'
import image9 from './images/Frame 151.png'
import image10 from './images/Frame 151 1.png'
import image11 from './images/Frame 151 2.png'
import image12 from './images/Frame 151 3.png'
import image13 from './images/Frame 151 4.png'
import image14 from './images/Frame 151 5.png'
import image15 from './images/Frame 151 6.png'
import image16 from './images/Frame 151 7.png'
import image17 from './images/Frame 151 8.png'
import image18 from './images/Frame 151 9.png'
import image19 from './images/Frame 151 10.png'
import image20 from './images/Frame 151 11.png'
import image21 from './images/Frame 151 12.png'
import image22 from './images/Frame 151 13.png'
import image23 from './images/Frame 151 14.png'
import image24 from './images/Frame 151 15.png'
import image25 from './images/Frame 151 16.png'

import { FaStar } from "react-icons/fa";
function PlaceToStay() {

    const [isFIlterShow, setIsFilterShow] = useState(false)

    return (
        <div className="place_to_stay">
            <div className="place_to_stay_inner">
                <div className="filters">

                    <div className="filter_inner">
                        <div className="filter_name">
                            <p id="flt" onClick={() => {
                                setIsFilterShow(!isFIlterShow)
                            }}>Location <GoSettings id="flt_icon" /></p>
                        </div>
                        <div className={isFIlterShow ? 'filter_items_sm' : 'filter_items'}>
                            <p>Resturant</p>
                            <p>Cottage</p>
                            <p>Castle</p>
                            <p>fantast city</p>
                            <p>beach</p>
                            <p>Carbins</p>
                            <p>Off-grid</p>
                            <p>Farm</p>
                            <p id="flt" className="flt_lg">Location <GoSettings id="flt_icon" /></p>
                        </div>

                    </div>
                </div>
            </div>


            <div className="inspiration">

                <div className="inspiration_inner">
                    <div className="inspiration_item">
                        <div className="inspiration_box">

                            <img src={image13} alt="" />

                            <div className="inspiration_text">
                                <div className="insp_text1">
                                    <p>Desert king</p>
                                    <p>2345km away</p>
                                </div>
                                <div className="insp_text2">
                                    <h6>1MBT per night</h6>
                                    <p>available for 2weeks stay</p>
                                </div>
                            </div>
                            <div className="insp_icons">
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                            </div>

                        </div>
                    </div>

                    <div className="inspiration_item">

                        <div className="inspiration_box">
                            <img src={image14} alt="" />

                            <div className="inspiration_text">
                                <div className="insp_text1">
                                    <p>Desert king</p>
                                    <p>2345km away</p>
                                </div>
                                <div className="insp_text2">
                                    <h6>1MBT per night</h6>
                                    <p>available for 2weeks stay</p>
                                </div>
                            </div>
                            <div className="insp_icons">
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                            </div>
                        </div>
                    </div>

                    <div className="inspiration_item">
                        <div className="inspiration_box">
                            <img src={image15} alt="" />

                            <div className="inspiration_text">
                                <div className="insp_text1">
                                    <p>Desert king</p>
                                    <p>2345km away</p>
                                </div>
                                <div className="insp_text2">
                                    <h6>1MBT per night</h6>
                                    <p>available for 2weeks stay</p>
                                </div>
                            </div>
                            <div className="insp_icons">
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                            </div>
                        </div>
                    </div>

                    <div className="inspiration_item">
                        <div className="inspiration_box">
                            <img src={image16} alt="" />

                            <div className="inspiration_text">
                                <div className="insp_text1">
                                    <p>Desert king</p>
                                    <p>2345km away</p>
                                </div>
                                <div className="insp_text2">
                                    <h6>1MBT per night</h6>
                                    <p>available for 2weeks stay</p>
                                </div>
                            </div>
                            <div className="insp_icons">
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                            </div>
                        </div>
                    </div>

                    <div className="inspiration_item">
                        <div className="inspiration_box">
                            <img src={image9} alt="" />

                            <div className="inspiration_text">
                                <div className="insp_text1">
                                    <p>Desert king</p>
                                    <p>2345km away</p>
                                </div>
                                <div className="insp_text2">
                                    <h6>1MBT per night</h6>
                                    <p>available for 2weeks stay</p>
                                </div>
                            </div>
                            <div className="insp_icons">
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                            </div>
                        </div>
                    </div>

                    <div className="inspiration_item">
                        <div className="inspiration_box">
                            <img src={image10} alt="" />

                            <div className="inspiration_text">
                                <div className="insp_text1">
                                    <p>Desert king</p>
                                    <p>2345km away</p>
                                </div>
                                <div className="insp_text2">
                                    <h6>1MBT per night</h6>
                                    <p>available for 2weeks stay</p>
                                </div>
                            </div>
                            <div className="insp_icons">
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                            </div>
                        </div>
                    </div>

                    <div className="inspiration_item">
                        <div className="inspiration_box">
                            <img src={image17} alt="" />

                            <div className="inspiration_text">
                                <div className="insp_text1">
                                    <p>Desert king</p>
                                    <p>2345km away</p>
                                </div>
                                <div className="insp_text2">
                                    <h6>1MBT per night</h6>
                                    <p>available for 2weeks stay</p>
                                </div>
                            </div>
                            <div className="insp_icons">
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                            </div>
                        </div>
                    </div>

                    <div className="inspiration_item">
                        <div className="inspiration_box">
                            <img src={image12} alt="" />

                            <div className="inspiration_text">
                                <div className="insp_text1">
                                    <p>Desert king</p>
                                    <p>2345km away</p>
                                </div>
                                <div className="insp_text2">
                                    <h6>1MBT per night</h6>
                                    <p>available for 2weeks stay</p>
                                </div>
                            </div>
                            <div className="insp_icons">
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                            </div>
                        </div>
                    </div>



                    <div className="inspiration_item">
                        <div className="inspiration_box">
                            <img src={image18} alt="" />

                            <div className="inspiration_text">
                                <div className="insp_text1">
                                    <p>Desert king</p>
                                    <p>2345km away</p>
                                </div>
                                <div className="insp_text2">
                                    <h6>1MBT per night</h6>
                                    <p>available for 2weeks stay</p>
                                </div>
                            </div>
                            <div className="insp_icons">
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                            </div>
                        </div>
                    </div>


                    <div className="inspiration_item">
                        <div className="inspiration_box">
                            <img src={image19} alt="" />

                            <div className="inspiration_text">
                                <div className="insp_text1">
                                    <p>Desert king</p>
                                    <p>2345km away</p>
                                </div>
                                <div className="insp_text2">
                                    <h6>1MBT per night</h6>
                                    <p>available for 2weeks stay</p>
                                </div>
                            </div>
                            <div className="insp_icons">
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                            </div>
                        </div>
                    </div>


                    <div className="inspiration_item">
                        <div className="inspiration_box">
                            <img src={image20} alt="" />

                            <div className="inspiration_text">
                                <div className="insp_text1">
                                    <p>Desert king</p>
                                    <p>2345km away</p>
                                </div>
                                <div className="insp_text2">
                                    <h6>1MBT per night</h6>
                                    <p>available for 2weeks stay</p>
                                </div>
                            </div>
                            <div className="insp_icons">
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                            </div>
                        </div>
                    </div>


                    <div className="inspiration_item">
                        <div className="inspiration_box">
                            <img src={image21} alt="" />

                            <div className="inspiration_text">
                                <div className="insp_text1">
                                    <p>Desert king</p>
                                    <p>2345km away</p>
                                </div>
                                <div className="insp_text2">
                                    <h6>1MBT per night</h6>
                                    <p>available for 2weeks stay</p>
                                </div>
                            </div>
                            <div className="insp_icons">
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                            </div>
                        </div>
                    </div>


                    <div className="inspiration_item">
                        <div className="inspiration_box">
                            <img src={image22} alt="" />

                            <div className="inspiration_text">
                                <div className="insp_text1">
                                    <p>Desert king</p>
                                    <p>2345km away</p>
                                </div>
                                <div className="insp_text2">
                                    <h6>1MBT per night</h6>
                                    <p>available for 2weeks stay</p>
                                </div>
                            </div>
                            <div className="insp_icons">
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                            </div>
                        </div>
                    </div>


                    <div className="inspiration_item">
                        <div className="inspiration_box">
                            <img src={image23} alt="" />

                            <div className="inspiration_text">
                                <div className="insp_text1">
                                    <p>Desert king</p>
                                    <p>2345km away</p>
                                </div>
                                <div className="insp_text2">
                                    <h6>1MBT per night</h6>
                                    <p>available for 2weeks stay</p>
                                </div>
                            </div>
                            <div className="insp_icons">
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                            </div>
                        </div>
                    </div>


                    <div className="inspiration_item">
                        <div className="inspiration_box">
                            <img src={image24} alt="" />

                            <div className="inspiration_text">
                                <div className="insp_text1">
                                    <p>Desert king</p>
                                    <p>2345km away</p>
                                </div>
                                <div className="insp_text2">
                                    <h6>1MBT per night</h6>
                                    <p>available for 2weeks stay</p>
                                </div>
                            </div>
                            <div className="insp_icons">
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                            </div>
                        </div>
                    </div>


                    <div className="inspiration_item">
                        <div className="inspiration_box">
                            <img src={image25} alt="" />

                            <div className="inspiration_text">
                                <div className="insp_text1">
                                    <p>Desert king</p>
                                    <p>2345km away</p>
                                </div>
                                <div className="insp_text2">
                                    <h6>1MBT per night</h6>
                                    <p>available for 2weeks stay</p>
                                </div>
                            </div>
                            <div className="insp_icons">
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                                <FaStar className="insp_icon" />
                            </div>
                        </div>
                    </div>


                </div>
            </div>


        </div>
    )
}
export default PlaceToStay