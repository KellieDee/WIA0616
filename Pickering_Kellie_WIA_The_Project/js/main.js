/*
    Kellie Pickering
    Web Interaction & Animation
    06/02/16
*/

$(document).ready(function(){                                                       // Document ready function
    
    
    /***** PAGE ANIMATION ***************************************************/ 
    
    var controller = new ScrollMagic.Controller();                                  // Initialize ScrollMagic

    // Sticky Navigation
    
    new ScrollMagic.Scene({                                                         // Create a new ScrollMagic scene
        triggerElement: "#nav",                                                     // Connect nav section to the animation
        triggerHook: 0,                                                             // Start animation when nav reaches top (0)
        reverse: true                                                               // Apply reverse animation when scrolling down
    })
        .setPin("#nav")                                                             // Pin the trigger (nav section) to its hook (0)
        .addTo(controller);                                                         // Save changes to the controller

    
    // About Link Highlight
    
    new ScrollMagic.Scene({
        triggerElement: "#about",
        triggerHook: 0,
        duration: 565,
        reverse: true
    })
        .setClassToggle("#aboutLink", "activeLink")
        .addTo(controller);
    
	// Services Link Highlight
    
    new ScrollMagic.Scene({
        triggerElement: "#services",
        triggerHook: 0,
        duration: 385,
        reverse: true
    })
        .setClassToggle("#servicesLink", "activeLink")
        .addTo(controller);
    
    	
    // Adoption Link Highlight
    
    new ScrollMagic.Scene({
        triggerElement: "#adopt",
        triggerHook: 0,
         duration: 385,
        reverse: true
    })
        .setClassToggle("#adoptionLink", "activeLink")
        .addTo(controller);

    
    /***** CANVAS DRAWINGS ***************************************************/
    
    if(Modernizr.canvas){                                                            // If Modernizr detects canvas is supported, run following code 
    
        // Boarding 
    
        var canvas1 = document.getElementById("boarding");                           // Canvas variable assigned to element ID on page
        var ctx1 = canvas1.getContext("2d");                                         // 2D context
        drawGerbil();                                                                // Runs function that creates the canvas
    
        function drawGerbil(){                                                       // Function that creates the canvas
            boardingImg = new Image();                                               // Variable to hold a new image
            boardingImg.src = '../resources/boarding.png';                           // Link to image source
            boardingImg.onload = function(){                                         // Function that draws image on to canvas
                ctx1.drawImage(boardingImg, 50, 0);                                  // Draws image at x, y coordinates
            }
        }
    
        // Grooming
    
        var canvas2 = document.getElementById("grooming");
        var ctx2 = canvas2.getContext("2d");
        drawCat();
    
        function drawCat(){
            groomingImg = new Image();
            groomingImg.src = '../resources/grooming.png';
            groomingImg.onload = function(){
                ctx2.drawImage(groomingImg, 50, 0);
            }
        }   
    
        // Obedience
    
        var canvas3 = document.getElementById("obedience");
        var ctx3 = canvas3.getContext("2d");
        drawDog();
    
        function drawDog(){
            obedImg = new Image();
            obedImg.src = '../resources/obedience.png';
            obedImg.onload = function(){
                ctx3.drawImage(obedImg, 50, 0);
            }
        }
        
    }else{                                                                              // If Modernizr detects canvas is not supported:
        alert("HTML5 Canvas not supported by your browser!");                           // Alert the user that canvas is not supported
    };
    
});
    

    /***** GOOGLE BAR CHART **************************************************/

    google.charts.load('current', {'packages':['bar']});                            // Load Google Charts with bar package
    google.charts.setOnLoadCallback(barGraph);                                      // When called, run a function

    function barGraph(){                                                            // Create function for bar graph
        
        var data = new google.visualization.arrayToDataTable([                      // Save data to Google visualization
            ['Animal Type', 'Returned', 'Adopted', 'Euthanized'],                   // First array with bar labels
            ['Cat', 100000, 1300000, 1400000],                                      // Second array with bar group 1 data
            ['Dog', 542000, 1400000, 1200000]                                       // Third array with bar group 2 data
        ]);
        
        var options = {                                                             // Create options for bar graph
            height: 400,                                                            // Set height of graph
            width: 450,                                                             // Set width of graph
            chart: { title: 'Animal Shelter Statistics' },                          // Set title of graph
            bars: 'vertical',                                                       // Change bar orientation to vertical
            colors: ['#9FCBEE', '#5C82A2', '#EE5A44'],                              // Change bar color set
        };
    
        var graph = new google.charts.Bar(document.getElementById("barGraph"));     // Link the graph to an element on the page
        graph.draw(data, options);                                                  // Draw the graph with given data and options
    }