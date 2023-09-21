const link1 = "https://player.e-z.stream/?w="
const param = window.location.search;
const urlpa = new URLSearchParams(param); 
const id = document.getElementById("iname").value;
if (urlpa.has('error')) {
    const usr = urlpa.get('error');
    document.title = "E-Z - " + usr;
    //document.getElementById("ere").style.display = 'block';
}
else{
    //document.getElementById("ere").style.display = 'none';
}

function getid() {
    window.location.replace(link1 + id);
}