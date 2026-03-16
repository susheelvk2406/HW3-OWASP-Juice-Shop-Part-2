# Juice Shop Style Login Demo

## Overview
This project is a simple login form inspired by the OWASP Juice Shop login page. It demonstrates both client-side and server-side validation using HTML, CSS, JavaScript, Node.js, and Express.

## Features
- Email input field
- Password input field
- Client-side validation
- Server-side validation
- Error and success messages displayed on the page
- Demo credential check for successful login

## Validation Implemented

### Client-side validation
The browser checks:
- whether the email field is empty
- whether the password field is empty
- whether the email contains `@`
- whether the password is at least 8 characters long

### Server-side validation
The Express server checks the same conditions again after receiving the request. This ensures that invalid or manipulated input is still rejected even if client-side checks are bypassed.

## Technologies Used
- HTML
- CSS
- JavaScript
- Node.js
- Express

## Project Structure
```text
juice-shop-login-demo/
├── public/
│   ├── index.html
│   └── script.js
├── server.js
├── package.json
└── README.md
```
## How to Run
1. Clone the repository:
git clone https://github.com/susheelvk2406/HW3-OWASP-Juice-Shop-Part-2
cd HW3-OWASP-Juice-Shop-Part-2
2. Install dependencies:
npm install
3. Start the server:
npm start
4. Open in browser:
http://localhost:3000