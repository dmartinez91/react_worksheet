import React from 'react';

const NamesList = (props) => {
    return (
        <div>
            <ol className="NamesList">{props.nameList}</ol>
        </div>
    )
}

export default NamesList;