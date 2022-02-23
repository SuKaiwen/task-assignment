import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Card from '../Components/Card';

function Board(props) {
    
    // Users array
    // Users object will have the following:
    // - Name
    // - Role
    const [users, setUsers] = useState([
        {
            name: "Kevin Su",
            role: "Software Engineer I"
        }
    ]);

    // Tags
    const [tags, setTags] = useState(["Frontend", "Backend"]);

    // Example structure

    // Use state: 
    // - TO DO
    // - IN PROGRESS
    // - CODE REVIEW
    // - DONE

    // Each use state object will contain an array of cards each card will have:

    // Card 
    // - Ticket Number e.g. T12345
    // - Title e.g. Front End Mobile Issues
    // - Tag e.g. Frontend
    // - Tag color e.g. red
    // - Urgency e.g. low mid or high
    // - Assigned User e.g. John
    // - Description e.g. Fix front-end responsiveness issues...

    // Example cards to test...
    const [cards, setCards] = useState([
        {
            title: "TO DO",
            items: [
                {
                    ticket_id: "AB1234",
                    title: "UI Redesign",
                    tag: "Frontend",
                    tag_color: "red",
                    urgency: "mid",
                    assigned: "Kevin Su",
                    description: "Implement the new UI design for the landing page. The UI design must follow the color scheme and layout!"
                },
                {
                    ticket_id: "AB4342",
                    title: "Fix Map Bug",
                    tag: "Frontend",
                    tag_color: "blue",
                    urgency: "high",
                    assigned: "John Smith",
                    description: "The icons on the map are not showing up as expected, investigate why."
                }
            ]
        },
        {
            title: "IN PROGRESS",
            items: [
                {
                    ticket_id: "TS3920",
                    title: "Multiple Users",
                    tag: "Backend",
                    tag_color: "green",
                    urgency: "high",
                    assigned: "Joe Smith",
                    description: "Duplicate Users are being create. Fix bug ASAP!"
                }
            ],
        },
        {
            title: "CODE REVIEW",
            items: [

            ]
        },
        {
            title: "DONE",
            items : [
                {
                    ticket_id: "SR4583",
                    title: "Implement Carousel",
                    tag: "Frontend",
                    tag_color: "green",
                    urgency: "low",
                    assigned: "Mark Lane",
                    description: "Implement an image carousel for the product page."
                }
            ]
        }
    ]);

    function addTag(tagsToAdd){
        let newTags = tags;
        newTags.concat(tagsToAdd);
        setTags(newTags);
        return;
    }

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
                {cards.map(section => {return (
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