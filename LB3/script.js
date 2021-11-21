function onSubmitButtonClick(){
    var minRangeValue = document.getElementById("min-range").value;
    var maxRangeValue = document.getElementById("max-range").value;

    if (minRangeValue == maxRangeValue) {
        alert("Введите разные значения");
        var table = document.getElementsByClassName("table-wrapper");
        for (let i = 0; i < table.length; i++) {
            table[i].style.display = "none";
        }

        return;
    }

    if (minRangeValue > maxRangeValue) {
        alert("Минимальное значение должно быть меньше максимального");
        return;
    }

    document.getElementById("min-range-value").innerText = minRangeValue;
    document.getElementById("max-range-value").innerText = maxRangeValue;

    var table = document.getElementsByClassName("table-wrapper");

    for (let i = 0; i < table.length; i++) {
        table[i].style.display = "block";
    }

    createTable(10, 10, minRangeValue, maxRangeValue);
}

function createTable(rows, cols, min, max){
    var tableWrapper = document.getElementsByClassName("table-wrapper");
    var table = document.createElement('table');
    table.setAttribute('class', 'chess-table');
    table.style.width = '50%';
    table.setAttribute('border', '1');
    var tableBody = document.createElement('tbody');
    for (let i = 0; i < rows; i++) {
        var tableRow = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            var tableData = document.createElement('td');
            tableData.innerText = getRandomIntInclusive(parseInt(min), parseInt(max));
            tableData.setAttribute('class', 'table-cells');
            tableRow.appendChild(tableData);     
        }   
        
        tableBody.appendChild(tableRow);
    }

    table.appendChild(tableBody);
    tableWrapper[0].appendChild(table);
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
