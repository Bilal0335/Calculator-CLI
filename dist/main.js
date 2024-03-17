import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const log = console.log;
async function calAni() {
    let titleCal = chalkAnimation.rainbow("\n\t\tSimple Calculator CLI\t\t\n");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    titleCal.stop();
}
await calAni();
const answer = await inquirer.prompt([
    {
        message: chalk.black("Enter Your First Number:"),
        type: "number",
        name: "firsnum",
    },
    {
        message: chalk.black("Enter Your Second Number:"),
        type: "number",
        name: "secondnum",
    },
    {
        message: "Select one of the operator to perform action",
        type: "list",
        name: "operator",
        choices: [
            chalk.green("Addition"),
            chalk.yellow("Subtraction"),
            chalk.blue("Multiplication"),
            chalk.red("Division"),
        ],
    },
]);
//Condtional Statement
if (answer.operator === chalk.green("Addition")) {
    log(`${chalk.green(`Addition:`)} ${chalk.blue(`${answer.firsnum + answer.secondnum}`)}`);
}
else if (answer.operator === chalk.yellow("Subtraction")) {
    log(`${chalk.yellow(`Substraction:`)} ${chalk.blue(`${answer.firsnum - answer.secondnum}`)}`);
}
else if (answer.operator === chalk.blue("Multiplication")) {
    log(`${chalk.blueBright(`Multiplication:`)} ${chalk.blue(`${answer.firsnum * answer.secondnum}`)}`);
}
else if (answer.operator === chalk.red("Division")) {
    log(`${chalk.red(`Division:`)} ${chalk.blue(`${answer.firsnum / answer.secondnum}`)}`);
}
else {
    log(`${chalk.red(`Please Select Invalid Operator`)}`);
}
