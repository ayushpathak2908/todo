import React from 'react';

const Lists = (props) =>{
   return(<> <div className='to-do'><li><i class="fa fa-times" aria-hidden="true" onClick={()=>{
      props.onSelect(props.id);
   }}></i>{props.text}</li></div></>)
}

export default Lists;