import './css/Home.css'
import image1 from './images/image 1.png'
import image2 from './images/image 2.png'
import image3 from './images/image 3.png'
import image4 from './images/image 4.png'
import image5 from './images/vector 4.png'
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
import { FaStar } from "react-icons/fa";
function Home() {
    return (
        <div className="home_wrapper">


            <div className="rent">
                <div className="rent_inner">
                    <div className="rent_item" id='txt'>
                        <h3>Rent a <span>Place</span> away from <br /> <span>Home</span> in the <span>Metaverse</span> </h3>
                        <p>we provide you access to luxury and affordable houses <br /> in the metaverse, get a chance to turn your <br /> imagination to reality at your comfort zone</p>
                        <div className="search">
                            <input type="search" name="" id="" placeholder='Search for location' className='search_input' />
                            <button>Search</button>
                        </div>
                    </div>


                    <div className="rent_item" id='img'>
                        <div className="image_down">
                            <img src={image1} alt="" />
                            <img src={image2} alt="" />
                        </div>

                        <div className="image_up">
                            <img src={image3} alt="" />
                            <img src={image4} alt="" />
                        </div>
                    </div>

                </div>
            </div>




            <div className="tokens">
                <div className="tokens_inner">
                    <div className="token_item">
                        <div className="token_item_in">
                            <div className="has_background">
                                <img src={image5} alt="" />
                            </div>

                            <img src={image6} alt="" />
                        </div>
                    </div>

                    <div className="token_item">
                        <div className="token_item_in">
                            <h3>METAMASK</h3>
                        </div>
                    </div>

                    <div className="token_item">
                        <div className="token_item_in">
                            <div className="has_background">
                                <img src={image8} alt="" />
                            </div>
                            <img src={image7} alt="" />
                        </div>
                    </div>
                </div>
            </div>



            <div className="inspiration">
                <div className="inspiration_heading">
                    <h3>Inspiration for your next adventure</h3>
                </div>
                <div className="inspiration_inner">
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
                            <img src={image11} alt="" />

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



                </div>
            </div>


        </div>
    )


}
export default Home