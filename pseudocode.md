# understand the problems

# think in these

- atomic design
- what can help me with bootstrap
- understanding state
- how does the application work
- axios to get data from api

# user story

- as an anonymous user
- i want to check the weather
- so i can be informed on the conditions

# what atomic design elements do i have

- atoms
- molecules
- organisms

# misc

- display box
- display box ,header, body, footer

# what don't we see

- error message is display box

# errors

- zip code
- error in typing
- hitting button before text field is filled

# what if

- spam button
- focus on text field
- different screen sizes

# should have

- defensive programming
- log/track information

# could have

# how do i

- manage state
- generate things on page
- call api
- pick out information from api

<-------------------------->

# pseudocode

# init var

- state = 0
- const apiKey = "9a522097e4ef3c0ac50fa6944a8b3d33"
- let zipCode = ""
- let temp = ""
- let condition = ""

## adding html to page

- createElement to add html
- add container div
- add div for each section
- style with bootstrap

# import axios library

# function to fetch weather data

- try catch to send back error if zip is invalid

# eventListeners

- add listener for get weather
- create function to fill info with button if valid zip is entered

#

# conversion

- K to F
- K to C
