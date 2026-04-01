# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


Project summary:
This project is a modern digital tools web application built with React, designed to provide users with a smooth and interactive shopping experience for online tools and services.

The website starts with a product browsing section where users can explore different digital tools and view their details. Each product card includes a “Buy Now” option, allowing users to quickly add items to their cart. When a product is added, a real-time toast notification confirms the action, making the experience more interactive and user-friendly.

A dynamic cart system is implemented where users can view selected items, see pricing details, and remove items if needed. The cart also includes a checkout process, which simulates payment success with a notification, giving the feeling of a real e-commerce flow.

The website also contains informational sections such as a step-by-step “Get Started” guide, subscription/pricing plans, and a footer with company details and social links. These sections help users understand the service and build trust.

One of the key features is conditional rendering. When users switch to the cart view, the homepage sections like options, subscriptions, and footer are hidden to create a clean and focused cart experience. This improves usability and keeps the interface clutter-free.

Toast notifications are integrated throughout the app for better user feedback, showing messages for actions like adding items to cart, removing items, and completing checkout.

Finally, the project is deployed on Netlify, making it accessible online as a live web application.

Overall, this project demonstrates a complete front-end e-commerce style system with state management, conditional rendering, user interaction, and deployment workflow.
