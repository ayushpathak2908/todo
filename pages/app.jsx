import React, { useState } from 'react';
import Lists from './Lists'

function App(){
    const [inputList, setInputList]=useState("");
    const [Items, setItems]=useState([]);

    const itemEvent= (event) =>{
        setInputList(event.target.value)
    };
    const ListOfItems = (event) => {
         setItems((oldItems) => {
            return [...oldItems, inputList];
         })
         setInputList('');
    };
    const deleteItems = (id)=>{
        console.log("ahgj")
        setItems((oldItems) => {
            return oldItems.filter((arrEle, index)=>{
                   return id!== index;
            })
         })
    }
    return(
         <>
             <div className="first-div">
                <div className="second-div">
                    <br/>
                    <h1>My To Do List</h1>
                    <br/>
                    <input type="text" placeholder="Add a item" value={inputList} onChange={itemEvent}/>
                    <button onClick={ListOfItems}>+</button>
                    <ol> 
                        
                        {
                            Items.map((itemVal, index)=>{
                               return <Lists text={itemVal} 
                                        id={index}
                                        key={index}
                                        onSelect={deleteItems}
                                        />
                            })
                        }
                    </ol>
                </div>
             </div>
         </>
    )
}


export default App;