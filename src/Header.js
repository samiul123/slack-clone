import React from 'react'
import "./Header.css"
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

function Header() {
    return (
        <div className="header">
            <div class="header__left">
                <Avatar 
                    className="header__avatar"
                    alt="Samiul Mushfik"
                    src="/static/images/me.jpg"
                    />
                <AccessTimeIcon/>
            </div>
            <div class="header__search">
                <SearchIcon/>
                <input placeholder="Search"/>
            </div>
            <div class="header__right">
                <HelpOutlineIcon/>
            </div>
        </div>
    )
}

export default Header
