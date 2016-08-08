# Sky bill

Description here!

## Setting up

### Clone this repo to your computer

    $ git clone https://github.com/omajul85/sky-bill

### Install the Java Development Kit (JDK)

[Install the JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html)

Check it's installed by typing

    $ java -version

You should see a version number.

### Install the other dependencies

    $ cd path/to/sky-bill/
    $ npm install
    $ npm run install-bower-dependencies
    $ npm run install-selenium-dependencies

## Run your feature tests

In a terminal, run your app.

    $ cd path/to/sky-bill/
    $ npm run start-app

In a *second* terminal (with your app still running from the previous step), run Selenium.

    $ cd path/to/sky-bill/
    $ npm run start-selenium

In a *third* terminal (with your app and Selenium still running from the previous steps), run your feature tests.

    $ cd path/to/sky-bill/
    $ npm run test-features

## Run your unit tests

    $ cd path/to/sky-bill/
    $ npm run test-units

## Run and view your app

    $ cd path/to/sky-bill/
    $ npm run start-app

If you see "Error: listen EADDRINUSE 0.0.0.0:8080" when you run `npm run start-app`, you may have the app already running in a separate tab.

Go to [http://localhost:8080](http://localhost:8080) in your web browser.
