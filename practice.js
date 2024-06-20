const data = [4,-5,3,6,8]
let value = 0
function squears(arr, length){
    if(length){
        if(arr[length-1] > 0){
            squear = arr[length-1] * arr[length-1]
            value += squear
        }        
        length = length-1;
        squears(data, length)
    }
}

squears(data, data.length)