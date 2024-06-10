'use client';

import NextLink from 'next/link';
import { FormEvent, useState } from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
} from '@chakra-ui/react';

export const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <Container centerContent>
      <Box
        as="form"
        w="sm"
        p={4}
        mt={10}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        onSubmit={handleSubmit}
      >
        <Text
          fontSize="3xl"
          mb={4}
          fontWeight="bold"
          textAlign="center"
          color="blue.600"
        >
          TASK APP
        </Text>
        <FormControl id="email" mb={4}>
          <FormLabel>メールアドレス</FormLabel>
          <Input
            type="email"
            placeholder="test@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="password" mb={4}>
          <FormLabel>パスワード</FormLabel>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" w="full" mb={4}>
          サインイン
        </Button>
        <Link as={NextLink} href="/signup" color="blue.500">
          アカウントをお持ちでない場合
        </Link>
      </Box>
    </Container>
  );
};
