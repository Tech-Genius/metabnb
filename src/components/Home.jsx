import './css/Home.css'
import image1 from './images/image 1.png'
import image2 from './images/image 2.png'
import image3 from './images/image 3.png'
import image4 from './images/image 4.png'
function Home() {
    return (
        <div className="home_wrapper">


            <div className="rent">
                <div className="rent_inner">
                    <div className="rent_item" id='txt'>
                        <h3>Rent a <span>Place</span> away from <br /> <span>Home</span> in the <span>Metaverse</span> </h3>
                        <p>we provide you access to luxury and affordable houses <br /> in the metaverse, get a chance to turn your <br /> imagination to reality at your comfort zone</p>
                        <div className="search">
                            <input type="search" name="" id=""placeholder='Search for location' className='search_input' />
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


        </div>
    )


}
export default Home