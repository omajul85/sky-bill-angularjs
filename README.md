# Sky bill

## Task

To display a customer's bill

### Requirements

* Complete the task in a language of your choice using whatever tools or frameworks that you want.
* Must consume bill JSON from endpoint: 
```
http://safe-plains-5453.herokuapp.com/bill.json
```
* JSON must be consumed by a server acting as a proxy.

## Setting up

### Clone this repo to your computer

    $ git clone https://github.com/omajul85/sky-bill-angularjs

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


## Deployment

The application has been pushed to Heroku using Git. You can see the result <a href="https://sky-bill-omajul85.herokuapp.com/" target="_blank">here</a>.