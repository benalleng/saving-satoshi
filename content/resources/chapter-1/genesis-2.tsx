'use client'

import { useTranslations } from 'hooks'
import { useState } from 'react'

import { Text, ResourcePage, ToggleSwitch, CodeExample } from 'ui'

export default function GenesisTwoResources({ lang }) {
  const t = useTranslations(lang)

  const [challengeOneIsToggled, setChallengeOneIsToggled] = useState(false)

  const challengeOneToggleSwitch = () => {
    setChallengeOneIsToggled(!challengeOneIsToggled)
  }

  return (
    <ResourcePage
      lang={lang}
      readingResources={
        <>
          <Text className="mt-[25px] text-xl font-bold">
            {t('chapter_one.resources.genesis_two.scriptsig_heading')}
          </Text>
          <Text>
            {t('chapter_one.resources.genesis_two.scriptsig_paragraph')}
          </Text>
          <Text className="mt-[25px] text-xl font-bold">
            {t('chapter_one.resources.genesis_two.block_explorer_heading')}
          </Text>
          <Text>
            {t('chapter_one.resources.genesis_two.block_explorer_paragraph')}
          </Text>
        </>
      }
      tipsResources={
        <ul className="list-inside list-disc font-nunito text-white">
          <li>{t('chapter_one.resources.genesis_two.tip')}</li>
        </ul>
      }
      codeResources={
        <>
          <Text>{t('help_page.solution')}</Text>
          <div className="flex flex-row items-center gap-2">
            <ToggleSwitch
              checked={challengeOneIsToggled}
              onChange={challengeOneToggleSwitch}
            />
            <Text>{t('help_page.spoilers_confirm')}</Text>
          </div>
          {challengeOneIsToggled && (
            <div className="text-white">
              <CodeExample
                className="text-wrap"
                copy
                language="bash"
                code="04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73"
              />
            </div>
          )}
        </>
      }
    />
  )
}
