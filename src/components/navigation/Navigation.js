import React from 'react';



const Navigation = ({onPageChange,isSignedIn}) =>{

	if(isSignedIn)
	{
		return(
		<nav style= {{display: 'flex' , justifyContent:'flex-end'}}>
			<p onClick={() => onPageChange('signin')} className='f4 link dim white pointer underline pa3 grow'>Sign Out </p>
		</nav>
		);
	}
	else
	{
		return(
		<nav style= {{display: 'flex' , justifyContent:'flex-end'}}>
			<p onClick={() => onPageChange('signin')} className='f4 link dim white pointer underline pa3 grow'>Sign In </p>
			<p onClick={() => onPageChange('Register')} className='f4 link dim white pointer underline pa3 grow'>Register </p>
		</nav>
		);
	}
	
}



export default Navigation;