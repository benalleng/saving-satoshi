'use client'
import { useTranslations } from 'hooks'
import { ChapterIntro } from 'ui'

export default function Transacting1({ lang }) {
  const t = useTranslations(lang)
  return (
    <ChapterIntro
      title={t('transacting_one.title')}
      heading={t('transacting_one.heading')}
      next={'/chapters/chapter-1/transacting-2'}
    >
      <p className="text-lg md:text-xl mt-2">{t('transacting_one.paragraph_one')}</p>
      <p className="text-lg md:text-xl mt-2">{t('transacting_one.paragraph_two')}</p>
    </ChapterIntro>
  )
}

export const metadata = {
  title: 'transacting_one.title',
}
