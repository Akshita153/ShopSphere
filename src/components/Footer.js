import React from 'react'
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';


function Footer() {
    return (
        <div className='footer'>
            <Grid container spacing={2} className="footerGrid">
                <Grid item size={4} className="footerinnerGrid">
                    <Typography className='footerTitle'>Customer Service</Typography>
                    <Typography className='footerlinks'>Contact Us</Typography>
                    <Typography className='footerlinks'>Returns</Typography>
                    <Typography className='footerlinks'>Order Tracking</Typography>
                </Grid>

                <Grid item size={4} className="footerinnerGrid">
                    <Typography className='footerTitle'>About Us</Typography>
                    <Typography className='footerlinks'>Company Info</Typography>
                    <Typography className='footerlinks'>Careers</Typography>
                    <Typography className='footerlinks'>Privacy Policy</Typography>
                </Grid>

                <Grid item size={4} className="footerinnerGrid">
                    <Typography className='footerTitle'>Follow Us</Typography>
                    <Typography className='footerlinks'>Facebook</Typography>
                    <Typography className='footerlinks'>Instagram</Typography>
                    <Typography className='footerlinks'>Twitter</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer
