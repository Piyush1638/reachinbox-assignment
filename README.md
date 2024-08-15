
# Next.js Project

This is a Next.js project bootstrapped with `create-next-app`.

## Getting Started

### 1. Sign Up

To get started, follow these steps:

1. Go to the following link to sign up using Google:  
   `https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://frontend.com`

2. After signing up, you'll receive a token in the url. Keep this token handy as you'll need it for authorization in the next steps.

### 2. Reset Data

To reset the data in the onebox to the state when you first logged in:

1. Open Postman or any API client.
2. Send a `POST` request to the following endpoint:

   ```
   POST https://hiring.reachinbox.xyz/api/v1/onebox/reset
   ```

3. In the request header, add the following authorization:

   ```
   AUTHORIZATION: Bearer <paste-your-token-here>
   ```

   Replace `<paste-your-token-here>` with the token you received from the sign-up step.

### 3. Install Dependencies

Before running the development server, install the necessary packages:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 4. Run the Development Server

To start the development server, run one of the following commands:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

This will start the development server, and you can view your project by opening `http://localhost:3000` in your browser.

## Features

- **Font Optimization**: This project uses `next/font` to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- Next.js Documentation: `https://nextjs.org/docs` - learn about Next.js features and API.
- Learn Next.js: `https://nextjs.org/learn` - an interactive Next.js tutorial.


