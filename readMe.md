#H1 This is the AboutMe page of Vincent Besuyen

The website contains the following sections:

1. Head
2. home & navbar
3. aboutme
4. software engineering
5. connect
6. music
7. gallery

In this readMe you can find a paragraph about each section bellow. I have included a task list for each seperate section, for future improvements.

_head_
In this section I put links to the css stylesheet and I imported a google font called "Oswald". I have added CDN links to Bootstrap, Font Awesome and Animate CSS

_home & navbar_
The home section refers to the landing page. I used a clean photo as background to keep a minimalist design. In the navbar you can find the logo of Zaraffa, my business. The navbar itself has links to the different sections and is constructed using bootstrap. An interesting aspect is the scroll effect, making the bar transparant as the user scrolls down, and back to dark when reaching the bottom. I chose to remove the collapsing functionality due to clashing with other collapsables.

_aboutme_
In the aboutme section I used jquery and javascript to create a hover trigger that reveals a partial overlay that collapses and holds a short paragraph. The paragraph has a media query allowing it to be scrollable once needed. The scrollbars are hidden, yet functionalities remain.

- [ ] Change about me text
- [ ] Improve hover effect that opens up the text. Make the transition so that it does not reveal text until fully collapsed

_software engineering_
Here you find my portfolio projects that I have been making when joining the coding bootcamp. Currently these projects are still underway. Once finished, each project will get its own section.

- [ ] add portfolio projects

_connect_
This section contains the contact form that is linked to my email adress. Another hover effect shows the contact form on an overlay.

- [ ] connect form to email client and make the input text appear there

_music_
This section contains information about my work as a DJ. It has embedded players from youtube and soundcloud. The design changed a bit, since I moved around the different subsections.

- [ ] youtube embedding working on deployment

_gallery_
The gallery section has 4 themes. Each photo is clickable to enter a new section of the gallery for that theme. Using jquery and bootstrap, there is a sliding effect towards the right. This is not native to jquery, so the solution was to add margin-left.

- [ ] repeat effects on back button

_lessons learned_

1. Design Mobile first!
2. Crop your photos to approach the dimmensions that you will use them in. It will make a lot of difference and be more visually appealing.
3. Carefully take the time to play around with padding in order to space elements exactly right.
4. Simpler minimalistic designs are often effective.
# AboutMeVinBes
