function showConcertContent(concertId) {
    var contentId = "concert-content-" + concertId;
    var content = document.getElementById(contentId);
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
       content.style.display = "none";
    }
}
