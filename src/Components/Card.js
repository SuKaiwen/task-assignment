import React from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
    return (
        <div className = "card">
            <div className = "row">
                <h1>{props.title}</h1>
                <Link to={`/task/${props.ticket_id}`}><p>{props.ticket_id} | <i class="fa-solid fa-pen-to-square"></i></p></Link>
            </div>
            <p>{props.description}</p>
            <div className = "row">
                <p className = "tag" style = {{backgroundColor:`${props.tag_color}`}}>{props.tag}</p>
            </div>
            <div className = "row">
                <p>Urgency: {props.urgency} {
                    props.urgency === "low" ? <i class="fas fa-chevron-up green"></i> 
                    : <>
                        {props.urgency === "mid" ? <i class="fas fa-chevron-up orange"></i> :
                            <i class="fas fa-circle-chevron-up red"></i>
                        }
                    </> 
                }</p>
                <p><i class="fas fa-circle-user"></i> {props.assigned}</p>
            </div>
        </div>
    );
}

export default Card;