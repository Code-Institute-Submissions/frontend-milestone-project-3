/*-- Google Maps API for North America --*/

function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 4,
                center: {
                    lat: 35.481766,
                    lng: -97.54105
                }
            });

            var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

            var locations = [{
                lat: 40.71455,
                lng: -74.00712
            }, {
                lat: 38.89037,
                lng: -77.03196
            }, {
                lat: 41.88425,
                lng: -87.63245
            }, {
                lat: 36.23763,
                lng: -113.07173,
            }, {
                lat: 36.17191,
                lng: -115.13997,
            }, {
                lat: 34.05349,
                lng: -118.24532,
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
