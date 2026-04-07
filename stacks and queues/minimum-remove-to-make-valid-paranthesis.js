var minRemoveToMakeValid = function(s) {
    let st = new Array()
    let arr = s.split('')
    for(let i = 0;i<arr.length;i++)
    {
        if(arr[i] == '('){
            st.push(i)
        }
        else if(arr[i] == ')')
        {
            if(st.length !== 0){
                st.pop()
            }
            else {
                arr[i] = ''
            }
        }
    }

    while(st.length > 0)
    {
        let ind = st.pop()
        arr[ind] = ''
    }
    return arr.join('')
};