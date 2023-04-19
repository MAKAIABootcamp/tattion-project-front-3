import { NextResponse } from "next/server";

const middleware = (req) => {
  let verify = req.cookies.get("loggedin");
  let url = req.url;

  if (verify && url.includes("sign-in")) {
    return NextResponse.redirect("http://localhost:3000/welcome");
  }

  if (verify && url.includes("sign-up")) {
    return NextResponse.redirect("http://localhost:3000/welcome");
  }

  if (
    !verify &&
    (url.includes("welcome") ||
      url.includes("appointment-info") ||
      url.includes("artists") ||
      url.includes("designs") ||
      url.includes("payment") ||
      url.includes("payment-summary") ||
      url.includes("quotes-form"))
  ) {
    return NextResponse.redirect("http://localhost:3000/sign-in");
  }
};

export default middleware;
