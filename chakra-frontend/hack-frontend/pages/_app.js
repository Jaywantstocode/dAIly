import Nav from "@/components/Nav";
import { ChakraProvider, ScaleFade } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

import { AppWrapper, useAppContext } from "@/components/ContextProvider";

import "../styles/globals.scss";
import { Frank_Ruhl_Libre } from '@next/font/google'
const frankRuhlLibre = Frank_Ruhl_Libre({
  subsets: ['latin'],
  weight: ['300', '600'],
});

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
// const data = client
//   .mutate({
//     mutation: gql`
//       mutation {
//         createUser(input: { name: "jack", email: "jacky@gmail.com" }) {
//           user {
//             id
//             email
//             name
//           }
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result.data));

const HARDCODED_ID = "VXNlcjo2M2NjYTZiNzdkM2Q1NzVlNGZiMDZiMmQ=";

const theme = extendTheme({ colors,
fonts: {
  body: frankRuhlLibre,
  heading: frankRuhlLibre,
} });

function MyApp({ Component, pageProps, router }) {
  return (
    <AppWrapper userId={HARDCODED_ID}>
      <ApolloProvider client={client}>
        <ChakraProvider theme={theme}>
          <Nav />
          <ScaleFade
            key={router.route}
            in="true"
            transition="200ms all">

          <Component {...pageProps} />
            </ScaleFade>
        </ChakraProvider>
      </ApolloProvider>
    </AppWrapper>
  );
}

export default MyApp;
