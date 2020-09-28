import React from "react"
import { useTranslation } from 'gatsby-plugin-react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      {t('world')}
    </div>
  );
}
