const strPad = (input, fullLen, fillStr, fillType) => {
    switch (fillType) {
        case 'FILL_RIGHT': {
            let field = '';
            let index = 0;
            for (let i = 0; i < fullLen - input.length; i++) {
                if (!fillStr[index])
                    index = 0;

                field += fillStr[index];
                index += 1;
            }
            return input + field;
        }
        case 'FILL_LEFT': {
            let field = '';
            let index = 0;
            for (let i = 0; i < fullLen - input.length; i++) {
                if (!fillStr[index])
                    index = 0;

                field += fillStr[index];
                index += 1;
            }
            return field + input;
        }
        case 'FILL_BOTH': {
            let field = '';
            let index = 0;
            const mean = (fullLen - input.length) / 2;
            for (let i = 0; i < fullLen - input.length; i++) {

                if (mean === i)
                    field += input;

                if (!fillStr[index])
                    index = 0;

                field += fillStr[index];
                index += 1;
            }
            return field;
        }
        default:
            return "err";
    }
};

console.log(strPad('star', 8, '*', 'FILL_BOTH'));