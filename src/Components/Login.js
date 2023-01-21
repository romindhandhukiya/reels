import * as React from 'react';
import { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, makeStyles } from '@mui/material';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
// import { CloudUploadOutlined } from '@mui/icons-material/CloudUploadOutlined';
// import { makeStyles } from '@mui/styles';
import './Login.css'
import insta from '../Components/Images/instagram.jpg'
import bg from '../Components/Images/insta.png'
import img1 from '../Components/Images/img1.jpg'
import img2 from '../Components/Images/img2.jpg'
import img3 from '../Components/Images/img3.jpg'
import img4 from '../Components/Images/img4.jpg'
import img5 from '../Components/Images/img5.jpg'
import { Link } from 'react-router-dom';
import { blueGrey } from '@mui/material/colors';
// import { AuthProvider } from '../Context/AuthContext';
// import { makeStyles } from '@mui/styles';

export default function Login() {
    // const useStyles = makeStyles({
    //     text1: {
    //         color: 'grey',
    //         textAlign: 'center'
    //     }
    // })
    // const classes = useStyles();
    
    // const store = useContext(AuthProvider);
    // console.log(store);

  return (
    <div className="loginWrapper">
        <div className="imgCarousel" style={{backgroundImage:'url('+ bg +')', backgroundSize:'cover'}}>
            <div className="img">
                <CarouselProvider
                    visibleSlides={1}
                    totalSlides={5}
                    // step={3}
                    naturalSlideWidth={238}
                    naturalSlideHeight={423}
                    hasMasterSpinner
                    isPlaying={true}
                    infinite={true}
                    dragEnabled={false}
                    touchEnabled={false}
                >
                    <Slider>
                    <CardActionArea style={{outline:'none'}}>
                        <Slide index={0}><Image src={img1}></Image></Slide>
                        <Slide index={1}><Image src={img2}></Image></Slide>
                        <Slide index={2}><Image src={img3}></Image></Slide>
                        <Slide index={3}><Image src={img4}></Image></Slide>
                        <Slide index={4}><Image src={img5}></Image></Slide>
                    </CardActionArea>
                    </Slider>
                </CarouselProvider>
            </div>
        </div>

        <div className="loginCard">
            <Card variant='outlined'>
                <div className="logo">
                    <img src={insta} alt="logo" />
                </div>
                <CardContent>
                    {true && <Alert severity="error">This is an error alert — check it out!</Alert>}
                    <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin='dense' size='small' />
                    <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin='dense' size='small' />
                    <Typography className='text2' color='primary' variant="subtitle1">
                        Forgot Password?
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" fullWidth={true} variant='contained' href="http://google.com" >
                        Login 
                    </Button>
                </CardActions>
            </Card>
            <Card variant='outlined' className='card2'>
                <Typography className='text' variant="subtitle1">
                    Don't have an Account ? <Link to='/signup' style={{textDecoration:'none'}}>SignUp</Link>
                </Typography>
            </Card>
        </div>
    </div>
  );
}
