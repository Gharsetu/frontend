import { Box, Text, VStack, HStack, Button, Input } from '@chakra-ui/react';
import Separator from '../../components/Separator';
import { useState } from 'react';

const BasicInfo = ({ propertyForm, setPropertyForm }) => {

  const propertyTypes = ['Residential', 'Commercial'];
  const lookingToOptions = ['Rent', 'Sell', 'Co-Living Space'];

  const handlePropertyTypeChange = (type) => {
    setPropertyForm((prev) => ({
      ...prev,
      propertyType: type, // Update propertyType in propertyForm
    }));
  };

  const handleLookingToChange = (option) => {
    setPropertyForm((prev) => ({
      ...prev,
      availableFor: option, // Update availableFor in propertyForm
    }));
  };

  return (
    <Box h="calc(100vh - 158px)" px="20" py="6" overflowY="auto">
      <VStack spacing={9} align="start">
        
        <Box>
          <Text fontWeight="bold" fontSize="3xl">2. Basic Property Details</Text>
          <Text fontSize="2xl">Tell us about your property so we can help you find the right buyers or tenants faster.</Text>
          <Separator />
        </Box>

        <VStack align="start" spacing={4}>
          <Text fontSize="xl">Property Type:</Text>
          <HStack spacing={8}>
            {propertyTypes.map((type) => (
              <Button
                key={type}
                size="sm"
                variant="outline"
                fontWeight="semibold"
                borderRadius="xl"
                onClick={() => handlePropertyTypeChange(type)}
                colorScheme={propertyForm?.propertyType === type ? 'teal' : 'gray'}
              >
                {type}
              </Button>
            ))}
          </HStack>
        </VStack>

        <VStack align="start" spacing={4}>
          <Text fontSize="xl">Looking to:</Text>
          <HStack spacing={8}>
            {lookingToOptions.map((option) => (
              <Button
                key={option}
                size="sm"
                variant="outline"
                fontWeight="semibold"
                borderRadius="xl"
                onClick={() => handleLookingToChange(option)}
                colorScheme={propertyForm?.availableFor === option ? 'teal' : 'gray'}
              >
                {option}
              </Button>
            ))}
          </HStack>
        </VStack>

        <VStack align="start" spacing={1}>
          <Input 
            variant="outline" 
            placeholder="City of the Property" 
            value={propertyForm?.address.city} // Bind to propertyForm
            onChange={(e) => 
              setPropertyForm((prev) => ({
                ...prev,
                address: {
                  ...prev.address,
                  city: e.target.value, // Update city in propertyForm
                },
              }))
            }
          />
          <Text color="gray.500" fontSize="xs">
            This helps us display your listing to the right audience based on location.
          </Text>
        </VStack>

      </VStack>
    </Box>
  );
}

export default BasicInfo;