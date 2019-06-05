//To understand callbacks lets use DOM events, be sure to run me in debugger!
//Our own addEventListener function will:
//log the typeOfEvent, then use our callback function to `event`
function anotherAddEventListener(typeOfEvent, callback) {
    //detect some event....

    //store the event
    var eventThatHappened = {
        eventType: `keydown`,
        key: `p`,
        duration: 2
    }
    //if stored value(event that occured) is equal to the given value(typeOfEvent)
    if (eventThatHappened.eventType === typeOfEvent) {
        //call the function `callback` on the eventThatHappened SEE LINE 20
        callback(eventThatHappened);
    }
}

debugger;
//call function anotherAddEventListener, using `click` event and the `event` function as a callback
anotherAddEventListener( /*event type=*/ `click`, /*callback=*/ function (event) {
    console.log(event);
})