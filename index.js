//useful functions
async function memberExists(userid, guildid, client, event) {
  if(!client) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      return console.error(err)
      }
    }
  else if(!event) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      console.error(err)
    }
      }
  else if(!client.guilds.cache.get(guildid)) {
try {
    throw new Error('An invalid guild ID was provided inside \`memberExists()\`')
} catch(err) {
  return console.error(err)
}
  }
  else if(!await client.guilds.cache.get(guildid).members.fetch(userid).catch(err => {})) {
    return false
  }
  else {
    return true
  }
}
async function userExists(userid, client, event) {
  if(!client) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
} catch(err) {
  return console.error(err)
}
      }
  else if(!event) {
try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
} catch(err) {
  return console.error(err)
}
      }
  else if(!await client.users.fetch(userid).catch(err => {})) {
    return false
  }
  else {
    return true
  }
}
async function isValidMessage(messageid, channelid, guildid, client, event) {
  if(!client) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
} catch(err) {
  return console.error(err)
}
      }
  else if(!event) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      return console.error(err)
    }
      }
  else if(!client.guilds.cache.get(guildid)) {
try {
    throw new Error(`No valid guild ID was provided inside \`isValidMessage()\``)
} catch(err) {
  return console.error(err)
}
  }
  else if(!client.guilds.cache.get(guildid).channels.cache.get(channelid)) {
try {
    throw new console.error(`No valid channel ID was provided inside \`isValidMessage()\``)
} catch(err) {
  return console.error(err)
}
  }
  else if(!await client.guilds.cache.get(guildid).channels.cache.get(channelid).messages.fetch(messageid).catch(err => {})) {
    return false
  }
  else {
    return true
  }
}


