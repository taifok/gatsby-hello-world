import React from "react"
import { Link, Trans, useTranslation, useI18next } from 'gatsby-plugin-react-i18next';

import Header from '../components/header'

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      {/* <Header /> */}
      {t('world')}
    </div>
  );
}
