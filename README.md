# roomiego.github.io
Roomiego - find the flatmate of your dreams
How to collaborate

Clone the repository on your computer

Go into the project directory

cd roomiego

Install bower & npm dependencies
npm install

bower install

Start the development server

From the project folder, launch this command from the terminal. It will launch a local webserver with hot reloading.
gulp serve

Issues

If the CSS is not loading after starting the server, use this commands from the terminal:

bower install --save bootstrap#3.3.4
gulp wiredep
