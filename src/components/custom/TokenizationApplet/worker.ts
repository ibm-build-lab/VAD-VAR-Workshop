import {
  AutoTokenizer,
  PreTrainedTokenizer,
  PretrainedOptions,
  env
} from '@xenova/transformers';

Object.assign(env, {
  ...env,
  allowLocalModels: false,
  allowRemoteModels: true,
  useBrowserCache: false,
  useFSCache: false,
  useCustomCache: false
});

const DEF_MODEL = 'google/flan-t5-small';

interface EventData {
  model?: string;
  text: string;
}

class TokenizerSingleton {
  private static instance: PreTrainedTokenizer;
  private static model = DEF_MODEL;

  static async getInstance(model = DEF_MODEL, options: PretrainedOptions) {
    if (!TokenizerSingleton.instance || model !== TokenizerSingleton.model) {
      console.log('Updating tokenizer instance', model);
      TokenizerSingleton.instance = await AutoTokenizer.from_pretrained(model, {
        ...options,
        local_files_only: false
      });
      TokenizerSingleton.model = model;
    }

    return TokenizerSingleton.instance;
  }
}

self.addEventListener('message', async (event: MessageEvent<EventData>) => {
  const { model = DEF_MODEL, text } = event.data;

  const tokenizer = await TokenizerSingleton.getInstance(model, {
    progress_callback: (e: unknown) =>
      self.postMessage({
        status: 'not-complete',
        output: e
      })
  });

  const tokenIds = tokenizer.encode(text);
  const tokenStrings = tokenIds
    .map((t) =>
      tokenizer.decode_single([t], {
        skip_special_tokens: true,
        clean_up_tokenization_spaces: true
      })
    )
    .filter((t) => t);

  self.postMessage({
    status: 'complete',
    output: {
      tokenStrings,
      tokenIds
    }
  });
});
