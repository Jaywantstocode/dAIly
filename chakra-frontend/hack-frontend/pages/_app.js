import Nav from "@/components/Nav";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

import "../styles/globals.scss";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const client = new ApolloClient({
  uri: "http://127.0.0.1:5000/graphql",
  cache: new InMemoryCache(),
});


client
  .mutate({
    mutation: gql`
      mutation {
        createUser(input: { name: "jack", email: "jacky@gmail.com" }) {
          user {
            id
            email
            name
          }
        }
      }
    `,
  })
  .then((result) => console.log("RESULT -> ", result.data));

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
