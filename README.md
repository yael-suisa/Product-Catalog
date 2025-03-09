Product Catalog & Reviews Application

This is a simple product catalog application where users can browse products and submit reviews.

Project Structure

product-catalog/
├── components/       # Reusable UI components
│   ├── productCard/
│   ├── productList/
│   ├── ReviewForm/
├── pages/           # Next.js pages
│   ├── product/
│   ├── _app.js
│   ├── _document.js
│   ├── index.js
├── public/          # Static assets
├── server/          # Backend server
├── styles/          # Global styles
├── tests/           # Test files
├── .env             # Environment variables (not included in Git)
├── .gitignore       # Git ignore file
├── constants.js     # Constants file
├── eslint.config.mjs # ESLint configuration

Installation

Clone the repository:

git clone https://github.com/your-username/Product-Catalog.git
cd Product-Catalog

Install dependencies:

npm install

Running the Project

Backend (Server)

Navigate to the server directory:

cd server

Start the server:

node index.js

Frontend (Client)

Go back to the root project directory and start the frontend:

npm run dev

Environment Variables

Environment Variables
Since this project uses MongoDB, the .env file is not included in the repository for security reasons. 

Live Demo
Screenshots of the required pages have been included, and I’d be happy to present the project live upon request.

Notes
Ensure MongoDB is running before starting the server.

For any issues, feel free to contact me.

Enjoy! 🚀
