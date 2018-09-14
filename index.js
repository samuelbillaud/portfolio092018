import { h, app } from "hyperapp"
import * as i18n from './i18n'
import data from "./data"

import { SkillItem } from "./components/SkillItem"
import { ProjectItem } from "./components/ProjectItem"

const { personalInfos, projects, skills } = data

const state = {
    personalInfos,
    projects,
    skills,
    i18n: i18n.state
}

const actions = {
    i18n: i18n.actions
}

const view = ({ i18n: { messages, locale } }, actions) => {
    console.log('locale : ', locale)
    console.log('message : ', messages)
    return (
        <div>
            <button
                onclick={() => actions.i18n.set('en-US')}
                disabled={locale === 'en-US'}
                >
                English
            </button>
            <button
                onclick={() => actions.i18n.set('zh-CN')}
                disabled={locale !== 'en-US'}>
                Chinese
            </button>

            <h2>Current Lang: {locale}</h2>
            <p>Test1: {messages.hello}</p>

            <div class="title">
                <img src={'#'} alt="logo Samuel Billaud" />
                <h1>{ personalInfos.name }</h1>
            </div>

            <div class="subtitle">
                <h2>{personalInfos.job} { "chez " }
                    <a
                        href="{ personalInfos.company.site }"
                        target="_blank">
                        { personalInfos.company.name }
                    </a>
                </h2>
            </div>
            <div class="projects">
                <ul>
                    {
                        state.projects.map((project, id) =>
                            <ProjectItem {...project} id={id} />
                        )
                    }
                </ul>
            </div>
            <ul>
                {
                    state.skills.map(skill =>
                        <SkillItem value={skill} />
                    )
                }
            </ul>
        </div>
    )
}

app(state, actions, view, document.body)