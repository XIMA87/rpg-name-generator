const humanoM = ["Jaden","Tom","Damian","Louis","Irving","Yorik","Bradley","Kenton","Drago","Alessio","Rogelio","Trevor","Kaleb","Joel","Claude","Nickolas","Marcus","Griswold","Frederic","Arnold",]
const humanoF = ["Bridget","Mady","Dorothea","Josephine","Kristen","Violeta","Natasha","Sharon","Carly","Maggy","Olga","Jasmine","Arielle","Tamara","Lara","Sibilla","Adelaide"]
const elfoM = ["Adran","Aelar","Aramil","Aust","Aramil","Berrian","Beiro","Carric","Enialis","Erdan","Erevan","Galinndan","Haradai","Heian","Immeral","Ivellios","Laucian","Mindartis","Paelias","Peren","Quarion","Riardon","Rolen","Thamior","Theren","Varis"]
const elfoF = ["Adrie","Althaea","Anastrianna","Andraste","Antinua","Bethrynna","Birel","Caelynn","Drusilia","Enna","Felosial","Ielenia","Jelenneth","Kayleth","Leshanna","Lia","Meriele","Mialee","Naivara","Quelenna","Sariel","Shanairra","Shava","Theirastra","Thia","Vadania","Valanthe","Xanaphia"]
const anaoM = ["Adrik","Alberich","Baern","Barendd","Brottor","Bruenor","Dain","Darrak","Eberk","Einkil","Fargrim","Flint","Gardain","Harbek","Kildrak","Morgran","Orsik","Oskar","Rangrim","Rurik","Taklinn","Thoradin","Thorden","Torbek","Traubon","Travok","Ulfgar","Veit","Vondal"]
const anaoF = ["Amber","Artin","Audhild","Bardryn","Dagnal","Diesa","Eldeth","Falkrunn","Finellen","Gunnloda","Gurdis","Helja","Hlin","Kathra","Kristryd","Ilde","Liftrasa","Mardred","Riswynn","Sannl","Torbera","Torgga","Vistra"]
const halfM = ["Alton","Ander","Cade","Corrin","Eldon","Errich","Finnan","Garret","Lindal","Lyle","Merric","Milo","Osborn","Perrin","Reed","Roscoe","Wellby"]
const halfF = ["Andry","Bree","Callie","Cora","Euphemia","Jillian","Kithri","Lavinia","Lidda","Merla","Nedda","Portia","Seraphina","Shaena","Trym","Vani","Verna"]

const sobrenomeHumano = ["Steg","Hulu","Rheril","Tareba","Dhala","Keenbrook","Nohod","Glutzk","Himer","Pohra","Glomag","Rez","Rukho","Reilal","Bomi","Jassel","Hista","Makhid","Zoli"]
const sobrenomeElfo = ["Amakiir","Amastacia","Galanodel","Holimion","Ilphelkir","Liadon","Meliamne","Nailo","Siannodel","Xiloscient"]
const sobrenomeAnao = ["Balderk","Battlehammer","Brawnanvil","Bronzebeard","Dankil","Fireforge","Frostbeard","Gorunn","Holderhek","Ironfist","Loderr","Lutgehr","Rumnaheim","Strakeln","Torunn","Ungart"]
const sobrenomeHalf = ["Brushgather","Goodbarrel","Greenbottle","High-hill","Hilltopple","Leagallow","Tealeaf","Thorngade","Tosscobble","Underbough"]


let aleatorios = document.getElementById('aleatorios')
let aleatorioM = document.getElementById('aleatorioM')
let aleatorioF = document.getElementById('aleatorioF')

function gerarHumano() {

    let nomesM = humanoM[Math.floor(Math.random() * humanoM.length)] + " " + sobrenomeHumano[Math.floor(Math.random() * sobrenomeHumano.length)];
    let nomesF = humanoF[Math.floor(Math.random() * humanoF.length)] + " " + sobrenomeHumano[Math.floor(Math.random() * sobrenomeHumano.length)];

    let masc = document.getElementById('masc').innerHTML = 'MASCULINO';
    aleatorioM.innerHTML = nomesM;
    let fem = document.getElementById('fem').innerHTML = 'FEMININO';
    aleatorioF.innerHTML = nomesF;
}

function gerarElfo() {

    let nomesM = elfoM[Math.floor(Math.random() * elfoM.length)] + " " + sobrenomeElfo[Math.floor(Math.random() * sobrenomeElfo.length)];
    let nomesF = elfoF[Math.floor(Math.random() * elfoF.length)] + " " + sobrenomeElfo[Math.floor(Math.random() * sobrenomeElfo.length)];

    let masc = document.getElementById('masc').innerHTML = 'MASCULINO';
    aleatorioM.innerHTML = nomesM;
    let fem = document.getElementById('fem').innerHTML = 'FEMININO';
    aleatorioF.innerHTML = nomesF;
}

function gerarAnao() {

    let nomesM = anaoM[Math.floor(Math.random() * anaoM.length)] + " " + sobrenomeAnao[Math.floor(Math.random() * sobrenomeAnao.length)];
    let nomesF = anaoF[Math.floor(Math.random() * anaoF.length)] + " " + sobrenomeAnao[Math.floor(Math.random() * sobrenomeAnao.length)];

    let masc = document.getElementById('masc').innerHTML = 'MASCULINO';
    aleatorioM.innerHTML = nomesM;
    let fem = document.getElementById('fem').innerHTML = 'FEMININO';
    aleatorioF.innerHTML = nomesF;
}

function gerarHalf() {

    let nomesM = halfM[Math.floor(Math.random() * halfM.length)] + " " + sobrenomeHalf[Math.floor(Math.random() * sobrenomeHalf.length)];
    let nomesF = halfF[Math.floor(Math.random() * halfF.length)] + " " + sobrenomeHalf[Math.floor(Math.random() * sobrenomeHalf.length)];

    let masc = document.getElementById('masc').innerHTML = 'MASCULINO';
    aleatorioM.innerHTML = nomesM;
    let fem = document.getElementById('fem').innerHTML = 'FEMININO';
    aleatorioF.innerHTML = nomesF;
}