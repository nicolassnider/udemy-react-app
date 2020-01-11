import React from 'react'
import './UserOutput.css';


const userOutput = (props) => {
    return (
        <div className='UserOutput'>
            <p>UserName: {props.userName}</p>
            <p>i hope ill be overwritten!</p>
        </div>
    );

}

export default userOutput