//useful functions
async function channelSendMessage(channelid, content, client, event) {
  if(!client) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      return console.error(err)
      }
    }
  else if(!event) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      console.error(err)
    }
      }
    else if (!channelid) {
        try {

        throw new Error('No channel ID is provided inside \`channelSendMessage\`')
      } catch(err) {
        console.error(err)
      }
    } else if (!await client.channels.fetch(channelid).catch(err => {})) {
     try {
       throw new Error(`You forgot to put a valid channel id at \`channelSendMessage(${channelid}, ${((!content.length) ? 'Blank' : content)})\` `)
} catch(err) {
  console.error(err)
}
    } else if (!content.length) {
      try {
        throw new Error(`You didn't put any argument onto \`channelSendMessage(${channelid}, Blank)\` `)
} catch(err) {
  console.error(err)
}
    } else if (!await client.channels.fetch(channelid).then(channel => {
   return channel.permissionsFor(client.user.id).has(['SEND_MESSAGES', 'VIEW_CHANNEL'])
    })) {
      try {
        throw new Error(`I don't have the permissions \`SEND_MESSAGES\` on the channel <#${channelid}>`)
} catch(err) {
  console.error(err)
}
    } else {
     client.channels.fetch(channelid).then(channel => {
         channel.send(content)
     }).catch(err => {
         console.error(`Something went wrong! ` + err)
     })
    }
}
function guildRoles(guildid, separator, option, client, event) {
  if(!client) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      return console.error(err)
      }
    }
  else if(!event) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      console.error(err)
    }
      }
    else if(!guildid) {
        return event.guild.roles.cache.map(x => ((!option) ? x.id : ((option == 'mention') ? `<@&${x.id}>` : ((option == 'names') ? `${x.name}` : x.id)))).join(((!separator) ? ', ' : separator))
    }
    else if(!client.guilds.cache.get(guildid)) {
      try {
        throw new Error(`An invalid guild ID was provided into \`guildRoles(${guildid}, ${((!separator) ? 'Blank' : separator)})\``)
} catch(err) {
  console.error(err)
}
    }
    else {
        return client.guilds.cache.get(guildid).roles.cache.map(x => ((!option) ? x.id : ((option == 'mention') ? `<@&${x.id}>` : ((option == 'names') ? `${x.name}` : x.id)))).join(((!separator) ? ', ' : separator))
    }
}
function authorAvatarURL(client, event) {
  if(!client) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      return console.error(err)
      }
    }
  else if(!event) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      console.error(err)
    }
      }
    else {
    return event.member.user.displayAvatarURL()
    }
}
async function userAvatar(userid, size, dinamico, client, event) {
  if(!client) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      return console.error(err)
      }
    }
  else if(!event) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      console.error(err)
    }
      }
    else if(!userid) {
      try {
        throw new Error(`No ID is provided inside \`userAvatar('Blank', ${((!size) ? 'Blank' : size)}, ${((!dinamico) ? 'true' : ((dinamico == 'true') ? 'true' : ((dinamico == 'false') ? 'false' : 'true')))})\``)
  } catch(err) {
    return console.error(err)
  }
}
    else if(!await client.users.fetch(userid).catch(err => {})) {
      try {
        throw new Error(`An invalid user ID was provided inside \`userAvatar()\``)
} catch(err) {
  console.error(err)
}
    }
   else {
       return client.users.fetch(userid).then((user) => {
           return user.displayAvatarURL({size: ((!size) ? 2048 : size), dynamic: ((!dinamico) ? 'true': ((dinamico == 'true') ? 'true' : ((dinamico == 'false') ? 'false' : 'true')))})
        }).catch(err => {
            console.error(`Please make sure you provided a valid user ID. ` + err)
        })
        }
}
async function banMember(memberid, reason, guildid, days, client, event) {
  if(!client) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      return console.error(err)
      }
    }
  else if(!event) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      console.error(err)
    }
      }
    else if(!memberid) {
      try {
        throw new Error(`No __member__ ID is provided inside \`banMember()\``)
} catch(err) {
  console.error(err)
}
    }
    else if(!guildid) {
      try {
        throw new Error(`No guild ID is provided inside \`banMember()\``)
} catch(err) {
  console.error(err)
}
    }
    else if(!client.guilds.cache.get(guildid)) {
      try {
        throw new Error(`An invalid guild ID was provided into \`banMember()\``)
} catch(err) {
  console.error(err)
}
    }
    else if(!await client.guilds.cache.get(guildid).members.fetch(memberid).catch(err => {})) {
      try {
        throw new Error(`An invalid __member__ ID was provided into \`banMember()\``)
} catch(err) {
  console.error(err)
}
    }
    else if(!client.guilds.cache.get(guildid).me.hasPermission('BAN_MEMBERS')) {
      try {
        throw new Error(`Please make sure the \`BAN_MEMBERS\` permissions is enabled in one of my roles in order to use this command.`)
} catch(err) {
  console.error(err)
}
    }
    else {
        client.guilds.cache.get(guildid).members.fetch(memberid).then(async (hola) => {
            hola.ban({reason: ((!reason) ? '' : reason), days: ((!days) ? 0 : days)})
        })
        }

}
function banUser(userid, reason, guildid, days, client, event) {
  if(!client) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      return console.error(err)
      }
    }
  else if(!event) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      console.error(err)
    }
      }
    else if(!userid) {
      try {
        throw new Error(`No user ID is provided inside \`banUser()\``)
} catch(err) {
  console.error(err)
}
    }
    else if(!guildid) {
      try {
        throw new Error(`No guild ID is provided inside \`banUser()\``)
} catch(err) {
  console.error(err)
}
    }
    else if(!client.guilds.cache.get(guildid)) {
      try {
        throw new Error(`An invalid guild ID was provided into \`banMember()\``)
} catch(err) {
  console.error(err)
}
    }
    else if(!client.guilds.cache.get(guildid).me.hasPermission('BAN_MEMBERS')) {
      try {
        throw new Error(`Please make sure the \`BAN_MEMBERS\` permissions is enabled in one of my roles in order to use this command.`)
} catch(err) {
  console.error(err)
}
    }
    else { try {
        client.guilds.cache.get(guildid).members.ban(userid, { reason: ((!reason) ? '' : reason), days: ((!days) ? 0 : days)})
    } catch(err) {
        console.error(`Please make sure i'm not above that user or the user ID you gave is valid. Error: ` + err)
    }
    }

}
function emojisList(guildid, separator, option, client, event) {
  if(!client) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      return console.error(err)
      }
    }
  else if(!event) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      console.error(err)
    }
      }
    else if(!guildid) {
      try {
        throw new Error(`no guild ID was provided inside \`emojisList()\``)
} catch(err) {
  console.error(err)
}
    }
    else if(!client.guilds.cache.get(guildid)) {
      try {
        throw new Error(`An invalid guild ID was provided inside \`emojisList\``)
} catch(err) {
  console.error(err)
}
    }
    else {
  return client.guilds.cache.get(guildid).emojis.cache.map(x => ((!option) ? x.id : ((option == 'names') ? x.name : ((option == 'emojis') ? x : ((option == 'ids') ? x.id : x))))).join(((!separator) ? ', ' : separator))
    }
    }
