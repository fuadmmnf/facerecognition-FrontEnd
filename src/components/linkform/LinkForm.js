import React from 'react';
import './LinkForm.css';

const LinkForm= ({onInput, onClick}) =>
{
	return(
		<div>
			<p className='f3 tc'>This Brain can detect your face</p>
			<div className='center'>
				<div className='center pa4 br4 w-40 shadow-3 center'  >
					<input type='text' className='w-70 f4 pa2  center ' onChange={onInput}/>
					<button className='w-30 ph3 pv2 grow link f4 dib bg-light-purple pointer' onClick={onClick}>Detect! </button>
				</div>
			</div>
		</div>
	);
}

export default LinkForm;