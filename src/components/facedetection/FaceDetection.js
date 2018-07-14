import React from 'react';





const FaceDetection = ({imageURL}) =>{
	return(
		<div style= {{display: 'flex' , justifyContent:'center'}} className='ma'>
			<div className='mt2 absolute'>
				<img alt='pic' src={imageURL} width='500px' height='auto'/>
			</div>
		</div>
	);
}

export default FaceDetection;