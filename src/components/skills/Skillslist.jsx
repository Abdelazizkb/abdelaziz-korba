import React from 'react'
import Skill from './Skill'

import django from '../../assets/icons/skills/django.png'
import react from '../../assets/icons/skills/react.png'
import tailwind from '../../assets/icons/skills/tailwind.png'
import js from '../../assets/icons/skills/javascript.png'
import python from '../../assets/icons/skills/python.png'
import boostrap from '../../assets/icons/skills/bootstrap.png'
import mysql from '../../assets/icons/skills/mysql.png'
import html from '../../assets/icons/skills/html.png'
import css from '../../assets/icons/skills/css.png'


const LIST =[
    {
      name:"css",
      src:css
    },
    {
      name:"html",
      src:html
    },
    {
      name:"javascript",
      src:js
    },
    {
      name:"django",
      src:django
    },
    {
      name:"python",
      src:python
    },
    {
      name:"tailwind",
      src:tailwind
    },
    {
      name:"bootstrap",
      src:boostrap
    },
    {
      name:"react",
      src:react
    },
    {
      name:"mysql",
      src:mysql
    }
  ]

function Skillslist() {
  return (
    <div>
        {
            LIST.map((e,i)=>(
                <Skill name={e.name} src={e.src}/>
            ))
        }
    </div>
  )
}

export default Skillslist