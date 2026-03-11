export function getUserLocation() {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error('Geolocalización no soportada'));
            return;
        }
        navigator.geolocation.getCurrentPosition((pos) => {
            resolve({
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude,
                accuracy: pos.coords.accuracy,
            });
        }, (err) => reject(err), {
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 0,
        });
    });
}
