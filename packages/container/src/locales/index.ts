import { getLanguage, Language } from 'llqm-framework-sdk';

const languageLoaders = {
  [Language.ZH_CN]: () => import('./zh-cn'),
  [Language.EN]: () => import('./en'),
  [Language.JA]: () => import('./ja')
};

export default async () => {
  const language = getLanguage();
  const messages = await languageLoaders[language]();
  console.log(language, messages.default);
  return messages.default;
};