async function giveRole(memberid, roleid, guildid, client, event) {
  if(!client) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      return console.error(err)
      }
    }
  else if(!event) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      console.error(err)
    }
      }
    else if(!memberid) {
      try {
        throw new Error(`No member ID is provided inside \`removeRole()\``)
} catch(err) {
  console.error(err)
}
}
    else if(!roleid) {
      try {
        throw new Error(`No role ID is provided inside \`removeRole()\``)
      } catch(err) {
        console.error(err)
      }
    }
            else if(!guildid) {
              try {
                throw new Error(`No guild ID is provided inside \`removeRole()\``)
} catch(err) {
  console.error(err)
}
            }
            else if(!client.guilds.cache.get(guildid)) {
              try {
                throw new Error(`An invalid guild ID was provided into \`removeRole()\``)
} catch(err) {
  console.error(err)
}
            }
            else if(!await client.guilds.cache.get(guildid).members.fetch(memberid).catch(err => {})) {
              try {
                throw new Error(`An invalid member id was provided into \`removeRole()\``)
} catch(err) {
  console.error(err)
}
            }
            else if(!await client.guilds.cache.get(guildid).roles.fetch(roleid).catch(err => {})) {
              try {
                throw new Error(`An invalid role ID was provided into \`removeRole()\``)
} catch(err) {
  console.error(err)
}
            }
            else {
            client.guilds.cache.get(guildid).members.fetch(memberid).then(user => {
                    user.roles.add(roleid)
                }).catch(err => {
                    console.error(`Something went wrong! ` + err)
                })
            }
}
async function removeRole(memberid, roleid, guildid, client, event) {
  if(!client) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      return console.error(err)
      }
    }
  else if(!event) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      console.error(err)
    }
      }
    else if(!memberid) {
      try {
throw new Error(`No member ID is provided inside \`removeRole()\``)
} catch(err) {
  console.error(err)
}
    }
    else if(!roleid) {
      try {
throw new Error(`No role ID is provided inside \`removeRole()\``)
} catch(err) {
  console.error(err)
}
    }
    else if(!guildid) {
      try {
        throw new Error(`No guild ID is provided inside \`removeRole()\``)
} catch(err) {
  console.error(err)
}
    }
    else if(!client.guilds.cache.get(guildid)) {
      try {
        throw new Error(`An invalid guild ID was provided into \`removeRole()\``)
} catch(err) {
  console.error(err)
}
    }
    else if(!await client.guilds.cache.get(guildid).members.fetch(memberid).catch(err => {})) {
      try {
        throw new Error(`An invalid member id was provided into \`removeRole()\``)
} catch(err) {
  console.error(err)
}
    }
    else if(!await client.guilds.cache.get(guildid).roles.fetch(roleid).catch(err => {})) {
      try {
        throw new Error(`An invalid role ID was provided into \`removeRole()\``)
} catch(err) {
  console.error(err)
}
    }
    else {
    client.guilds.cache.get(guildid).members.fetch(memberid).then(user => {
            user.roles.remove(roleid)
        }).catch(err => {
            console.error(`Something went wrong! ` + err)
        })
    }
}
async function hasPermission(userid, permission, guildid, client, event) {
  if(!client) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      return console.error(err)
      }
    }
  else if(!event) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      console.error(err)
    }
      }
    else if(!userid) {
      try {
        throw new Error(`No user ID was provided into \`hasPermission()\`.`)
} catch(err) {
  console.error(err)
}
    }
    else if(!guildid) {
      try {
        throw new Error(`No guild ID was provided into \`hasPermissions\``)
} catch(err) {
  console.error(err)
}
    }
    else if(!client.guilds.cache.get(guildid)) {
      try {
throw new Error(`An invalid guild ID was provided inside \`hasPermissions()\``)
} catch(err) {
  console.error(err)
}
    }
    else if(!await client.guilds.cache.get(guildid).members.fetch(userid).catch(err => {})) {
      try {
        throw new Error(`An invalid user ID was provided inside \`hasPermissions()\``)
} catch(err) {
  console.error(err)
}
    }
    else {
        return client.guilds.cache.get(guildid).members.fetch(userid).then(memberlol => {
            return memberlol.hasPermission(permission)
        }).catch(err => {
            console.error(`Something went wrong! ` + err)
        })
    }
}
async function editMessage(content, messageid, channelid, guildid, client, event) {
  if(!client) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      return console.error(err)
      }
    }
  else if(!event) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      console.error(err)
    }
      }
    else if(!content) {
      try {
        throw new Error(`no new message is provided inside \`editMessage()\`.`)
} catch(err) {
  console.error(err)
}
    }
    if(!messageid) {
      try {
        throw new Error(`no message ID is provided inside \`editMessage()\`.`)
} catch(err) {
  console.error(err)
}
    }
    else if(!channelid) {
      try {
        throw new Error(`no channel ID is provided inside \`editMessage()\`.`)
} catch(err) {
  console.error(err)
}
    }
    else if(!guildid) {
      try {
        throw new Error(`no guild ID is provided inside \`editMessage()\`.`)
} catch(err) {
  console.error(err)
}
    }
    else if(!client.guilds.cache.get(guildid)) {
      try {
        throw new Error(`An invalid guild ID was provided inside \`editMessage()\`.`)
} catch(err) {
  console.error(err)
}
    }
    else if(!client.guilds.cache.get(guildid).channels.cache.get(channelid)) {
      try {
        throw new Error(`An invalid channel ID was provided inside \`editMessage()\`.`)
} catch(err) {
  console.error(err)
}
    }
    else if(!await client.guilds.cache.get(guildid).channels.cache.get(channelid).messages.fetch(messageid).catch(err => {})) {
      try {
        throw new Error(`An invalid message ID was provided inside \`editMessage()\``)
} catch(err) {
  console.error(err)
}
    }
    else {
client.guilds.cache.get(guildid).channels.cache.get(channelid).messages.fetch(messageid).then((asdja) => {
asdja.edit(content)
}).catch(err => {
console.error(`Something went wrong! ` + err)
        })
    }
}
function channelsCount(guildid, client, event) {
  if(!client) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      return console.error(err)
      }
    }
  else if(!event) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      console.error(err)
    }
      }
    else if(!guildid) {
      try {
        throw new Error(`no guild ID was provided inside \`channelsCount()\``)
} catch(err) {
  console.error(err)
}
    }
    else if(!client.guilds.cache.get(guildid)) {
      try {
        throw new Error(`An invalid guild ID was provided inside \`channelsCount()\``)
} catch(err) {
  console.error(err)
}
    }
    else {
        return client.guilds.cache.get(guildid).channels.cache.size
    }
}
function rolesCount(guildid, client, event) {
  if(!client) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      return console.error(err)
      }
    }
  else if(!event) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      console.error(err)
    }
      }
    else if(!guildid) {
      try {
        throw new Error(`no guild ID was provided inside \`rolesCount()\``)
} catch(err) {
  console.error(err)
}
    }
    else if(!client.guilds.cache.get(guildid)) {
      try {
        throw new Error(`An invalid guild ID was provided inside \`rolesCount()\``)
} catch(err) {
  console.error(err)
}
    }
    else {
        return client.guilds.cache.get(guildid).roles.cache.size
    }
}
 async function highestMemberRolePosition(userid, guildid, client, event) {
   if(!client) {
     try {
       throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
     } catch(err) {
       return console.error(err)
       }
     }
   else if(!event) {
     try {
       throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
     } catch(err) {
       console.error(err)
     }
       }
    else if(!userid) {
      try {
        throw new Error(`no user ID was provided inside \`highestMemberRole()\``)
} catch(err) {
  console.error(err)
}
    }
    else if(!guildid) {
      try {
        throw new Error(`no guild ID provided inside \`highestMemberRole()\``)
} catch(err) {
  console.error(err)
}
    }
    else if(!client.guilds.cache.get(guildid)) {
      try {
        throw new Error(`An invalid guild ID was provided inside \`highestMemberRole()\``)
} catch(err) {
  console.error(err)
}
    }
    else if(!await client.guilds.cache.get(guildid).members.fetch(userid).catch(err => {})) {
try {
        throw new Error(`An invalid user ID was provided inside \`highestMemberRole()\``)
} catch(err) {
  console.error(err)
}
    }
    else {
        return client.guilds.cache.get(guildid).members.fetch(userid).then(memberlol => {
            return memberlol.roles.highest.position
    }).catch(err => {
        console.error(`Something went wrong! ` + err)
    })
}
}
function highestGuildRolePosition(guildid, client, event) {
  if(!client) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      return console.error(err)
      }
    }
  else if(!event) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      console.error(err)
    }
      }
    else if(!guildid) {
      try {
        throw new Error(`no guild ID was provided inside \`highestGuildRolePosition()\``)
} catch(err) {
  console.error(err)
}
    }
    else if(!client.guilds.cache.get(guildid)) {
      try {
        throw new Error(`An invalid guild ID was provided inside \`highestGuildRolePosition()\``)
} catch(err) {
  console.error(err)
}
    }
    else {
        return client.guilds.cache.get(guildid).roles.highest.position
    }
}
 function highestGuildRoleID(guildid, client, event) {
   if(!client) {
     try {
       throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
     } catch(err) {
       return console.error(err)
       }
     }
   else if(!event) {
     try {
       throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
     } catch(err) {
       console.error(err)
     }
       }
    else if(!guildid) {
      try {
        throw new Error(`no guild ID was provided inside \`highestGuildRolePosition()\``)

} catch(err) {
  console.error(err)
}
    }
    else if(!client.guilds.cache.get(guildid)) {
      try {
        throw new Error(`An invalid guild ID was provided inside \`highestGuildRolePosition()\``)
} catch(err) {
  console.error(err)
}
    }
    else {
        return client.guilds.cache.get(guildid).roles.highest.id
    }
}
 async function highestMemberRoleID(userid, guildid, client, event) {
   if(!client) {
     try {
       throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
     } catch(err) {
       return console.error(err)
       }
     }
   else if(!event) {
     try {
       throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
     } catch(err) {
       console.error(err)
     }
       }
    else if(!userid) {
      try {
        throw new Error(`no user ID was provided inside \`highestMemberRole()\``)
} catch(err) {
  console.error(err)
}
    }
    else if(!guildid) {
      try {
        throw new Error(`no guild ID provided inside \`highestMemberRole()\``)
} catch(err) {
  console.error(err)
}
    }
    else if(!client.guilds.cache.get(guildid)) {
      try {
        throw new Error(`An invalid guild ID was provided inside \`highestMemberRole()\``)
} catch(err) {
  console.error(err)
}
    }
    else if(!await client.guilds.cache.get(guildid).members.fetch(userid).catch(err => {})) {
try {
        throw new Error(`An invalid user ID was provided inside \`highestMemberRole()\``)
} catch(err) {
  console.error(err)
}
    }
    else {
        return client.guilds.cache.get(guildid).members.fetch(userid).then(userlol => {
     return userlol.roles.highest.id
    })
}
}
 async function kickMember(memberid, reason, guildid, client, event) {
   if(!client) {
     try {
       throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
     } catch(err) {
       return console.error(err)
       }
     }
   else if(!event) {
     try {
       throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
     } catch(err) {
       console.error(err)
     }
       }
    else if(!memberid) {
      try {
        throw new Error(`No __member__ ID is provided inside \`banMember()\``)
} catch(err) {
  console.error(err)
}
    }
    else if(!guildid) {
      try {
        throw new Error(`No guild ID is provided inside \`kickMember()\``)
} catch(err) {
  console.error(err)
}
    }
    else if(!client.guilds.cache.get(guildid)) {
      try {
        throw new Error(`An invalid guild ID was provided into \`kickMember()\``)
} catch(err) {
  console.error(err)
}
    }
    else if(!await client.guilds.cache.get(guildid).members.fetch(memberid).catch(err => {})) {
      try {
        throw new Error(`An invalid __member__ ID was provided into \`kickMember()\``)
} catch(err) {
  console.error(err)
}
    }
    else if(!client.guilds.cache.get(guildid).me.hasPermission('KICK_MEMBERS')) {
      try {
        throw new Error(`Please make sure the \`KICK_MEMBERS\` permissions is enabled in one of my roles in order to use this command.`)
} catch(err) {
  console.error(err)
}
    }
    else {
        client.guilds.cache.get(guildid).members.fetch(memberid).then(async (jaja) => {
    await jaja.kick(((!reason) ? '' : reason))
        })
    }

}
async function addReaction(reaction, messageid, channelid, guildid, client, event) {
  if(!client) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      return console.error(err)
      }
    }
  else if(!event) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      console.error(err)
    }
      }
    else if(!reaction) {
      try {
throw new Error(`no reactions were provided inside \`addReactions()\``)
} catch(err) {
  console.error(err)
}
    }
    else if(!messageid) {
      try {
        throw new Error(`no message ID was provided inside \`addReactions()\``)
} catch(err) {
  console.error(err)
}
    }
    else if(!channelid) {
      try {
        throw new Error(`no channel ID was provided inside \`addReactions()\``)
} catch(err) {
  console.error(err)
}
    }
    else if(!guildid) {
      try {
        throw new Error(`:warninig: - no guild ID was provided inside \`addReactions()\``)
} catch(err) {
  console.error(err)
}
    }
    else if(!client.guilds.cache.get(guildid)) {
      try {
        throw new Error(`An invalid guild ID was provided inside \`addReaction()\``)
} catch(err) {
  console.error(err)
}
    }
    else if(!client.guilds.cache.get(guildid).channels.cache.get(channelid)) {
      try {
        throw new Error(`An invalid channel ID was provided inside \`addReaction()\``)
} catch(err) {
  console.error(err)
}
    }
    else if(!await client.guilds.cache.get(guildid).channels.cache.get(channelid).messages.fetch(messageid).catch(err => {})) {
        console.error(`An invalid message ID was provided inside \`addReaction()\``)
    }
    else {
client.guilds.cache.get(guildid).channels.cache.get(channelid).messages.fetch(messageid).then(async mensaje => {
    if(client.emojis.cache.get(reaction)) {
        return mensaje.react(client.emojis.cache.get(reaction))
    }
    else {
        return mensaje.react(reaction)
    }
}).catch(err => {
            console.error(`Something went wrong! You maybe provided an invalid default emoji/emote ID. ` + err)
    })
    }
}
 function findUser(query, client, event) {
   if(!client) {
     try {
       throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
     } catch(err) {
       return console.error(err)
       }
     }
   else if(!event) {
     try {
       throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
     } catch(err) {
       console.error(err)
     }
       }
    else if(!(client.users.cache.get(query) || client.users.cache.find(x => x.username === query) || client.users.cache.find(x => x.tag === query) || client.users.cache.find(x => x.tag.startsWith(query)))) {
        return undefined
    }
    else {
    const user = client.users.cache.get(query) || client.users.cache.find(x => x.username === query) || client.users.cache.find(x => x.tag === query) || client.users.cache.find(x => x.tag.startsWith(query))
    return user.id
    }
}
function findMember(query, guildid, client, event) {
  if(!client) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      return console.error(err)
      }
    }
  else if(!event) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      console.error(err)
    }
      }
