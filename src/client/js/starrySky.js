import StarrySky from 'starry-sky';

const starrySky = (element)=> {

    new StarrySky(element, {
        starRatio: 1/800,
        starSize: 1.2,
        maxStarNumber: 10000,
        flickerBaseDuration: 2,
        flickerRandomDurationRange: 5,
        minStarOpacity: 0.1,
        maxStarOpacity: 0.75,
     });
}

export default starrySky;