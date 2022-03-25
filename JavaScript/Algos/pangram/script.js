function processData(input) {
    //Enter your code here
    var lowerInput = input.toLowerCase();
    var letterArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    for(var i = 0, l = letterArray.length; i < l; i++) {
        if(lowerInput.toLowerCase().indexOf(letterArray[i]) == -1) {
            console.log('not pangram');
            return false;
        }
    }
    console.log('pangram');
} 