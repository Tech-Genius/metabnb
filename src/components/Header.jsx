import react from 'react'
import './css/Header.css'
import { useState } from 'react'
import { GiHouse } from "react-icons/gi";
import { Link } from 'react-router-dom';
import logoicon from './images/Vector.png'
import logotext from './images/Vector (1).png'
import { HiBars3BottomRight } from "react-icons/hi2";
import { FaTimes } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import metalogo from './images/image 66.png'
import walletlogo from './images/image 69.png'
import { MdOutlineNavigateNext } from "react-icons/md";
function Header() {

    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const [isConnectBox, setIsConnectBox] = useState(false)
    return (
        <>
            <div className="header">
                <div className="header_inner">
                    <div className="header_item">
                        <Link to={''}>
                            <div className="logo">
                                <img src={logotext} alt="" />
                                <img src={logoicon} alt="" />

                            </div>
                        </Link>
                    </div>

                    <div className={isNavExpanded ? 'sm' : 'header_item menu'}>
                        <div className="menu_items">
                            <ul className='items' >
                                <Link to={''}><li className="item">Home</li></Link>
                                <Link to={'place-to-stay'}><li className="item">Place To Stay</li></Link>
                                <Link><li className="item">NFTs</li></Link>
                                <Link><li className="item">Community</li></Link>
                                <div className="connect_button " id='sm_screen'>
                                    <button onClick={() => {
                                        setIsConnectBox(!isConnectBox)
                                    }} >Connect Wallet</button>
                                </div>
                            </ul>
                        </div>
                    </div>

                    <div className="header_item">
                        <div className="connect_button">
                            <button
                                onClick={() => {
                                    setIsConnectBox(!isConnectBox)
                                }}>Connect Wallet</button>
                        </div>
                    </div>

                    <div className="header_item icon">
                        <div className="sm_cntrl">
                            <HiBars3BottomRight onClick={() => {
                                setIsNavExpanded(!isNavExpanded)
                            }} className='open' tabIndex={0} />
                        </div>
                    </div>

                </div>
            </div>
            <div className={isConnectBox ? 'connect_wrapper' : 'connect_wrapper_not'}>
                <div className="connect">
                    <div className="connect_heading">
                        <h3>Connect Wallet</h3>
                        <FaTimes id='right' onClick={() => {
                            setIsConnectBox(!isConnectBox)
                        }} />
                    </div>
                    <hr id='border_btm' />
                    <div className="connect_inner">
                        <div className="choose">
                            <p>Choose your preferred wallet:</p>
                        </div>
                        <div className="connect_item" tabIndex={0}>
                            <div className="connect_item_inner">
                                <img src={metalogo} alt="" />
                                <h3>Metamask</h3>
                            </div>
                            <MdOutlineNavigateNext id='right' />
                        </div>

                        <div className="connect_item" tabIndex={1}>
                            <div className="connect_item_inner">
                                <img src={walletlogo} alt="" />
                                <h3>WalletConnect</h3>
                            </div>
                            <MdOutlineNavigateNext id='right' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header