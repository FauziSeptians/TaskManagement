import "@/styles/globals.css";
import Navbar from "./layout/Navbar";
import Sidebar from "./layout/SideBar";
import Layout from "./layout/layout";

export default function App({ Component, pageProps }) {
   return (
      <>
         <Layout>
            <Component {...pageProps} />
         </Layout>
         {/* <Component {...pageProps} /> */}
      </>
   );
}
