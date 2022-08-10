const isPowOfTwo = (num) => {
    return !(num & (num - 1));
}

isPowOfTwo(17);