"use client";

import { Button } from "@/shared/ui/button";
import { useApplePay } from "@/modules/payment/use-apple-pay";

export const ApplePayExample = () => {
  const { canMakePayments, makePayment } = useApplePay([{ label: "buy coffee", amount: "5" }]);

  if (canMakePayments) {
    return <Button onClick={makePayment}>Try Apple Pay</Button>;
  }

  return <span>Your device does not support Apple Pay</span>;
};
