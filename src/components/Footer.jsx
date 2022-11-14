import './css/Footer.css'
import logoicon from './images/Vector 2.png'
import logotext from './images/Vector 3.png'
import { GrFacebookOption, GrTwitter, GrInstagram } from "react-icons/gr";
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <div className="footer">
            <div className="footer_inner">
                <div className="footer_item" id='logo'>
                    <Link to={''}>
                        <div className="footer_logo">
                            <img src={logoicon} alt="" />
                            <img src={logotext} alt="" />
                        </div>
                    </Link>

                    <div className="footer_icons">
                        <GrFacebookOption />
                        <GrTwitter />
                        <GrInstagram />
                    </div>
                </div>

                <div className="footer_item">
                    <div className="footer_text">
                        <h3>Community</h3>
                        <ul className="footer_links">
                            <Link><li>NFT</li></Link>
                            <Link><li>Tokens</li></Link>
                            <Link><li>LandLords</li></Link>
                            <Link><li>Discord</li></Link>
                        </ul>
                    </div>
                </div>

                <div className="footer_item">
                    <div className="footer_text">
                        <h3>Places</h3>
                        <ul className="footer_links">
                            <Link><li>Castles</li></Link>
                            <Link><li>Farms</li></Link>
                            <Link><li>Beach</li></Link>
                            <Link><li>Learn More</li></Link>
                        </ul>
                    </div>
                </div>

                <div className="footer_item">
                    <div className="footer_text">
                        <h3>About Us</h3>
                        <ul className="footer_links">
                            <Link><li>Road map</li></Link>
                            <Link><li>Creators</li></Link>
                            <Link><li>Career</li></Link>
                            <Link><li>Contact Us</li></Link>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="copywright">
                <p>	&#169; 2022 Metabnb</p>
            </div>
        </div>
    )
}
export default Footer