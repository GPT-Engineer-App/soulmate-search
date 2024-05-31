import { useState } from "react";
import { Container, VStack, HStack, Box, Text, Input, Button, Image, IconButton, useToast } from "@chakra-ui/react";
import { FaHeart, FaUser } from "react-icons/fa";

const Index = () => {
  const [profiles, setProfiles] = useState([
    { id: 1, name: "John Doe", age: 30, image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTcxNTc4MzF8MA&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 2, name: "Jane Smith", age: 28, image: "https://images.unsplash.com/photo-1557053910-d9eadeed1c58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTcxNzE1NzgzMXww&ixlib=rb-4.0.3&q=80&w=1080" },
  ]);
  const [newProfile, setNewProfile] = useState({ name: "", age: "", image: "" });
  const toast = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProfile({ ...newProfile, [name]: value });
  };

  const addProfile = () => {
    if (newProfile.name && newProfile.age) {
      setProfiles([...profiles, { ...newProfile, id: profiles.length + 1, image: "https://images.unsplash.com/photo-1712847331925-bf0e3fd2b7ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MXwxfHNlYXJjaHwxfHxwb3J0cmFpdHxlbnwwfHx8fDE3MTcxNTc4MzF8MA&ixlib=rb-4.0.3&q=80&w=1080" }]);
      setNewProfile({ name: "", age: "", image: "" });
      toast({
        title: "Profile added.",
        description: "The new profile has been added successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Error.",
        description: "Please fill in all fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={6} width="100%">
        <Text fontSize="3xl" fontWeight="bold">
          Matrimonial Profiles
        </Text>
        <VStack spacing={4} width="100%">
          {profiles.map((profile) => (
            <HStack key={profile.id} spacing={4} width="100%" p={4} borderWidth={1} borderRadius="md" boxShadow="md">
              <Image boxSize="100px" borderRadius="full" src={profile.image} alt={profile.name} />
              <VStack align="start">
                <Text fontSize="xl" fontWeight="bold">
                  {profile.name}
                </Text>
                <Text>Age: {profile.age}</Text>
              </VStack>
              <IconButton aria-label="Like" icon={<FaHeart />} size="lg" colorScheme="red" />
            </HStack>
          ))}
        </VStack>
        <Box width="100%" p={4} borderWidth={1} borderRadius="md" boxShadow="md">
          <Text fontSize="2xl" mb={4}>
            Add New Profile
          </Text>
          <VStack spacing={4}>
            <Input placeholder="Name" name="name" value={newProfile.name} onChange={handleInputChange} />
            <Input placeholder="Age" name="age" value={newProfile.age} onChange={handleInputChange} />
            <Button leftIcon={<FaUser />} colorScheme="teal" onClick={addProfile}>
              Add Profile
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
