var arr = [1,2,3,4,1,2,5];

function arrExp1(array){
    for(var i=0; i < array.length; i++){
        console.log(array.indexOf(array[i]))
        if(array.indexOf(array[i]) !== i){
            array.splice(i, 1);
            i--;
        }
    }
    console.log(array)
    return array;
}

//利用数组中的filter方法
function arrFilter(array){
    var target = array.filter(function(item,index,self){
        return self.indexOf(item) === index
    })
    console.log(target)
    return target
}

arrFilter(arr);