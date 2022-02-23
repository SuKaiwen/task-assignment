import React from 'react';
import { useLocation } from 'react-router-dom'

function Create(props) {
    const location = useLocation();

    return (
        <div className = "container">
            <h1>Create</h1>
            <h1></h1>
            <br />
            <h2>Add New User</h2>
            <div className = "normal-row">
                <form>
                    <input type="text" placeholder="First Name..." />
                </form>
                <form>
                    <input type="text" placeholder="Last Name..." />
                </form>
                <form>
                    <input type="text" placeholder="Role..." />
                </form>
                <button className = "btn">Add User</button>
            </div>
            <br />
            <h2>Add New Tag</h2>
            <div className = "normal-row">
                <form>
                    <input type="text" placeholder="Tag name..." />
                </form>
                <button className = "btn">Add Tag</button>
            </div>
            <br />
            <h2>Add New Task</h2>
            <div className = "normal-row">
                <form>
                    <input type="text" placeholder="Ticket Id..." />
                </form>
                <form>
                    <input type="text" placeholder="Title..." />
                </form>
            </div>
            <div className = "normal-row">
                <form>
                    <input type="text" placeholder="Tag..." />
                </form>
                <form>
                    <input type="text" placeholder="Tag Color..." />
                </form>
                <form>
                    <input type="text" placeholder="Urgency..." />
                </form>
            </div>
            <div className = "normal-row">
                <form>
                    <input type="text" placeholder="Description..." />
                </form>
                <form>
                    <input type="text" placeholder="Assigned..." />
                </form>
                <button className = "btn">Add Tag</button>
            </div>
        </div>
    );
}

export default Create;