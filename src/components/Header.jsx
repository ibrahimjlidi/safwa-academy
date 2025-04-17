import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <header className="flex flex-col md:flex-row items-center justify-between px-6 py-4 bg-[#fdfae6] border-b border-gray-200">
      {/* Logo + Language Switch */}
      <div className="flex items-center gap-4">
        <span className="text-green-800 font-bold text-xl">{t('academy_name')}</span>
        <button onClick={toggleLanguage} className="bg-green-100 px-2 py-1 rounded text-sm hover:bg-green-200">
          {i18n.language === 'ar' ? 'EN' : 'عربي'}
        </button>
      </div>

      {/* Nav */}
      <nav className="flex gap-4 text-sm mt-3 md:mt-0">
        <a href="#">{t('home')}</a>
        <a href="#">{t('about')}</a>
        <a href="#">{t('teachers')}</a>
        <a href="#">{t('contact')}</a>
      </nav>
    </header>
  );
}

export default Header;
