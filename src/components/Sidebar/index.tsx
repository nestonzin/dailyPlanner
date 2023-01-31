import { Button, Flex, useDisclosure, Text } from "@chakra-ui/react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => (
  <Flex
    as="aside"
    position="fixed"
    top={0}
    left={0}
    bottom={0}
    width="25vw"
    backgroundColor="brand"
    color="white"
    border="1px"
    borderRadius="2xl"
    display={isOpen ? "flex" : "none"}
    flexDirection="column"
    onClick={onClose}
    gap="2rem"
    alignItems="center"
    justifyContent="space-around"
  >
    <Flex>
      <Text>Task</Text>
    </Flex>
    <Flex>
      <Text>Workout</Text>
    </Flex>
    <Flex>
      <Text>Food</Text>
    </Flex>
  </Flex>
);

const SidebarButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Sidebar</Button>
      <Sidebar isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default SidebarButton;
