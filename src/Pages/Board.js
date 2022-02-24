import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Components/Card';

function Board(props) {

    console.log("Cards here: ");
    console.log(props.cards);

    return (
        <div className = "container">
            <h1>Board</h1>
            <div className = "row">
                <form>
                    <input type="text" placeholder="Search..." />
                </form>
                
                <Link to="/create"><button className='btn'>+ Create</button></Link>
            </div>
            
            <div className = "row">
                {props.cards.map(section => {return (
                    <div className = "col-25">
                        <p className = "col-title">{section.title} ({section.items.length})</p>
                        {section.items.map(card => {return( 
                            <Card 
                                title = {card.title}
                                ticket_id = {card.ticket_id}
                                description = {card.description}
                                tag = {card.tag}
                                tag_color = {card.tag_color}
                                urgency = {card.urgency}
                                assigned = {card.assigned}
                            />
                        )})}
                    </div>
                )})

                }
                
            </div>
        </div>
    );
}

export default Board;