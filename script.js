let currency = 0;

document.addEventListener('DOMContentLoaded', function () {
    const crops = document.querySelectorAll('.crop');

    crops.forEach(crop => {
        crop.addEventListener('dragstart', dragStart);
        crop.addEventListener('dragend', dragEnd);
    });

    

    const field = document.getElementById('field');
    field.addEventListener('drop', drop);
    field.addEventListener('dragover', allowDrop);
});

document.addEventListener('DOMContentLoaded', function () {
    const crops = document.querySelectorAll('.crop1');

    crops.forEach(crop => {
        crop.addEventListener('dragstart', dragStart);
        crop.addEventListener('dragend', dragEnd);
    });

    

    const field = document.getElementById('field');
    field.addEventListener('drop', drop);
    field.addEventListener('dragover', allowDrop);
});

document.addEventListener('DOMContentLoaded', function () {
    const crops = document.querySelectorAll('.crop2');

    crops.forEach(crop => {
        crop.addEventListener('dragstart', dragStart);
        crop.addEventListener('dragend', dragEnd);
    });

    

    const field = document.getElementById('field');
    field.addEventListener('drop', drop);
    field.addEventListener('dragover', allowDrop);
});

document.addEventListener('DOMContentLoaded', function () {
    const crops = document.querySelectorAll('.crop3');

    crops.forEach(crop => {
        crop.addEventListener('dragstart', dragStart);
        crop.addEventListener('dragend', dragEnd);
    });

    

    const field = document.getElementById('field');
    field.addEventListener('drop', drop);
    field.addEventListener('dragover', allowDrop);
});

document.addEventListener('DOMContentLoaded', function () {
    const crops = document.querySelectorAll('.crop4');

    crops.forEach(crop => {
        crop.addEventListener('dragstart', dragStart);
        crop.addEventListener('dragend', dragEnd);
    });

    

    const field = document.getElementById('field');
    field.addEventListener('drop', drop);
    field.addEventListener('dragover', allowDrop);
});

document.addEventListener('DOMContentLoaded', function () {
    const crops = document.querySelectorAll('.crop5');

    crops.forEach(crop => {
        crop.addEventListener('dragstart', dragStart);
        crop.addEventListener('dragend', dragEnd);
    });

    

    const field = document.getElementById('field');
    field.addEventListener('drop', drop);
    field.addEventListener('dragover', allowDrop);
});

document.addEventListener('DOMContentLoaded', function () {
    const crops = document.querySelectorAll('.crop6');

    crops.forEach(crop => {
        crop.addEventListener('dragstart', dragStart);
        crop.addEventListener('dragend', dragEnd);
    });

    

    const field = document.getElementById('field');
    field.addEventListener('drop', drop);
    field.addEventListener('dragover', allowDrop);
});

document.addEventListener('DOMContentLoaded', function () {
    const crops = document.querySelectorAll('.crop7');

    crops.forEach(crop => {
        crop.addEventListener('dragstart', dragStart);
        crop.addEventListener('dragend', dragEnd);
    });

    

    const field = document.getElementById('field');
    field.addEventListener('drop', drop);
    field.addEventListener('dragover', allowDrop);
});

document.addEventListener('DOMContentLoaded', function () {
    const crops = document.querySelectorAll('.crop8');

    crops.forEach(crop => {
        crop.addEventListener('dragstart', dragStart);
        crop.addEventListener('dragend', dragEnd);
    });

    

    const field = document.getElementById('field');
    field.addEventListener('drop', drop);
    field.addEventListener('dragover', allowDrop);
});

document.addEventListener('DOMContentLoaded', function () {
    const crops = document.querySelectorAll('.crop9');

    crops.forEach(crop => {
        crop.addEventListener('dragstart', dragStart);
        crop.addEventListener('dragend', dragEnd);
    });

    

    const field = document.getElementById('field');
    field.addEventListener('drop', drop);
    field.addEventListener('dragover', allowDrop);
});

document.addEventListener('DOMContentLoaded', function () {
    const crops = document.querySelectorAll('.crop10');

    crops.forEach(crop => {
        crop.addEventListener('dragstart', dragStart);
        crop.addEventListener('dragend', dragEnd);
    });

    

    const field = document.getElementById('field');
    field.addEventListener('drop', drop);
    field.addEventListener('dragover', allowDrop);
});

function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
}

function dragEnd() {
    // Do something after dragging ends (if needed)
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    const draggedCrop = document.getElementById(data);

    // Check if the crop is being dropped on the field
    if (event.target.id === 'field') {
        const newCrop = draggedCrop.cloneNode(true);
        newCrop.style.position = 'absolute';
        newCrop.style.left = `${event.clientX - field.getBoundingClientRect().left - newCrop.clientWidth / 2}px`;
        newCrop.style.top = `${event.clientY - field.getBoundingClientRect().top - newCrop.clientHeight / 2}px`;
        field.appendChild(newCrop);
    }
}



