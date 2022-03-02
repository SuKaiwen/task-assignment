import React from 'react';

function About(props) {
    return (
        <div className = "container">
            <div className = "row">
                <div className = "col-50">
                    <h1>About</h1>
                    <h2>1. Dragging Issues</h2>
                    <p>To move an issue to another section simply click and hold on the issue card and drag it to the respective destination column. Note: it is kinda wonky and the drag n drop is not very accurate so just play around with it.</p>
                    <h2>2. Search Issues</h2>
                    <p>To search for an issue simply type a keyword in the search box. On change it will automatically filter the issues by the title.</p>
                    <h2>3. Adding New Users</h2>
                    <p>From the dashboard click on the + Create button then click on + User. Type in the first name, last name and role in the fields then click Add User. Note that these fields must be non white space.</p>
                    <h2>4. Adding New Tags</h2>
                    <p>From the dashboard click on the + Create button then click on + Tag. Type in the tag name in the fields then click Add Tag. Note that the field must be non white space.</p>
                    <h2>5. Adding New Issues</h2>
                    <p>From the dashboard click on the + Create button then click on + Issue. Type in the ticket id (must be less than 6 chars) and the title. Then select the tag, color and urgency from the dropdown box. Finally add a description and assign it to a user (selected from a dropdown box). Finally click Add Issue to finish. Note: all text fields must be non white space.</p>
                    <h2>6. Viewing Issues</h2>
                    <p>To view an issue simply click on the issue number on the top right of the card in the dashboard</p>
                    <h2>7. Commenting</h2>
                    <p>On the issue page, type in a comment and click add comment. Note: comments must be non empty and non white space.</p>
                    <h2>8. How it is made?</h2>
                    <p>Mainly made using React and BeautifulDnD (drop and drop library). For more info check out: <a target="_blank" href ="https://github.com/SuKaiwen/task-assignment">The Github Repo</a></p>
                </div>
            </div>
        </div>
    );
}

export default About;