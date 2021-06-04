var element = document.getElementById('location');

function getMyCurrentPosition() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log('Sorry, Your browser doesnt support geo location');
    }
}

function showPosition(props) {
    console.log(props);
    element.innerHTML = `<p>
                            Latitude: ${props.coords.latitude}, 
                            Longitude: ${props.coords.latitude}
                        </p>
                        <p>
                            <img src="https://maps.googleapis.com/maps/api/staticmap?center=${props.coords.latitude},${props.coords.latitude}&zoom=14&size=400x300&sensor=false" alt="Map" />
                        </p>`;
}

getMyCurrentPosition();