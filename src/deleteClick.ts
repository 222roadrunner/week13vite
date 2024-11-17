type Album = {
    id: number;
    title: string;
    artist: string;
    genreID: number;
}

document.getElementById("deleteButton")?.addEventListener("click", onDeleteAlbumClick);
export async function onDeleteAlbumClick() {
    
    const albumResponse = await fetch("http://localhost:3000/Album")
    const albumData: Album[] = await albumResponse.json()

    const deleteID = (<HTMLInputElement>document.getElementById("inputDelete")).value;
    const albumToDelete = albumData.find((album: Album) => album.id == +deleteID);

    if (albumToDelete !== undefined) {
        await fetch("http://localhost:3000/Album/" + albumToDelete.id, {
            method: "DELETE"
        })
        console.log("The album deleted was " + albumToDelete.title)
    } else {
        console.log("No album found with the given ID.");
    }
}