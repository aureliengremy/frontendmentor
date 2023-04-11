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

// const listOfChallenges = ['form', 'qrcode'];
// export default listOfChallenges;

// export const listOfChallenges = {
//   'form':'interactive rating form', 
//   'qrcode': "QR Code Generator"
// }
// export default {listOfChallenges};