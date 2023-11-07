import { FormLabel, Stack, Tag, TextArea } from '@carbon/react';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import { useTranslation } from 'react-i18next';
import * as styles from './TokenizationApplet.module.scss';

const { colorsLength } = styles;

const COLORS_LENGTH = parseInt(colorsLength);

const countWords = (s: string) => {
  const matches = s.match(/[\w\d’'-]+/gi);
  return matches ? matches.length : 0;
};

const CountTag = ({ children }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Tag className={styles.counterTag} type='gray' size='sm'>
      {children}
    </Tag>
  );
};

const TokenizationApplet = () => {
  const [inputText, setInputText] = useState('');
  const [encodedText, setEncodedText] = useState<string[]>([]);

  const worker = useRef<Worker | null>(null);

  const { t } = useTranslation();

  useEffect(() => {
    if (!worker.current) {
      worker.current = new Worker(new URL('./worker.ts', import.meta.url), {
        type: 'module'
  ***REMOVED***);
***REMOVED***

    const onMessageReceived = (e: MessageEvent) => {
      if (e.data.status === 'complete') setEncodedText(e.data.output);
***REMOVED***;

    worker.current.addEventListener('message', onMessageReceived);

    return () => worker.current?.removeEventListener('message', onMessageReceived);
  }, []);

  const tokenize = useCallback((text: string) => {
    if (worker.current) {
      worker.current.postMessage({ text });
***REMOVED***
  }, []);

  return (
    <div className={styles.container}>
      <Stack orientation='horizontal' className={styles.applet}>
        <div className={cx(styles.appletSection)}>
          <TextArea
            light
            value={inputText}
            className={cx(styles.inputSection)}
            onChange={async (e) => {
              const text = e.target.value || '';
              tokenize(text);
              setInputText(text);
        ***REMOVED***}
            labelText={t('TokenizationAppletInputLabel')}
          />
          <CountTag>{countWords(inputText) + t('TokenizationAppletWordsTag')}</CountTag>
        </div>

        <div className={styles.appletSection}>
          <FormLabel className={styles.outputSectionLabel}>
            {t('TokenizationAppletOutputLabel')}
          </FormLabel>
          <div className={styles.outputSection}>
            <div className={styles.tokenList}>
              {' '}
              {encodedText.map((chunk, index) => (
                <p
                  key={index}
                  className={cx(styles.chunk, styles[`chunk_${index % (COLORS_LENGTH - 1)}`])}>
                  {chunk}
                </p>
      ***REMOVED***)}
            </div>
          </div>
          <CountTag>{encodedText.length + t('TokenizationAppletTokensTag')}</CountTag>
        </div>
      </Stack>
    </div>
  );
};

export default TokenizationApplet;
