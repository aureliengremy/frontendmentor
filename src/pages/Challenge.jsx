import { useLocation } from "react-router-dom";
import Form from "../Components/InteractiveRating/Form";
import QrCodeGen from "../Components/QRCode/QrCodeGen";
import Header from "../partials/Header";
import Cta from "../partials/Cta";
// import SocialFooter from "../partials/SocialFooter";

const Challenge = (props) => {
  const location = useLocation();
  const component = location.state;
  
  const whichComponent = (compo) => {
    switch (compo) {
      case "form":
        return <Form />;
      case "qrcode":
        return <QrCodeGen />;
      default:
        return <p>Il a l'air d'y avoir un problème!</p>;
    }
  };

  return (
    <div>
      <Header />
      <Cta path="/" />
      {whichComponent(component)}
      {/* <SocialFooter/> */}
    </div>
  );
};

export default Challenge;
