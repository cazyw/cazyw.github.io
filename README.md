# Profile Page

My profile page which contains a collection of coding projects. Please see [cazyw.github.io](cazyw.github.io)

## Discussion

Some cool things learnt/done and updated from the original version.

### Dynamically calculating and inserting sections

Clicking on the `speech bubble` in each project tile opens up a section with a summary of the project. Initially this always appeared after the entire project section. As my number of projects expanded, this became unwieldy particularly on mobile devices where the projects are shown in a single column. I added the `insertProjectBoxPositio` function which 
* obtains the `$(window).innerWidth();` 
* checks this against the Bootstrap grid breakpoints and calculates how many tiles are on each row
* inserts the Project Description section immediately after the row containing the tile selected

e.g. if the second project is selected, and the browser is displaying three tiles in a row, the project details section will appear after the third tile (as that is the end of a row)

**Note** `ChildNode.after` is used to insert the section after the calculated project tile. This is still experimental and will not work for older/unsupported browsers. A polyfill was required for Microsoft Edge and IE9+ as it is not yet supported and . See [MDN Web Docs Explanation](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/after).

### Modularising the code

Code blocks for project tiles were originally fully displayed in `index.html`, which grew the more projects were added. The code was modularised:
* project and devicon data was extracted with a ruby script into `.json` files. This was then copied into `projects.js`  
* `projects.js` dynamically generates the project tiles by populating a template with the data

### To do
Some things still to do:
* convert jquery to javascript (js/portfolio.js)

