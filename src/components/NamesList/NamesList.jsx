import React from 'react';

// const NamesList = (props) => {
//     return (
//         <div>
//             {props.nameList}
//             <ol className="NamesList"></ol>
//         </div>
//     )
// }

const NamesList = (props) => {
    return ( 
        <div>
            {console.log(props.nameList)}
            <ol>
                {props.nameList.map(function(name, index){
                   return <li key={index}>{name} </li>;
                })}
            </ol>
        </div>
     );
}


export default NamesList;