import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import Card from '../Components/Card';

import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import _ from "lodash";

function Board(props) {

    const [filteredCards, setFilteredCards] = useState();

    const [searchKey, setSearchKey] = useState();

    const firstUpdate = useRef(true);

    // On initial load set the filtered cards to the original object
    useEffect(() => {
        setFilteredCards(props.cards);
    }, [])

    // On search filter the cards
    useEffect(() => {

        // On first update just skip it
        if(firstUpdate.current){
            firstUpdate.current = false;
            return;
        }

        // If search term is empty just return original object
        // AKA no searching
        if(searchKey === ""){
            setFilteredCards(props.cards);
            return;
        }

        // Else filter the object
        let final = {
            "todo":{
                title: "TO DO",
                items: props.cards.todo.items.filter(x => x.title.toLowerCase().includes(searchKey.toLowerCase()))
            },
            "inprogress":{
                title: "IN PROGRESS",
                items: props.cards.inprogress.items.filter(x => x.title.toLowerCase().includes(searchKey.toLowerCase()))
            },
            "codereview":{
                title: "CODE REVIEW",
                items: props.cards.codereview.items.filter(x => x.title.toLowerCase().includes(searchKey.toLowerCase()))
            },
            "done":{
                title: "DONE",
                items: props.cards.done.items.filter(x => x.title.toLowerCase().includes(searchKey.toLowerCase()))
            }
        }
        setFilteredCards(final);
    }, [searchKey])

    return (
        <div className = "container">
            <div className = "row">
                <h1>Board</h1>
                <div>
                    <p><i class="fas fa-circle-user"></i> Kevin Su</p>
                </div>
            </div>
            <div className = "row">
                {/* Change the search input and update the results here */}
                <form>
                    <input type="text" placeholder="Search..." onChange={(e) => setSearchKey(e.target.value)} />
                </form>
                
                <Link to="/create"><button className='btn'>+ Create</button></Link>
            </div>
            <div className = "row">
                <DragDropContext onDragEnd={props.handleDragEnd}>
                    {_.map(filteredCards, (data, key) => {
                        return (
                            <div key = {key} className="col-25">
                                <h5>{data.title} ({data.items.length})</h5>
                                <Droppable droppableId={key}>
                                    {(provided)=>{
                                        return(
                                            <div ref={provided.innerRef}
                                                {...provided.droppableProps}
                                                className={"droppable-col"}
                                            >
                                                {data.items.map((x, index) => {
                                                    return (
                                                        <Draggable key={x.ticket_id} index={index} draggableId={x.ticket_id}>
                                                            {(provided) => {
                                                                return(
                                                                    <div
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        className="item"
                                                                    >
                                                                        
                                                                        <Card 
                                                                            title = {x.title}
                                                                            ticket_id = {x.ticket_id}
                                                                            description = {x.description}
                                                                            tag = {x.tag}
                                                                            tag_color = {x.tag_color}
                                                                            urgency = {x.urgency}
                                                                            assigned = {x.assigned}
                                                                        />
                                                                    </div>

                                                                )
                                                            }}
                                                        </Draggable>
                                                    )
                                                })}
                                                {provided.placeholder}
                                            </div>
                                        )
                                    }}
                                </Droppable>
                            </div>
                        )
                    })}
                </DragDropContext>
            </div>
        </div>
    );
}

export default Board;