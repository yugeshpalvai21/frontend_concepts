// CALLBACKS -> Make JS Asynchronus requests to synchronus requests

function StepOne() {
    console.log('step 1 executed..');
}

function StepTwo(callback) {
    setTimeout(() => {
        console.log('step 2 executed..');
        callback();
    }, 5);
}

function StepThree() {
    console.log('step 3 executed..');
}

StepOne();
StepTwo(StepThree);