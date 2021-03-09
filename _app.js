import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import '../styles/globals.css'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import { QueryClientProvider, QueryClient } from 'react-query'
import getConfig from 'next/config';
import Router from 'next/router'
import { parseCookies  } from 'nookies'
import nookies from 'nookies'
import {UserContextProvider} from './context/UserContext'



const queryClient = new QueryClient()


function MyApp({ Component, pageProps, navigation }) {
  

  return (
    <>
      <UserContextProvider value={{jwt, setJWT}}>
      <DefaultSeo {...SEO} />
      <Header navigation={navigation}/>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider> 
      <Footer />
      </UserContextProvider >
    </>)
}

const { publicRuntimeConfig } = getConfig()


function redirectUser(ctx, location) {
  if (ctx.req) {
      ctx.res.writeHead(302, { Location: location });
      ctx.res.end();
  } else {
      Router.push(location);
  }
}



MyApp.getInitialProps = async ({ctx}) => {

  if(isLogged===true)
  {
    const res = await fetch(`${publicRuntimeConfig.API_URL}/navigations?isNotLoged=true`)
    const navigation = await res.json()
   
    return { navigation}
  }else{
    const res = await fetch(`${publicRuntimeConfig.API_URL}/navigations?isLoged=true`)
    const navigation = await res.json()
    return { navigation}

  }

  
}


export default MyApp