else if(!guildid) {
  try {
    throw new Error(`no guild ID provided inside \`findMember()\``)
} catch(err) {
  console.error(err)
}
}
else if(!client.guilds.cache.get(guildid)) {
  try {
    throw new Error(`An invalid guild ID was provided inside \`findMember()\``)
} catch(err) {
  console.error(err)
}
}
else if(!(client.guilds.cache.get(guildid).members.cache.find(x => x.user.username === query) || client.guilds.cache.get(guildid).members.cache.find(x => x.user.tag === query) || client.guilds.cache.get(guildid).members.cache.find(x => x.user.id === query) || client.guilds.cache.get(guildid).members.cache.find(x => x.user.tag.startsWith(query)))) {
    return undefined
}
else {
  let member = client.guilds.cache.get(guildid).members.cache.find(x => x.user.username === query) || client.guilds.cache.get(guildid).members.cache.find(x => x.user.tag === query) || client.guilds.cache.get(guildid).members.cache.find(x => x.user.id === query) || client.guilds.cache.get(guildid).members.cache.find(x => x.user.tag.startsWith(query))
    return member.user.id
}
}
function fetchMember(memberid, guildid, client, event) {
  if(!client) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      return console.error(err)
      }
    }
  else if(!event) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      console.error(err)
    }
      }
    else if(!memberid) {
      try {
        throw new Error(`no member ID is provided inside \`fetchMember()\``)
} catch(err) {
  console.error(err)
}
    }
    else if(!guildid) {
      try {
        throw new Error(`no guild ID was provided inside \`fetchMember()\``)
} catch(err) {
  console.error(err)
}
    }
    else if(!client.guilds.cache.get(guildid)) {
      try {
        throw new Error(`An invalid guild ID was provided inside \`fetchMember()\``)
} catch(err) {
  console.error(err)
}
    }
    else {
        return client.guilds.cache.get(guildid).members.fetch(memberid)
    }
}
function fetchUser(userid, client, event) {
  if(!client) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      return console.error(err)
      }
    }
  else if(!event) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      console.error(err)
    }
      }
    else if(!userid) {
      try {
        throw new Error(`no user ID was provided inside \`fetchUser()\``)
} catch(err) {
  console.error(err)
}
    }
    else {
        return client.users.fetch(userid)
    }
}
function randomText(text) {
    return text[Math.floor(Math.random() * text.length)]
}
async function changeNickname(userid, newnickname, guildid, client, event) {
  if(!client) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      return console.error(err)
      }
    }
  else if(!event) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      console.error(err)
    }
      }
  else if(!userid) {
    try {
    throw new Error('No user ID was provided inside \`changeNickname()\`')
} catch(err) {
  console.error(err)
}
  }
  else if(!newnickname) {
    try {
    throw new Error('No new nickname was provided inside \`changeNickname()\`')
} catch(err) {
  console.error(err)
}
  }
  else if(!guildid) {
    try {
    throw new Error('No guild ID was provided inside \`changeNickname()\`')
} catch(err) {
  console.error(err)
}
  }
  else if(!client.guilds.cache.get(guildid)) {
    try {
    throw new Error('An invalid guild ID was provided inside \`changeNickname()\`')
} catch(err) {
  console.error(err)
}
  }
  else if(!await client.guilds.cache.get(guildid).members.fetch(userid).catch(err => {})) {
    try {
    throw new Error('An invalid member ID was provided inside \`changeNickname()\`')
} catch(err) {
  console.error(err)
}
  }
  else {
   return client.guilds.cache.get(guildid).members.fetch(userid).then(usuario => {
     usuario.setNickname(newnickname)
   }).catch(err => {
     console.error('Something went wrong when trying to execute changeNickname(): ' + err)
   })
  }
}
function guildLeave(guildid, client, event) {
  if(!client) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      return console.error(err)
      }
    }
  else if(!event) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      console.error(err)
    }
      }
    else if(!guildid) {
      try {
      throw new Error('No guild ID is provided inside \`guildLeave()\`')
} catch(err) {
  console.error(err)
}
    }
    else if(!client.guilds.cache.get(guildid)) {
      try {
      throw new Error('An invalid guild ID was provided inside \`guildLeave()\`')
} catch(err) {
  console.error(err)
}
    }
    else {
      client.guilds.cache.get(guildid).leave()
    }
}
function createRole(rolename, rolecolor, guildid, hoisting, mentionable, permissions, position, reason, client, event) {
  if(!client) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      return console.error(err)
      }
    }
  else if(!event) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      console.error(err)
    }
      }
  else if(!rolename) {
    try {
throw new Error('No role NAME was provided inside \`createRole()\`')
} catch(err) {
  console.error(err)
}
  }
  else if(!guildid) {
    try {
throw new Error('No guild ID was provided inside \`createRole()\`')
} catch(err) {
  console.error(err)
}
  }
  else if(!client.guilds.cache.get(guildid)) {
    try {
throw new Error('An invalid guild ID was provided inside \`createRole()\`');
} catch(err) {
  console.error(err)
}
  }
  else if(!mentionable) {
    try {
    throw new Error('Please put either true or false into mentionable field, (Otherwise it will give you an error later.)')
} catch(err) {
  console.error(err)
}
  }
  else if(!hoisting) {
    try {
    throw new Error('Please put either true or false into hoisting field, (Otherwise it will give you an error later.)')
} catch(err) {
  console.error(err)
}
  }
  else {
    return client.guilds.cache.get(guildid).roles.create({
      data: {
        name: rolename,
        color: rolecolor,
        hoist: hoisting,
        position: position,
        permissions: permissions,
        mentionable: mentionable,
      },
      reason: reason,
    })
  }
}
function usersWithRole(roleid, guildid, separator, option, client, event) {
  if(!client) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      return console.error(err)
      }
    }
  else if(!event) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      console.error(err)
    }
      }
  else if(!roleid) {
    try {
    throw new Error('No role ID was provided inside \`usersWithRole()\`')
} catch(err) {
  console.error(err)
}
  }
  else if(!guildid) {
    try {
    throw new Error('No guild ID was provided inside \`usersWithRole()\`')
} catch(err) {
  console.error(err)
}
  }
  else if(!client.guilds.cache.get(guildid)) {
    try {
    throw new Error('An invalid guild ID was provided inside \`usersWithRole()\`')
} catch(err) {
  console.error(err)
}
  }
  else if(!client.guilds.cache.get(guildid).roles.cache.get(roleid)) {
    try {
    throw new Error('An invalid role ID was provided inside \`usersWithRole()\`')
} catch(err) {
  console.error(err)
}
  }
  else {
    return client.guilds.cache.get(guildid).roles.cache.get(roleid).members.map(x => ((!option) ? `<@!${x.user.id}>` : ((option == 'ids') ? x.user.id : ((option == 'names') ? x.user.username : `<@!${x.user.id}>`)))).join((!separator) ? ' , ' : separator)
  }
}
 function rolePosition(roleid, guildid, client, event) {
   if(!client) {
     try {
       throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
     } catch(err) {
       return console.error(err)
       }
     }
   else if(!event) {
     try {
       throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
     } catch(err) {
       console.error(err)
     }
       }
  else if(!roleid) {
    try {
    throw new Error('no role ID was provided inside \`rolePosition()\`')
} catch(err) {
  console.error(err)
}
  }
  else if(!guildid) {
    try {
    throw new Error('no guild ID was provided inside \`rolePosition()\`')
} catch(err) {
  console.error(err)
}
  }
  else if(!client.guilds.cache.get(guildid)) {
    try {
    throw new Error('An invalid guild ID was provided inside \`rolePosition()\`')
} catch(err) {
  console.error(err)
}
  }
  else if(!client.guilds.cache.get(guildid).roles.cache.get(roleid)) {
    try {
          throw new Error('An invalid role ID was provided inside \`rolePosition()\`')
} catch(err) {
  console.error(err)
}
  }
  else {
    return client.guilds.cache.get(guildid).roles.cache.get(roleid).position
  }
}
function channelPosition(channelid, guildid, client, event) {
  if(!client) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      return console.error(err)
      }
    }
  else if(!event) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      console.error(err)
    }
      }
  else if(!channelid) {
    try {
    throw new Error('no channel ID is provided inside \`channelPosition()\`')
} catch(err) {
  console.error(err)
}
  }
  else if(!guildid) {
    try {
    throw new Error('no guild ID is provided inside \`channelPosition()\`')
} catch(err) {
  console.error(err)
}
  }
  else if(!client.guilds.cache.get(guildid)) {
    try {
    throw new Error('An invalid guild ID was provided inside \`channelPosition()\`')
} catch(err) {
  console.error(err)
}
  }
  else if(!client.guilds.cache.get(guildid).channels.cache.get(channelid)) {
    try {
    throw new Error('An invalid channel ID was provided inside \`channelPosition()\`')
} catch(err) {
  console.error(err)
}
  }
  else {
    return client.guilds.cache.get(guildid).channels.cache.get(channelid).rawPosition
  }
}
function roleExists(roleid, guildid, client, event) {
  if(!client) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      return console.error(err)
      }
    }
  else if(!event) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      console.error(err)
    }
      }
  else if(!roleid) {
    try {
    throw new Error('no role ID is provided inside \`roleExists()\`')
} catch(err) {
  console.error(err)
}
  }
  else if(!guildid) {
    try {
    throw new Error('no guild ID is provided inside \`roleExists()\`')
} catch(err) {
  console.error(err)
}
  }
  else if(!client.guilds.cache.get(guildid)) {
    try {
    throw new Error('An invalid guild ID was provided inside \`roleExists()\`')
} catch(err) {
  console.error(err)
}
  }
  else if(!client.guilds.cache.get(guildid).roles.cache.get(roleid)) {
    return false
  }
  else {
    return true
  }

}
function channelExists(channelid, guildid, client, event) {
  if(!client) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      return console.error(err)
      }
    }
  else if(!event) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      console.error(err)
    }
      }
  else if(!channelid) {
    try {
    throw new Error('no channel ID is provided inside \`channelExists()\`')
} catch(err) {
  console.error(err)
}
  }
  else if(!guildid) {
    try {
    throw new Error('no guild ID is provided inside \`channelExists()\`')
} catch(err) {
  console.error(err)
}
  }
  else if(!client.guilds.cache.get(guildid)) {
    try {
    throw new Error('An invalid guild ID was provided inside \`channelExists()\`')
} catch(err) {
  console.error(err)
}
  }
  else if(!client.guilds.cache.get(guildid).channels.cache.get(channelid)) {
    return false
  }
  else {
    return true
  }

}
function findChannel(query, guildid, client, event) {
  if(!client) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      return console.error(err)
      }
    }
  else if(!event) {
    try {
      throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    } catch(err) {
      console.error(err)
    }
      }
  else if(!guildid) {
    try {
    throw new Error('No guild ID was provided inside \`findChannel()\`')
} catch(err) {
  console.error(err)
}
  }
  else if(!client.guilds.cache.get(guildid)) {
    try {
    throw new Error('An invalid guild ID was provided inside \`findChannel()\`')
} catch(err) {
  console.error(err)
}
  }
  else if(!(client.guilds.cache.get(guildid).channels.cache.find(x => x.name == query) || client.guilds.cache.get(guildid).channels.cache.find(x => x.id == query) || client.guilds.cache.get(guildid).channels.cache.find(x => x.name.startsWith(query)))) {
    return undefined
  }
  else {
    const channelfound = client.guilds.cache.get(guildid).channels.cache.find(x => x.name == query) || client.guilds.cache.get(guildid).channels.cache.find(x => x.id == query) || client.guilds.cache.get(guildid).channels.cache.find(x => x.name.startsWith(query))
    return channelfound.id
  }
  }
  function findRole(query, guildid, client, event) {
    if(!client) {
      try {
        throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
      } catch(err) {
        return console.error(err)
        }
      }
    else if(!event) {
      try {
        throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
      } catch(err) {
        console.error(err)
      }
        }
    else if(!guildid) {
      try {
      throw new Error('No guild ID was provided inside \`findRole()\`')
} catch(err) {
  console.error(err)
}
    }
    else if(!client.guilds.cache.get(guildid)) {
      try {
      throw new Error('An invalid guild ID was provided inside \`findRole()\`')
} catch(err) {
  console.error(err)
}
    }
    else if(!(client.guilds.cache.get(guildid).roles.cache.find(x => x.name == query) || client.guilds.cache.get(guildid).roles.cache.find(x => x.id == query) || client.guilds.cache.get(guildid).roles.cache.find(x => x.name.startsWith(query)))) {
      return undefined
    }
    else {
      const rolefound = client.guilds.cache.get(guildid).roles.cache.find(x => x.name == query) || client.guilds.cache.get(guildid).roles.cache.find(x => x.id == query) || client.guilds.cache.get(guildid).roles.cache.find(x => x.name.startsWith(query))
      return rolefound.id
    }
    }
    function channelNSFW(channelid, guildid, client, event) {
      if(!client) {
        try {
          throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        } catch(err) {
          return console.error(err)
          }
        }
      else if(!event) {
        try {
          throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        } catch(err) {
          console.error(err)
        }
          }
      else if(!channelid) {
        try {
        throw new Error('no channel ID was provided inside \`channelNSFW()\`')
} catch(err) {
  console.error(err)
}
      }
      else if(!guildid) {
        try {
        throw new Error('no guild ID was provided inside \`channelNSFW()\`')
} catch(err) {
  console.error(err)
}
      }
      else if(!client.guilds.cache.get(guildid)) {
        try {
        throw new Error('An invalid guild ID was provided inside \`channelNSFW()\`')
} catch(err) {
  console.error(err)
}
      }
      else if(!client.guilds.cache.get(guildid).channels.cache.get(channelid)) {
        try {
        throw new Error('An invalid channel ID was provided inside \`channelNSFW()\`')
} catch(err) {
  console.error(err)
}
      }
      else if(!client.guilds.cache.get(guildid).channels.cache.get(channelid).nsfw) {
        return false
      }
      else {
        return true
      }
    }
    function createChannel(channelname, guildid, topic, nsfw, permissions, permissions_id, position, cooldown, reason, client, event) {
      if(!client) {
        try {
          throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        } catch(err) {
          return console.error(err)
          }
        }
      else if(!event) {
        try {
          throw new Error(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        } catch(err) {
          console.error(err)
        }
          }
      else if(!channelname) {
        try {
        throw new Error('no channel name was provided inside \`createChannel()\`')
} catch(err) {
  console.error(err)
}
      }
      else if(!guildid) {
        try {
        throw new Error('no guild ID was provided inside \`createChannel()\`')
} catch(err) {
  console.error(err)
}
      }
      else if(!client.guilds.cache.get(guildid)) {
        try {
        throw new Error('An invalid guild ID was provided inside \`createChannel()\`')
} catch(err) {
  console.error(err)
}
      }
      else {
        client.guilds.cache.get(guildid).channels.create(channelname, {
          type: 'text',
          topic: ((!topic) ? '' : topic),
          nsfw: ((!nsfw) ? false : ((nsfw != (true || false)) ? false : nsfw)),
          permissionsOverwrites: [
            {
              id: permissions_id,
              deny: permissions,
            }
          ],
          position: ((isNaN(position)) ? '0' : position),
          cooldown: ((!cooldown) ? 0 : ((isNaN(cooldown)) ? 0 : ((cooldown > 21600) ? 21600 : cooldown))),
          reason: ((!reason) ? '' : reason)
        })
      }
    }
module.exports = {
    channelSendMessage, guildRoles, authorAvatarURL, userAvatar, banUser, banMember, giveRole, removeRole, hasPermission, editMessage, channelsCount, rolesCount, highestMemberRolePosition, highestGuildRolePosition, highestGuildRoleID, highestMemberRoleID, kickMember, emojisList, addReaction, findMember, findUser, fetchMember, fetchUser, randomText, changeNickname, guildLeave, createRole, memberExists, userExists, isValidMessage, usersWithRole, rolePosition, channelPosition, roleExists, channelExists, findChannel, findRole, channelNSFW, createChannel
}
