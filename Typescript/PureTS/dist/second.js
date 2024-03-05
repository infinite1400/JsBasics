"use strict";
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class Youtube {
    constructor(cameraMode, filter, burst, time) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.time = time;
    }
    createStory() {
        console.log("Creating Story ! ");
    }
}
