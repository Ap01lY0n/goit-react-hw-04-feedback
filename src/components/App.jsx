/** @format */

import Statictics from './statistics';
import FeedbackOptions from './feedbackoptions';
import SectionTitle from './sectiontitle';
import Notification from './notification';
import { useState } from 'react';

function App() {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
	const buttons = ['good', 'neutral', 'bad'];
	const FirstSection = 'Please leave feedback';
	const SecondSection = 'Statistics';

	const handlerChangeFeedback = newFeed => {
		switch (newFeed) {
			case buttons[0]:
				setGood(state => state + 1);
				break;

			case buttons[1]:
				setNeutral(state => state + 1);
				break;

			case buttons[2]:
				setBad(state => state + 1);
				break;

			default:
				break;
		}
	};

	const countTotalFeedback = () => {
		return good + neutral + bad;
	};

	const countPositiveFeedbackPercentage = () => {
		return Math.round((good * 100) / countTotalFeedback());
	};

	return (
		<>
			<SectionTitle title={FirstSection}>
				<FeedbackOptions valueButtons={buttons} onLeaveFeedback={handlerChangeFeedback} />
			</SectionTitle>
			<SectionTitle title={SecondSection}>
				{countTotalFeedback() ? (
					<Statictics
						goodValue={good}
						neutralValue={neutral}
						badValue={bad}
						sum={countTotalFeedback()}
						positive={countPositiveFeedbackPercentage()}
					/>
				) : (
					<Notification />
				)}
			</SectionTitle>
		</>
	);
}

export default App;