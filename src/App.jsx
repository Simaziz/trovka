
import  ReviewCard from "./components/cart/ReviewCard"
import About_provider from "./components/layout/About_provider";
import Customer_review from "./components/layout/Customer_review";
import Header_Provider_Profile from "./components/layout/Header-provider-profile-cliked-by-user";
import ProviderProfile from "./pages/Provider_Profile/ProviderProfile";

function App() {
  return (
    <>
      {/* <ReviewCard/> */}
      <Header_Provider_Profile/>
      <About_provider/>
      <Customer_review/>
      <ProviderProfile/>
    </>
  )
}
export default App;
