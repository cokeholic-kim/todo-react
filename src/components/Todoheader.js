import React from 'react'

const Todoheader = ({inputText,Change,Addlist})=>{

    return(
        <div className='header'>
            <h2>To do List</h2>
            <div>
                <input value={inputText} onChange={Change}/>
                <button onClick={Addlist}>+</button>
            </div>
        </div>
    )
}

export default Todoheader