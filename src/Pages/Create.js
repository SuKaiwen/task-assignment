import React, {useState, useEffect} from 'react';

function Create(props) {

    // Default Tag Colors
    const [tagColors, setTagColors] = useState(["red", "blue", "green", "orange", "purple"]);

    // Tag variables
    const [tagName, setTagName] = useState();

    // User variables
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [role, setRole] = useState();

    // Card variables
    const [ticketid, setTicketId] = useState("Id1234");
    const [title, setTitle] = useState("Title");
    const [cardTag, setCardTag] = useState(props.tags[0]);
    const [tagColor, setTagColor] = useState("red");
    const [urgency, setUrgency] = useState('Low Urgency');
    const [description, setDescription] = useState("Description...");
    const [assigned, setAssigned] = useState(props.users[0].name);


    function handleUrgencyChange(e){
        setUrgency(e.target.value);
    }

    function handleAssignedChange(e){
        setAssigned(e.target.value);
    }

    function handleTagChange(e){
        setCardTag(e.target.value);
    }

    function handleTagColorChange(e){
        setTagColor(e.target.value);
    }

    return (
        <div className = "container">
            <h1>Create</h1>
            <br />
            <h2>Add New User</h2>
            <div className = "normal-row">
                <form>
                    <input type="text" placeholder="First Name..." onChange={(e) => setFirstName(e.target.value)}/>
                </form>
                <form>
                    <input type="text" placeholder="Last Name..." onChange={(e) => setLastName(e.target.value)}/>
                </form>
                <form>
                    <input type="text" placeholder="Role..." onChange={(e) => setRole(e.target.value)}/>
                </form>
                <button className = "btn" onClick = {() => props.addUser(firstName, lastName, role)}>Add User</button>
            </div>
            <br />
            <h2>Add New Tag</h2>
            <div className = "normal-row">
                <form>
                    <input type="text" placeholder="Tag name..."  onChange={(e) => setTagName(e.target.value)}/>
                </form>
                <button className = "btn" onClick = {() => props.addTag(tagName)}>Add Tag</button>
            </div>
            <br />
            <h2>Add New Task</h2>
            <div className = "normal-row">
                <form>
                    <input type="text" placeholder="Ticket Id..." onChange={(e) => setTicketId(e.target.value)}/>
                </form>
                <form>
                    <input type="text" placeholder="Title..." onChange={(e) => setTitle(e.target.value)}/>
                </form>
            </div>
            <div className = "normal-row">
                <form>
                    <select onChange={handleTagChange} value = {cardTag} >
                        {props.tags.map(tagOption => {return (
                            <option value={tagOption}>{tagOption}</option>
                        )})}
                    </select>
                </form>
                <form>
                    <select onChange={handleTagColorChange} value = {tagColor} >
                        {tagColors.map(color => {return (
                            <option value={color}>{color.toLocaleUpperCase()}</option>
                        )})}
                    </select>
                </form>
                <form>
                    <select onChange={handleUrgencyChange} value = {urgency} >
                        <option value="Low Urgency">Low Urgency</option>
                        <option value="Mid Urgency">Mid Urgency</option>
                        <option value="High Urgency">High Urgency</option>
                    </select>
                </form>
            </div>
            <div className = "normal-row">
                <form>
                    <textarea rows="4" cols="50" onChange={(e) => setDescription(e.target.value)}>
                        Description...
                    </textarea>
                </form>
            </div>
            <div className = "normal-row">
                <form>
                    <select onChange={handleAssignedChange} value = {assigned} >
                        {props.users.map(user => {return (
                            <option value={user.name}>{user.name}</option>
                        )})}
                    </select>
                </form>
                <button className = "btn" onClick={() => props.addCard(ticketid, title, cardTag, tagColor, urgency, description, assigned)}>Add Card</button>
            </div>
        </div>
    );
}

export default Create;