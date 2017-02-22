/* ================================
Week 6 Assignment: Basic Application

Take a look at the midterm prototype: https://marvelapp.com/bf2c9h/screen/10434841
Try clicking on the "Next" and "Previous" buttons. This task will ask you to write some functions
that will enable us to write an application like in the midterm.

Write three functions: clickNextButton, clickPreviousButton, and saySlideName.
clickNextButton and clickPreviousButtons should simulate what will happen when someone clicks
on a next or previous button in your application.

You don't need to create HTML buttons or a useable application—this exercise is asking you to create
functions that will be used in your application. To test it out, try calling the functions in your
console. For example, try running: clickNextButton() and see what it does. Use lots of console logs!
================================ */

var state = {
  "slideNumber": 0, // slideNumber keeps track of what slide you are on. It should increase when you
                    // click the next button and decrease when you click the previous button. It
                    // should never get so large that it is bigger than the dataset. It should never
                    // get so small that it is smaller than 0.
  "slideData": [
    {
      "name": "What is Dengue?",
      "description": "Dengue Fever is a mosquito-borne viral disease in Singapore that spreads through the Aedes moquito."
      //to add instructions of which layer properties to access - in this case, display all polygons
    },
    {
      "name": "Dengue Hotspots",
      "description": "Do you live close to any of these hotspots?"
      //to add instructions of which layer properties to access - display only hotspot polygons
    },
    {
      "name": "Dengue Breeding Spots",
      "description": "There is NO DRUG for dengue fever! The most effective way to prevent it's spread is to remove the Aedes mosquito breeding ground! Here are the current breeding spots in Singapore"
      //instructions of which layer properties to access - display only breeding spots polygons
    },
    {
      "name": "Dengue Cases",
      "description": "Extra care to protect our love ones"
      //to add instructions of which layer properties to access - display only cases
    },
    {
      "name": "Dengue Case 1",
      "description": "Map zooms into area that a high profile case occurred"
      // to add instructions to zoom in on particular areas that will have a pop-up with a news link to a high profile dengue fever case
    },
    {
      "name": "Dengue Case 2",
      "description": "Map zooms into area that another high profile case occurred"
      // to add instructions to zoom in on particular areas that will have a pop-up with a news link to another high profile dengue fever case
    },
    {
      "name": "Dengue Prevention",
      "description": "Steps you can take to prevent Dengue"
      // resets map to original zoom and show all points, so that people can finally start clicking around the map and exploring it for themselves
    }
  ]
};

var displaySlide = function (){
  //this function will display the data on the map, based on instructions for each slide
};

var clickNextButton = function(num) {
  if (state.slideNumber>0 && state.slideNumber<7) {
    var nextNum = num+1;
    displaySlide (state.slideData.nextNum);
    if (nextNum===7) {
      //and hide Next Button
    }
  }
};

var clickPreviousButton = function(num) {
  if (state.slideNumber>0 && state.slideNumber<7) {
    var prevtNum = num-1;
    displaySlide (state.slideData.prevNum);
    if (prevNum===1){
      //and hide Previous Button
    }
  }
};

var saySlideName = function(num) {
  // saySlideName uses console.log to "say" the name of the slide it is given. It should run when
  // someone clicks on one of the buttons.
  if (state.slideNumber>0 && state.slideNumber<7) {
    console.log (state.slideData.num.name);
  }
};
