import NextLink from 'next/link';
import { Box, Heading, Text, Link } from '@chakra-ui/react';

const NotFoundPage = () => {
  return (
    <Box
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      minH="100vh"
    >
      <Heading as="h1" fontSize="8xl" fontWeight="bold">
        404
      </Heading>
      <Text fontSize="4xl" fontWeight="medium">
        Page Not Found
      </Text>
      <Link as={NextLink} href="/" color="blue.500" fontSize="xl">
        ホームに戻る
      </Link>
    </Box>
  );
};

export default NotFoundPage;
