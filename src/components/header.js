import React, { useEffect } from 'react';

import { Link, Trans, useTranslation, useI18next } from 'gatsby-plugin-react-i18next';

const LanguageSwitcher = () => {
  const { originalPath } = useI18next();
  
  return (
    <div>
      <Link to={originalPath} language="en" css={{ fontWeight: 500 }}>ENG</Link>
      <span css={{ margin: "0 5px"}}>|</span>
      <Link to={originalPath} language="zh" css={{ fontWeight: 500 }}>中</Link>
    </div>
  );
}

const Header = () => {
  const { t } = useTranslation();

  console.log('useTranslation: ', useTranslation());
  console.log('useI18next(): ', useI18next());

  return (
    <div>
      {t('hello')}
      <LanguageSwitcher />
    </div>
  );
}

export default Header;