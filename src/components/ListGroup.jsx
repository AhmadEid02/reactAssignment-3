import React from 'react'

const ListGroup = ({name,map1}) => {
    return (
        <>
        <h3>{name}</h3>
        <ul className="list-group">
            {map1.map(iteam=>(<li className="list-group-item" key={`${iteam}`}>{iteam}</li>))}
        </ul>
        </>
    )
}

export default ListGroup