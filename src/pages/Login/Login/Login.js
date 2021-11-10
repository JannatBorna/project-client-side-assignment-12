import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import login from '../../../images/login2.png';

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { user, loginUser, authError, isLoading, signInWithGoogle } = useAuth();

    // login er por private page a jawa
    const location = useLocation();
    const history = useHistory();


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        //    console.log(field, value)
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }


    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6} className="input-login">
                    <Typography variant="body1" gutterBottom>
                        Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }} id="standard-basic" label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />

                        <TextField

                            sx={{ width: '75%', m: 1 }}
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            autoComplete="current-password"
                            variant="standard" />


                        <Button className="login-button" sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>

                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text">New User? please Register</Button>
                        </NavLink>


                        {/* loading */}
                        {
                            isLoading && <CircularProgress
                                color="secondary" />
                        }

                        {/* register  successfully*/}
                        {
                            user?.email && <Alert severity="success">Login successfully!</Alert>
                        }

                        {/* error message */}

                        {
                            authError && <Alert severity="error">
                                <AlertTitle>Error</AlertTitle>
                                {authError}
                            </Alert>
                        }
                    </form>

               
                    

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%', backgroundColor:'cadetblue' }} src={login} alt="" />
                </Grid>

            </Grid>


        </Container>
    );
};

export default Login;

































// import React from 'react';
// import { Form, Button, FloatingLabel, Row, Col, Container, Alert } from 'react-bootstrap';
// import { Link, useLocation, useHistory, NavLink } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';
// import useAuth from '../../../hooks/useAuth';
// import img from '../../../images/login2.png'
// import './Login.css';
// import { useState } from 'react';






// const Login = () => {
//     const [loginData, setLoginData] = useState({})
//     const { user, loginUser, authError } = useAuth();

//     const handleOnChange = e => {
//         const field = e.target.name;
//         const value = e.target.value;
//         console.log(field, value);
//         const newLoginData = { ...loginData }
//         newLoginData[field] = value;
//         setLoginData(newLoginData);
//     }


//     const handleLoginSubmit = e => {
//         loginUser(loginData.email, loginData.password);
//         e.preventDefault();
//     }











//     return (
//         <div className="from my-5">
//             <h1 className="text-center fw-3 my-5"><span className="text-color">L</span>ogin Now</h1>
//             <Container>
//                 <Form onSubmit={handleLoginSubmit}>
//                     <Row>
//                         <Col lg={5} md={7} className="input-login">
//                             <div className="my-5">
//                                 <FloatingLabel
//                                     controlId="floatingInput"
//                                     label="Email address"
//                                     className="mb-3 w-75 mx-auto"
//                                 >
//                                     <Form.Control
//                                         onBlur={handleOnChange}
//                                         type="email" placeholder="name@example.com" />
//                                 </FloatingLabel>
//                                 <FloatingLabel controlId="floatingPassword" label="Password" className="w-75 mx-auto">
//                                     <Form.Control
//                                         onBlur={handleOnChange}
//                                         type="password" placeholder="Password" />
//                                 </FloatingLabel>

//                                 <div className="row mb-3 text-danger fw-5">{authError}</div>

//                                 <Button className="login-btn my-5" variant="primary" type="submit">
//                                     Log-in
//                                 </Button>

//                                 <br />
//                                 <Link href="/">Forgot password</Link><br />
//                                 <span className="fs-6 fw-6">New User? Create New Account <Link as={HashLink} to="/register">Register</Link></span><br />


                                

//                                 {/*--------- Google--------- */}
//                                 {/* <button onClick={handleGoogleLogin} className="online-btn google"><i class="fab fa-google"></i> Google</button> */}

                                

//                             </div>
//                         </Col>

//                         <Col lg={7} md={5}>
//                             <div>
//                                 <img className="w-75 mx-5" src={img} alt="" />
//                             </div>

//                         </Col>
//                     </Row>


//                     {/* loading */}
//                     {/* {
//                         isLoading && <CircularProgress
//                             color="secondary" />
//                     } */}

//                     {/* register  successfully*/}
//                     {
//                         user?.email && <Alert severity="success">Login successfully!</Alert>
//                     }

                   
                   
                   

//                     {/* error message */}

//                     {
//                         authError && <Alert severity="error">
//                             {/* <AlertTitle>Error</AlertTitle> */}
//                             {authError}
//                         </Alert>
//                     }





//                 </Form>
//             </Container>



//         </div>
//     );
// };

// export default Login;