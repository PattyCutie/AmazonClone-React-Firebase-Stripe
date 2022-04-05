const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51KignNFTjYmKnSsgI4X9jncs1caFeacLvjfqGMa1FCvVEZTksRiZyWMIL6uRatjJDXpWFuMBTydNGmcZjflrAsZ200Iky845rE"
);

// Api

// App Config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// Api routes
app.get("/", (request, response) => response.status(200).send("hello patty"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved BOOM!!! for this amount >>>", total);

    const paymentIntent = await stripe.paymentIntents.create({
      //subunits of currency
      amount: total,
      currency: "usd",
    });

    // if everything is OK then Created*
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  });
// Listen command
exports.api = functions.https.onRequest(app);


