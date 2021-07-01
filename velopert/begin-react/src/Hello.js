import React from 'react'

function Hello({color, name, children, isSpecial}) {
    return <div style ={{color}}>
            {isSpecial ? <b>*</b> : null}
            Hi {name}
            
            </div>
        
}

Hello.defaultProps = {
    name: 'unknown'
}

export default Hello;

