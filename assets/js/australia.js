function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 4.5,
                center: {
                    lat: -25.504631,
                    lng: 141.03604,
                }
            });

            var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

            var locations = [{
                lat: -33.8696,
                lng: 151.20695
            }, {
                lat: -28.64694,
                lng: 153.61276
            }, {
                lat: -25.259954,
                lng: 153.14319
            }, {
                lat: -20.257132,
                lng: 148.97183,
            }, {
                lat: -16.91959,
                lng: 145.77371,
            }, {
                lat: -25.344631,
                lng: 131.03604,
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
