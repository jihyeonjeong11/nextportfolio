import { Locale, useLocale } from 'next-intl';
import { RiEnglishInput } from 'react-icons/ri';
import { TbAlphabetKorean } from 'react-icons/tb';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useParams } from 'next/navigation';

const LocaleSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const onClickLocale = () => {
    const nextLocale: Locale = locale === 'en' ? 'ko' : 'en'; // 현재 로케일에 따라 다음 로케일 결정

    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: nextLocale }
    );
  };

  return (
    <button aria-label="switch-locale" type="button" onClick={onClickLocale}>
      {locale === 'en' ? (
        <RiEnglishInput size={25} />
      ) : (
        <TbAlphabetKorean size={25} />
      )}
    </button>
  );
};

export default LocaleSwitcher;
