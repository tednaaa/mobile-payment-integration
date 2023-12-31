import { CapacitorConfig } from "@capacitor/cli";
import { config as dotenvConfig } from "dotenv";
import path from "path";

dotenvConfig({ path: path.resolve(__dirname, ".env.local") });

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "mobile-payment-integration",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
};

export default config;
