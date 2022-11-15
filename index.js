const { REST, Routes, Client, GatewayIntentBits, userMention, Collection } = require('discord.js');
const { TOKEN, CLIENT_ID, GUILD_ID } = require('./config.json')

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const fs = require('fs')

client.commands = new Collection()
const commands = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
for(file of commands){
    const commandName = file.split('.')[0]
    const command = require(`./commands/${commandName}`)
    client.commands.set(commandName, command)
}

const rest = new REST({ version: '10' }).setToken(TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: client.commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

client.on('interactionCreate', async interaction => {
if (!interaction.isChatInputCommand()) return;

const command = client.commands.get(interaction.commandName)
if(!command) return
command.run(interaction)
});

client.login(TOKEN);