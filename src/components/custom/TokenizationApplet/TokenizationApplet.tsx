'use client';

import { Dropdown, Stack, Tag, TextArea, Toggle } from '@carbon/react';
import cx from 'classnames';
import { useTranslations } from 'next-intl';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import styles from './TokenizationApplet.module.scss';

const { colorsLength } = styles;

const COLORS_LENGTH = parseInt(colorsLength);
const DEFAULT_TEXT = `This is a interactive demo of tokenization.

Type in any text you want here.

Note the token separation and amount differences compared to your original input, as well as between the different models.`;
const MODEL_LIST = [
  'google/flan-ul2',
  'Xenova/starcoderbase-1b',
  'bigscience/mt0-small',
  'EleutherAI/gpt-neox-20b',
  'google/flan-t5-small',
  'ibm/mpt-7b-instruct2',
  'Xenova/llama-68m'
];

const countWords = (s: string) => {
  const matches = s.match(/[\w\d’'-]+/gi);
  return matches ? matches.length : 0;
};

const CountTag = ({ children }: React.HTMLAttributes<HTMLDivElement>) => (
  <Tag className={styles.counterTag} type='gray' size='sm'>
    {children}
  </Tag>
);

export default function TokenizationApplet(props: { startingText?: string }) {
  const { startingText = DEFAULT_TEXT } = props;

  const t = useTranslations('components.TokenizationApplet');
  const [inputText, setInputText] = useState(startingText);
  const [encodedText, setEncodedText] = useState<string[]>([]);
  const [encodedIds, setEncodedIds] = useState([]);
  const [showInternal, setShowInternal] = useState(false);
  const [model, setModel] = useState<string>(MODEL_LIST[0]);
  const worker = useRef<Worker | null>(null);

  const tokenize = useCallback(
    (text: string) => {
      if (worker.current) {
        worker.current.postMessage({ text, model });
  ***REMOVED***
***REMOVED***,
    [model]
  );

  useEffect(() => {
    if (!worker.current) {
      worker.current = new Worker(new URL('./worker.ts', import.meta.url), {
        type: 'module'
  ***REMOVED***);
***REMOVED***

    const onMessageReceived = (e: MessageEvent) => {
      if (e.data.status === 'complete') {
        const { tokenStrings, tokenIds } = e.data.output;
        setEncodedText(tokenStrings);
        setEncodedIds(tokenIds);
  ***REMOVED***
***REMOVED***;

    worker.current.addEventListener('message', onMessageReceived);

    return () =>
      worker.current?.removeEventListener('message', onMessageReceived);
  }, []);

  useEffect(() => {
    if (worker.current) tokenize(inputText);
  }, [inputText, model]);

  return (
    <div className={styles.container}>
      <Stack orientation='horizontal' className={styles.applet}>
        <div className={cx(styles.appletSection)}>
          <TextArea
            value={inputText}
            className={cx(styles.inputSection)}
            onChange={async (e) => {
              setInputText(e.target.value || '');
        ***REMOVED***}
            labelText={''}
          />
          <CountTag>
            {t('wordsTag', { amount: countWords(inputText) })}
          </CountTag>
        </div>

        <div className={styles.appletSection}>
          <div className={styles.outputSection}>
            <div className={styles.tokenList}>
              {(showInternal ? encodedIds : encodedText).map((chunk, index) => (
                <p
                  key={index}
                  className={cx(
                    styles.chunk,
                    styles[`chunk_${index % (COLORS_LENGTH - 1)}`]
          ***REMOVED***}>
                  {`${chunk}`.replaceAll('\n', '[nl]')}
                </p>
      ***REMOVED***)}
            </div>
          </div>
          <CountTag>{t('tokensTag', { amount: encodedText.length })}</CountTag>
        </div>
      </Stack>
      <Stack orientation='horizontal' className={styles.controls} gap={3}>
        <Dropdown
          id='model-select'
          className={styles.modelDropdown}
          onChange={({ selectedItem }) => {
            if (selectedItem) setModel(selectedItem);
      ***REMOVED***}
          titleText=''
          label=''
          items={MODEL_LIST}
          itemToString={(i: string) => i.split('/')[1]}
          initialSelectedItem={MODEL_LIST[0]}
          type='inline'
        />
        <Toggle
          size='sm'
          labelText=''
          labelA={t('textToggle') as string}
          labelB={t('internalToggle') as string}
          onToggle={() => setShowInternal((c) => !c)}
          id='toggle-internal'
        />
      </Stack>
    </div>
  );
}
