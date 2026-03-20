/**
    The important point to remember here is that two asteroids can only collide if ast[i-1] > 0 && ast[i] < 0
 */
var asteroidCollision = function(asteroids) {
    let st = new Array()

    for(let i = 0;i<asteroids.length;i++){
        if(st.length == 0){
            st.push(asteroids[i])
        }
        else{
            if( 
                (st[st.length - 1] < 0 && asteroids[i] <0 ) 
                    || 
                (st[st.length - 1] > 0 && asteroids[i]  > 0 )
            ){
                st.push(asteroids[i])
            }
            else
            {
                while(
                    st.length > 0 && 
                    st[st.length - 1] > 0 && 
                    asteroids[i] < 0 &&
                    Math.abs(st[st.length - 1]) < Math.abs(asteroids[i]) )
                {
                    st.pop()
                }

                if(
                    st[st.length - 1] > 0 && 
                    asteroids[i] < 0 &&
                    Math.abs(st[st.length - 1]) == Math.abs(asteroids[i]) ){
                    st.pop()
                }
                else{
                    if(
                        (st.length == 0) ||  
                        (st[st.length - 1] < 0 && asteroids[i] <0 ) 
                            || 
                        (st[st.length - 1] < 0 && asteroids[i]  > 0 )
                    ){
                        st.push(asteroids[i])
                    }
                }
            }
        }
    }
    return st
};