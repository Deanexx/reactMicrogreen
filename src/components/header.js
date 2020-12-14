import React from "react"
import { AppBar, Toolbar } from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle';

const Header  = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <AccountCircle/>
            </Toolbar>
        </AppBar>
    )
}

export default Header;