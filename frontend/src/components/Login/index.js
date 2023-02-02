import React from "react";

function Login() {
    return(
       <>
            <div class="Login">
                <h2>Login</h2>
                <label>Digite seu e-mail:</label>
                <input
                    type='text'
                    required
                >
                </input>
                <label>Digite sua senha:</label>
                <input
                 type='password'
                 required
                 >
                 </input>
                <button type='submit'>Entrar</button>
            </div>

            <div className="signUp">
            <h2>Sign Up</h2>
                <label>Digite seu e-mail:</label>
                <input
                    type='text'
                    required
                >
                </input>
                <label>Crie uma senha:</label>
                <input
                 type='password'
                 required
                 >
                 </input>
                <button type='submit'>Entrar</button>
            </div>


       </>
        
    );
}

export default Login;

