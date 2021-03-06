const colors = require('colors');

console.log(`С новым годом`.blue.bold);
const { 
    TOKEN,
    CHAT_SPAM,
    GROUP_ID,
    BTN_TEXT,
    BTN_TEXT2,
    BTN_TEXT3,
    HELLO_TEXT,
    TIME
} = require("./config");

console.log(`Я всем желаю >> всего наилучшего`.yellow.bold);

const { VK, Keyboard } = require("vk-io");
const vk = new VK({
    token: TOKEN,
    apiMode: "parallel",
    pollingGroupId: GROUP_ID,
    apiVersion: 5.101
});

vk.updates.use(async (ctx, next) => {
    if (ctx.is("message") && ctx.isOutbox) {
        return;
    }

    if (ctx.isChat) {
    	console.log(`2020`.green.bold);
        setInterval(() => {
            ctx.send({
                message: randomFromArray(CHAT_SPAM),
                keyboard: Keyboard.keyboard(
                    Array(10).fill().map(() => 
                       Array(4).fill().map(() => button(randomFromArray(BTN_TEXT)))
                    )
                )
            });
        }, TIME);
    }

    return ctx.send(HELLO_TEXT);
});

vk.updates.startPolling()
.then(() => console.log(` Лучщий праздник>> Новый год`.green.bold));
console.log(`Запуск одной коммандой cd anton/anton/anton/anton/anton/ && bash install.sh`.red.bold);

const randomInt = (x, y) => y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x);
const randomFromArray = (array) => array[randomInt(array.length - 1)];
const button = (label) => {
    return Keyboard.textButton({
        label, color: Keyboard[randomFromArray(["POSITIVE_COLOR", "DEFAULT_COLOR", "PRIMARY_COLOR", "NEGATIVE_COLOR"])]
    });
}
process.on("uncaughtException", e => {
  console.log(e);
});

process.on("unhandledRejection", e => {
  console.log(e);
});
