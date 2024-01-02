import React from 'react'
import "./skills.css"

const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Fontend Developer</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                    <h3 className="skills__name">Html5</h3>
                    <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                    <h3 className="skills__name">CSS</h3>
                    <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                    <h3 className="skills__name">Javascript</h3>
                    <span className="skills__level">Intermediate</span>
                    </div>
                </div>
         
            </div>
           
            <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                    <h3 className="skills__name">ReactJs</h3>
                    <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                    <h3 className="skills__name">Git</h3>
                    <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                    <h3 className="skills__name">Github</h3>
                    <span className="skills__level">Basic</span>
                    </div>
                </div>
         
            </div>
         </div>
    </div>
  )
}

export default Frontend
