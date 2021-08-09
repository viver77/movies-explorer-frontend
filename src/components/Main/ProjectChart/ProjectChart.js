import React from 'react';
import './ProjectChart.css';

function ProjectChart({ ProjectDuration }) {

    const totalDuration = ProjectDuration.reduce((s, i) => s = s + i.duration, 0);

    return (
        <ul className="about-project__duration">
            {ProjectDuration.map((item) =>
                <li key={item.id} className="about-project__duration-item" style={{width: item.duration/totalDuration *  100 + '%'}}>
                    <h3 className='about-project__duration-title' style={{background:item.background}}>{item.title}</h3>
                    <p className='about-project__duration-text'>{item.text}</p>
                </li>
            )}
        </ul>


    )
}

export default ProjectChart;