import React, { Component } from 'react';
import {Form,Button,Icon} from 'semantic-ui-react'
import './Auth.css'

class Auth extends Component{
    state={
        f_name:'',
        l_name:'',
        email:'',
        password:''
      }

      handleSignUpUser=()=>{
        let user = this.state;
        window.localStorage.removeItem('f_name');
        window.localStorage.removeItem('l_name');
        window.localStorage.removeItem('email');
        window.localStorage.removeItem('score');
        window.localStorage.removeItem('cart');

        window.localStorage.setItem('f_name',user.f_name);
        window.localStorage.setItem('l_name',user.l_name);
        window.localStorage.setItem('email',user.password);
        window.localStorage.setItem('score',300);

        window.location.replace("/");
      }
    
      handleChange=(e)=>{
        if(e.target.placeholder === 'First Name'){
            this.setState({
                f_name:e.target.value
              })
        }else if(e.target.placeholder === 'Last Name'){
            this.setState({
                l_name:e.target.value
              })
        }else if(e.target.placeholder === 'Email'){
            this.setState({
                email:e.target.value
              })
        }else if(e.target.placeholder === 'Password'){
            this.setState({
                password:e.target.value
              })
        }
      }

    render(){
        
        let user=(
                <div>
                    <Form onSubmit={this.handleSignUpUser}>
                        <Form.Field>
                        <label className="form-labels">First Name</label>
                        <input placeholder='First Name' onChange={this.handleChange} required={true} />
                        </Form.Field>

                        <Form.Field>
                        <label className="form-labels">Last Name</label>
                        <input placeholder='Last Name' onChange={this.handleChange} required={true} />
                        </Form.Field>

                        <Form.Field>
                        <label className="form-labels">Email</label>
                        <input placeholder='Email' onChange={this.handleChange} required={true} />
                        </Form.Field>

                        <Form.Field>
                        <label className="form-labels">Password</label>
                        <input placeholder='Password' type={'password'} onChange={this.handleChange} required={true} />
                        </Form.Field>
                        <Button animated color="green" type='submit'>
                            <Button.Content visible>Register</Button.Content>
                            <Button.Content hidden>
                                <Icon name='tree' />
                            </Button.Content>
                        </Button>
                    </Form>
                </div>
            )

        return(
            <div className="auth">
                <div className="website-heading">
                    <h1>Sign Up</h1>
                </div>
                {user}
            </div>
        )

    }
}

const mapPropsToState = (state) => {
    return{
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return{
    }
  }
  
  
  export default Auth;
