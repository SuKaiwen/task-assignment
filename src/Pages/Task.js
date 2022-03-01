import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

function Task(props) {

    // Slug
    let { slug } = useParams();

    // Task details
    const [task, setTask] = useState();
    const [valid, setValid] = useState(true);

    // Get the task details...
    useEffect(() => {
        for(let x of props.cards.todo.items){
            if(x.ticket_id == slug){
                let details = x;
                setTask(details);
                return;
            }
        }
        for(let x of props.cards.inprogress.items){
            if(x.ticket_id == slug){
                let details = x;
                setTask(details);
                return;
            }
        }
        for(let x of props.cards.codereview.items){
            if(x.ticket_id == slug){
                let details = x;
                setTask(details);
                return;
            }
        }
        for(let x of props.cards.done.items){
            if(x.ticket_id == slug){
                let details = x;
                setTask(details);
                return;
            }
        }
        setValid(false);
    }, [])

    return (
        <div className = "container">
            {valid ? 
                <div>
                    {task &&
                        <div>
                            <h1>Task - {task.ticket_id} / {task.title}</h1>
                            <div className='row'>
                                <div className='col-50'>
                                    <p>Type</p>
                                    <h1>{task.tag}</h1>
                                    <p>Priority</p>
                                    <h1>{task.urgency} {
                                        task.urgency === "low" ? <i class="fas fa-chevron-up green"></i> 
                                        : <>
                                            {task.urgency === "mid" ? <i class="fas fa-chevron-up orange"></i> :
                                                <i class="fas fa-circle-chevron-up red"></i>
                                            }
                                        </> 
                                    }</h1>
                                </div>
                                <div className='col-50'>
                                    <p>Assigned To:</p>
                                    <h1>{task.assigned}</h1>
                                    <p>Date Created:</p>
                                    <h1>22/02/2022</h1>
                                </div>
                            </div>
                            <br />
                            <h2>Description</h2>
                            <p>{task.description}</p>
                            <br />
                            <h2>Comments</h2>
                            <p>{task.description}</p>
                        </div>
                    }
                </div>
                :
                <h1>Invalid Task ID</h1>
            }
        </div>
    );
}

export default Task;