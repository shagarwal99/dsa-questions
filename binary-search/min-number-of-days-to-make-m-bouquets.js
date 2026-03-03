var getBouquets = function(flowers,k, day){
    let res = 0
    let count = 0
    for(let i = 0;i<flowers.length;i++){
        if(flowers[i] <= day){
            count++
        }
        else{
            count = 0
        }

        if(count == k){
            res++
            count = 0
        }
    }
    return res
}

var minDays = function(bloomDay, m, k) {
    let l = 1
    let r = Math.max(...bloomDay)
    let ans = -1

    while(l <=r){
        let day = l + Math.floor((r-l)/2)
        let bouquets = getBouquets(bloomDay,k,day)
        if(bouquets >= m)
        {
            ans = day
            r = day-1
        }
        else{
            l = day+1
        }
    }
    return ans
};