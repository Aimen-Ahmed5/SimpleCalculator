

// This function will clear all the values
function clearScreen() {
    document.getElementById("result").value = " ";
}


var value = 0;
// This function will display value
function display(value) {
    document.getElementById("result").value += value;
}





// This function will do calculations and return result
function calc() {

    var a = calculate(document.getElementById("result").value);  /* eval will evaluate the expressions  */
    //-  var a = eval(document.getElementById("result").value); 
    document.getElementById("result").value = a;
}


function calca(value) {
    let x = value.charAt(0);
    let y = value.charAt(value.Length - 1);
    let o = value.charAt(value.Length - 2);
    let i = 0;
    // var x = document.getElementById("result").value;
    x = value[i];
    y = value[i + 2];
    o = value[i + 1];



    switch (o) {
                    
        case '+':
            return parseFloat(x) + parseFloat(y);
            break;
            
        case '-':
            return x - y;
            break;

        case '*':
            return x * y;
            break;

        case '/':
            return x / y;
            break;

        default:
            return ("Error");
    }

}


//let cal_1 = calc( , ,'-');
//let cal_1 = calc( , ,'*');
//let cal_1 = calc( , ,'/');





function calculate(input){

    var f = { add : '+' , sub : '-' , div : '/' , mlt : '*' };
     
    //  precedence
    f.ooo = [[ [f.mlt] , [f.div] ],
             [ [f.add] , [f.sub] ]];
 
    input = input.replace(/[^0-9%^*\/()\-+.]/g,'');      //if wrong entry then  " "    
  //operator check
    var output;
    for(var i=0, n=f.ooo.length; i<n; i++ ){
        
       // Regular Expression
       var re = new RegExp('(\\d+\\.?\\d*)([\\'+f.ooo[i].join('\\')+'])(\\d+\\.?\\d*)');
       re.lastIndex = 0;                                    
         
      
       while( re.test(input) ){
    
          output = calc_internal(RegExp.$1,RegExp.$2,RegExp.$3);
          if (isNaN(output) || !isFinite(output)) return output; 
          input  = input.replace(re,output);
       }
    }
 
    return output;
 
    function calc_internal(a,op,b){
       a=a*1; b=b*1;
       switch(op){
          case f.add: return a+b; break;
          case f.sub: return a-b; break;
          case f.div: return a/b; break;
          case f.mlt: return a*b; break;
          default: null;
       }
    }
 }






