/* function distance(str){
    var face = 'east';
    var x = 0;
    var y = 0;
    //let str ='F1,L1,B1,R2'
    let commands = str.toString().split(",")
    for(let command of commands){
        //console.log(command[0]);
        let step = Number(command[1])
        switch(command[0]){
            case 'F':
                if(face == 'west')
                    x -= step;
                if(face == 'east')
                    x += step;
                if(face == 'north')
                    y += step;
                if(face == 'south')
                    y -= step;
                break;
            case 'L':
                if(face == 'west')
                    face = 'south';
                if(face == 'east')
                    face = 'north';
                if(face == 'north')
                    face = 'west';
                if(face == 'south')
                    face = 'east'
                break;
            case 'B':
                if(face == 'west')
                    x += step;
                if(face == 'east')
                    x -= step;
                if(face == 'north')
                    y -= step;
                if(face == 'south')
                    y += step;
                break;
            case 'R':
                if(face == 'west')
                    face = 'north';
                if(face == 'east')
                    face = 'south';
                if(face == 'north')
                    face = 'east';
                if(face == 'south')
                    face = 'west'
                break;
            default:
                console.log('invalid command!')
        }
    }
    return Math.abs(x) + Math.abs(y);
}
global.distance = distance;
*/