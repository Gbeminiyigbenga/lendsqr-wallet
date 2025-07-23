Lendsqr Wallet Service

This project is an MVP wallet API built with Node.js, TypeScript, and MySQL using Knex.js ORM. It simulates a digital wallet service for a lending app, fulfilling the core functionalities expected in such a system.

Features Implemented

User onboarding
Users are created after verifying they're not blacklisted via the Lendsqr Adjutor Karma API.

Wallet creation
A wallet is automatically created for each new user.

Fund wallet
Users can fund their wallets with a simulated amount.

Transfer funds
Users can transfer money to another user’s wallet.

Withdraw funds
Users can withdraw funds (with checks on balance availability).

Unit tests
Includes test coverage for major wallet flows.

Design Decisions

Karma API validation is handled at signup to prevent onboarding blacklisted users.

Wallet balance checks are done on transfer and withdrawal to ensure safe operations.

Faux Token Authentication is used with hardcoded user IDs to keep the test simple as requested.

Folder Structure

src/
  controllers/
  routes/
  services/
  middlewares/
  db/
  tests/
  app.ts

Entity Relationship Diagram

See: erd.png (included in the repo)

Tech Stack

Node.js (LTS)

TypeScript

Knex.js

MySQL

Jest (for testing)

Missing

Deployment to Render or other cloud platforms (ran into time issues)
Notes

This project was built under time and personal constraints, but I wanted to honor the effort and your time by submitting my work. I’ve focused on writing clean, testable code and following the brief’s architecture and logic to the best of my ability.

Thank you for the opportunity.
