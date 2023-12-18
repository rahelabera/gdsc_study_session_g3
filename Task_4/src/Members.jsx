import React from "react";
import './App.css';

const members = [
    {name: 'Samrawit'},
    {name: 'Kaleb'},
    {name: 'Alex'},
];

function memberList(){
    return(
        <ul>
            {
                members.map((member)=>(
                    <li key={member.name}>
                        {member.name}
                    </li>
                ))
            }
        </ul>
    )
}
export default memberList;