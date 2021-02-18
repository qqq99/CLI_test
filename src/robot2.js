function distance(str){
    /******* [E,S,W,N ] */
    let dx = [1,0,-1,0];
    let dy = [0,-1,0,1];
    //default start: facing East
    var x = 0 , y = 0, face = 0;
    //let str ='F1,L1,B1,R2'
    let commands = str.toString().split(",")

    for(let command of commands){
        let step = Number(command[1]);
        let direction = command[0].toUpperCase();
        if(direction == 'L')
            face = (face + 3) % 4;
        if(direction == 'R')
            face = (face + 1) % 4;
        if(direction == 'F'){
            x += step * dx[face];
            y += step * dy[face];
        }
        if(direction == 'B'){
            x -= step * dx[face];
            y -= step * dy[face];
        }
    }
    return Math.abs(x) + Math.abs(y);
}
    global.distance = distance;