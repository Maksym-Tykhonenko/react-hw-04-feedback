//import { Paragraf } from './Statistics.styled';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <div>
          <p>Good: {good }</p>
          <p>Neutral: {neutral }</p>
          <p>Bad: {bad}</p>
          {total > 0 &&
            <div>
              <p>Total: {total}</p>
              <p>positivePers: {positivePercentage}%</p>
            </div>}
          
        </div>
    )
}