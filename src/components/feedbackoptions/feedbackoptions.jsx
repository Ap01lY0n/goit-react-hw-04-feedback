/** @format */

import PropTypes from 'prop-types';
import './style.css';

const FeedbackOptions = ({ valueButtons, onLeaveFeedback }) => {
	return (
		<div className='buttons'>
			{valueButtons.map(button => (
				<button
					type='submit'
					key={button}		
					onClick={ ()=>{
						onLeaveFeedback(button);}}
				>
					{button.toUpperCase()}
				</button>
			))}
		</div>
	);
};

FeedbackOptions.propTypes = {
	valueButtons: PropTypes.arrayOf(PropTypes.string).isRequired,
	onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;