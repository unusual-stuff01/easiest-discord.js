__This package is a Discord.js wrapper that will make everything easier to you__


Before starting. I really **recommend** you all to use asynchronious thingy on every command you make. So it's more probably that no errors will be shown up when using one of the functions.

Functions and **Usage** for now:
(the message field is the name of the event you will use, we used 'message' as example because it's the most common one, and client, it's the name of your discord client (not bot name..., the **const __client__ = new Discord.Client()**), it's normally named as 'client' itself) **No functions are required to be awaited now, only if you want to make them asynchronious by yourself**
- *easy.giveRole('memberid','roleid','guildid', client, message)*

- *easy.removeRole('memberid', 'roleid', 'guildid', client, message)*

- *easy.channelSendMessage('channelid', 'messageid', client, message)*

- *easy.authorAvatarURL(client, message)*

- *easy.guildRoles('guildid', 'separator', 'mention/ids/names', client, message)*

- *easy.banUser('userid', 'reason', 'guildid', 'days (message delete)', client, message)*

- *easy.banMember('userid', 'reason', 'guildid', 'days (message delete)', client, message)*

- *easy.userAvatar('userid', 'size', dynamic <= true/false)* **(since userAvatar returns a promise because of fetching the provided user id. You will need to await this one.)**

- *easy.editMessage(content, 'messageid', 'channelid', 'guildid', client, message)*
`Tip: banMember will only take as valid users the users who are in the provided guild. banUser allows users that are and are not on the guild provided.`

**__Quick Example__**

```js
const easy = require('easiest-discord.js')

client.on('message', async message => {
    const args = message.content.split(" ")
    if(message.content.startsWith('!sendmessage')) {
easy.channelSendMessage(args.slice(1)[0], args.slice(2).join(" "), client, message) //will send the message to the channel with provided id in message, and its content will be the message slice (2)
    }
    if(message.content.startsWith('!myavatar')) {
        return message.channel.send(`Here is your avatar!: ${await easy.userAvatar(message.author.id, 2024, true, client, message)}`)
    }
})
```
**IMPORTANT:** If for some reason the response of one of the functions is [Object promise] it's because you need to await the function to get the data. example:
**${await easy.userAvatar(message.author.id, 2024, true, client, message)}** - As you see, it's required to have await then it will work as expected (only in asynchronious functions, client.on's etc...)

