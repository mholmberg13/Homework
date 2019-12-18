// 1. parameters are used when defining something, arguments are used when calling something.
// 2. return returns something to the code, console.log logs something to the console.

const checkPalindrome = word => {
    let splitWord = word.split();
    let wordReversed = splitWord.reverse();
    let wordJoined = wordReversed.join();
    console.log(word === wordJoined);
};

checkPalindrome("dog");