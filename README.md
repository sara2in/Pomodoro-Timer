# The Pomodoro Timer
  This is an app that alows to you select one of two modes.
  1) Strong mode helps to remind you to do push-ups throughout your workday.
  2) Smart mode helps to remind you to take breaks in between work/study sessions.

## Table of Contents
  Apis (Motivaional Quote, Nerdy Joke)
  Dependencies (MUI)
  Welcome Page
  Strong Page
  Smart Page

## Welcome Page
Here you have two buttons to click on to take you to the Strong or Smart mode.

## Strong Page
Here you can enter how many hours you will be working and how many push ups you would like to complete.
Once you hit submit it will calculate how many pushups you need to do each hour and give you a reminder notification that includes a motivational quote.
There is also an Arnold head home button to go back to the home page.

## Smart Page
Here you can click the start button to begin your 52 minute work or study session.
You will be able to see a countdown so you can track how much time you have left in a session.
Once the timer hits 0 you will get a notification that it is time for a break along with a joke to make you laugh.
Then you will get a 17 minute break in which you will see another timer counting down.
After your break click Keep Working to begin your next session.
There is also an Arnold head home button to go back to the home page.

## APIs
This app uses two different APIs
1) The Strong page uses this API to pull motivational quotes. 
  'https://api.quotable.io/search/quotes?query=determination'
2) The Smart page uses this API to pull nerdy jokes.
  'https://v2.jokeapi.dev/joke/Programming,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single'

## Dependencies
In order to run this you will need to install React and Material UI
