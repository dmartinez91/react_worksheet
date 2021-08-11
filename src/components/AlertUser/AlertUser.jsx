import React from 'react';

const AlertUser = (props) => {
    return (
        
        <div className="row row-spacer" >
        <div className="col-md-4">
            <button onClick={props.alert}> Click Me </button>
        </div>   
        </div>
     );
}
 
export default AlertUser;