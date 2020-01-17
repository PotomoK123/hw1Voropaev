function init(){
    let cols = prompt("Введите количество столбцов.");
    let rows = prompt("Введите количество строк.");
    let container = document.querySelector("#matrix__container");
    let matrix = document.createElement("table");
    let counter = 0;
    matrix.className = "matrix";
    container.appendChild(matrix);
    for(let i =0;i<rows&&counter<(cols*rows);i++){
        let row = document.createElement("tr");
        matrix.appendChild(row);
        row.id = "matrix__row"+i;
        for(let j = 0;j<cols;j++){
            let col = document.createElement("td");
            row.appendChild(col);
            col.id = "matrix__row"+i+"__col"+j;
        }
    }
    for(let i = 0;i<rows;i++){
        let colsTmp = (cols-i)>=0?cols-i:0;

        for(let j = 0+i;j<cols-i&&counter<(cols*rows);j++){
            let data = document.getElementById("matrix__row"+i+"__col"+j);
            data.innerText = counter;
            counter++;
        }
        for(let x = i+1;x<rows-i&&counter<(cols*rows);x++){
            let tmp = +cols-i-1;
            let data = document.getElementById("matrix__row"+x+"__col"+tmp);
            data.innerText = counter;
            counter++;
        }
        
        for(let j = cols-i-2;j>=i&&counter<(cols*rows);j--){
            let data = document.getElementById("matrix__row"+(rows-i-1)+"__col"+j);
            data.innerText = counter;
            counter++;
        }
        for(let x = rows -i-2;x>i&&counter<(cols*rows);x--){
            let data = document.getElementById("matrix__row"+x+"__col"+i);
            data.innerText = counter;
            counter++;
        }
    }
}
init();