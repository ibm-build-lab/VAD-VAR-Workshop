import { Stack, TextArea } from '@carbon/react';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import { useTranslation } from 'react-i18next';
import * as styles from './TokenizationApplet.module.scss';

const { colorsLength } = styles;

const COLORS_LENGTH = parseInt(colorsLength);

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
        <TextArea
          light
          value={inputText}
          className={cx(styles.inputSection, styles.appletSection)}
          onChange={async (e) => {
            const text = e.target.value || '';
            tokenize(text);
            setInputText(text);
      ***REMOVED***}
          labelText={t('TokenizationAppletInputLabel')}
        />

        <div className={styles.appletSection}>
          <div className='cds--text-area__label-wrapper'>
            <label className='cds--label'>{t('TokenizationAppletOutputLabel')}</label>
          </div>
          <div className={styles.outputSection}>
            {encodedText.map((chunk, index) => (
              <p
                key={index}
                className={cx(styles.chunk, styles[`chunk_${index % (COLORS_LENGTH - 1)}`])}>
                {chunk}
              </p>
    ***REMOVED***)}
          </div>
        </div>
      </Stack>
    </div>
  );
};

export default TokenizationApplet;
