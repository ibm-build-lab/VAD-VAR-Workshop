import React from 'react';
import { useTranslation } from 'react-i18next';
import BlockQuote from '../BlockQuote';

interface QuizAlertProps {
  text?: string | null;
}

const QuizAlert = (props: QuizAlertProps) => {
  const { text } = props;
  const { t } = useTranslation();

  return (
    <BlockQuote alt>
      <p>{text || t('quizAlertDefault')}</p>
    </BlockQuote>
  );
};

export default QuizAlert;
