const timeH = document.getElementById('Tsec')
    let tsec = 5

    timeH.innerHTML = `0.${tsec}`
    const countDown = function(){
        if( tsec <= 0){
        clearInterval(tsec)
        document.location.href = '/'

    }else{
        tsec--
        timeH.innerHTML = `0:${tsec}`
    }
        
    }
    setInterval(countDown,1000)