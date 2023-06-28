function Login() {
    // make a branch called Login before you start developing
        return(
        <div>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    img {
                        max-width: 100%;
                    }
                </style>
                <title>Login Page</title>
                <link rel="stylesheet" type="text/css" href="styles.css">
                </meta>
                

                <body>
                    <div class="container">
                        <form>
                        <p></p>
                        <font size="+4"><i><b>Welcome Back</b></i></font>
                        <p></p>
                        <font size="+1">Continue with Google or enter your details.</font>
                        
                        <div class="container text-center w3-white">
                            <background-color:white>
                            <p>google login placeholder</p>
                        </background-color:white>
                        </div>
                        <hr></hr>
                        <input type="text" placeholder="Email" required>

                            <style>
                                input[type="text"]{
                                    background-color: #EEE9E6;
                                    padding: 10px 15px;
                                    border-radius: 3px;
                                }

                            </style>
                        <input type="password" placeholder="Password" required>
                            <style>
                                input[type="password"]{
                                    background-color: #EEE9E6;
                                    padding: 10px 15px;
                                    border-radius: 3px;
                                }

                            </style>
                        
                        <button type="submit">Login</button>
                        <style>

                            .button
                        </style>
                        <hr style="width:40%;text-align:left;margin-left:0">
                        <hr style="width:40%;text-align:left;margin-left:40">
                        <p style="text-align:center;">Don't have an account?</p> 
                        
                        <button type="submit">Sign up</button>
                            <style>
                            button[type="submit"]{
                                background-color:#EEE9E6;
                                border:none;
                                color : #DAA6DB;
                                text-align : center; 
                                padding: 15px 32px;
                                font-size: 16px;

                            }

                            </style>
                        </button>
                        
                        </form>
                    </div>
                </body>
               

                <!DOCTYPE html>
                <html>
                <head>
                <Title>Login Page </Title>
                <style>
                    body {
                    font-family:sans-serif, sans-serif;
                    background:
                    radial-gradient(#8CDBA9, #A9D5F5, #DAA6DB);
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                    margin: 0;
                    display: flex;
                    justify-content: left;
                    align-items: left;
                    height: 100vh;
                    }
                    

                    .container {
                    background-color: #EEE9E6;
                ;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 0 0px rgba(0, 0, 0, 0.1);
                    width: 50vw;
                    }

                    form {
                    display: flex;
                    flex-direction: column;
                    }

                    h2 {
                    text-align: left;
                    margin-bottom: 20px;
                    }

                    input[type="text"],
                    input[type="password"] {
                    position: relative;
                    font-size: 14px;
                    border-top: 20px solid transparent;
                    border-left: 20px solid transparent;
                    border-right: 20px solid transparent;
                    margin-bottom: 10px;
                    display: inline-block;
                    --field-padding: 12px;
                    }

                    .button {
                    padding: 10px;
                    background-color: #DAA6DB;
                    color: #EEE9E6;
                    border: none;
                    border-radius: 3px;
                    cursor: pointer;
                    }

                
                </style>
            </head>
                        


        </div>  

        );   
    
    }

export default Login;