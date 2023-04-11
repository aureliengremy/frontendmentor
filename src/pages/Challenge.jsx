import { useLocation } from "react-router-dom";
import Form from "../Components/InteractiveRating/Form";
import QrCodeGen from "../Components/QRCode/QrCodeGen";
import Header from "../partials/Header";
import Cta from "../partials/Cta";
import { Children } from "react";
import AllChallenges from "../partials/AllChallenges";
// import SocialFooter from "../partials/SocialFooter";
import { whichChallenge } from "../Components/whichChallenge";
import { useParams } from "react-router-dom";

const Challenge = (props) => {
  // const location = useLocation();
  // const component = location.state;

  // console.log(component);

  const { challenge } = useParams();
  console.log(challenge);

  const noChallenge = (
    <>
      <p className="text-md md:text-xl text-center text-opacity-80 mx-auto my-24">
        Il s'emble que le challenge ne soit pas disponible 🥺
      </p>
      <AllChallenges />
    </>
  );

  return (
    <div>
      <Header />
      <Cta path="/" />
      {whichChallenge(challenge) ? whichChallenge(challenge) : noChallenge}
      {/* {props.children ? props.children : (
        <>
          <p className="text-md md:text-xl text-center text-opacity-80 mx-auto my-24">Il s'emble que le challenge ne soit pas disponible 🥺</p>
          <AllChallenges/>
        </>
      )} */}
      {/* <SocialFooter/> */}
    </div>
  );
};

export default Challenge;
