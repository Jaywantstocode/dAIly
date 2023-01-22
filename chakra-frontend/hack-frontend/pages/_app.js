import Nav from "@/components/Nav";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

import { AppWrapper, useAppContext } from "@/components/ContextProvider";

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

// Horrid, hardcoded request for the user
const data = client
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
  .then((result) => console.log(result.data));

console.log("Data -> ", data);

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }) {
  const appContext = useAppContext();
  console.log("The app context: ", appContext);

  return (
    <AppWrapper userId={"VXNlcjo2M2NjZTJjNmI5YTI3ZDZiZGZhMGZjYzQ="}>
      <ApolloProvider client={client}>
        <ChakraProvider theme={theme}>
          <Nav />
          <Component {...pageProps} />
        </ChakraProvider>
      </ApolloProvider>
    </AppWrapper>
  );
}

export default MyApp;
