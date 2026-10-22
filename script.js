// The Watch Now link is configured in index.html.
// To change the destination, edit the href on #watch-now-link.
// This small script helps prevent the link from accidentally being empty.
const watchNowLink = document.getElementById("watch-now-link");

if (watchNowLink && !watchNowLink.getAttribute("href")) {
  watchNowLink.setAttribute("href", "https://www.youtube.com/");
}
