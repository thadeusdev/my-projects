import React from 'react'
import { reactProjects } from '../../data'
import './ReactProjects.scss'

const ReactProjects = () => {
  console.log(reactProjects)
  return (
    <div className='reactProjects'>
      <div className="header">
        <h2>React Projects</h2>
      </div>      
      <div className="projects">
        {reactProjects.map(item => (
        <div className="project-item">
          <a href="/">
            <img src={item.img} alt="" />
          </a>
          <div className="title">
            <span>{item.title}</span>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default ReactProjects