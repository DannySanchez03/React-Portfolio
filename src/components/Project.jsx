import React, { useState } from 'react';

export default function Project(props) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <a href={props.project[0]} target="_blank" style={{ position: 'relative', display: 'inline-block' }} className='BPS MB'>
        <img
            src={props.project[1]}
            alt={props.project[2]}
            style={{ width: '100%', height: 'auto', opacity: isHovered ? '0.5' : '1' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        />
        {isHovered && (
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'black' }}>
            <h2>{props.project[2]}</h2>
            <p>{props.project[3]}</p>
            </div>
        )}
        </a>
    );
  }