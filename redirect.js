function goToAlliwant() {
  let alliwant_url = "https://www.youtube.com/watch?v=9AwWmgcxcX4";
  if (!window.location.href.startsWith(alliwant_url)) {
    window.location.replace(alliwant_url);
  }
}

function checkActive() {
  browser.runtime.sendMessage(0).then(function(response) {
    if (response) {
      goToAlliwant();
    }
  });
}

window.setInterval(checkActive, 250)
