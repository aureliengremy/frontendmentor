import Form from "./InteractiveRating/Form";
import QrCodeGen from "./QRCode/QrCodeGen";

export const whichChallenge = (compo) => {
  // console.log(compo);
  switch (compo) {
    case "form":
      return <Form />;
    case "qrcode":
      return <QrCodeGen />;
    default:
      return false;
  }
};

// export const listOfChallenges = {
//   form:'interactive rating form', 
//   qrcode: "QR Code Generator"
// }
// export default {listOfChallenges};