'use client'

import { useProceed, useTranslations } from 'hooks'
import { Button } from 'shared'
import { ChapterIntro } from 'ui'

export const metadata = {
  title: 'chapter_five.derive_message_one.title',
  navigation_title: 'chapter_five.derive_message_five.nav_title',
  key: 'CH5DRM5',
}

export default function DeriveMessage1({ lang }) {
  const proceed = useProceed()
  const t = useTranslations(lang)

  return (
    <ChapterIntro className="my-8 text-center">
      <div className="max-w-[800px] px-[15px] py-[10px]">
        <p className="text-xl md:text-[22px]">
          {t('chapter_five.derive_message_five.paragraph_one')}
        </p>
        <p className="mt-8 text-xl md:text-[22px]">
          {t('chapter_five.derive_message_five.paragraph_two')}
        </p>
      </div>

      <Button onClick={proceed} classes="mt-10 max-md:w-full">
        {t('shared.next')}
      </Button>
    </ChapterIntro>
  )
}
