let lastInput = null;

document.getElementById("createButton")?.addEventListener("click", onCreateAlbumClick);
export async function onCreateAlbumClick() {

    let titleInput = (<HTMLInputElement>document.getElementById("createAlbum")).value;
    let artistInput = (<HTMLInputElement>document.getElementById("createArtist")).value;
    let genreInput = (<HTMLInputElement>document.getElementById("createGenre")).value;;
    let albumInput = null;

    if (titleInput !== "" && artistInput !== "" && genreInput !== "") {
        albumInput = {title: titleInput, artist: artistInput, genreID: genreInput}
        const albumResponse = await fetch("http://localhost:3000/Album", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(albumInput)
        })
        const newAlbum = await albumResponse.json()
        lastInput = newAlbum
    } else {
        console.log("Incomplete input")
        return
    }
} 