let counter = 0;

chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    if (details.url.includes("https://chat.openai.com/backend-api/conversation") &&
        details.method === "POST" &&
        details.requestBody &&
        details.requestBody.raw
    ) {
      const requestBody = decodeURIComponent(String.fromCharCode.apply(null, new Uint8Array(details.requestBody.raw[0].bytes)));
      try {
        const jsonData = JSON.parse(requestBody);
        if (jsonData.model === "gpt-4") {
          counter++;
          chrome.storage.local.set({ counter: counter });
          updateBadge(counter);
        }
      } catch (error) {
        console.error("Error parsing request JSON:", error);
      }
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking", "requestBody"]
);



function updateBadge(counter) {
  chrome.browserAction.setBadgeText({ text: counter.toString() });
  chrome.browserAction.setBadgeBackgroundColor({ color: "#FF5722" });
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.resetCounter) {
    counter = 0;
    updateBadge(counter);
  }
});
