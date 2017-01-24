# Take A Hike!
###Project week for 201

##Project Proposal Directions
On the Friday before project week your team must submit a project plan to an instructor with the following information:
This can be a simple google doc for simplicity.
Your team's name (if you want one besides what I set for you)
Your team's members
Your project's name and concept
A diagram of your project's domain model
An exhaustive explanation of how your team plans to address details in the problem domain
Sketches/wireframes of your project's pages
NOTE: You should not be writing any code prior to the submission of the project plan.
TIP: Use pencil and paper to diagram and sketch. Online tools look snazzy but take some time to learn.

* Team Name: Hitchhikers
* Team Members: Abigail White, Alex Cahn, Miguel Pena, Steven Johnson
* Project Name: Take a Hike!
* Project Concept: Questionnaire  to find the right hike near user & provide relevant information to prepare for that hike.
* Project Domain Model:
An exhaustive explanation of how your team plans to address details in the problem domain: We are creating a questionnaire website, where, depending on the user’s selections, will be given a hiking trail recommendation. For our project, the user will be immediately directed to the home page, where they will be prompted to start the questionnaire. Once they click the button, they will be directed to our question page. The page will initially load question 1. They will have 3 options to choose from. There will be event listeners on each option, which will tally up their responses. Each option will tally up points for a specific hike. Once they have selected an option, an event listener will remove that question and generate the next question. This will happen for all the questions. Once they completed the last question, an event listener will generate the a questionnaire completed message on the same page. On this page, it will have a link to the results page which will display the recommended hike data.

## MVP:
### User stories:
* As a user, I want to be able to navigate from page to page using a navigation bar, links in the footer, and links/ buttons included in the text.
* As a user, I want preparation information on the selected hike, so I know what I’m in for.
* As a developer, I want to have the user navigate directly from the home page to the questionnaire so that they can get right to their hike recommendation(s).
* As a user, I want to see images of the hikes that I am choosing so that I can better visualize the hike.
* As a user, I want to learn more about the developers of the website in an engaging manner.
* As a user, I want the questionnaire to be fun, so I won’t lose interest, and will enjoy the experience.
* As a user, I want the questionnaire to be intuitive, so I will be accurate with my answers.
* As a developer, I want to be able to remove the previously answered question when the user makes their selection to produce the next question.
* As a developer, I want to track the user’s answers with the corresponding hike preference to render a total selected for each hike.
* As a developer, I want to determine the hike with the most selected clicks and then produce information regarding that hike on a separate, linked page.

### Stretch Goals:
* Page in navigation with all hike info
* Logo for Take a Hike!
* Add more potential hikes
* Google map API for hike chosen
* Rating provided by user and stored on website
* API for Yelp
* Store results for how many times people have chosen hike

### Scope:
* 10 questions
* 3 hiking trail options in Washington State
Website is 5 pages (8 files in repo and an image repository)

### Technology Use:
* Google Docs for live group collaboration and file sharing.
* Github for agile
* Github for repo development and deployment
* Github repo master created/ stored on Abigail’s repo: abswhite1
* Slack utilized for instant communication and links sharing
* Bitmoji for “About Us” images
* Google fonts for css styling
* Unsplash for public domain hiking pictures
* Hiking websites for research
* Wireframe (pictures separate):


## Repository plan:
* Index.html (homepage)
* question.html
* results1.html
* results2.html
* results3.html
* about.html
* app.js
* style.css
* Img (repository storing images)
