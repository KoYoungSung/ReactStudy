import React from 'react'

function Wrapper(a){

    const style = {
        border: '2px solid black',
        padding: '16px'
    };

    return(
        <div style={style}>
            {a.children}
        </div>
    );

     
}
export default Wrapper;