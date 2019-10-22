import React from 'react'

const TitleCard = (props) => {
    return (
        <>
        <div className="container blue">
            <div><h1 className="white-text center">{props.title}</h1></div>
            <div className="row"></div>
        </div>
        </>
    );
}
export default TitleCard;