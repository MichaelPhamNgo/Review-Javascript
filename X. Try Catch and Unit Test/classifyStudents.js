export function classifyStudentsV1 (mark) {
    if(!(typeof mark === "number")) {
        return -1;
    }

    if(mark > 10 || mark < 0)
        return -1;
    
    if(mark > 8) {
        return "Excellent";
    }

    if(mark <= 8 && mark >= 7) {
        return "Good";
    }

    if(mark <= 6 && mark >= 4) {
        return "Not Good";
    }

    if(mark < 4) {
        return "Bad";
    }
}

export function classifyStudentsV2 (mark) {
    switch(mark) {
        case 0:
            return "Bad";
        case 1:
            return "Bad";
        case 2:
            return "Bad";
        case 3:
            return "Bad";
        case 4:
            return "Not Good";
        case 5:
            return "Not Good";
        case 6:
            return "Not Good";
        case 7:
            return "Good";
        case 8:
            return "Good";
        case 9:
            return "Excellent";
        case 10:
            return "Excellent";
        default:
            return -1;
    }
}