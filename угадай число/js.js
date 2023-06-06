let main = document.querySelector('#main');
 let board = document.querySelector('#board');
 start(2)

 function getRandomInt(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min
 }
 function range(count) {
     let arr = [];
     for (let i = 1; i <= count; i++) {
         arr.push(i)
     }
     return arr
 }
 function func(arr) {
     let result = [];
     let length = arr.length;
     for (let i = 0; i < length; i++) {
         let random = getRandomInt(0, arr.length - 1)
         let elem = arr.splice(random, 1)[0]
         result.push(elem)
     }
     return result;
 }
 function func2(arr, n) {
 let result = [];
 let count = Math.ceil(arr.length / n);

 for (let i = 0; i < count; i++) {
     let elems = arr.splice(0, n)
     result.push(elems)
 }
 return result
 }
 function prepare(size) {
     let arr = [];

     arr = range(size * size);
     arr = func(arr);
     arr = func2(arr, size)

     return arr
 }
 function build(board, arr) {
     board.textContent = '';
     let cells = [];

     for (let sub of arr) {
         let tr = document.createElement('tr');

         for (let num of sub) {
             let td = document.createElement('td');
             td.textContent = num;
             tr.appendChild(td)

             cells.push(td)
         }

         board.appendChild(tr)
     }
     return cells;
 }
 function activate(cells, size) {
     let last = size * size;
     console.log(last)
     let counter = 1;
     for (let cell of cells) {
         cell.addEventListener('click', function() {
             if (this.textContent == counter) {
                 this.classList.add('active')
                 if (counter == last) {
                     start(size + 1)
                 }
                 counter++;
             }
         })
     }
 }
 function start(size) {
     activate(build(board, prepare(size)), size)
 } 
