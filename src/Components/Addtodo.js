import React, { useState } from 'react'
import { Button, Input, WrapItem } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { add_todo } from './redux/action/action'
const Addtodo = () => {
    const [newtext,setNewText] = useState("")
     const dispatch = useDispatch();
     console.log(newtext)
  return (
    
    <div style={{display: "flex",justifyContent: "center", alignItems: "center",}}>
      <Input style={{ borderRadius: "5px 0 0 5px" }} w="500px" placeholder="Add todo" 
      onChange={(e)=>setNewText(e.target.value) }
      value={newtext} />
      <WrapItem>
        <Button style={{ borderRadius: "0 5px 5px 0" }} colorScheme="whatsapp" onClick={()=>dispatch(add_todo(newtext))} > Add Todo </Button>
      </WrapItem>
    </div>
  )
}

export default Addtodo
