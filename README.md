
# Grocery

This is a full fledged Grocery Web App created using ReactJs, MongoDB, ExpressJs and NodeJS, used API like cloudinary also used libraries like Redux and MUI.


User authentication was implemented by storing cookie in browser as a JWT token and used FireBase for mobile OTP verification. 

There is additional controls to admins in this website that can manage, add or remove products, manage orders, manage users or assign admins.
Email is optional for login as we are using their phone number to login.

Users can change their email, phone number, name or address.

Implemented review system to add , remove or update reviews on a product.

To run this project on your local machine

Fork this repo

Clone the repo into your local environment 

Run the following command

Open terminal

Navigate to server folder and run

npm i

Add config.env into config folder inside the server.

Setup the variables in the config.env file.

PORT=

JWT_SECRET=

JWT_EXPIRE=

COOKIE_EXPIRE=

MONGO_URI=

CLOUDINARY_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_API_SECRET=

FRONT_END_URL=


PORT - Add a port on which you want your server to run

JWT_SECRET_KEY - This variable should contain your 256-bit encryption key for issuing and signing payload using JSON web token

MONGO_URI - This variable should contain the connection string to your mongo database.

JWT_EXPIRE - This defines the validity of the token issued

COOKIE_EXPIRE - This defines the duration the cookie is saved in the browser.

Get there from your cloudinary account

CLOUDINARY_NAME- 

CLOUDINARY_API_KEY-

CLOUDINARY_API_SECRET-

nodemon server.js

This will start your server

Now Open a new terminal 
Navigate to client folder and add backEndURL(on which server is running) in the host.js
file.

npm i

npm start

This will open your default browser and now you can see the website.
