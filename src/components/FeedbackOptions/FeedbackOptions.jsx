//import { Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    //console.log('options', options);
    return (
        <>
            {options.map((option, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => { onLeaveFeedback(option) }}
                        type="button"
                    >{option}</button>
                )
            })}
        </>
    );
};
