import axios from 'axios';

export async function findCoordinatesFromAddress(address) {
    const accessToken = 'pk.eyJ1IjoiYWxwaGExNiIsImEiOiJja3dxN2R4NDcwandwMnBxb2s0cjN2b3dnIn0.mo5JOtJcdE20ggp-nQZGAA';

    const response = await axios.get(
        'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
        address.number + '%20' +
        address.type + '%20' +
        address.name + '%20' +
        address.postalCode + '%20' +
        address.cityName + '.json?types=place%2Cpostcode%2Caddress&access_token=' +
        accessToken
    );

    return response.data.features[0].center;
}
