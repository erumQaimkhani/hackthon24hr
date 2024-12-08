import Bestseller from "./components/bestseller";
import Editor from "./components/editer";


import Inner from "./components/inner";
import Shop from "./components/shop";
import Products from "./components/products";
import ResultsList from "./components/resultlist";
import TopBar from "./desktop/components/topbar";
import Header from "./desktop/components/header";
import Siderbar from "./desktop/components/siderbar";
// import Contact from "./components/contact";
import LoginForm from "./components/login";
export default function Home() {
  return (
    <div>
    
     
  <Editor />
  <Bestseller />
  <Inner />
  <Shop />
 <Products />
 <ResultsList />
 <TopBar />
 <Header />
 <Siderbar />
 {/* <Contact /> */}
 <LoginForm />
    </div>
  );
}