# leaflet-paintpolygon

[![Dependency Status](https://david-dm.org/tcoupin/node-pgrouting.svg)](https://david-dm.org/tcoupin/leaflet-paintpolygon)
[![npm](https://img.shields.io/npm/dt/leaflet-paintpolygon.svg?style=flat-square)](https://www.npmjs.com/package/leaflet-paintpolygon)
[![npm](https://img.shields.io/npm/v/leaflet-paintpolygon.svg?style=flat-square)](https://www.npmjs.com/package/leaflet-paintpolygon)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/tcoupin/leaflet-paintpolygon.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Ftcoupin%2Fleaflet-paintpolygon)

Create polygon on leaflet map like Paint[brush]! Choose your brush size and draw ! Or erase...
Mobile and desktop compatible, based on [turf.js](http://turfjs.org).


[Demo](https://tcoupin.github.io/leaflet-paintpolygon)

**Turf packages are already included in dist js.**


## Use it

```
L.control.paintPolygon().addTo(map)
```

### Options

```
 options: {
        position: 'topright',     // position of the control
        radius: 30,               // radius on start (pixel)
        minRadius: 10,            // min radius (pixel)
        maxRadius: 50,            // max radius (pixel)
        layerOptions: {},         // path style of drawed layer (see: https://leafletjs.com/reference-1.3.0.html#path-option)
        drawOptions: {            // path style on draw (see: https://leafletjs.com/reference-1.3.0.html#path-option)
            weight: 1
        },
        eraseOptions: {           // path style on erase (see: https://leafletjs.com/reference-1.3.0.html#path-option)
            color: '#ff324a',
            weight: 1
        },
        menu: {                   // Customize menu, set to false to prevent adding control UI on map, you need to build your own UI (on map or not)
        	drawErase: true,
            size: true,
            eraseAll: true
        }
}               
```

### External control

Add `menu: false` in options object to prevent UI creation and bind your own UI to controls methods. See below for API and [this example](https://tcoupin.github.io/leaflet-paintpolygon/examples/2_externalcontrol.html).

## API

* `setRadius(radius)`: set radius of circle (in pixel)
* `startDraw()`: start drawing
* `startErase()`: start erasing
* `stop()`: stop drawing or erasing
* `eraseAll()`: erase all...
* `getData()`: return feature as GeoJSON
* `setData(data)`: set the feature as GeoJSON
* `getLayer()`: return [GeoJSON layer](https://leafletjs.com/reference-1.3.0.html#geojson)