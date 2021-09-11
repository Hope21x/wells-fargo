import 'tailwindcss/tailwind.css';
import './tailwind.css'
import React from 'react'


function MyApp({ Component, pageProps }) {

  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    if (document.readyState !== 'loading') {
      setLoaded(true)
    }


  }, []);
  return (
    <>
      {
        loaded &&
        <Component {...pageProps} />
      }    </>
  )
}
export default MyApp