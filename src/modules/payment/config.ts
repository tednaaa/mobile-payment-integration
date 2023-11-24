import { InitiatePaymentRequest, PaymentSummaryItem } from "@fresha/capacitor-plugin-applepay";
import { PaymentDataRequest } from "@fresha/capacitor-plugin-googlepay/dist/types";

import type { TransactionInfo as GoogleTransactionInfo } from "@fresha/capacitor-plugin-googlepay/dist/types";

export const prepareApplePayment = (summaryItems: PaymentSummaryItem[]): InitiatePaymentRequest => {
  return {
    merchantIdentifier: "merchant.test-native-payment",
    countryCode: "US",
    currencyCode: "USD",
    summaryItems,
    supportedNetworks: ["amex", "discover", "interac", "JCB", "maestro", "masterCard", "visa"],
    merchantCapabilities: ["capability3DS", "capabilityCredit", "capabilityDebit", "capabilityEMV"],
    billingContact: {
      emailAddress: "john.doe@example.com",
      phoneNumber: "+1234567890",
      name: {
        givenName: "John",
        familyName: "Doe",
      },
      postalAddress: {
        street: "123 Main St",
        city: "Cityville",
        postalCode: "12345",
        country: "US",
      },
    },
    shippingContact: {
      emailAddress: "jane.smith@example.com",
      phoneNumber: "+0987654321",
      name: {
        givenName: "Jane",
        familyName: "Smith",
      },
      postalAddress: {
        street: "456 Side St",
        city: "Townsville",
        postalCode: "54321",
        country: "US",
      },
    },
  };
};

export const prepareGooglePayment = (transactionInfo: GoogleTransactionInfo): PaymentDataRequest => {
  return {
    apiVersion: 2,
    apiVersionMinor: 0,
    merchantInfo: {
      merchantName: "Example Merchant",
    },
    allowedPaymentMethods: [
      {
        type: "CARD",
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["AMEX", "DISCOVER", "INTERAC", "JCB", "MASTERCARD", "VISA"],
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          parameters: {
            gateway: "example",
            gatewayMerchantId: "exampleGatewayMerchantId",
          },
        },
      },
    ],
    transactionInfo,
  };
};

export { GoogleTransactionInfo };
