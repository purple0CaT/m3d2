let EminData = []
// Listeners
const eminemClick= document.getElementById('eminemClick')
const eminemAlbums = document.getElementById('eminemAlbums')
eminemClick.addEventListener('click', () => {
    eminemAlbums.classList.toggle('d-none')
    eminemAlbums.classList.toggle('d-flex')
})




function loadMusEm(){
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "2b61538a60msh8b8bd79dbfee8d1p1ff9fdjsn12069e8730ba",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
    })
    .then( response => response.json())
    .then(base => createData(base.data))
    .catch(err => console.error(err));
    }
function createData(data){
    for ( i=0; i<10; i++){
        let compstn = new Object()
        compstn.name = data[i].album.title
        compstn.path = data[i].preview 
        compstn.img = data[i].album.cover
        compstn.albID = data[i].album.id
        compstn.singer = data[i].artist.name
        compstn.duration = data[i].duration
        EminData.push(compstn)
    }
    console.log(EminData)
    console.log(data)
}

let albE1 = []
let albE2 = []
let albE3 = []
function albumFilter (){

}


eminemAlbums.innerHTML += `
<a href="#" class="tab d-flex align-items-center align-middle" id="eminemClick">
<div class="mr-3 liked-tab">
    <img src="https://source.unsplash.com/random?7" alt="">
</div>
<p class="inline-block">Eminem</p>
</a>
`
loadMusEm()