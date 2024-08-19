import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const formatAmountForStripe = (amount) => {
  return Math.round(amount * 100);
};

export async function GET(req) {
  const searchParams = req.nextUrl.searchParams;
  const session_id = searchParams.get("session_id");

  try {
    const checkoutSession = await stripe.checkout.sessions.retrieve(session_id);
    return NextResponse.json(checkoutSession);
  } catch (error) {
    console.error("Error retrieving checkout session", error);
    return NextResponse.json(
      { error: { message: error.message } },
      { status: 500 }
    );
  }
}

export async function POST(req) {

  const body = await req.text(); 
  const { plan } = JSON.parse(body);
  // if plan is basic price is $5 other wise it should be pro which is $10

  const price = plan === "basic" ? 5 : 10;
  console.log("Plan:", plan);  // This should print "basic"
  console.log("Price:", price);  // This should print 5 if the plan is "basic"

  const params = {
    mode: "subscription",
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: price === 5 ? "Basic subscription" : "Pro subscription",
          },
          unit_amount: formatAmountForStripe(price), // $10.00 in cents
          recurring: {
            interval: "month",
            interval_count: 1,
          },
        },
        quantity: 1,
      },
    ],
    success_url: `${req.headers.get(
      "origin"
    )}/result?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${req.headers.get(
      "origin"
    )}/result?session_id={CHECKOUT_SESSION_ID}`,
  };

  const checkoutSession = await stripe.checkout.sessions.create(params);

  return NextResponse.json(checkoutSession, {
    status: 200,
  });
}
