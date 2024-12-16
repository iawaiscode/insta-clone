import { Button } from "@/components/ui/button";
import { HStack } from "@chakra-ui/react";

const App = () => {
  return (
    <>
      <HStack height="100vh">
        <Button>Click me</Button>
        <Button>Click me</Button>
      </HStack>
    </>
  );
};

export default App;
