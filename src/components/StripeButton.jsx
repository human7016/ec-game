import React from "react";
import "firebase/functions";
import firebase from "firebase/app";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import { loadStripe } from "@stripe/stripe-js";

const useStyles = makeStyles({
  button: {
    backgroundColor: "#216174",
    color: "#FFF",
    fontSize: 12,
    height: 26,
    width: "auto",
    padding: "0px 30px",
  },
});

const PurchaseButton = (props) => {
  const classes = useStyles();
  const price = props.price;
  const name = props.name;
  const photo = props.photo;

  const showPayment = async (price, name, photo) => {
    // セッション作成functionをインスタンス化
    const createPaymentSession = firebase.functions().httpsCallable("createPaymentSession");

    // 公開可能キーをもとに、stripeオブジェクトを作成
    const stripePromise = loadStripe(
      "pk_test_51JCKc2FWStq0r5ZwXgPXFw7sO5w8DnXYhyMoA8vmDt8VyXGYOumsERIHQMTWf7kKCyeBQJHlYWw1E2uqcUeyvhu600F11rn8ek"
    );
    const stripe = await stripePromise;

    // セッション情報をもとに、支払いページに遷移
    createPaymentSession({
    // ここでFunctionsにオブジェクト型で色々渡せますので、showPaymentの引数から持ってきます
      price: price,
      name: name,
      photo: photo
    }).then((result) => {
      stripe.redirectToCheckout({
        sessionId: result.data.id,
      })
      .then((result) => {
        console.log(result);
      });
    });
  };

  return (
    <Button className={classes.button} variant="contained" onClick={() => showPayment(price, name, photo)}>
      {props.label}
    </Button>
  );
};
export default PurchaseButton;