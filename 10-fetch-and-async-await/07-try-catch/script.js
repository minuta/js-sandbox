

// basic using of try/catch
// try {
//     console.log(data);
// } catch (e) {
//     console.log('ERROR : ', e);
// }


// throwing an error
function double (x) {
    if (isNaN(x)) {
        throw new Error ('x is NaN');
    }
    return x * 2;
}

try {
    console.log(double('foo'));
} catch (error) {
    console.log('ERROR: ', error);
}

console.log('done');