# Node.js Vercel API Demo

This project demonstrates the deployment of two types of API routes on Vercel: one utilizing **Express.js** and the other using **Module Exports**. It highlights the flexibility of Vercel's serverless functions while offering a traditional server setup with Express.

## Key Features

- **Express API**: A standard route that uses an Express server to handle API requests.
- **Serverless API with Module Exports**: A lightweight serverless function handling requests without requiring a dedicated server.

## Project Structure
```
├── README.md
├── LICENSE
├── package.json
├── vercel.json
└── src/
    ├── express.js
    ├── main.js
    └── module.js
```

## API Routes Overview

1. **Module Exports Route (`/api/module`)**
   - Managed by `module.js`, this is a serverless route responding to requests with a simple function.

2. **Express Route (`/api/express`)**
   - Managed by `express.js`, this route leverages Express to handle requests in a more traditional manner.

3. **Default Route (`/`)**
   - The default entry point, handled by `main.js`, returns a simple response indicating that the server is active.

### Deploying Your Own Instance

You can easily deploy your own instance of the API by clicking the button below:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/sumitkolhe/jiosaavn-api)

## Vercel Configuration

The routing of this project is defined in the `vercel.json` file, where we specify the path and the corresponding handler files:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "src/*.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/module",
      "dest": "/src/module.js"
    },
    {
      "src": "/api/express",
      "dest": "/src/express.js"
    },
    {
      "src": "/",
      "dest": "/src/main.js"
    }
  ]
}
```

### Highlights

- **Serverless and Traditional Routes**: This demo shows two distinct ways to handle APIs: one using the flexibility of serverless functions (Module Exports) and the other with the familiar Express server framework.

- **Default Main Route**: A default entry point that is easily customizable to your needs.