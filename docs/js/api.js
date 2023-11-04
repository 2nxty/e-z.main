const link1 = "https://hanako.e-z.stream/search?q="
const param = window.location.search;
const urlpa = new URLSearchParams(param); 

if (urlpa.has('error')) {
    const usr = urlpa.get('error');
    document.title = "E-Z - " + usr;
    //document.getElementById("ere").style.display = 'block';
}
else{
    //document.getElementById("ere").style.display = 'none';
}

function getid() {
    const id = document.getElementById("iname").value;
    console.log(link1 + id);
    window.location.replace(link1 + id);
}