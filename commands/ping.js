module.exports = {
    name: 'ping',
    description: 'Replies with Pong!',
    run: async (interaction) => {
        await interaction.reply('Pong!');
    }
}