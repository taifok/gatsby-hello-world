import React from "react"
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Header from '../components/header'

export default function Test() {
  const { t } = useTranslation("home");

  return (
    <div>
      test
      {t('world')}
    </div>
  );
}
