let ans = document.getElementById("ans");
        function display(n){
            ans.value += n;
        }
        function result(){
            try{
                ans.value = eval(ans.value);
            }
            catch(E){
               alert("Invalid calculation");
            }
        }
        function cut(){
            ans.value = null;
        }
        function delet(){
            ans.value = ans.value.slice(0, -1);
        }
        