import { h } from "hyperapp"

import { SkillItem } from "./SkillItem"

export const ProjectItem = ({ id, title, year, skills, links, other }) => {
    return (
        <li id={id} class={"projectItem"}>
            <div>
                <img src={'blabla'} />
            </div>
            <div>
                <h4>{title}</h4>
                {other
                    ? <p class="subtitle-project">{other}</p>
                    : ''
                }
                <p>{year}</p>
                <ul>
                    {
                        skills.map(skill =>
                            <SkillItem value={skill} />
                        )
                    }
                </ul>
            </div>
        </li>
    )
}