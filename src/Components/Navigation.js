import {
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    RadioGroup,
    useDisclosure,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import { HamburgerIcon } from "@chakra-ui/icons";
  
  const Navigation = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [placement, setPlacement] = useState("left");
    return (
      <div>
        <RadioGroup defaultValue={placement} onChange={setPlacement}></RadioGroup>
        <Button colorScheme="blue" onClick={onOpen}>
          <HamburgerIcon />
        </Button>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
            <DrawerBody>
              <p>Home</p>
              <p>TodoList</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    );
  };
  
  export default Navigation;






      
    