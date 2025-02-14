const apiURL = "https://api.lyrics.ovh/v1";
const lyricsEL = document.querySelector(".lyrics");

const btnEL = document.querySelector(".findLyricsBtn");
btnEL.addEventListener("click", async () => {
  const artist = document.querySelector(".artistInput");
  const song = document.querySelector(".songInput");

  if (artist.value && song.value) {
    try {
      const response = await fetch(`${apiURL}/${artist.value}/${song.value}`);
      const data = await response.json();

      if (data.lyrics) {
        displayLyrics(data.lyrics);
      } else {
        lyricsEL.innerText = "not found anything.";
      }
    } catch (error) {
      console.error(error);
    }
  } else {
    alert("Please enter both artist and song title.");
  }
});

function displayLyrics(lyrics) {
  const verses = lyrics.split("\n");
  const portion = verses.slice(0, 10);
  lyricsEL.innerText = portion.join("\n");
}
