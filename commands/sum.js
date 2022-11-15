const {userMention} = require('discord.js')

module.exports = {
    name: 'sum',
    description: 'Sum some values!',
    options: [
        {
            name: 'val1',
            description: 'Primeiro valor a ser somado',
            type: 3,
            required: true
        },
        {
            name: 'val2',
            description: 'Segundo valor a ser somado',
            type: 3,
            required: true
        }
    ],
    run: async (interaction) => {
        const val1 = +(interaction.options.getString('val1'))
        const val2 = +(interaction.options.getString('val2'))

        const sum = val1 + val2
        await interaction.reply(`O usuário ${userMention(interaction.user.id)} somou ${val1}+${val2} que resultou em ${sum}`)
    }
}