import { GlobalStyle } from './GlobalStyle';
import { useState } from 'react';
import typeOfFB from '../feedbackTypes'
import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';


export const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const addFeedback = feedback => {
    switch (feedback) {
  case "good":
    setGood(state => state + 1)
    break;

  case "neutral":
    setNeutral(state => state + 1)
    break;

  case "bad":
    setBad(state => state + 1)
    break;

  default:
    alert("Something went wrong, please try again later")
}
  }
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
          state={{good, neutral, bad}}
        />
        <GlobalStyle />
      </>
    );
  
};
