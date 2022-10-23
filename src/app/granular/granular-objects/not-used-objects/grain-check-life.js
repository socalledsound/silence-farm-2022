

    checkLife(currentTime){
        const timeElapsed = currentTime - this.timeBorn;
        if(timeElapsed > this.lifespan){
            // console.log('should return true');
            this.alive = false;
        }  
    }