function sellCrops() {
    const cropsOnField = document.querySelectorAll('#field .crop');
    const moneySpan = document.getElementById('money');

    if (cropsOnField.length > 0) {
        const cropValue = 10; // You can set different values for each crop type
        const totalValue = cropsOnField.length * cropValue;

        currency += totalValue;
        moneySpan.textContent = currency;

        // Remove crops from the field
        cropsOnField.forEach(crop => crop.remove());
    }
}
function sellCrops() {
    const cropsOnField = document.querySelectorAll('#field .crop2');
    const moneySpan = document.getElementById('money');

    if (cropsOnField.length > 0) {
        const cropValue = 10; // You can set different values for each crop type
        const totalValue = cropsOnField.length * cropValue;

        currency += totalValue;
        moneySpan.textContent = currency;

        // Remove crops from the field
        cropsOnField.forEach(crop => crop.remove());
    }
}

function sellCrops() {
    const cropsOnField = document.querySelectorAll('#field .crop3');
    const moneySpan = document.getElementById('money');

    if (cropsOnField.length > 0) {
        const cropValue = 10; // You can set different values for each crop type
        const totalValue = cropsOnField.length * cropValue;

        currency += totalValue;
        moneySpan.textContent = currency;

        // Remove crops from the field
        cropsOnField.forEach(crop => crop.remove());
    }
}

function sellCrops() {
    const cropsOnField = document.querySelectorAll('#field .crop4');
    const moneySpan = document.getElementById('money');

    if (cropsOnField.length > 0) {
        const cropValue = 10; // You can set different values for each crop type
        const totalValue = cropsOnField.length * cropValue;

        currency += totalValue;
        moneySpan.textContent = currency;

        // Remove crops from the field
        cropsOnField.forEach(crop => crop.remove());
    }
}

function sellCrops() {
    const cropsOnField = document.querySelectorAll('#field .crop5');
    const moneySpan = document.getElementById('money');

    if (cropsOnField.length > 0) {
        const cropValue = 10; // You can set different values for each crop type
        const totalValue = cropsOnField.length * cropValue;

        currency += totalValue;
        moneySpan.textContent = currency;

        // Remove crops from the field
        cropsOnField.forEach(crop => crop.remove());
    }
}

function sellCrops() {
    const cropsOnField = document.querySelectorAll('#field .crop6');
    const moneySpan = document.getElementById('money');

    if (cropsOnField.length > 0) {
        const cropValue = 10; // You can set different values for each crop type
        const totalValue = cropsOnField.length * cropValue;

        currency += totalValue;
        moneySpan.textContent = currency;

        // Remove crops from the field
        cropsOnField.forEach(crop => crop.remove());
    }
}

function sellCrops() {
    const cropsOnField = document.querySelectorAll('#field .crop7');
    const moneySpan = document.getElementById('money');

    if (cropsOnField.length > 0) {
        const cropValue = 10; // You can set different values for each crop type
        const totalValue = cropsOnField.length * cropValue;

        currency += totalValue;
        moneySpan.textContent = currency;

        // Remove crops from the field
        cropsOnField.forEach(crop => crop.remove());
    }
}

function sellCrops() {
    const cropsOnField = document.querySelectorAll('#field .crop8');
    const moneySpan = document.getElementById('money');

    if (cropsOnField.length > 0) {
        const cropValue = 10; // You can set different values for each crop type
        const totalValue = cropsOnField.length * cropValue;

        currency += totalValue;
        moneySpan.textContent = currency;

        // Remove crops from the field
        cropsOnField.forEach(crop => crop.remove());
    }
}

function sellCrops() {
    const cropsOnField = document.querySelectorAll('#field .crop9');
    const moneySpan = document.getElementById('money');

    if (cropsOnField.length > 0) {
        const cropValue = 10; // You can set different values for each crop type
        const totalValue = cropsOnField.length * cropValue;

        currency += totalValue;
        moneySpan.textContent = currency;

        // Remove crops from the field
        cropsOnField.forEach(crop => crop.remove());
    }
}

function sellCrops() {
    const cropsOnField = document.querySelectorAll('#field .crop10');
    const moneySpan = document.getElementById('money');

    if (cropsOnField.length > 0) {
        const cropValue = 10; // You can set different values for each crop type
        const totalValue = cropsOnField.length * cropValue;

        currency += totalValue;
        moneySpan.textContent = currency;

        // Remove crops from the field
        cropsOnField.forEach(crop => crop.remove());
    }
}
