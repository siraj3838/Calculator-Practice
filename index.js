function clickBtnTriangle(){
    const base = getInputValue('bass-input')
    const height = getInputValue('height-input')
    if(isNaN(base) || isNaN(height)){
        alert('Please Insert a Number');
        return;
    }
    const area = 0.5 * base * height;
    const areaTwoPoint = area.toFixed(2)
    setElement('triangle-output', areaTwoPoint);
}

function clickBtnRectangle(){
    const weight = getInputValue('rectangle-weight');
    const height = getInputValue('rectangle-height');
    if(isNaN(weight) || isNaN(height)){
        alert('Please Insert a Number');
        return;
    }
    const area = weight * height;
    const areaTwoPoint = area.toFixed(2)
    setElement('rectangle-output', areaTwoPoint)
}

function clickBtnParallelogram(){
    const base = getInputValue('p-bass');
    const height = getInputValue('p-height')
    if(isNaN(base) || isNaN(height)){
        alert('Please Insert a Number');
        return;
    }
    const area = base * height;
    const areaTwoPoint = area.toFixed(2)
    setElement('parallelogram-output', areaTwoPoint);
}

function clickBtnRhombus(){
    const d1 = getInputValue('rhombus-d1');
    const d2 = getInputValue('rhombus-d2');
    if(isNaN(d1) || isNaN(d2)){
        alert('Please Insert a Number');
        return;
    }
    const area = 0.5 * d1 * d2;
    const areaTwoPoint = area.toFixed(2)
    setElement('rhombus-output', areaTwoPoint);
}

function clickBtnPentagon(){
    const pentagonP = getInputValue('pentagon-p');
    const pentagonB = getInputValue('pentagon-b');
    if(isNaN(pentagonP) || isNaN(pentagonB)){
        alert('Please Insert a Number');
        return;
    }
    const numerator = 5 * Math.pow(10, 2);
    const denominator = 4 * Math.tan(Math.PI / 5);
    const area = numerator / denominator;
    const areaTwoPoint = area.toFixed(2)
    setElement('pentagon-output', areaTwoPoint);
}

function clickBtnEllipse(){
    const a = getInputValue('ellipse-a');
    const b = getInputValue('ellipse-b');
    if(isNaN(a) || isNaN(b)){
        alert('Please Insert a Number');
        return;
    }
    const area = 3.14 * a * b;
    const areaTwoPoint = area.toFixed(2)
    setElement('ellipse-output', areaTwoPoint);
}







// common sortcut
function getInputValue(inputId){
    const inputBox = document.getElementById(inputId);
    const inputBoxValue = inputBox.value;
    const value = parseFloat(inputBoxValue);
    return value;
}
function setElement(elementId, area){
    const element = document.getElementById(elementId)
    element.innerText = area;
}