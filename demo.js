var slices = [];
for(var i = 0; i < 8; i++){
    (function (k){
        var c = "even";
        if(k%2==1){
            c = "odd";
        };
        slices[k] = {
            trigger:function(){console.log("slice " + k + " triggered");},
            "class":c
        };
    })(i);
}


contextPie(slices,{radius:70,innerRadius:20});
