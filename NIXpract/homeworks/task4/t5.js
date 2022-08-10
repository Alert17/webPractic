const splitNames = (names) => {
    let reg =/(\w+), (\w+)/gi;
    console.log(names.replace(reg, '$2 $1'));
}

splitNames("Lennon, John\nMcCartney, Paul\nHarrison, George\nStar, Ringo");