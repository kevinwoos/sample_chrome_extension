/**
* ---------------------------------------------------------------------------------
* | 팝업 |
* ---------------------------------------------------------------------------------
**/

document.addEventListener("DOMContentLoaded", function() {
  const urlInput = document.getElementById("urlInput");
  const openButton = document.getElementById("openButton");

  openButton.addEventListener("click", function() {
    // https://e2.me/metamemes
    // https://app.earth2.io/#thegrid/9f6679c9-1908-4e26-bdff-9acaf14446d3
    const url = `https://e2.me/${urlInput.value}`;
    if (url) {
      chrome.tabs.create({ url });
    }
  });
});
