import React from 'react';

import './homepage.scss';
import Directory from '../../components/directory/directory';

const HomePage = ( {history}) => {
	return (
		<div className = 'homepage'>
			<Directory className='homepage'/>
		</div>
	);
}


export default HomePage;




