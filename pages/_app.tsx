import "../styles/globals.css";
import "../styles/variables.css";
import React from "react";

function SafeHydrate({children}) {
  return <div suppressHydrationWarning>
    {typeof document === 'undefined' ? null : children}
  </div>

}

function MyApp({Component, pageProps}) {
  return <SafeHydrate>
    <Component {...pageProps} />
  </SafeHydrate>;
}

export default MyApp;
