import React, { useState } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import {Notification} from "./Notification/Notification";

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleBtnClick = (type) => {
    switch (type) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break
      case 'bad':
        setBad(prev => prev + 1);
        break;
    
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return  good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    // % позитивних оцінок = (кількість "good" оцінок / загальна кількість оцінок) * 100%
   
    return ((good / total) * 100).toFixed(2)
    
  };

  const total = countTotalFeedback();
  const positivePers = countPositiveFeedbackPercentage();
  const options = [ 'good', 'neutral', 'bad' ];
    
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleBtnClick}
        />
      </Section>

        {total < 1 ? <Notification title="There is no feedback" /> :
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePers} />
          </Section>}
    </>
  );
   

};

