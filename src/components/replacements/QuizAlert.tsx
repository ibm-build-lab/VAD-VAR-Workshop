import React from 'react';
import BlockQuote from './BlockQuote';

interface QuizAlertProps {
  text?: string;
}

const QuizAlert = (props: QuizAlertProps) => {
  const { text = 'Parts of this section will be on the quiz' } = props;
  return (
    <BlockQuote alt>
      <p>{text}</p>
    </BlockQuote>
  );
};

export default QuizAlert;
