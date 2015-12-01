// jshint devel:true
'use strict';
/*
* A JS plugin which will apply snowfall to an element. Gives the element a class called fallback if canvas isn't supported.
*/

var requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    function(callback) {
        return setTimeout(callback, 1);
    };

function Blizzard(parentId) {
    //Set up required variables
    var parent = document.getElementById(parentId);
    parent.style.position = "relative";

    //Build canvas and prepend it
    var c = document.createElement("canvas");
    c.className = c.className + " falling-snow";
    parent.insertBefore(c, parent.firstChild);
    c.style.position = 'absolute';

    //Set up initial vars
    var W = (parent)? parent.clientWidth : window.innerWidth;
    var H = (parent)? parent.clientHeight : window.innerHeight;
    var numFlakes =0;
    var flakes = [];
    var ctx = c.getContext("2d");
    //

    //Test for canvas
    if(!!(c.getContext && c.getContext('2d'))) {
        //Canvas exists
        setPositions();
        drawSnowflakes();
    } else {
        //Add fallback class if there's no canvas available
        c.className = c.className + " fallback";

    }

    //Give each snowflake a random position
    function setPositions() {
        //canvas dimensions
        W = (parent)? parent.clientWidth : window.innerWidth;
        H = (parent)? parent.clientHeight : window.innerHeight;

        c.width = W;
        c.height = H;

        //This varies the number of snowflakes showing dependent on size of the element
        numFlakes = Math.floor(W / 25);
        ctx.clearRect(0, 0, W, H);

        //snowflake flakes
        flakes = [];
        for (var i = 0; i < numFlakes; i++) {
            flakes.push({
                x: Math.random() * W, //x-coordinate
                y: Math.random() * H, //y-coordinate
                r: Math.random() * 9 + 1 //radius
            });
        }

        window.addEventListener("resize", setPositions);

    }

    //Long function which we could tidy up
    function drawSnowflakes() {
        ctx.clearRect(0, 0, W, H);

        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.beginPath();

        for (var i = 0; i < numFlakes; i++) {

            var p = flakes[i];
            ctx.moveTo(p.x, p.y);
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);

        }
        ctx.fill();

        var angle = 0;

        for (var i = 0; i < numFlakes; i++) {

            angle += 0.01;

            var p = flakes[i];
            //Updating X and Y coordinates
            p.y += (Math.cos(angle) + 0.5 + p.r) / 8;
            p.x += Math.sin(angle) * 2;


            //Checks if flakes has left screen
            if (p.x > W + 5 || p.x < -5 || p.y > H) {

                if (i % 3 > 0) {

                    flakes[i] = {
                        x: Math.random() * W,
                        y: -10,
                        r: p.r,
                        d: p.d
                    };

                } else {
                    //If the flake has exited from the right
                    if (p.x > W) {
                        //Enter from the left
                        flakes[i] = {
                            x: -5,
                            y: Math.random() * H,
                            r: p.r
                        };
                    } else {
                        //Enter from the right
                        flakes[i] = {
                            x: W + 5,
                            y: Math.random() * H,
                            r: p.r
                        };
                    }
                }
            }
        }

        requestAnimationFrame(drawSnowflakes);
    };

}
