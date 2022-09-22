import { GlobalStyle } from './GlobalStyle';
import { Component, useState } from 'react';
import typeOfFB from '../feedbackTypes'
import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';


export const App = () => {
  const [good, setGood] = useState(0)
  
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0
  // }

  const addFeedback = feedback => this.setState(prevState =>
    ({ [feedback]: prevState[feedback] + 1 }));

    return (
      <>
        <Feedback
          title="Please leave feedback"
          btnNames={ typeOfFB }
          addFeedback={ addFeedback }
        />
        <Statistics
          title="Statistics"
          stats={typeOfFB}
          state={state}
        />
        <GlobalStyle />
      </>
    );
  
};
