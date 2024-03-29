import React,{Component} from 'react';
import './SignIn.css';

class SignIn extends Component{
	constructor(props)
	{
		super(props);
		this.state =
		{
			signinEmail: '',
			signinPassword: ''
		}
	}

	onEmailChange = (event) =>
	{
		this.setState({signinEmail: event.target.value});
	}

	onPasswordChange = (event) =>
	{
		this.setState({signinPassword: event.target.value});
	}

	onSubmit = () =>
	{
		fetch('http://localhost:3000/signin',
		{
			method: 'post',
			headers: {'content-type':'application/json'},
			body: JSON.stringify(
			{
				email: this.state.signinEmail,
				password: this.state.signinPassword
			})
		})
		.then(response => response.json())
		.then(user => 
		{
			if(user)
			{
				this.props.loadUser(user);
				this.props.onPageChange('FaceDetection');
			}
		})


		
	}


	render()
	{
		return(
		<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
			<main className="pa4 black-80">
				<div className="measure center">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f2 fw6 ph0 mh0">Sign In</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
				      </div>
				      <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
				    </fieldset>
				    <div className="">
				      <input onClick= {this.onSubmit} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
				    </div>
				    <div className="">
				      <input onClick= {()=> this.props.onPageChange('Register')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"/>
				    </div>
				    {/*
					    <div className="lh-copy mt3 ">
					      <a href="#0" className="f6 link dim black db">Register</a> 
					      <a href="#0" className="f6 link dim black db">Forgot your password?</a>
					    </div>
						*/
					}
				</div>
			</main>
		</article>
		);
	}
}

export default SignIn;