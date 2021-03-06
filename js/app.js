import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

/* Use of components */

// Essence core
import {Block} from 'react-essence';

// Components
import PatagoniaCommerce from './components/commerce';
import PatagoniaForms from './components/forms';
import PatagoniaMedia from './components/media';
import PatagoniaBlog from './components/blog';
import PatagoniaHeadersFooters from './components/headersfooters';



class Patagonia extends React.Component {
	render() {
        return(
        	<Block>
        		<PatagoniaCommerce />
						<PatagoniaBlog />
						<PatagoniaMedia />
        		<PatagoniaForms />
						<PatagoniaHeadersFooters />
        	</Block>
        );
    }
}

ReactDOM.render(
	<Block>
		<Patagonia />
	</Block>
	,
	document.querySelector('.app')
);
