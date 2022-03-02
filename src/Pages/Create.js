import React, {useState, useEffect} from 'react';

function Create(props) {

    // Create options
    const [createOption, setCreateOption] = useState("");

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
            <div className = "normal-row">
                <button className = "btn" onClick = {() => setCreateOption("User")}>+ User</button>
                <button className = "btn" onClick = {() => setCreateOption("Tag")}>+ Tag</button>
                <button className = "btn" onClick = {() => setCreateOption("Issue")}>+ Issue</button>
            </div>
            {createOption == "User" ? 
                <div>
                    <h2>Add New User</h2>
                    <p>First Name</p>
                    <form>
                        <input type="text" placeholder="E.g. John..." onChange={(e) => setFirstName(e.target.value)}/>
                    </form>
                    <p>Last Name</p>
                    <form>
                        <input type="text" placeholder="E.g. Smith..." onChange={(e) => setLastName(e.target.value)}/>
                    </form>
                    <p>Role</p>
                    <form>
                        <input type="text" placeholder="E.g. Senior Engineer..." onChange={(e) => setRole(e.target.value)}/>
                    </form>
                    <br />
                    <button className = "btn" onClick = {() => {props.addUser(firstName, lastName, role); setCreateOption("");}}>Add User</button>
                </div>
                : <>{
                    createOption == "Tag" ? 
                    <div>
                    <h2>Add New Tag</h2>
                    <p>Tag Name</p>
                    <form>
                        <input type="text" placeholder="E.g. Frontend..."  onChange={(e) => setTagName(e.target.value)}/>
                    </form>
                    <br />
                    <button className = "btn" onClick = {() => {props.addTag(tagName); setCreateOption("");}}>Add Tag</button>
                    </div>
                    : <> {
                        createOption == "Issue" ? 
                        <div>
                        <h2>Add New Issue</h2>
                        <p>Ticket Id</p>
                        <form>
                            <input type="text" placeholder="E.g. AB1234..." onChange={(e) => setTicketId(e.target.value)}/>
                        </form>
                        <p>Title</p>
                        <form>
                            <input type="text" placeholder="E.g. Fix Bugs..." onChange={(e) => setTitle(e.target.value)}/>
                        </form>
                        <p>Tag</p>
                        <div className = "normal-row">
                            <form>
                                <select onChange={handleTagChange} value = {cardTag} >
                                    {props.tags.map(tagOption => {return (
                                        <option value={tagOption}>{tagOption}</option>
                                    )})}
                                </select>
                            </form>
                            <div className = "square" style ={{backgroundColor:`${tagColor}`}}></div>
                            <form>
                                <select onChange={handleTagColorChange} value = {tagColor} >
                                    {tagColors.map(color => {return (
                                        <option value={color}>{color.toLocaleUpperCase()}</option>
                                    )})}
                                </select>
                            </form>
                        </div>
                        <p>Urgency</p>
                        <form>
                            <select onChange={handleUrgencyChange} value = {urgency} >
                                <option value="Low">Low Urgency</option>
                                <option value="Mid">Mid Urgency</option>
                                <option value="High">High Urgency</option>
                            </select>
                        </form>
                        <p>Description</p>
                        <div className = "normal-row">
                            <form>
                                <textarea rows="4" cols="50" onChange={(e) => setDescription(e.target.value)}>
                                    Description...
                                </textarea>
                            </form>
                        </div>
                        <p>Assigned to: </p>
                        <div className = "normal-row">
                            <form>
                                <select onChange={handleAssignedChange} value = {assigned} >
                                    {props.users.map(user => {return (
                                        <option value={user.name}>{user.name}</option>
                                    )})}
                                </select>
                            </form>
                        </div>
                        <button className = "btn" onClick={() => {props.addCard(ticketid, title, cardTag, tagColor, urgency, description, assigned); setCreateOption("");}}>Add Issue</button>
                    </div>
                    : 
                    <div></div>
                    }
                    </>
                }</>
            }
        </div>
    );
}

export default Create;