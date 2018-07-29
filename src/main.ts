const screenWidth : number = 1024;
const screenHeight : number = 768;
const screenBpp : number = 32;

const FRAMESNEEDED_DEFAULT : number = 6;
// TODO: Something more immutable?
let framesNeeded = FRAMESNEEDED_DEFAULT;

const FPS : number = 30;
const FPS_RELEASETIME : number = 1000 / FPS

    function changeResolution(width : number, height : number, fullcreen : boolean) {
        // TODO
    }

    // TODO: Improve state management to something immutable?
    let keys : Map < number,
        boolean > = new Map();

    function handleKeyDown(key : number) {
        keys[key] = true
    }

    function handleKeyUp(key : number) {
        keys[key] = false
    }

    function processEvents() {
        // TODO
    }

    function getTime() : number {
        // TODO;
        return 0;
    }

    function setSpeedFactor(factor : number) {
        // TODO: Something more immutable?
        framesNeeded = factor * FRAMESNEEDED_DEFAULT;
    }

    function main() {
        // TODO;
    }
