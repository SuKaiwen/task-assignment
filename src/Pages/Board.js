import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Components/Card';

import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import _ from "lodash";

function Board(props) {

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
                <DragDropContext onDragEnd={props.handleDragEnd}>
                    {_.map(props.cards, (data, key) => {
                        return (
                            <div key = {key} className="col-25">
                                <h5>{data.title}</h5>
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