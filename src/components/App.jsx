import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import typeOfFB from '../feedbackTypes'
import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  addFeedback = feedback => this.setState(prevState =>
    ({ [feedback]: prevState[feedback] + 1 }));

  render() {
    return (
      <>
        <Feedback
          title="Please leave feedback"
          btnNames={ typeOfFB }
          addFeedback={ this.addFeedback }
        />
        <Statistics
          title="Statistics"
          stats={typeOfFB}
          state={this.state}
        />
        <GlobalStyle />
      </>
    );
  }
};
