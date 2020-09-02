/*-- Google Maps API for Asia --*/

function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 4.5,
                center: {
                    lat: 13.75335,
                    lng: 100.50483
                }
            });

            var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

            var locations = [{
                lat: 13.75335,
                lng: 100.50483
            }, {
                lat: 18.767,
                lng: 99.02616
            }, {
                lat: 21.02889,
                lng: 105.85464
            }, {
                lat: 15.874985,
                lng: 108.335976,
            }, {
                lat: 10.77824,
                lng: 106.70324,
            }, {
                lat: 7.973667,
                lng: 98.34393,
            }];

            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                });
            });

            var markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
        }
