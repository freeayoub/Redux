
import { Table, Tbody, Tr, Td, TableContainer, useDisclosure } from "@chakra-ui/react";
import { Button, WrapItem } from "@chakra-ui/react";
import { CheckCircleIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { delete_todo, edit_todo, isComplit_todo,} from "./redux/action/action";
import { Input } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useState } from "react";
const TodoCard = ({ todo }) => {
  console.log("todo", todo);
  const [newtodo,setNewTodo] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();  
  const dispatch = useDispatch();

  const HandleSubmit =()=>{
    if (
    window.confirm("Are sure to add new text ")) {
    dispatch(edit_todo(todo.id,newtodo));
    onClose();
    }
  }

  const onDeleteTodo = (id) =>{
    if (
      window.confirm("Are sure to delete ")) {
      dispatch(delete_todo(id));
    }
  }
  
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TableContainer w="700px" mt="20px">
        <Table variant="striped" colorScheme="teal">
          <Tbody>
            <Tr>
              <Td
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                

                  <CheckCircleIcon 
                  onClick={ ()=>dispatch(isComplit_todo(todo.id))}
                  />
                  {todo.isComplit ? (
                    <span
                    style={{textDecoration: 'line-through', color:'red'}}
                    >
                    {todo.text } 
                </span>) :  (todo.text ) }


                </div>
                <WrapItem style={{ gap: "10px" }}>
                  <Button colorScheme="red" onClick={() =>onDeleteTodo(todo.id)}>

                    <DeleteIcon />

                  </Button>
               
                  <Button onClick={onOpen} colorScheme="pink"> 
                   <EditIcon />
                  </Button>
            
                  <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Edit Todo</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                      <Input placeholder='Add new text' size="lg"  onChange={(e)=>setNewTodo(e.target.value)} value={newtodo}
                      />
                      </ModalBody>
            
                      <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                          Close
                        </Button>
                        <Button variant='ghost'   onClick={()=>HandleSubmit(todo.id,newtodo) }
                        >
                        Save
                        </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>                
                </WrapItem>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TodoCard;
 