import { ApplePay as ApplePayPlugin, PaymentSummaryItem } from "@fresha/capacitor-plugin-applepay";
import { prepareApplePayment } from "./config";
import { useEffect, useState } from "react";

export const useApplePay = (summaryItems: PaymentSummaryItem[]) => {
  const [canMakePayments, setCanMakePayments] = useState(false);

  const makePayment = async () => {
    await ApplePayPlugin.initiatePayment(prepareApplePayment(summaryItems));
    await ApplePayPlugin.completeLastPayment({ status: "success" });
  };

  useEffect(() => {
    (async () => {
      setCanMakePayments((await ApplePayPlugin.canMakePayments()).canMakePayments);
    })();

    return () => {
      ApplePayPlugin.completeLastPayment({ status: "failure" });
    };
  }, []);

  return { canMakePayments, makePayment };
};
