![Take a Hike! Logo] (img/Logo-largest.png)

# Take a Hike!
## Code Fellows 201 Week 4 Project

##General Information
---
* Team Name: Hitchhikers
* Team Members: Abigail White, Alex Cahn, Miguel Pena, Steven Johnson
* Project Name: Take a Hike!
* Project Concept: Questionnaire to find the right hike near user & provide relevant information to prepare for that hike.

###Project Domain Model:
---
We are creating a questionnaire website, where, depending on the user’s selections, will be given a hiking trail recommendation. For our project, the user will be immediately directed to the home page, where they will be prompted to start the questionnaire. Once they click the button, they will be directed to our question page. The page will initially load question 1. They will have 3 options to choose from. There will be event listeners on each option, which will tally up their responses. Each option will tally up points for a specific hike. Once they have selected an option, an event listener will remove that question and generate the next question. This will happen for all the questions. Once they completed the last question, an event listener will generate the a questionnaire completed message on the same page. On this page, it will have a link to the results page which will display the recommended hike data.

## Minimum Viable Product
---
### User stories:
* As a user, I want to be able to navigate from page to page using a navigation bar, links in the footer, and links/ buttons included in the body.
* As a user, I want to answer relevant, fun questions without a lot of extraneous effort with an accurate, interested result generated immediately when the quiz is complete.
* As a user, I want information on how to prepare for the selected hike, so I know what I’m in for.
* As a user, I want to see images of the hikes that I am choosing so that I can better visualize the hike.
* As a user, I want to learn more about the developers of the website in an engaging manner.
* As a user, I want the questionnaire to be fun, so I won’t lose interest, and will enjoy the experience.
* As a user, I want the questionnaire to be intuitive, so I will be accurate with my answers.
* As a user, I want a clear understanding of Take a Hike!'s brand image/ demographic without any additional effort.
* As a developer, I want to have the user navigate directly from the home page to the questionnaire so that they can get right to their hike recommendation(s).
* As a developer, I want to be able to remove the previously answered question when the user makes their selection to produce the next question.
* As a developer, I want to track the user’s answers with the corresponding hike preference to render a total selected for each hike (via localStorage).
* As a developer, I want to determine the hike with the most selected clicks and then produce information regarding that hike on a separate, linked page.

### Stretch Goals:
---
* Page in navigation with all hike info
* Create and implement a logo for Take a Hike! to be utilized throughout the website.
* Potential to add more potential hikes, to give more options to the user of the website.
* include a Google map API on the corresponding results pages.
* Include a rating system on the site, with ratings provided by user and stored for future reference.
* Include API for Yelp reviews of different hikes.
* Include meta tags for SEO utilization.
* Create and include favicon for webpage and apps.
* Create unique bitmoji icons for "About Us" page.

### Scope:
---
* 10 questions
* 3 hiking trail options
* Website is 5 pages (10 files in repo and image directories)

### Technology Use:
---
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
---
* index.html (homepage)
* homepage.css

* question.html
* results1.html
* results2.html
* results3.html
* style.css

* about.html
* about.css

* app.js
* img (repository storing images)
* img-background (additional repository for storing images)
