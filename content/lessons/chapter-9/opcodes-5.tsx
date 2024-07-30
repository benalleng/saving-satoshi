'use client'

import { useTranslations } from 'hooks'
import { OpCodeChallenge, LessonInfo, Text, Title } from 'ui'
import { useEffect, useState } from 'react'
import { SuccessNumbers } from 'ui/common/StatusBar'

export const metadata = {
  title: 'chapter_nine.opcodes_five.title',
  navigation_title: 'chapter_nine.opcodes_five.nav_title',
  key: 'CH9OPC5',
}

export default function OpCodes5({ lang }) {
  const t = useTranslations(lang)
  const [hydrated, setHydrated] = useState(false)
  const [success, setSuccess] = useState<boolean | SuccessNumbers>(0)
  useEffect(() => {
    setHydrated(true)
  }, [])
  return (
    hydrated && (
      <OpCodeChallenge
        answerScript={[
          'OP_PUSH',
          '6930010',
          'OP_CHECKLOCKTIMEVERIFY',
          'OP_DROP',
          'OP_PUSH',
          'PUBKEY(HOLOCAT)',
          'OP_CHECKSIG',
        ]}
        prePopulate
        showRunButtons
        readOnly
        success={success}
        setSuccess={setSuccess}
      >
        <LessonInfo>
          <Title>{t('chapter_nine.opcodes_five.heading')}</Title>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_nine.opcodes_five.paragraph_one')}
          </Text>
          <Text className="mt-4 font-nunito text-xl font-bold text-white">
            {t('chapter_nine.opcodes_five.subheading_one')}
          </Text>
          <ol className="ml-4 list-disc">
            <li>{t('chapter_nine.opcodes_five.optimelock_list_one')}</li>
            <li>{t('chapter_nine.opcodes_five.optimelock_list_two')}</li>
          </ol>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_nine.opcodes_five.paragraph_two')}
          </Text>
        </LessonInfo>
      </OpCodeChallenge>
    )
  )
}
