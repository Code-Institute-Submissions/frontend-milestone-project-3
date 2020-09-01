function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 4.2,
                center: {
                    lat: 48.13641,
                    lng: 11.57754
                }
            });

            var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

            var locations = [{
                lat: 51.50642,
                lng: -0.12721
            }, {
                lat: 52.353218,
                lng: 5.0027695
            }, {
                lat: 52.501408,
                lng: 13.4023285
            }, {
                lat: 50.06045,
                lng: 19.93242,
            }, {
                lat: 47.49972,
                lng: 19.05508,
            }, {
                lat: 45.43812,
                lng: 12.31816,
            }, {
                lat: 41.90322,
                lng: 12.49564
            }, {
                lat: 41.3875,
                lng: 2.16835
            }, {
                lat: 48.863186,
                lng: 2.339754
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
