# Blizzard Builder
Adds snowfall to any HTML element

To install with bower:

```bower install blizzard-builder```

To use in your page reference the canavs-snow.js file and create a new Blizzard object passing it the ID of the element you'd like to attach it to:

``` <script type='text/javascript' src='../canvas-snow.js'></script>
    <script>
      var falling = new Blizzard('parentID');
    </script>```

If HTML Canvas isn't available it will create a HTML element which will have the class fallback. You can use this class to attach a background image:

```.falling-snow.fallback {
    width: 100%;
    height: 100%;
    background-image: url('../img/bg-snow.png');
    background-size: 100%;
  }```

##Options

By passing an options variable into the Blizzard object you can change the appearence of the snowfall.

###Flake density

`flakeDensity`

The number of flakes changes dependent on how wide the parent element is. You can change the flake density by setting the ```flakeDensity``` option.

###Falling speed

`fallingSpeed`

The speed with which the flakes fall.

###Examples with options set

``` <script type='text/javascript' src='../canvas-snow.js'></script>
    <script>
      var options = {
        flakeDensity: 3,
        fallingSpeed: 3
      };
      var falling = new Blizzard('parentID');
    </script>```


## License

Copyright (c) 2015 Eliot Fallon and contributors, licensed under the MIT license. See `LICENSE.md` for details.
