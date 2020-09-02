<img src="https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png" style="margin: 0;">

Welcome phillrutherford,

This is the Code Institute student template for Gitpod. We have preinstalled all of the tools you need to get started. You can safely delete this README.md file, or change it for your own project.

## Gitpod Reminders

To run a frontend (HTML, CSS, Javascript only) application in Gitpod, in the terminal, type:

`python3 -m http.server`

A blue button should appear to click: *Make Public*,

Another blue button should appear to click: *Open Browser*.

To run a backend Python file, type `python3 app.py`, if your Python file is named `app.py` of course.

A blue button should appear to click: *Make Public*,

Another blue button should appear to click: *Open Browser*.

In Gitpod you have superuser security privileges by default. Therefore you do not need to use the `sudo` (superuser do) command in the bash terminal in any of the backend lessons.

## Updates Since The Instructional Video

We continually tweak and adjust this template to help give you the best experience. Here are the updates since the original video was made:

**April 16 2020:** The template now automatically installs MySQL instead of relying on the Gitpod MySQL image. The message about a Python linter not being installed has been dealt with, and the set-up files are now hidden in the Gitpod file explorer.

**April 13 2020:** Added the _Prettier_ code beautifier extension instead of the code formatter built-in to Gitpod.

**February 2020:** The initialisation files now _do not_ auto-delete. They will remain in your project. You can safely ignore them. They just make sure that your workspace is configured correctly each time you open it. It will also prevent the Gitpod configuration popup from appearing.

**December 2019:** Added Eventyret's Bootstrap 4 extension. Type `!bscdn` in a HTML file to add the Bootstrap boilerplate. Check out the <a href="https://github.com/Eventyret/vscode-bcdn" target="_blank">README.md file at the official repo</a> for more options.

--------

Happy coding!




# Rutherford Travel

Rutherford travel is a website designed to assist in chosing their next backpacking trip. 
Aimed specifically at the younger, backpacker audience the website has laid out an itinery option for the user for each continent listed.
There are no specific dates or prices attached, it simply provides the user with a recommended route entailing all the key locations that I feel they would wish to visit.
Furthermore there are external links to sites where the customer can book flights, accommodation and tours for the locations advertised.

## UX

For this project I chose to do a travel website. The target audience is prominently 18-35 year old backpackers. The aim is to enhance the users desire to travel the world. I have set up different pages for the most common locations/regions that the target age group would travel on a budget. From there I used my own personal travelling experience to create a route to provide an example of a trip for them to look at and get some inspiration. I then described each destination and explained why it was on the route and added “hot tips” and photos aswell. Below this are links to the best deals and websites for them to book flights, accommodation and tours. I sketched out some simple layout designs on Balsamiq as shown here:

## Features 

#### Existing Features

Feature 1 - Easy to use navbar. The navbar allows the user to chose their continent instantly and be immediately provided with a suggested trip/route thus simplifying the process for them.

Feature 2 - External links. There are external links from each section that direct the user to the best website for them so purchase flights, book accommodation and arrange tours.

Feature 3 - Social Links. At the footer of every page is 4 social media links that would bring the user to the website of “Rutherford Travel”. This could also be classed as a feature left to implement as the social media sites are not yet built. The sites I have chosen to list are Facebook, Instagram, YouTube and Pinterest.

#### Features Left To Implement

One feature I would possibly implement is expansion of the site to have offers and a booking system itself. This would allow the user to book everything directly with us instead of directing them to other websites.

I would also perhaps add dotted lines to the Google Maps to join up each destination. Arrows could also be added to show the direction of the route suggested.

## Technologies Used

1 - JQuery. For this project I wanted to implement a hover effect that produced a different image depending on which continent they were hovering over on the navbar. 

2 -Google Maps API. Within each element of the navbar there is a google map. This map is zoomed to the respective continent and on there are markers showing each destination I have written about. I did this by using the google maps api and wrote the code in js to add markers to the maps. 

## Testing

Throughout this project I was self testing all the code I was writing by viewing and updating the site in the browser. It was important to me that I monitored how the site looked all on device sizes. While this created many difficulties my main source of testing was running through the features and UX myself while the site was in different device widths.

I also used code validators to test my code for errors. 
For html it showed an error as my img elements did not have an alt attribute, I added these and the code passed.
For css an error showed because I had “height: flex;” and this was incorrect. I removed it and the code passed.
For js no errors were found.

## Deployment

To deploy this project I used Github Pages. On the settings page of my GitHub Repositories and published my site using the Jekyll.yml theme.

## Credits

#### Content

The content used in this project predominantley came from myself. The vast majority of the places listed and tours referenced are things I have experienced personally. This made it much easier to give “Hot Tips” and of course links to sites of recommendation as I have used them previously.

#### Media

The images used throughout the project were all pulled from google images. 

#### Acknowledgments

I received inspiration for the hover image effect from https://tympanus.net/codrops/2020/03/31/css-only-marquee-effect/ 

I wasn’t able to make the image float and follow the cursor as that is javascript coding I am not yet confident on. I was pleased personally with what I had got and decided to keep it as such for this project.
