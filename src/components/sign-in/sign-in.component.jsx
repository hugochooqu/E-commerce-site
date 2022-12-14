import React from "react";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/custom-button.component";

import FormInput  from "../form-input/form-input.component";

import './sign-in.styles.scss'


class SignIn extends React.Component{   
    constructor(props) {
       super(props);
       
       this.state = {
        email: '',
        password: ''
       }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({[name]: value })
    }

    render() {
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
            
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" handleChange={this.handleChange} value={this.state.email} label='email' required />
                  
                    <FormInput name="password" type="password" handleChange={this.handleChange} value={this.state.email} label='password' required />
                    

                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={ signInWithGoogle }> Sign In With Google </CustomButton>
                </form>        
            </div>


        )
    }

}

export default SignIn