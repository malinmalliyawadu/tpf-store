const stripe = require("stripe")(
  "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"
);
const express = require("express");
const app = express();
app.use(express.static("public"));
const functions = require("firebase-functions");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

const YOUR_DOMAIN = "https://tpf-store.web.app/";

app.post("/create-checkout-session", async (req, res) => {
  console.log(req.body);
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: req.body.stripeId,
        quantity: req.body.quantity,
      },
    ],
    shipping_rates: [req.body.stripeShippingRateId],
    shipping_address_collection: {
      allowed_countries: ["NZ"],
    },
    payment_method_types: ["card"],
    mode: "payment",
    success_url: `${YOUR_DOMAIN}/order/success`,
    cancel_url: req.headers.referer || `${YOUR_DOMAIN}`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log("Running on port 4242"));

exports.app = functions.https.onRequest(app);
