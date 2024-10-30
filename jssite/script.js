const box = document.getElementById('box');
const player = document.getElementById('player');
const speed = 10;
let x = 0;
let y = 0;

box.addEventListener('click', (e) => {
    (getComputedStyle(box).backgroundColor == "rgb(255, 99, 71)") ? 
        box.style.backgroundColor = "lightgreen" : 
        box.style.backgroundColor = "tomato";
}, true);

document.addEventListener('keydown', (e) => {
    if (e.key.startsWith('Arrow') || 
            e.key.toLowerCase() === 'h' ||
            e.key.toLowerCase() === 'j' ||
            e.key.toLowerCase() === 'k' ||
            e.key.toLowerCase() === 'l' ||
            e.key.toLowerCase() === 'a' ||
            e.key.toLowerCase() === 'w' ||
            e.key.toLowerCase() === 's' ||
            e.key.toLowerCase() === 'd' ) {

        player.textContent = "😎 "
        e.preventDefault();
        switch(e.key.toLowerCase()) {
            case 'arrowup':
            case 'k':
            case 'w':
                y -= speed;
                break;
            case 'arrowdown':
            case 'j':
            case 's':
                y += speed;
                break;
            case 'arrowleft':
            case 'h':
            case 'a':
                x -= speed;
                break;
            case 'arrowright':
            case 'l':
            case 'd':
                x += speed;
                break;
            default:
                break;
        }
        player.style.top = `${y}px`;
        player.style.left = `${x}px`;
    }
});

let debounce
document.addEventListener('keyup', (e) => {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
        if (e.key.startsWith('Arrow') ||
                e.key.toLowerCase() === 'h' ||
                e.key.toLowerCase() === 'j' ||
                e.key.toLowerCase() === 'k' ||
                e.key.toLowerCase() === 'l' ||
                e.key.toLowerCase() === 'a' ||
                e.key.toLowerCase() === 'w' ||
                e.key.toLowerCase() === 's' ||
                e.key.toLowerCase() === 'd' ) {
            player.textContent = "😀 "
        }
    }, 400);
});

