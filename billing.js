import stripePackage from "stripe";
import handler from "./libs/handler-lib";

export const main = handler(async (event, context) => {
  const { source } = JSON.parse(event.body);
  const amount = 100;
  const description = "ResourceHub Donation";

  // Load our secret key from the  environment variables
  const stripe = stripePackage(process.env.stripeSecretKey);

  await stripe.charges.create({
    source,
    amount,
    description,
    currency: "usd",
  });

  return { status: true };
});