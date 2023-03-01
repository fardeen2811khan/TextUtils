import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{height: '50px',color: props.mode==='dark'?'white':'#042743'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" style={{color: props.mode==='dark'?'white':'#042743'}}>
           <strong>{capitalize(props.alert.typ)}</strong>: {props.alert.msg} 
        </div>}
        </div>
    )
}

export default Alert
