import { useCallback, useEffect, useState } from "react";
import { GooglePay as GooglePayPlugin } from "@fresha/capacitor-plugin-googlepay";

import { GOOGLE_PAY_ENVIRONMENT } from "@/shared/config/environment";

import { GoogleTransactionInfo, prepareGooglePayment } from "./config";

export const useGooglePay = (transactionInfo: GoogleTransactionInfo) => {
  const [canMakePayments, setCanMakePayments] = useState(false);

  const preparedGooglePayment = prepareGooglePayment(transactionInfo);

  const makePayment = async () => {
    await GooglePayPlugin.loadPaymentData(preparedGooglePayment);
  };

  const initialize = useCallback(async () => {
    await GooglePayPlugin.initialize({ environment: GOOGLE_PAY_ENVIRONMENT });

    const isReadyToPay = (await GooglePayPlugin.isReadyToPay(preparedGooglePayment)).result;

    setCanMakePayments(isReadyToPay);
  }, [preparedGooglePayment]);

  useEffect(() => {
    initialize();
  }, [initialize]);

  return { canMakePayments, makePayment };
};
