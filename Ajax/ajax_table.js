$(document).ready(function(){
    $(".click").click(function(e) {
        e.preventDefault();
    $.ajax({
         url:"https://jsonplaceholder.typicode.com/posts", success: function(data){
          let ar=data;
    function createTable() {

        var table = document.createElement('table');
        table.setAttribute('id', 'tab');
        table.border=3;
        var header = Object.keys(ar[0]);
        var tr = document.createElement('tr');
        let head=header.map((a1)=>{
            var th = document.createElement('th');
            th.innerHTML = a1;
            tr.appendChild(th);
        })
        table.appendChild(tr);
        //for (var i = 0; i < ar.length; i++)
        let arr=ar.map((arr1)=> {
    
            var tr = document.createElement('tr');
            //for (var j = 0; j < header.length; j++) 
            var arr2=header.map((a3)=>{
                var td = document.createElement('td');
                td.innerHTML = arr1[a3];
                td.setAttribute('class', 'tableClass')
                tr.appendChild(td);
            })
            table.appendChild(tr);
        })
        document.body.appendChild(table);
        addEventsToColumns();
    }
    createTable();
    
    
    
    function addEventsToColumns() {
        var header = Object.keys(ar[0]);
        //for (var i = 0; i < header.length; i++)
        let head=head.map((a4)=> {
            document.getElementById(a4).addEventListener('click', function (event) {
               console.log(event);
                sortTable(event.target.innerText)
            })
        })
    }
    
    let flag = true;
    function sortTable(param) {
        ar.sort(compare);
        function compare(a, b) {
            if (a[param] > b[param] && flag)
                return 1;
            else
                return -1;
        }
        flag = !flag;
        createTable();
    }
        }
    });
    });
});
    
    