/**
* ---------------------------------------------------------------------------------
* | 팝업 |
* ---------------------------------------------------------------------------------
**/

document.addEventListener("DOMContentLoaded", function() {
  const urlInput = document.getElementById("urlInput");
  const openButton = document.getElementById("openButton");

  openButton.addEventListener("click", function() {
    const url = `https://app.earth2.io/#propertyInfo/${urlInput.value}`;
    if (url) {
      chrome.tabs.create({ url });
    }
  });
});
