import React from 'react';
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    const {name, salary, img} = props.player
    return (
        <div className='player'>
            <img className='img' src={img} alt=""/>
            <h2>Name:{name}</h2>
            <p>Salary:$ {salary}M</p>
            <button onClick={()=> props.handelAddPlayer(props.player)} className="btn btn-primary">Add { <FontAwesomeIcon icon={faUserPlus} />}</button>
        </div>
    );
};

export default Player;