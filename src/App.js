import React, {useState, useEffect} from 'react';

import Board from './Pages/Board';
import Nav from './Components/Nav';
import Create from './Pages/Create';
import About from './Pages/About';

import './CSS/Nav.css';
import './CSS/Global.css';
import './CSS/Board.css';

import { Routes ,Route, BrowserRouter as Router } from 'react-router-dom';

function App() {

    // Users array
    // Users object will have the following:
    // - Name
    // - Role
    const [users, setUsers] = useState([
      {
          name: "Kevin Su",
          role: "Software Engineer I"
      },
      {
        name: "John Smith",
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
                  assigned: "John Smith",
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
                  assigned: "Kevin Su",
                  description: "Implement an image carousel for the product page."
              }
          ]
      }
  ]);

  function addTag(tagsToAdd){

    // Check for valid tag name
    if(tags.includes(tagsToAdd) || tagsToAdd == ""){
      return;
    }
    let newTags = tags;
    newTags.push(tagsToAdd);
    setTags(newTags);
    return;
  }

  function addUser(fname, lname, role){

    // If empty string or string of spaces
    if(fname.replace(/\s/g, "") == "" || lname.replace(/\s/g, "") == "" || role.replace(/\s/g, "") == ""){
      return;
    }

    let updatedUsers = users;
    updatedUsers.push({
      name: fname + " " + lname,
      role: role
    });
    setUsers(updatedUsers);
  }

  function addCard(id, title, tag, tagColor, urgency, description, assigned){

    console.log(description);

    if(id.replace(/\s/g, "") == "" || title.replace(/\s/g, "") == "" || description.replace(/\s/g, "") == ""){
      return;
    }

    let updatedCards = cards;
    
    updatedCards[0].items.push({
      ticket_id: id,
      title: title,
      tag: tag,
      tag_color: tagColor,
      urgency: urgency,
      assigned: assigned,
      description: description
    });

    setCards(updatedCards);

    console.log(cards);
  }

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Board 
            cards = {cards} 
          />} />
          <Route path="/create" element={<Create 
            cards = {cards} 
            tags = {tags}
            users = {users}
            addTag = {addTag}
            addUser = {addUser}
            addCard = {addCard}
          />} />
          <Route path="/about" element={<About/>} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
