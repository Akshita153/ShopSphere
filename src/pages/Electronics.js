import React from 'react'
import NavStrip from '../components/NavStrip'
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import imgurl from '../assets/images/imgurl';
import Button from '@mui/material/Button';
import { CardContent } from '@mui/material';
import Footer from '../components/Footer';


const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
}));


function Electronics() {
    return (
        <div>
            <NavStrip />
            <div className='electronicsPage'>
                <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-start" }} className="searchFilter">
                    <div className="searchDiv">
                        <Search className="searchBar">
                            <SearchIconWrapper>
                                <SearchIcon className="serachicon" />
                            </SearchIconWrapper>
                            <StyledInputBase placeholder="Categories…" inputProps={{ "aria-label": "search" }} className="searchProducts" />
                        </Search>
                    </div>
                </Box>

                {/*laptop section*/}
                <div className='electronicsPage-sections'>
                    <Typography className='section-header'>New & Trending:Laptops</Typography>

                    <Grid container spacing={2} className="productList">
                        <Grid item size={4} className="productLineup">
                            <Card className='productCard firstcard'>
                                <CardContent>
                                    <div className='productImage'>
                                        <img src={imgurl.laptopone} alt="Dell" />
                                    </div>
                                    <div className='productDescription'>
                                        <Typography className='productBrand'>Dell Inspiron 15 </Typography>
                                        <Typography className='shortdescription'>13th Gen Intel Core i5 processor, 16GB RAM, and 512GB SSD</Typography>
                                        <Typography className='shortdescription'>Colors - Platinum Silver, Carbon Black</Typography>
                                        <Typography className='productCost'>Rs 58,290</Typography>
                                    </div>

                                    <div className='addtoCartbtn'>
                                        <Button variant="contained">Add to cart</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item size={4} className="productLineup">
                            <Card className='productCard'>
                                <CardContent>
                                    <div className='productImage'>
                                        <img src={imgurl.laptoptwo} alt="HP" />
                                    </div>

                                    <div className='productDescription'>
                                        <Typography className='productBrand'>HP Pavilion 15</Typography>
                                        <Typography className='shortdescription'>13th Gen Intel Core i5 processor, 16GB RAM, and 512GB SSD</Typography>
                                        <Typography className='shortdescription'>Colors - Natural Silver, Jet Black</Typography>
                                        <Typography className='productCost'>Rs 57,999</Typography>
                                    </div>

                                    <div className='addtoCartbtn'>
                                        <Button variant="contained">Add to cart</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item size={4} className="productLineup">
                            <Card className='productCard lastcard'>
                                <CardContent>
                                    <div className='productImage'>
                                        <img src={imgurl.laptopthree} alt="Lenovo" />
                                    </div>

                                    <div className='productDescription'>
                                        <Typography className='productBrand'>Lenovo IdeaPad Slim 5</Typography>
                                        <Typography className='shortdescription'>13th Gen Intel Core i5 processor, 16GB RAM, and 512GB SSD</Typography>
                                        <Typography className='shortdescription'>Colors - Arctic Grey, Abyss Blue</Typography>
                                        <Typography className='productCost'>Rs 57,490</Typography>
                                    </div>

                                    <div className='addtoCartbtn'>
                                        <Button variant="contained">Add to cart</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>

                    </Grid>
                </div>

                {/*smart watch section*/}
                <div className='electronicsPage-sections'>
                    <Typography className='section-header'>New & Trending:Smart Wearables</Typography>

                    <Grid container spacing={2} className="productList">
                        <Grid item size={4} className="productLineup">
                            <Card className='productCard firstcard'>
                                <CardContent>
                                    <div className='productImage'>
                                        <img src={imgurl.watchone} alt="Smart Watch" />
                                    </div>
                                    <div className='productDescription'>
                                        <Typography className='productBrand'>Galaxy Smartwatch 6</Typography>
                                        <Typography className='shortdescription'>Advanced health monitoring, 1.4-inch AMOLED display, and 16GB storage</Typography>
                                        <Typography className='shortdescription'>Colors - Sky Blue, Rose Gold</Typography>
                                        <Typography className='productCost'>Rs 19,990</Typography>
                                    </div>

                                    <div className='addtoCartbtn'>
                                        <Button variant="contained">Add to cart</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item size={4} className="productLineup">
                            <Card className='productCard'>
                                <CardContent>
                                    <div className='productImage'>
                                        <img src={imgurl.watchtwo} alt="Smart Watch" />
                                    </div>

                                    <div className='productDescription'>
                                        <Typography className='productBrand'>Apple Watch Series 9</Typography>
                                        <Typography className='shortdescription'>Always-on Retina display, advanced fitness tracking, and 32GB storage</Typography>
                                        <Typography className='shortdescription'>Colors - Midnight, Starlight</Typography>
                                        <Typography className='productCost'>Rs 45,900</Typography>
                                    </div>

                                    <div className='addtoCartbtn'>
                                        <Button variant="contained">Add to cart</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item size={4} className="productLineup">
                            <Card className='productCard lastcard watchCard'>
                                <CardContent>
                                    <div className='productImage'>
                                        <img src={imgurl.watchthree} alt="Smart Watch" />
                                    </div>

                                    <div className='productDescription'>
                                        <Typography className='productBrand'>Amazfit GTR 4</Typography>
                                        <Typography className='shortdescription'>Classic design, 1.43-inch AMOLED display, and 14-day battery life</Typography>
                                        <Typography className='shortdescription'>Colors - Black, Blue Leather</Typography>
                                        <Typography className='productCost'>Rs 19,990</Typography>
                                    </div>

                                    <div className='addtoCartbtn'>
                                        <Button variant="contained">Add to cart</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>

                    </Grid>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Electronics
