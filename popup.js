document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get("counter", (data) => {
    const counterDisplay = document.getElementById("counter-display");
    counterDisplay.textContent = data.counter || 0;
  });

  const resetCounterButton = document.getElementById("reset-counter");
  resetCounterButton.addEventListener("click", () => {
    chrome.storage.local.set({ counter: 0 });
    document.getElementById("counter-display").textContent = 0;
    chrome.runtime.sendMessage({ resetCounter: true });
  });
});
