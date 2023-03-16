const SPACE = document.querySelector('#drawing-space');
function setUpGrid(gridSize)
{
    for (let i = 0; i < gridSize; i++){
    let subspace = document.createElement('div');
    subspace.setAttribute('class', 'drawing-subspace');
    for (let j = 0; j < gridSize; j++)
    {
        let pixel = document.createElement('div');
        pixel.setAttribute('class', 'pixel');
        subspace.appendChild(pixel);
    }
    SPACE.appendChild(subspace);
    }
    let pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => { 
    pixel.addEventListener('mousemove', () => pixel.setAttribute('class', 'colored'));
    let sliderValue = document.querySelector('.slider-value');
    sliderValue.textContent = `${gridSize} x ${gridSize}`;
});
}

function clearGrid(){
    while (SPACE.firstChild) {
        SPACE.removeChild(SPACE.lastChild);
      }
}

let slider = document.querySelector(".slider"); 
setUpGrid(slider.value);
slider.addEventListener('input', () => { clearGrid(); setUpGrid(slider.value)});
