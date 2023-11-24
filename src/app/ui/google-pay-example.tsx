"use client";

import { Button } from "@/shared/ui/button";
import { useGooglePay } from "@/modules/payment/use-google-pay";

export const GooglePayExample = () => {
  const { canMakePayments, makePayment } = useGooglePay({
    totalPriceStatus: "FINAL",
    totalPrice: "12.34",
    currencyCode: "USD",
  });

  if (canMakePayments) {
    return <Button onClick={makePayment}>Try Google Pay</Button>;
  }

  return <span>Your device does not support Google Pay</span>;
};
