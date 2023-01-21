import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import { CloudUploadOutlined } from '@mui/icons-material/CloudUploadOutlined';
import { makeStyles } from '@mui/styles';
import './Signup.css'
import insta from '../Components/Images/instagram.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
// import { AuthContext } from '../Context/AuthContext';

export default function Signup() {
    const useStyles = makeStyles({
        text1: {
            color: 'grey',
            textAlign: 'center'
        }
    })
    const classes = useStyles();

    const [email, setEmail] =  useState('');
    const [password, setPassword] =  useState('');
    const [name, setName] =  useState('');
    const [file, setFile] =  useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState('');
    const history = useNavigate();
    // const {Signup} = useContext(AuthContext);

    const handleClick = async() => {
        if(file==null){
            setError("Please upload profile image first!");
            setTimeout(() => {
                setError('');
            }, 2000);
            return;
        }
        try{
            let userObj = await Signup(email, password);
            let uid = userObj.user.uid;
            console.log(uid);
        }
        catch(err){
            setError(err);
            setTimeout(() => {
                setError('');
            }, 2000);
            return;
        }
    }

  return (
    <div className="signupWrapper">
        <div className="signupCard">
            <Card variant='outlined'>
                <div className="logo">
                    <img src={insta} alt="logo" />
                </div>
                <CardContent>
                    <Typography className='text' variant="subtitle1">
                        signup to see reels from your friends
                    </Typography>
                    {error!="" && <Alert severity="error">{error}</Alert>}
                    <TextField id="outlined-basic" label="FullName" variant="outlined" fullWidth={true} margin='dense' size='small' />
                    <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin='dense' size='small' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin='dense' size='small' value={password} onChange={(e)=> setPassword(e.target.value)} />
                    <Button size="small" color="secondary" fullWidth={true} margin='dense' component='label' variant='outlined' value={name} onChange={(e)=> setName(e.target.value)}> {/*startIcon={<CloudUploadOutlined/>}*/}
                        Upload Profile Image
                        <input type="file" accept="image/*" hidden onChange={(e)=>setFile(e.target.value)} />
                    </Button>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" fullWidth={true} variant='contained' disable={loading} onClick={handleClick} >
                        Sign Up 
                    </Button>
                </CardActions>
                <CardContent>
                    <Typography className='text' variant="subtitle1">
                        *By signing up, you agree to our Terms, Data policy and Cookies.
                    </Typography>
                </CardContent>
            </Card>
            <Card variant='outlined' className='card2'>
                <Typography className='text' variant="subtitle1">
                    Having an Account ? <Link to='/login' style={{textDecoration:'none'}}>Login</Link>
                </Typography>
            </Card>
        </div>
    </div>
  );
}
