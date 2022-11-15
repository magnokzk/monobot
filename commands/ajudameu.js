const {userMention} = require('discord.js')

module.exports = {
    name: 'ajudameu',
    description: 'Pede ajuda pra algum desenvolvedor!',
    options: [
        {
            name: 'taggeduser',
            description: 'Quem precisa de ajuda?',
            type: 3,
            required: true
        },
        {
            name: 'item',
            description: 'Em que precisa de ajuda?',
            type: 3,
            required: true
        }
    ],
    run: async (interaction) => {
        const item = interaction.options.getString('item')
        const user = interaction.options.getString('taggeduser')

        await interaction.reply(`Ba o meu, ajuda ai! O ${user} precisa de ajuda com ${item}`);
    }
}