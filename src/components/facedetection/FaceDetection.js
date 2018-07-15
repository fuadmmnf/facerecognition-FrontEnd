import React from 'react';
import './FaceDetection.css';




const FaceDetection = ({imageURL, faceBox}) =>{
	return(
		<div style= {{display: 'flex' , justifyContent:'center'}} className='ma'>
			<div className='mt2 absolute'>
				<img  id='image' src={imageURL} width='500px' height='auto'/>
				<div className='face-box' style={{top: faceBox.topRow, right: faceBox.rightCol, bottom: faceBox.bottomRow, left: faceBox.leftCol}}></div>
			</div>
		</div>
	);
}

export default FaceDetection;