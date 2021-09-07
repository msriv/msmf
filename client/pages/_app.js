import '../styles/index.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Navbar from "../componentsNew/Navbar"

//TODO Add navigation animation https://dev.to/anxinyang/page-transition-effect-in-nextjs-9ch

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
