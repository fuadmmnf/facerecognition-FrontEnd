import React,{Component} from 'react';
import './Register.css';

class Register extends Component 
{

	constructor(props)
	{
		super(props);
		this.state =
		{
			registerName: '',
			registerEmail: '',
			registerPassword: ''
		}
	}


	onEmailChange = (event) =>
	{
		this.setState({registerEmail: event.target.value});
	}

	onPasswordChange = (event) =>
	{
		this.setState({registerPassword: event.target.value});
	}

	onNameChange = (event) =>
	{
		this.setState({registerName: event.target.value});
	}

	onSubmit = () =>
	{
		fetch('http://localhost:3000/register',
		{
			method: 'post',
			headers: {'content-type':'application/json'},
			body: JSON.stringify(
			{
				name: this.state.registerName,
				email: this.state.registerEmail,
				password: this.state.registerPassword
			})
		})
		.then(response => response.json())
		.then(data => 
		{
			if(data === 'success')
				this.props.onPageChange('signin');
		})


		
	}






	render()
	{
		return(
			<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
				<main className="pa4 black-80">
					<form className="measure center">
					    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					      <legend className="f2 fw6 ph0 mh0">Register</legend>
					      <div className="mt3">
					        <label className="db fw6 lh-copy f6" for="name">Name</label>
					        <input onChange={this.onNameChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="name" name="name"  id="name"/>
					      </div>
					      <div className="mt3">
					        <label className="db fw6 lh-copy f6" for="email-address">Email</label>
					        <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
					      </div>
					      <div className="mv3">
					        <label className="db fw6 lh-copy f6" for="password">Password</label>
					        <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
					      </div>
					    </fieldset>
					    <div className="">
					      <input onClick= {this.onSubmit} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Submit"/>
					    </div>
					    {/*
						    <div className="lh-copy mt3 ">
						      <a href="#0" className="f6 link dim black db">Register</a> 
						      <a href="#0" className="f6 link dim black db">Forgot your password?</a>
						    </div>
							*/
						}
					</form>
				</main>
			</article>
		);
	}
	
}

export default Register;