import { Stack, TextArea } from '@carbon/react';
import React, { useState } from 'react';
import { decode, encode } from 'gpt-tokenizer';
import { bytePairDecode, bytePairEncode, bytePairEncodeRec } from '@helpers/bpe';
import * as styles from './TokenizationApplet.module.scss';

const TokenizationApplet = () => {
  const [inputText, setInputText] = useState('');
  const [encodedText, setEncodedText] = useState<number[]>([]);

  return (
    <div>
      <Stack orientation='horizontal' className={styles.applet} gap={3}>
        <TextArea
          value={inputText}
          onChange={(e) => {
            const text = e.target.value || '';
            setInputText(text);
            setEncodedText(encode(text));
          }}
          labelText='Input text'
        />
        <TextArea readOnly labelText='Input text' value={``} />
        <div>
          {encodedText.map((token, index) => (
            <p key={index}>{token}</p>
          ))}
        </div>
      </Stack>
    </div>
  );
};

export default TokenizationApplet;
