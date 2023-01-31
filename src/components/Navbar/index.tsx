import { Flex } from "@chakra-ui/react";
import SidebarButton from "../Sidebar";

export const NavBar = () => {
  return (
    <Flex w="100%" h="10vh" alignItems="center" p="1rem">
      <SidebarButton />
    </Flex>
  );
};
