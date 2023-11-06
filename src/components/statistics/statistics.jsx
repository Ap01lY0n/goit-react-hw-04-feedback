/** @format */

import PropTypes from 'prop-types';
import './style.css';

function Statictics({  goodValue, neutralValue, badValue, sum, positive}) {
	return (
		<ul>
			<li>Good: {goodValue}</li>
			<li>Neutral: {neutralValue}</li>
			<li>Bad: {badValue}</li>
			<li>Total: {sum}</li>
			<li>Positive feedback: {positive}%</li>
		</ul>
	);
}

Statictics.propTypes = {
	goodValue: PropTypes.number.isRequired,
	neutralValue: PropTypes.number.isRequired,
	badValue: PropTypes.number.isRequired,
	sum: PropTypes.number.isRequired,
	positive: PropTypes.number.isRequired,
};

export default Statictics;