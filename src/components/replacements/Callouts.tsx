import React from 'react';
import { useTranslation } from 'react-i18next';
import BlockQuote from './BlockQuote';
import { BlockQuoteProps } from './BlockQuote/BlockQuote';

type AllowedType = BlockQuoteProps['type'];
type CalloutType = 'QuizAlert' | 'Danger' | 'Warning';

interface GenericCalloutProps {
  text?: string;
  type: AllowedType;
}

type CalloutProps = Omit<GenericCalloutProps, 'type'>;

// defines callout names and their color types
const calloutMap: Record<CalloutType, AllowedType> = {
  QuizAlert: 'success',
  Danger: 'danger',
  Warning: 'warning'
};

const GenericCallout = (props: GenericCalloutProps) => {
  const { text = '', type } = props;

  return (
    <BlockQuote type={type}>
      <p>{text}</p>
    </BlockQuote>
  );
};

const callouts = Object.entries(calloutMap).reduce((acc, curr) => {
  const [key, val] = curr;
  acc[key as CalloutType] = ({ text }) => {
    const { t } = useTranslation();

    return <GenericCallout type={val} text={text || (t(`${key}Default`) as string)} />;
  };
  return acc;
}, {} as Record<CalloutType, React.FC<CalloutProps>>);

export default callouts;
