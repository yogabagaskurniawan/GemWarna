

//UNTUK SATU WARNA YANG ASIK
const satuWarna = document.getElementById('satuWarna');
satuWarna.addEventListener('click', function(){
    //document.body.style.backgroundColor = 'lightblue';
    document.body.classList.toggle('biru-muda')
})

//UNTUK WARNA ACAK
const acakWarna = document.getElementById('acakWarna');
acakWarna.addEventListener('click', function(){
    const r = Math.round (Math.random()*255+1);
    const g = Math.round (Math.random()*255+1);
    const b = Math.round (Math.random()*255+1);
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});

//untuk WARNA RANGE
const wMerah = document.querySelector('input[name=wMerah]');
const wHijau = document.querySelector('input[name=wHijau]');
const wBiru = document.querySelector('input[name=wBiru]');

wMerah.addEventListener('input', function(){
    const r = wMerah.value;
    const g = wHijau.value;
    const b = wBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
});

wHijau.addEventListener('input', function(){
    const r = wMerah.value;
    const g = wHijau.value;
    const b = wBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
});

wBiru.addEventListener('input', function(){
    const r = wMerah.value;
    const g = wHijau.value;
    const b = wBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
});

//UNTUK ACAK WARNA PADA MOUSE
document.body.addEventListener('mousemove', function(event){
    const xPos = Math.round((event.clientX / window.innerWidth)*255);
    const yPos = Math.round((event.clientY / window.innerHeight)*255);
    document.body.style.backgroundColor = 'rgb('+xPos+','+yPos+',100)'
});