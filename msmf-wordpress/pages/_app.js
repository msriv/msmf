require('typeface-raleway')
import '../styles/index.css'
import { ApolloProvider } from "@apollo/client";
import ApolloClient from "../lib/apollo-client";
import Navbar from "../componentsNew/Navbar"

//TODO Add navigation animation https://dev.to/anxinyang/page-transition-effect-in-nextjs-9ch

function MyApp({ Component, pageProps }) {

  return (
    <ApolloProvider client={ApolloClient}>
      <Navbar/>
      <Component {...pageProps} />
    </ApolloProvider>)
}

export default MyApp
