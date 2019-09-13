// Your code here
// map-like
function mapToNegativize(srcArr) {
    let negArr = [];
    for (let i = 0; i < srcArr.length; i++ ) {
      negArr.push(-1 * srcArr[i])
    };
    return negArr;
};

function mapToNoChange(sourceArray) {
    return sourceArray;
};

function mapToDouble(srcArr) {
    let doubleArr = [];
    for (let i = 0; i < srcArr.length; i++ ) {
      doubleArr.push(2 * srcArr[i])
    };
    return doubleArr;
};

function mapToSquare(srcArr) {
    let sqrArr = [];
    for (let i = 0; i < srcArr.length; i++ ) {
      sqrArr.push(srcArr[i]**2);
    };
    return sqrArr;
};

function reduceToTotal(sourceArray, startingPoint = 0) {
    let total = startingPoint;
    for (let i = 0; i < sourceArray.length; i++ ) {
        total += sourceArray[i];
      };
    return total;
}

function reduceToAllTrue(sourceArray) {
    let allTrue = true;
    for (let i = 0; i < sourceArray.length; i++ ) {
        if (!!sourceArray[i] === false) {
            allTrue = false;
        }; 
    };
    return allTrue;
};

function reduceToAnyTrue(sourceArray) {
    let allTrue = false;
    for (let i = 0; i < sourceArray.length; i++ ) {
        if (!!sourceArray[i] === true) {
            allTrue = true;
        }; 
    };
    return allTrue;
};
// Remember, all reduce methods return a value.