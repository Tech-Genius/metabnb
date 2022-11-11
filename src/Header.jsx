import react from 'react'
import './Header.css'
import { useState } from 'react'
import { GiHouse } from "react-icons/gi";
import { Link } from 'react-router-dom';
import logoicon from './assets/Vector.png'
import logotext from './assets/Vector (1).png'
import { HiBars3BottomRight } from "react-icons/hi2";
import { GiCancel } from "react-icons/gi";
function Header() {

    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
        <div className="header">
            <div className="header_inner">
                <div className="header_item">
                    <Link>
                        <div className="logo">
                            <img src={logotext} alt="" />
                            <img src={logoicon} alt="" />

                        </div>
                    </Link>
                </div>

                <div className={isNavExpanded ? 'sm' : 'header_item menu'}>
                    <div className="menu_items">
                        <ul className='items' >
                            <Link><li className="item">Home</li></Link>
                            <Link><li className="item">Place To Stay</li></Link>
                            <Link><li className="item">NFTs</li></Link>
                            <Link><li className="item">Community</li></Link>
                            <div className="connect_button " id='sm_screen'>
                                <button>Connect Wallet</button>
                            </div>
                        </ul>
                    </div>
                </div>

                <div className="header_item">
                    <div className="connect_button">
                        <button>Connect Wallet</button>
                    </div>
                </div>

                <div className="header_item icon">
                    <div className="sm_cntrl">
                        <HiBars3BottomRight onClick={() => {
                            setIsNavExpanded(!isNavExpanded)
                        }} className='open' tabIndex={0}/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header