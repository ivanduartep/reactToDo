import React from 'react';

const ListElementComponent = ({id, name, click}) => {

    return (
        <li onClick={click} key={id}>
            {name}
        </li>
    )
}

export default ListElementComponent;