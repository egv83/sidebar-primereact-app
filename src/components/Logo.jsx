import React from "react";
import {FireFilled} from '@ant-design/icons'
import logo from '../assets/img/LOGO_8BITS.png'

const Logo = ( )=> {
    return (
        <div className="logo">
            <div className="logo-icon">
                {/* <FireFilled /> */}
                <img className="tiny-logo" src={logo}></img>
            </div>
        </div>
    )
}

export default Logo;