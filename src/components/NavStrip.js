import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";


function NavStrip() {
    return (
        <div className='navStrip'>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" className='navTab'>
                    <Toolbar>
                        <Typography variant="h6" component="div" className='navstripTitle' sx={{ flexGrow: 1 }}>
                            <Link to="/">Home</Link>
                        </Typography>
                        <Typography variant="h6" component="div" className='navstripTitle' sx={{ flexGrow: 1 }}>
                            <Link to="/electronics">Electronics</Link>
                        </Typography>
                        <Typography variant="h6" component="div" className='navstripTitle' sx={{ flexGrow: 1 }}>
                            <Link to="/sports">Sports</Link>
                        </Typography>
                        <Typography variant="h6" component="div" className='navstripTitle' sx={{ flexGrow: 1 }}>
                            Fashion
                        </Typography>
                        <Typography variant="h6" component="div" className='navstripTitle' sx={{ flexGrow: 1 }}>
                            Kitchen
                        </Typography>
                        <Typography variant="h6" component="div" className='navstripTitle' sx={{ flexGrow: 1 }}>
                            Today's Deals
                        </Typography>

                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default NavStrip

