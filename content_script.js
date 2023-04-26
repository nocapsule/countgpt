function updateCounterDisplay(counter) {
  const counterDisplay = document.createElement("div");
  counterDisplay.id = "request-counter";
  counterDisplay.style.position = "fixed";
  counterDisplay.style.top = "10px";
  counterDisplay.style.right = "10px";
  counterDisplay.style.zIndex = "10000";
  counterDisplay.style.backgroundColor = "white";
  counterDisplay.style.border = "1px solid black";
  counterDisplay.style.padding = "5px";
  counterDisplay.textContent = `Request count: ${counter}`;

  const existingCounter = document.getElementById("request-counter");
  if (existingCounter) {
    existingCounter.remove();
  }

  document.body.appendChild(counterDisplay);
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.counter) {
    // The counter will no longer be displayed on the web page.
  }
});
