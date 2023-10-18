interface EncodingResults {
  result: string;
  tokenMap: Map<string, string>;
}

/**
 * Helper to determine what character is currently not in string.
 * @param {string} sentence - sentence to check against
 * @param {number} charCode - UTF-16 number a starting char.
 * @returns {number}
 */
const detReplace = (sentence: string, charCode: number) => {
  let isThere = true;

  while (isThere) {
    const char = String.fromCharCode(charCode);
    if (!sentence.includes(char)) {
      isThere = false;
      continue;
    }

    charCode = charCode - 1;
  }

  return charCode;
};

/**
 *
 * @param {string} input - sentence to encode
 * @param {Map<string, string>} tokenMap - map containing byte pairings
 * @param {number} code - starting UTF16 to check for replacements
 * @returns {EncodingResults}
 */
const bytePairEncode = (input: string): EncodingResults => {
  let code = 126;

  const tokenMap = new Map();
  let iterations = 0;
  while (iterations < 1000) {
    let countOcc = 1;
    code = detReplace(input, code);
    const repl = String.fromCharCode(code);

    for (let i = 0; i < input.length; i++) {
      const slice = input.substring(i, i + 2);
      if (slice.length < 2) continue;

      const occurs = (input.match(new RegExp(slice, 'gi')) || []).length;
      if (occurs > countOcc) {
        countOcc = occurs;
        tokenMap.set(repl, slice);
        input = input.replaceAll(slice, repl);
      }
    }

    if (countOcc == 1) break;
    iterations++;
  }

  return {
    result: input,
    tokenMap
  } as EncodingResults;
};

const bytePairEncodeRec = (input: string, tokenMap = new Map(), code = 126): EncodingResults => {
  code = detReplace(input, code);
  const repl = String.fromCharCode(code);

  let mostOcc = '';
  let countOcc = 1;

  for (let i = 0; i < input.length; i++) {
    const slice = input.substring(i, i + 2);
    if (slice.length < 2) continue;

    // const matcher = `\\${slice.split('').join('\\')}`;
    const occurs = (input.match(new RegExp(slice, 'gi')) || []).length;
    if (occurs > countOcc) {
      countOcc = occurs;
      mostOcc = slice;
    }
  }

  if (countOcc === 1) {
    return {
      result: input,
      tokenMap
    } as EncodingResults;
  }

  tokenMap.set(repl, mostOcc);
  input = input.replaceAll(mostOcc, repl);
  return bytePairEncodeRec(input, tokenMap, code);
};

/**
 * Decodeds a BPE string asumming the map insert order in maintained.
 * @param {string} input - encoded string to decode
 * @param {Map<string,string>} tokenMap - map with insert order maintained containing byte pairing
 * @returns {string}
 */
const bytePairDecode = (input: string, tokenMap: Map<string, string>) => {
  const keyArr = [...tokenMap.keys()].reverse();

  keyArr.forEach((k) => {
    const v = tokenMap.get(k) as string;
    input = input.replaceAll(k, v);
  });

  return input;
};

export { bytePairDecode, bytePairEncode, bytePairEncodeRec };
