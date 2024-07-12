
import ReviewCard from "../../components/cart/ReviewCard";
import About_provider from "../../components/layout/About_provider";
import ContactInfo from "../../components/layout/ContactInfo";
import Customer_review from "../../components/layout/Customer_review";
import { FooterComponent } from "../../components/layout/FooterComponent";
import Header_Provider_Profile from "../../components/layout/Header-provider-profile-cliked-by-user";
import { NavbarComponent } from "../../components/layout/NavbarComponent";

function ProviderProfile() {
    return (
      <>
        <NavbarComponent/>
        <Header_Provider_Profile/>
        <About_provider/>
        <ContactInfo/>
        <Customer_review/>
         <div className="flex justify-center mb-[2rem]">
         <div className=" grid grid-cols-4 gap-[2rem] "> 
           <ReviewCard/>
          <ReviewCard/>
          <ReviewCard/>
          <ReviewCard/>
          <ReviewCard/>
          <ReviewCard/>
          <ReviewCard/>
          <ReviewCard/>
          </div>
         </div>
         <FooterComponent/>
      </>
    )
  }
export default ProviderProfile;