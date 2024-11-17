import "bootstrap/dist/css/bootstrap.css";
import {onFetchAlbumClick} from "./viewClick";
import {onCreateAlbumClick} from "./createClick";
import {onDeleteAlbumClick} from "./deleteClick";

document.getElementById("viewButton")?.addEventListener("click", onFetchAlbumClick);

document.getElementById("createButton")?.addEventListener("click", onCreateAlbumClick);

document.getElementById("deleteButton")?.addEventListener("click", onDeleteAlbumClick);