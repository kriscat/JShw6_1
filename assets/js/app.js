while (1) {
    let a = +prompt("Выберите задание (1-3)");
    switch (a) {
        case 1:
            {
                alert("Найти сумму серии чисел от 1 до n.");
                let n = +prompt("Задание 1: Введите ваше число, чтобы найти сумму серии чисел от 1 до вашего числа (n)");
                let summa = 0;
                for (let i = 1; i <= n; i++) {
                    summa += i;
                }
                alert(`Результат: ${summa}`);
                break;
            };

        case 2:
            {
                alert("Найти умножение чисел от n до m");
                let firstNum = +prompt("Задание 2: Введите первое число (n)");
                let secondNum = +prompt("Задание 2: Введите второе число (m)");
                let total = 1;
                let i = 1;
                for (i; i <= secondNum; i++) {
                    total *= i;
                }
                for (i; i <= firstNum; i++) {
                    total *= i;
                }
                alert(`Результат: ${total}`);
                break;
            };
        case 3:
            {
                alert("Найдите сумму серии Фибоначчи от 0 до n числа.");
                let n = +prompt("Введите число n");
                let numOne = 1;
                let numTwo = 1;
                let i = 3;
                for (i; i <= n; i++) {
                    let numSum = numOne + numTwo;
                    numOne = numTwo;
                    numTwo = numSum;

                }
                alert(`Результат: ${numTwo}`);
                break;
            };
        default:
            if (a == "" || a == null) {
                alert("Отмена");
            } else {
                alert("Выберите еще раз задание");
            }
            break;
    }
}
