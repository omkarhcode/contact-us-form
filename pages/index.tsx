import React, { useState } from "react";
import {
  Box,
  Text,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Textarea,
  useToast,
  Flex,
} from "@chakra-ui/react";
import { sendContactForm, sendFormDataToSheet } from "@/lib/api";

const initValues = { name: "", email: "", phone: "", message: "" };
const initState = { values: initValues, isLoading: false, error: "" };

export default function Home() {
  const [state, setState] = useState(initState);

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const toast = useToast();

  const { values, isLoading, error } = state;

  const onBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setTouched((prevState) => ({ ...prevState, [e.target.name]: true }));

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) =>
    setState((prevState) => ({
      ...prevState,
      values: { ...prevState.values, [e.target.name]: e.target.value },
    }));

  const onSubmit = async () => {
    setState((prevState) => ({
      ...prevState,
      isLoading: true,
    }));

    try {
      await sendContactForm(values);
      await sendFormDataToSheet(values);

      toast({
        title: "Message Sent",
        status: "success",
        duration: 2000,
        position: "top",
      });
      setTouched({});
      setState(initState);
    } catch (error: any) {
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <Flex
      direction={"column"}
      w={"100%"}
      alignItems={"center"}
      backgroundColor={"blackAlpha.200"}
      color="primary"
      // px={{
      //   base: "24px",
      //   sm: "30px",
      //   md: "38px",
      //   xl: "48px",
      // }}
      py={{
        base: "48px",
      }}
    >
      <Text fontWeight={600} textAlign={"center"}>
        Contact Us Form
      </Text>
      <br />
      <Stack
        spacing={{ base: "32px", md: "32px" }}
        width={{ base: "90%", md: "400px" }}
      >
        <FormControl isRequired isInvalid={touched.name && !values.name}>
          <FormLabel
            fontSize={{ base: "14px" }}
            fontWeight={500}
            lineHeight={"22px"}
            color={"black"}
          >
            Name
          </FormLabel>
          <Input
            id="name"
            type="text"
            name="name"
            onChange={handleChange}
            onBlurCapture={onBlur}
            placeholder="Your Name"
            borderRadius={"4px"}
            borderColor={"#D9D9D9"}
            _placeholder={{
              fontSize: "14px",
              lineHeight: "22px",
              color: "#000000",
              opacity: 0.3,
            }}
            focusBorderColor="secondary"
          />
          <FormErrorMessage>Name is required</FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={touched.email && !values.email}>
          <FormLabel
            fontSize={{ base: "14px" }}
            fontWeight={500}
            lineHeight={"22px"}
            color={"black"}
          >
            Email
          </FormLabel>
          <Input
            id="email"
            type="email"
            name="email"
            onChange={handleChange}
            onBlurCapture={onBlur}
            placeholder="Your Email"
            borderRadius={"4px"}
            borderColor={"#D9D9D9"}
            _placeholder={{
              fontSize: "14px",
              lineHeight: "22px",
              color: "#000000",
              opacity: 0.3,
            }}
            focusBorderColor="secondary"
          />
          <FormErrorMessage>Email is required</FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={touched.phone && !values.phone}>
          <FormLabel
            fontSize={{ base: "14px" }}
            fontWeight={500}
            lineHeight={"22px"}
            color={"black"}
          >
            Phone Number
          </FormLabel>
          <Input
            id="phone"
            type="text"
            name="phone"
            onChange={handleChange}
            onBlurCapture={onBlur}
            placeholder="Your Phone Number"
            borderRadius={"4px"}
            borderColor={"#D9D9D9"}
            _placeholder={{
              fontSize: "14px",
              lineHeight: "22px",
              color: "#000000",
              opacity: 0.3,
            }}
            focusBorderColor="secondary"
          />
          <FormErrorMessage>Phone number is required</FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel
            fontSize={{ base: "14px" }}
            fontWeight={500}
            lineHeight={"22px"}
            color={"black"}
          >
            Message
          </FormLabel>
          <Textarea
            id="message"
            name="message"
            onChange={handleChange}
            placeholder="Your Message"
            borderRadius={"4px"}
            borderColor={"#D9D9D9"}
            _placeholder={{
              fontSize: "14px",
              lineHeight: "22px",
              color: "#000000",
              opacity: 0.3,
            }}
            focusBorderColor="secondary"
          />
        </FormControl>
        <Button
          // type="submit"
          backgroundColor="primary"
          color="secondary"
          fontSize={{ base: "14px", md: "14px" }}
          lineHeight={{ base: "22px", md: "22px" }}
          fontWeight={"500"}
          width={{ base: "100%", md: "100%" }}
          px={{ base: "32px", md: "32px" }}
          borderRadius={"0px"}
          _active={{
            backgroundColor: "secondary",
            color: "primary",
          }}
          _hover={{
            backgroundColor: "secondary",
            color: "primary",
          }}
          isLoading={isLoading}
          isDisabled={!values.name || !values.email || !values.phone}
          onClick={onSubmit}
        >
          Send message
        </Button>
        {error && (
          <Text color={"red"} fontSize={"14px"} my={2} textAlign={"center"}>
            {error}
          </Text>
        )}
      </Stack>
    </Flex>
  );
}
