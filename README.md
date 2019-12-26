# Boggle react application

This is a simple Boggle game built using Rails as the backend framework, react and redux as the front-end framework. This project was created using the standard rails [webpacker](https://github.com/rails/webpacker) command:

    rails new boggle_rails --webpack=react

The major version of libraries and languages are :

- Ruby : 2.6.5
- Rails : 6.0.1
- React : 16.12.0
- Redux : 4.0.5

# Installation and setup

To reduce complexcity in developer machine sqlite is left as default database in the application.
Please follow the following steps :

1. Clone the repo using : `git clone [repo_url]`
2. Change to the directory and run cammand : `bundle`
3. Install js dependencies using : `yarn install`
4. Run rails migration using command : `rails db:migrate`
5. Load seed data from data/enable.txt using command : `rails db:seed`. Please note the data should take around 3 min to load so please be patient. Even with batch insersion SQL-Lite takes quite a time to load around 172,823 distinct words.
6. Finally start the application using command : `rails s`

Application should be viewable at url [http://localhost:3000/]().

# Testing

Test cases are divided into two seperate parts

## Javascript:

Project uses following libraries to test react part of the application:

1. jest
2. enzyme
3. enzyme-adapter-react-16
4. moxios
5. redux-mock-store

Please run the command to run existing test cases : `npm test`

## Rails:

Rails simply uses the rails-spec testing framework to run it's tests. Please run the command `rspec`

## TODO

1. Current test coverage is very low. Increase the test coverage.
