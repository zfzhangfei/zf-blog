import React from 'react'
import IntroductionConfig from '../HomeConfig/IntroductionConfig/IntroductionConfig'
import MarkConfig from '../HomeConfig/MarkConfig/MarkConfig'
import SkillIcon from '../HomeConfig/IntroductionConfig/SkillIcon'
import MaximInput from '../HomeConfig/IntroductionConfig/MaximInput'

export default function UserConfig() {
    return (
        <div className='SettingsContent'>
            <div className='UserConfig'>
                <IntroductionConfig></IntroductionConfig>
                <SkillIcon ></SkillIcon>
                <MaximInput ></MaximInput>
            </div>
        </div>
    )
}
