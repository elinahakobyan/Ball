export function deg2rad(degrees) {
    return degrees * (Math.PI / 180);
}

export function getMovePosition(deg, distance) {
    const rad = deg2rad(deg);
    const x= Math.cos(rad)*distance;
    const y= Math.sin(rad)*distance;     
     return {dx:x,dy:y};
}
