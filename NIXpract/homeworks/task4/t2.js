const fountStr = (str) => {
    let re = /\S+хром\S+/;
    let result = '';
    let index = str.search(re);
    for (let i = index; str[i] !== ' ' && str[i]; i++)
        result += str[i];

    console.log(result);
}

fountStr("Ми знаємо, що монохромний колір – це градації сірого");