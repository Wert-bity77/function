
const lightModeButton = document.querySelector('button:nth-of-type(1)');
const darkModeButton = document.querySelector('button:nth-of-type(2)');


function enableLightMode() {
    document.body.style.backgroundColor = '#FFFFFF'; 
    document.body.style.color = '#000000'; 
    alert('Light mode yoqildi!'); 
}
function enableDarkMode() {
    document.body.style.backgroundColor = '#000000'; 
    document.body.style.color = '#FFFFFF';     alert('Dark mode yoqildi!'); 
}
lightModeButton.addEventListener('click', enableLightMode);
darkModeButton.addEventListener('click', enableDarkMode);

 

