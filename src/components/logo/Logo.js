import React from 'react';
import Tilt from 'react-tilt'
import Brain from './brain2.png'

const Logo = () =>{
	return(
		<div className= 'ma4 mt0'>
			<Tilt className="Tilt " options={{ max : 25 }} style={{ height: 160, width: 160 }} >
			 	<div className="Tilt-inner"> 
			 		<img src={Brain} alt='brain'/>
			 	</div>
			</Tilt>
		</div>
	);
}



export default Logo;