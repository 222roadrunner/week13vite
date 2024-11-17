type Album = {
    id: number;
    title: string;
    artist: string;
    genreID: number;
}
  
type Genre = {
    id: number;
    text: string;
}
  
type Reviews = {
    albumId: number;
    rating: string;
    text: string;
}

const albumsContainer = document.getElementById("albumsContainer") as HTMLDivElement

document.getElementById("viewButton")?.addEventListener("click", onFetchAlbumClick);
export async function onFetchAlbumClick() {

    const albumResponse = await fetch("http://localhost:3000/Album")
    const albumData: Album[] = await albumResponse.json()

    const genreResponse = await fetch("http://localhost:3000/Genre")
    const genreData: Genre[] = await genreResponse.json()

    const reviewsResponse = await fetch("http://localhost:3000/Reviews")
    const reviewsData: Reviews[] = await reviewsResponse.json()

    const genreMap = genreData.reduce((map: any, genre: Genre) => {
        map[genre.id] = genre.text;
        return map;
    }, {});

    const ratingMap = reviewsData.reduce((map: any, reviews: Reviews) => {
        map[reviews.albumId] = reviews.rating;
        return map;
    }, {});

    const reviewsMap = reviewsData.reduce((map: any, reviews: Reviews) => {
        map[reviews.albumId] = reviews.text;
        return map;
    }, {});

    albumsContainer.innerHTML = albumData.map(
        Album => `<div>
        <h2>${Album.id}</h2> <h2>${Album.title}</h2>
        <h3>${Album.artist}</h3>
        <p>${genreMap[Album.genreID]}</p>
        <p>${ratingMap[Album.id]}: ${reviewsMap[Album.id]}</p>
        </div>`
    ).join("")
}