function bruteForceAllAntivirus() {
    for(var i = 0; i < directionForAntivirus.length; i++) {
        if(directionForAntivirus[i].x == 0 && directionForAntivirus[i].y == -64 && checkThatBlockEmpty(antivirus[i].x, antivirus[i].y - 64) == true) {
            antivirus[i].y -= 64;
            //antivirus[i].y += 64;
        }/* else if(directionForAntivirus[i].x == 64 && directionForAntivirus[i].y == 0 && checkThatBlockEmpty(antivirus[i].x + 64, antivirus[i].y) == false) {
            console.log("x: " + directionForAntivirus[i].x);
            directionForAntivirus.x = 0;
            console.log("y: " + directionForAntivirus[i].y);
            directionForAntivirus.y = 64;
        } */
        
    }
}