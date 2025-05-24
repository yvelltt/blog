
import english from '@/i18n/en.json';
import mandarin from '@/i18n/zh.json';


const LANG = {
  ENGLISH: 'en',
  Mandarin: 'zh',
};

export const getI18N = (
  { currentLocale = 'en' }:
    { currentLocale: string | undefined; }
) => {
  if (currentLocale === LANG.ENGLISH) return english
  if (currentLocale === LANG.Mandarin) return mandarin
  return mandarin;
};