/*-- Google Maps API for South America --*/

function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 3.5,
                center: {
                    lat: -13.51643,
                    lng: -55.97852,
                }
            });

            var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

            var locations = [{
                lat: -22.91216,
                lng: -43.17501
            }, {
                lat: -25.69726,
                lng: -54.44569
            }, {
                lat: -34.60851,
                lng: -58.37349
            }, {
                lat: -32.89035,
                lng: -68.84332,
            }, {
                lat: -20.266562,
                lng: -67.620552,
            }, {
                lat: -13.51643,
                lng: -71.97852,
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