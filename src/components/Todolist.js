import React from 'react';

const Todolists = ({todoLists,deltodolists})=>{
    return(
        <div>
            <ul>
                {todoLists.map(list=><li key={list.id}>{list.text}
                <span onClick={()=>deltodolists(list.id)}>X</span></li>)}
            </ul>
        </div>
    )
}

export default Todolists