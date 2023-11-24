## Project Initialization

> Create .env.local from the example

```bash
cp .env.example .env.local
```

| Name                               |      Description       |
| :--------------------------------- | :--------------------: |
| NEXT_PUBLIC_GOOGLE_PAY_ENVIRONMENT | "TEST" or "PRODUCTION" |

> Install locked dependencies

```bash
npm ci
```

> Init android/ios platforms

```bash
npx cap add android
npx cap add ios
```

> After some changes build and sync code for both android/ios platforms to check functionality

```bash
npm run build:sync
```

> Open Xcode and Android Studio then click run button

```bash
npx cap open android
npx cap open ios
```
