import { ApplePayExample } from "./ui/apple-pay-example";
import { GooglePayExample } from "./ui/google-pay-example";

export default function Home() {
  return (
    <div className="flex justify-center flex-col items-center h-screen  w-full">
      <ApplePayExample />
      <br />
      <GooglePayExample />
    </div>
  );
}