__Feel free to join our discord support server__ Click [here](https://discord.gg/2JSdJMMFwe)...



**Changelog** (0.2.0)
- `+` Added **editMessage(content, messageid, channelid, guildid, client, event)** - Lets you edit a client's (bot) message by providing some options
- `+` Improved source code of package

(0.2.2)
- `+` Added **channelsCount(guildid, client, event)** - Gives you the amount of channels that given guild ID has
- `+` Added **rolesCount(guildid, client, event)** - Gives you the amount of roles that given guild ID has
- `+` Added support server

(0.2.4)
- `+` Added **highestMemberRolePosition(userid, guildid, client, event)** - Gives you the position of the highest role of the given user id in given guild id
- `+` Added **highestGuildRolePosition(guildid, client, event)** - Gives you the position of the highest role in given guild id
- `+` Added **highestGuildRoleID(guildid, client, event)** - Gives you the role ID of the given user id in the given guild id
- `+` Added **highestMemberRoleID(userid, guildid, client, event)** - Gives you the highest role id of the given user id in given guild id

(0.2.6)
- `-` Fixed some typos in the README

(0.2.7)
- `+` Added **kickMember(memberid, reason, guildid, client, event)** - Lets you kick a member from specific guild ID. Reason is always optional. You can just leave it blank.

(0.2.8)
- `+` Fixed some things

(0.2.9)
- `+` Fixed **kickMember()** setting [Object object] as reason

(0.3.0)
- `+` Fixed some README typos in Quick Example

(0.3.1)
- `+` Added an important tip in README


(0.3.2)
- `+` Normal data functions like highestMemberRolePosition dont require to be awaited anymore (it's still there for functions like kickMember, banMember etc..)

(0.3.3)
- `+` Async disappeared for every function :) (You can obviously still await these if you want them async)

(0.3.4)
- `+` Added **emojisList(guildid, separator, option, client, event)** - Returns a list of emojis in the server with provided ID. options are: names, emojis, ids. If an invalid option is provided it will take the emojis option.

(0.3.5)
- `+` Added **addReaction(reaction, messageid, channelid, guildid, client, event)** - Reacts to a message with the given message id **(Default emojis and emoji ID's)**. IMPORTANT: **reaction** must be an string. addReaction(\`emojiID/defaultemoji\`, etc..) will work. but addReaction(emojiID/defaultemoji, etc..) won't

(0.3.6)
- `+` Added **findUser(query, client, event)** - Returns the user ID of the user who matched the query. Query can be an user tag, an user ID or an user name
- `+` Added **findMember(query, guildid, client, event)** - The same as findUser, but this one requires a guild ID since it finds a  `member`
- `+` Added **fetchUser(userid, client, event)** - Fetches an user globally. *Yes. it fetches it. so you can use a .then next to it to get data or execute things* **await required**
- `+` Added **fetchMember(userid, guildid, client, event)** - Fetches a member from provided guild ID. *The same as above, but this one will only fetch members on provided guild ID*

(0.3.7 - 0.3.8)
- `+` Added **randomText(['text1','text2','text3','etc...'])** - Gives you a random text from provided ones into function

(0.3.9)
- `+` Added **ids** option to **emojisList()** - It's self explanatory. Gives you emojis id

(0.4.4)
- `-` Now every error will be shown up in console
- `+` Cache is not almost used now
- `+` Improved a lot of stuff

(0.4.5 - 0.4.6)
- `+` Fixed a bug with **hasPermission()**
- `+` Added another tip to the READMED

(0.4.7 - 0.4.8)
- `+` Fixed a bug with **findUser()**

(0.5.0)
- `+` Added **changeNickname(userid, newnickname, guildid, client, event)** - Changes the nickname of provided user ID in provided guild ID (the user must obviously be on the guild you provided)
- `+` Added **guildLeave(guildid, client, event)** - Makes the bot leave the server with provided guild ID
- `+` Added **createRole(rolename, rolecolor, guildid, hoisting, mentionable, permissions, position, reason, client, event)** - Creates a role in the guild with provided guild ID, in permissions field it must be with this format: `['PERMISSION1', 'PERMISSIONS2', 'PERMISSION3', 'ETC...']`, hoisting field and mentionable field are booleans (true, false) (NECESSARY). You can see the full list of permissions to use in: **https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS**

(0.5.2)
- `+` Added **memberExists(userid, guildid, client, event)** - This function returns either true or false depending if the user with the id provided (THAT'S IN THE GUILD WITH THE ID PROVIDED) is valid or no
- `+` Added **userExists(userid, client, event)** - This function returns either true or false depending if the user with id provided exists/has a valid account created in discord
- `+` Added **isValidMessage(messageid, channelid, guildid, client, event)** - This function returns either true or false depending if the message with given id in channel with given id exists

(0.5.7 - 0.5.8)
- `+` Added **usersWithRole(roleid, guildid, separator, option, client, event)** - Returns a list of users with the role with provided role ID. The options are 'names', 'ids', 'mentions'. If an invalid option is provided it will be set to mentions
- `+` Added **rolePosition(roleid, guildid, client, event)** - Returns the position of the role with provided ID in the guild with provided guild ID
- `+` Added **channelPosition(channelid, guildid, client, event)** - Returns the position of the channel with given ID in the guild with given ID
- `+` Added **roleExists(roleid, guildid, client, event)** - Returns either true or false depending if there is a role with given ID in guild with provided ID
- `+` Added **channelExists(channelid, guildid, client, event)** - Returns either true or false depending if there is a channel with given ID in guild with provided ID
- `+` Added **findChannel(query, guildid, client, event)** - Finds a channel in the guild with provided ID. Just the same as other functions. It will return undefined if no channels are found. The ways it can find is: giving the name of the channel, giving the id of the channel, giving the start of the name of a channel
- `+` Added **findRole(query, guildid, client, event)** - Just the same as findChannel but this is with a role
- `+` Added **channelNSFW(channelid, guildid, client, event)** - Returns either true or false depending if the channel with provided ID is marked as NSFW or no
- `+` Added **createChannel(channelname, guildid, topic, nsfw, permissions, permissions_id, position, cooldown, reason, client, event)** - Cooldown is put as seconds, If you want to not use one of the options just leave it blank: '', '' etc.. Permissions must be put with this format: ['PERMISSION1','PERMISSION2','ETC...'], permissions_id is the ID which this will affect to. it can be a role id/member id etc.
- `+` Added github repo
