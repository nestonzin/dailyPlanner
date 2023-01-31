import { Flex } from "@chakra-ui/react";
import { NavBar } from "../Navbar";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Flex w="100%" h="100vh" flexDirection="column" alignItems="center">
      <NavBar />
      {children}
    </Flex>
  );
};
