const regDate = (date) => {
    let reg = /\d{1,2}-\d{1,2}-\d{4}$/gm;
    reg.test(date);
}

regDate("2-12-1979");