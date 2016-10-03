function bounce(progress) {
    for(var a = 0, b = 1, result; 1; a += b, b /= 2) {
        if (progress >= (7 - 4 * a) / 11) {
            return -Math.pow((11 - 6 * a - 11 * progress) / 4, 2) + Math.pow(b, 2);
        }
    }
}

function makeEaseOut(delta) { 
    return function(progress) {
        return 1 - delta(1 - progress)
    }
}