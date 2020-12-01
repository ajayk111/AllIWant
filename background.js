var active = true;

function toggle() {
  active = !active;

  browser.browserAction.setIcon({
    path: active ? {
      38: "icons/alliwant-38.png"
    } : {
      38: "icons/dontwant-38.png"
    }
  });
}

browser.browserAction.onClicked.addListener(toggle);

function handleMessage(request, sender, sendResponse) {
  sendResponse(active);
}

browser.runtime.onMessage.addListener(handleMessage);
