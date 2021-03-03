//useful functions
async function memberExists(userid, guildid, client, event) {
  if(!client) {
      return console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
      }
  else if(!event) {
      return console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
      }
  else if(!client.guilds.cache.get(guildid)) {
    return console.log('An invalid guild ID was provided inside \`memberExists()\`')
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
      return console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
      }
  else if(!event) {
      return console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
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
      return console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
      }
  else if(!event) {
      return console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
      }
  else if(!client.guilds.cache.get(guildid)) {
    return console.log(`No valid guild ID was provided inside \`isValidMessage()\``)
  }
  else if(!client.guilds.cache.get(guildid).channels.cache.get(channelid)) {
    return console.log(`No valid channel ID was provided inside \`isValidMessage()\``)
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
        console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
    else if(!event) {
        console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
    else if (!channelid) {
        return console.log('No channel ID is provided inside \`channelSendMessage\`')
    } else if (!await client.channels.fetch(channelid).catch(err => {})) {
        return console.log(`You forgot to put a valid channel id at \`channelSendMessage(${channelid}, ${((!content.length) ? 'Blank' : content)})\` `)
    } else if (!content.length) {
        return console.log(`You didn't put any argument onto \`channelSendMessage(${channelid}, Blank)\` `)
    } else if (!await client.channels.fetch(channelid).then(channel => {
   return channel.permissionsFor(client.user.id).has(['SEND_MESSAGES', 'VIEW_CHANNEL'])
    })) {
        return console.log(`I don't have the permissions \`SEND_MESSAGES\` on the channel <#${channelid}>`)
    } else {
     client.channels.fetch(channelid).then(channel => {
         channel.send(content)
     }).catch(err => {
         console.log(`Something went wrong! ` + err)
     })
    }
}
function guildRoles(guildid, separator, option, client, event) {
    if(!client) {
        console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
        else if(!event) {
        console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
    else if(!guildid) {
        return event.guild.roles.cache.map(x => ((!option) ? x.id : ((option == 'mention') ? `<@&${x.id}>` : ((option == 'names') ? `${x.name}` : x.id)))).join(((!separator) ? ', ' : separator))
    }
    else if(!client.guilds.cache.get(guildid)) {
        return console.log(`An invalid guild ID was provided into \`guildRoles(${guildid}, ${((!separator) ? 'Blank' : separator)})\``)
    }
    else {
        return client.guilds.cache.get(guildid).roles.cache.map(x => ((!option) ? x.id : ((option == 'mention') ? `<@&${x.id}>` : ((option == 'names') ? `${x.name}` : x.id)))).join(((!separator) ? ', ' : separator))
    }
}
function authorAvatarURL(client, event) {
    if(!client) {
        console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
        else if(!event) {
        console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
    else {
    return event.member.user.displayAvatarURL()
    }
}
async function userAvatar(userid, size, dinamico, client, event) {
    if(!client) {
        console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
    else if(!event) {
        console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
    else if(!userid) {
        return console.log(`No ID is provided inside \`userAvatar('Blank', ${((!size) ? 'Blank' : size)}, ${((!dinamico) ? 'true' : ((dinamico == 'true') ? 'true' : ((dinamico == 'false') ? 'false' : 'true')))})\``)
    }
    else if(!await client.users.fetch(userid).catch(err => {})) {
        return console.log(`An invalid user ID was provided inside \`userAvatar()\``)
    }
   else {
       return client.users.fetch(userid).then((user) => {
           return user.displayAvatarURL({size: ((!size) ? 2048 : size), dynamic: ((!dinamico) ? 'true': ((dinamico == 'true') ? 'true' : ((dinamico == 'false') ? 'false' : 'true')))})
        }).catch(err => {
            console.log(`Please make sure you provided a valid user ID. ` + err)
        })
        }
}
async function banMember(memberid, reason, guildid, days, client, event) {
    if(!client) {
        console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
    else if(!event) {
        console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
    else if(!memberid) {
        return console.log(`No __member__ ID is provided inside \`banMember()\``)
    }
    else if(!guildid) {
        return console.log(`No guild ID is provided inside \`banMember()\``)
    }
    else if(!client.guilds.cache.get(guildid)) {
        return console.log(`An invalid guild ID was provided into \`banMember()\``)
    }
    else if(!await client.guilds.cache.get(guildid).members.fetch(memberid).catch(err => {})) {
        return console.log(`An invalid __member__ ID was provided into \`banMember()\``)
    }
    else if(!client.guilds.cache.get(guildid).me.hasPermission('BAN_MEMBERS')) {
        return console.log(`Please make sure the \`BAN_MEMBERS\` permissions is enabled in one of my roles in order to use this command.`)
    }
    else {
        client.guilds.cache.get(guildid).members.fetch(memberid).then(async (hola) => {
            hola.ban({reason: ((!reason) ? '' : reason), days: ((!days) ? 0 : days)})
        })
        }

}
function banUser(userid, reason, guildid, days, client, event) {
    if(!client) {
        return console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
    else if(!event) {
        return console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
    else if(!userid) {
        return console.log(`No user ID is provided inside \`banUser()\``)
    }
    else if(!guildid) {
        return console.log(`No guild ID is provided inside \`banUser()\``)
    }
    else if(!client.guilds.cache.get(guildid)) {
        return console.log(`An invalid guild ID was provided into \`banMember()\``)
    }
    else if(!client.guilds.cache.get(guildid).me.hasPermission('BAN_MEMBERS')) {
        return console.log(`Please make sure the \`BAN_MEMBERS\` permissions is enabled in one of my roles in order to use this command.`)
    }
    else { try {
        client.guilds.cache.get(guildid).members.ban(userid, { reason: ((!reason) ? '' : reason), days: ((!days) ? 0 : days)})
    } catch(err) {
        return console.log(`Please make sure i'm not above that user or the user ID you gave is valid. Error: ` + err)
    }
    }

}
function emojisList(guildid, separator, option, client, event) {
    if(!client) {
        console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
    else if(!event) {
        console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
    else if(!guildid) {
        return console.log(`no guild ID was provided inside \`emojisList()\``)
    }
    else if(!client.guilds.cache.get(guildid)) {
        return console.log(`An invalid guild ID was provided inside \`emojisList\``)
    }
    else {
  return client.guilds.cache.get(guildid).emojis.cache.map(x => ((!option) ? x.id : ((option == 'names') ? x.name : ((option == 'emojis') ? x : ((option == 'ids') ? x.id : x))))).join(((!separator) ? ', ' : separator))
    }
    }
async function giveRole(memberid, roleid, guildid, client, event) {
    if(!client) {
        console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
        else if(!event) {
        console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
    else if(!memberid) {
        return console.log(`No member ID is provided inside \`removeRole()\``)
            }
            else if(!roleid) {
        return console.log(`No role ID is provided inside \`removeRole()\``)
            }
            else if(!guildid) {
                return console.log(`No guild ID is provided inside \`removeRole()\``)
            }
            else if(!client.guilds.cache.get(guildid)) {
                return console.log(`An invalid guild ID was provided into \`removeRole()\``)
            }
            else if(!await client.guilds.cache.get(guildid).members.fetch(memberid).catch(err => {})) {
                return console.log(`An invalid member id was provided into \`removeRole()\``)
            }
            else if(!await client.guilds.cache.get(guildid).roles.fetch(roleid).catch(err => {})) {
                return console.log(`An invalid role ID was provided into \`removeRole()\``)
            }
            else {
            client.guilds.cache.get(guildid).members.fetch(memberid).then(user => {
                    user.roles.add(roleid)
                }).catch(err => {
                    return console.log(`Something went wrong! ` + err)
                })
            }
}
async function removeRole(memberid, roleid, guildid, client, event) {
    if(!client) {
        console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
    else if(!event) {
        console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
    else if(!memberid) {
return console.log(`No member ID is provided inside \`removeRole()\``)
    }
    else if(!roleid) {
return console.log(`No role ID is provided inside \`removeRole()\``)
    }
    else if(!guildid) {
        return console.log(`No guild ID is provided inside \`removeRole()\``)
    }
    else if(!client.guilds.cache.get(guildid)) {
        return console.log(`An invalid guild ID was provided into \`removeRole()\``)
    }
    else if(!await client.guilds.cache.get(guildid).members.fetch(memberid).catch(err => {})) {
        return console.log(`An invalid member id was provided into \`removeRole()\``)
    }
    else if(!await client.guilds.cache.get(guildid).roles.fetch(roleid).catch(err => {})) {
        return console.log(`An invalid role ID was provided into \`removeRole()\``)
    }
    else {
    client.guilds.cache.get(guildid).members.fetch(memberid).then(user => {
            user.roles.remove(roleid)
        }).catch(err => {
            console.log(`Something went wrong! ` + err)
        })
    }
}
async function hasPermission(userid, permission, guildid, client, event) {
    if(!client) {
        console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
    else if(!event) {
        console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
    else if(!userid) {
        return console.log(`No user ID was provided into \`hasPermission()\`.`)
    }
    else if(!guildid) {
        return console.log(`No guild ID was provided into \`hasPermissions\``)
    }
    else if(!client.guilds.cache.get(guildid)) {
        return console.log(`An invalid guild ID was provided inside \`hasPermissions()\``)
    }
    else if(!await client.guilds.cache.get(guildid).members.fetch(userid).catch(err => {})) {
        return console.log(`An invalid user ID was provided inside \`hasPermissions()\``)
    }
    else {
        return client.guilds.cache.get(guildid).members.fetch(userid).then(memberlol => {
            return memberlol.hasPermission(permission)
        }).catch(err => {
            return console.log(`Something went wrong! ` + err)
        })
    }
}
async function editMessage(content, messageid, channelid, guildid, client, event) {
    if(!client) {
        console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
    else if(!event) {
        console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
    else if(!content) {
        return console.log(`no new message is provided inside \`editMessage()\`.`)
    }
    if(!messageid) {
        return console.log(`no message ID is provided inside \`editMessage()\`.`)
    }
    else if(!channelid) {
        return console.log(`no channel ID is provided inside \`editMessage()\`.`)
    }
    else if(!guildid) {
        return console.log(`no guild ID is provided inside \`editMessage()\`.`)
    }
    else if(!client.guilds.cache.get(guildid)) {
        return console.log(`An invalid guild ID was provided inside \`editMessage()\`.`)
    }
    else if(!client.guilds.cache.get(guildid).channels.cache.get(channelid)) {
        return console.log(`An invalid channel ID was provided inside \`editMessage()\`.`)
    }
    else if(!await client.guilds.cache.get(guildid).channels.cache.get(channelid).messages.fetch(messageid).catch(err => {})) {
        return console.log(`An invalid message ID was provided inside \`editMessage()\``)
    }
    else {
client.guilds.cache.get(guildid).channels.cache.get(channelid).messages.fetch(messageid).then((asdja) => {
asdja.edit(content)
}).catch(err => {
return console.log(`Something went wrong! ` + err)
        })
    }
}
function channelsCount(guildid, client, event) {
    if(!client) {
        console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
    else if(!event) {
        console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
    else if(!guildid) {
        return console.log(`no guild ID was provided inside \`channelsCount()\``)
    }
    else if(!client.guilds.cache.get(guildid)) {
        return console.log(`An invalid guild ID was provided inside \`channelsCount()\``)
    }
    else {
        return client.guilds.cache.get(guildid).channels.cache.size
    }
}
function rolesCount(guildid, client, event) {
    if(!client) {
        console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
    else if(!event) {
        console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
    else if(!guildid) {
        return console.log(`no guild ID was provided inside \`rolesCount()\``)
    }
    else if(!client.guilds.cache.get(guildid)) {
        return console.log(`An invalid guild ID was provided inside \`rolesCount()\``)
    }
    else {
        return client.guilds.cache.get(guildid).roles.cache.size
    }
}
 async function highestMemberRolePosition(userid, guildid, client, event) {
    if(!client) {
        console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
    else if(!event) {
        console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
    else if(!userid) {
        return console.log(`no user ID was provided inside \`highestMemberRole()\``)
    }
    else if(!guildid) {
        return console.log(`no guild ID provided inside \`highestMemberRole()\``)
    }
    else if(!client.guilds.cache.get(guildid)) {
        return console.log(`An invalid guild ID was provided inside \`highestMemberRole()\``)
    }
    else if(!await client.guilds.cache.get(guildid).members.fetch(userid).catch(err => {})) {
        console.log(`An invalid user ID was provided inside \`highestMemberRole()\``)
    }
    else {
        return client.guilds.cache.get(guildid).members.fetch(userid).then(memberlol => {
            return memberlol.roles.highest.position
    }).catch(err => {
        return console.log(`Something went wrong! ` + err)
    })
}
}
function highestGuildRolePosition(guildid, client, event) {
    if(!client) {
        console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
    else if(!event) {
        console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
    else if(!guildid) {
        return console.log(`no guild ID was provided inside \`highestGuildRolePosition()\``)
    }
    else if(!client.guilds.cache.get(guildid)) {
        return console.log(`An invalid guild ID was provided inside \`highestGuildRolePosition()\``)
    }
    else {
        return client.guilds.cache.get(guildid).roles.highest.position
    }
}
 function highestGuildRoleID(guildid, client, event) {
    if(!client) {
        console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
    else if(!event) {
        console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
    else if(!guildid) {
        return console.log(`no guild ID was provided inside \`highestGuildRolePosition()\``)
    }
    else if(!client.guilds.cache.get(guildid)) {
        return console.log(`An invalid guild ID was provided inside \`highestGuildRolePosition()\``)
    }
    else {
        return client.guilds.cache.get(guildid).roles.highest.id
    }
}
 async function highestMemberRoleID(userid, guildid, client, event) {
    if(!client) {
        console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
    else if(!event) {
        console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
    else if(!userid) {
        return console.log(`no user ID was provided inside \`highestMemberRole()\``)
    }
    else if(!guildid) {
        return console.log(`no guild ID provided inside \`highestMemberRole()\``)
    }
    else if(!client.guilds.cache.get(guildid)) {
        return console.log(`An invalid guild ID was provided inside \`highestMemberRole()\``)
    }
    else if(!await client.guilds.cache.get(guildid).members.fetch(userid).catch(err => {})) {
        console.log(`An invalid user ID was provided inside \`highestMemberRole()\``)
    }
    else {
        return client.guilds.cache.get(guildid).members.fetch(userid).then(userlol => {
     return userlol.roles.highest.id
    })
}
}
 async function kickMember(memberid, reason, guildid, client, event) {
    if(!client) {
        console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
    else if(!event) {
        console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
    else if(!memberid) {
        return console.log(`No __member__ ID is provided inside \`banMember()\``)
    }
    else if(!guildid) {
        return console.log(`No guild ID is provided inside \`kickMember()\``)
    }
    else if(!client.guilds.cache.get(guildid)) {
        return console.log(`An invalid guild ID was provided into \`kickMember()\``)
    }
    else if(!await client.guilds.cache.get(guildid).members.fetch(memberid).catch(err => {})) {
        return console.log(`An invalid __member__ ID was provided into \`kickMember()\``)
    }
    else if(!client.guilds.cache.get(guildid).me.hasPermission('KICK_MEMBERS')) {
        return console.log(`Please make sure the \`KICK_MEMBERS\` permissions is enabled in one of my roles in order to use this command.`)
    }
    else {
        client.guilds.cache.get(guildid).members.fetch(memberid).then(async (jaja) => {
    await jaja.kick(((!reason) ? '' : reason))
        })
    }

}
async function addReaction(reaction, messageid, channelid, guildid, client, event) {
    if(!client) {
        console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
    else if(!event) {
        console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
    else if(!reaction) {
return console.log(`no reactions were provided inside \`addReactions()\``)
    }
    else if(!messageid) {
        return console.log(`no message ID was provided inside \`addReactions()\``)
    }
    else if(!channelid) {
        return console.log(`no channel ID was provided inside \`addReactions()\``)
    }
    else if(!guildid) {
        return console.log(`:warninig: - no guild ID was provided inside \`addReactions()\``)
    }
    else if(!client.guilds.cache.get(guildid)) {
        return console.log(`An invalid guild ID was provided inside \`addReaction()\``)
    }
    else if(!client.guilds.cache.get(guildid).channels.cache.get(channelid)) {
        return console.log(`An invalid channel ID was provided inside \`addReaction()\``)
    }
    else if(!await client.guilds.cache.get(guildid).channels.cache.get(channelid).messages.fetch(messageid).catch(err => {})) {
        return console.log(`An invalid message ID was provided inside \`addReaction()\``)
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
            return console.log(`Something went wrong! You maybe provided an invalid default emoji/emote ID. ` + err)
    })
    }
}
 function findUser(query, client, event) {
    if(!client) {
        console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
    else if(!event) {
        console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
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
        console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
    else if(!event) {
        console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
else if(!guildid) {
    return console.log(`no guild ID provided inside \`findMember()\``)
}
else if(!client.guilds.cache.get(guildid)) {
    return console.log(`An invalid guild ID was provided inside \`findMember()\``)
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
        console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
    else if(!event) {
        console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
    else if(!memberid) {
        return console.log(`no member ID is provided inside \`fetchMember()\``)
    }
    else if(!guildid) {
        return console.log(`no guild ID was provided inside \`fetchMember()\``)
    }
    else if(!client.guilds.cache.get(guildid)) {
        return console.log(`An invalid guild ID was provided inside \`fetchMember()\``)
    }
    else {
        return client.guilds.cache.get(guildid).members.fetch(memberid)
    }
}
function fetchUser(userid, client, event) {
    if(!client) {
        return console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
    else if(!event) {
        return console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
    else if(!userid) {
        return console.log(`no user ID was provided inside \`fetchUser()\``)
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
      return console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
      }
  else if(!event) {
      return console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    }
  else if(!userid) {
    return console.log('No user ID was provided inside \`changeNickname()\`')
  }
  else if(!newnickname) {
    return console.log('No new nickname was provided inside \`changeNickname()\`')
  }
  else if(!guildid) {
    return console.log('No guild ID was provided inside \`changeNickname()\`')
  }
  else if(!client.guilds.cache.get(guildid)) {
    return console.log('An invalid guild ID was provided inside \`changeNickname()\`')
  }
  else if(!await client.guilds.cache.get(guildid).members.fetch(userid).catch(err => {})) {
    return console.log('An invalid member ID was provided inside \`changeNickname()\`')
  }
  else {
   return client.guilds.cache.get(guildid).members.fetch(userid).then(usuario => {
     usuario.setNickname(newnickname)
   }).catch(err => {
     console.log('Something went wrong when trying to execute changeNickname(): ' + err)
   })
  }
}
function guildLeave(guildid, client, event) {
  if(!client) {
      return console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
      }
  else if(!event) {
      return console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    }
    else if(!guildid) {
      return console.log('No guild ID is provided inside \`guildLeave()\`')
    }
    else if(!client.guilds.cache.get(guildid)) {
      return console.log('An invalid guild ID was provided inside \`guildLeave()\`')
    }
    else {
      client.guilds.cache.get(guildid).leave()
    }
}
function createRole(rolename, rolecolor, guildid, hoisting, mentionable, permissions, position, reason, client, event) {
  if(!client) {
      return console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
      }
  else if(!event) {
      return console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    }
  else if(!rolename) {
return console.log('No role NAME was provided inside \`createRole()\`')
  }
  else if(!guildid) {
return console.log('No guild ID was provided inside \`createRole()\`')
  }
  else if(!client.guilds.cache.get(guildid)) {
return console.log('An invalid guild ID was provided inside \`createRole()\`');
  }
  else if(!mentionable) {
    return console.log('Please put either true or false into mentionable field, (Otherwise it will give you an error later.)')
  }
  else if(!hoisting) {
    return console.log('Please put either true or false into hoisting field, (Otherwise it will give you an error later.)')
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
      return console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
      }
  else if(!event) {
      return console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    }
  else if(!roleid) {
    return console.log('No role ID was provided inside \`usersWithRole()\`')
  }
  else if(!guildid) {
    return console.log('No guild ID was provided inside \`usersWithRole()\`')
  }
  else if(!client.guilds.cache.get(guildid)) {
    return console.log('An invalid guild ID was provided inside \`usersWithRole()\`')
  }
  else if(!client.guilds.cache.get(guildid).roles.cache.get(roleid)) {
    return console.log('An invalid role ID was provided inside \`usersWithRole()\`')
  }
  else {
    return client.guilds.cache.get(guildid).roles.cache.get(roleid).members.map(x => ((!option) ? `<@!${x.user.id}>` : ((option == 'ids') ? x.user.id : ((option == 'names') ? x.user.username : `<@!${x.user.id}>`)))).join((!separator) ? ' , ' : separator)
  }
}
 function rolePosition(roleid, guildid, client, event) {
  if(!client) {
      return console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
      }
  else if(!event) {
      return console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    }
  else if(!roleid) {
    return console.log('no role ID was provided inside \`rolePosition()\`')
  }
  else if(!guildid) {
    return console.log('no guild ID was provided inside \`rolePosition()\`')
  }
  else if(!client.guilds.cache.get(guildid)) {
    return console.log('An invalid guild ID was provided inside \`rolePosition()\`')
  }
  else if(!client.guilds.cache.get(guildid).roles.cache.get(roleid)) {
    return console.log('An invalid role ID was provided inside \`rolePosition()\`')
  }
  else {
    return client.guilds.cache.get(guildid).roles.cache.get(roleid).position
  }
}
function channelPosition(channelid, guildid, client, event) {
  if(!client) {
      return console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
      }
  else if(!event) {
      return console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    }
  else if(!channelid) {
    return console.log('no channel ID is provided inside \`channelPosition()\`')
  }
  else if(!guildid) {
    return console.log('no guild ID is provided inside \`channelPosition()\`')
  }
  else if(!client.guilds.cache.get(guildid)) {
    return console.log('An invalid guild ID was provided inside \`channelPosition()\`')
  }
  else if(!client.guilds.cache.get(guildid).channels.cache.get(channelid)) {
    return console.log('An invalid channel ID was provided inside \`channelPosition()\`')
  }
  else {
    return client.guilds.cache.get(guildid).channels.cache.get(channelid).rawPosition
  }
}
function roleExists(roleid, guildid, client, event) {
  if(!client) {
      return console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
      }
  else if(!event) {
      return console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    }
  else if(!roleid) {
    return console.log('no role ID is provided inside \`roleExists()\`')
  }
  else if(!guildid) {
    return console.log('no guild ID is provided inside \`roleExists()\`')
  }
  else if(!client.guilds.cache.get(guildid)) {
    return console.log('An invalid guild ID was provided inside \`roleExists()\`')
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
      return console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
      }
  else if(!event) {
      return console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    }
  else if(!channelid) {
    return console.log('no channel ID is provided inside \`channelExists()\`')
  }
  else if(!guildid) {
    return console.log('no guild ID is provided inside \`channelExists()\`')
  }
  else if(!client.guilds.cache.get(guildid)) {
    return console.log('An invalid guild ID was provided inside \`channelExists()\`')
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
      return console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
      }
  else if(!event) {
      return console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
    }
  else if(!guildid) {
    return console.log('No guild ID was provided inside \`findChannel()\`')
  }
  else if(!client.guilds.cache.get(guildid)) {
    return console.log('An invalid guild ID was provided inside \`findChannel()\`')
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
        return console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
    else if(!event) {
        return console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
      }
    else if(!guildid) {
      return console.log('No guild ID was provided inside \`findRole()\`')
    }
    else if(!client.guilds.cache.get(guildid)) {
      return console.log('An invalid guild ID was provided inside \`findRole()\`')
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
          return console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
          }
      else if(!event) {
          return console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
      else if(!channelid) {
        return console.log('no channel ID was provided inside \`channelNSFW()\`')
      }
      else if(!guildid) {
        return console.log('no guild ID was provided inside \`channelNSFW()\`')
      }
      else if(!client.guilds.cache.get(guildid)) {
        return console.log('An invalid guild ID was provided inside \`channelNSFW()\`')
      }
      else if(!client.guilds.cache.get(guildid).channels.cache.get(channelid)) {
        return console.log('An invalid channel ID was provided inside \`channelNSFW()\`')
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
          return console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
          }
      else if(!event) {
          return console.log(`Please put the valid parameters in the function: (client and event), function(thing, etc, client, event) example: channelSendMessage(channelid, content, client, message) - message is the event where function is used.`)
        }
      else if(!channelname) {
        return console.log('no channel name was provided inside \`createChannel()\`')
      }
      else if(!guildid) {
        return console.log('no guild ID was provided inside \`createChannel()\`')
      }
      else if(!client.guilds.cache.get(guildid)) {
        return console.log('An invalid guild ID was provided inside \`createChannel()\`')
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
