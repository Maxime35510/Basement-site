const ticketsystem = 
`
$nomention
    $c[Restrictions: Ticket Disabled]
  $c[If the system is disabled, then the command won't work and it will return the error after the ";"]
$onlyIf[$getServerVar[ticketsystem]!=no;Sorry! the ticket system is disabled on this server, tell an admin to type +enable-tickets to enable it!]
    $c[Restrictions: Permissions]
  $c[If the bot don't have Manage Channels permissions to create the ticket channel, it will return the error after the ";"]
$onlyBotPerms[managechannels;Sorry! I don't have enough permissions to create the ticket, tell an admin to give me "manage channels" permissions!]
    $c[Restrictions: Tickets limit]
  $c[If the user already has a ticket created, then it will return an error]
 
$c[Checkers: variables]
$varExistError[ticketsystem;Please create the variable "ticketsystem" in the app, with value "no", of course without quote symbols]
$varExistError[tickets;Please create the variable "tickets" in the app, with value "0", of course without quote symbols]
$varExistError[ticketcategory;Please create the variable "ticketcategory" in the app, without any value]
$varExistError[ticketstaff;Please create the variable "ticketstaff" in the app, without any value]
$varExistError[userticket;Please create the variable "userticket" in the app, without any value]
 
$if[$channelExists[$getUserVar[userticket]]==true]
$if[$checkContains[$channelTopic[$getUserVar[userticket]];Closed & Saved]==false]
$onlyIf[2==5;Hey **$username[$authorID]**! you already own a open ticket, please move to <#$getUserVar[userticket]>] $c[don't delete this, it's actually important]
$endif
$endif
 
    $c[This creates the ticket]
$async[ticket1]
  $if[$getServerVar[ticketcategory]==]
     $createChannel[ticket-00$sum[$getServerVar[tickets];1];text]
  $else
     $createChannel[ticket-00$sum[$getServerVar[tickets];1];text;$getServerVar[ticketcategory]]
  $endif
$endasync
 
$await[ticket1]
 
    $c[This sends an embed into the ticket]
$setUserVar[userticket;$channelID[ticket-00$sum[$getServerVar[tickets];1]]]
$useChannel[$channelID[ticket-00$sum[$getServerVar[tickets];1]]]
    $c[And the embed is the one below]
$author[New ticket!]
$color[ed3491]
$thumbnail[https://cdn.discordapp.com/attachments/899671061933740042/899676586691923988/52722-ticket.png]
$description[
Hey <@$authorID>, this is your ticket!
 
Please, state down below your whole problem,
provide any detail you can so the staff can help you faster. 
Our staff team will answer soon as possible!
 
Please run *+close* when your problem has been solved
or use the "close" red button below.
 
Be patient till a staff check your ticket!
 
🔒 **Close**
You or the staff can use this button to close the ticket.
 
✋ **Claim**
The staff can use this button to claim the ticket.
Who claims the ticket will be the only one able to close it.
 
> Ticket subject: $replaceText[$replaceText[%$checkCondition[$message==]%;%true%;*Not provided*!;1];%false%;*$message*;1]]
$footer[$username[$botID] ticket system]
$addTimestamp
$c[This adds the buttons]
$addButton[no;closeticket;Close;danger;no;🔒]
$addButton[no;claimticket;Claim (staff);secondary;no;✋]
 
$c[This sends an embed saying that the ticket has been created]
$sendEmbedMessage[$channelID;;;;**$username[$authorID]#$discriminator[$authorID]** You successfully created the ticket <#$channelID[ticket-00$sum[$getServerVar[tickets];1]]>!;ed3491;;;$username[$botID] ticket system;;$c[thumbnail];;;no]
 
$c[This changes the ticket description, don't touch this, or the code may break]
 $if[$getServerVar[ticketcategory]!=]
     $modifyChannel[$channelID[ticket-00$sum[$getServerVar[tickets];1]];!unchanged;Ticket opened by "$username[$authorID]#$discriminator[$authorID]";no;!unchanged]
  $else
     $modifyChannel[$channelID[ticket-00$sum[$getServerVar[tickets];1]];!unchanged;Ticket opened by "$username[$authorID]#$discriminator[$authorID]";no;!unchanged;$getServerVar[ticketcategory]]
  $endif
 
$c[This sets the ticket permissions]
$modifyChannelPerms[$channelID[ticket-00$sum[$getServerVar[tickets];1]];-readmessages;$guildID] $c[This deny the permission to view the ticket to everyone]
$modifyChannelPerms[$channelID[ticket-00$sum[$getServerVar[tickets];1]];+readmessages;$authorID] $c[This allows the permission to view the ticket to the user that creates the ticket]
$if[$roleExists[$getServerVar[ticketstaff]]==true] $c[This checks if the staff role has been set... and if it exists then...]
$modifyChannelPerms[$channelID[ticket-00$sum[$getServerVar[tickets];1]];+readmessages;$getServerVar[ticketstaff]] $c[This allows the permission to view the ticket to the staff role]
$endif
 
$c[This sets the tickets amount variable, it's more important than you think so don't delete it :)]
 
$setServerVar[tickets;$sum[$getServerVar[tickets];1]]
`;

const ticketsystem2 =
`
$nomention
$c[IMPORTANT: Enable BDscript 2 mode or it may not work!]
$c[
Stuff you need to know:
- This system won't work if your bot don't have "Manage channels" perms, this is obvious!
- This code may have a few minor bugs that i wasn't able to fix, however these are not dangerous
- You can't save the ticket transcript in a file, that's not possible
- You can't make the ticket close automaticly after X amount of time of inactivity
- Once you click the "Just close" button, the ticket will close without any warning or timer, as it's a "confirmation" button
- Don't edit the code functions, you can edit the content on the embeds but don't edit any sensitive function
]
$c[
Variables required:
"ticketsystem" with value: "no"
"tickets" with value: "0"
"ticketcategory" without value
"ticketstaff" without value
"userticket" without value
]
 
$c[Checkers: variables]
$varExistError[ticketsystem;Please create the variable "ticketsystem" in the app, with value "no", of course without quote symbols]
$varExistError[tickets;Please create the variable "tickets" in the app, with value "0", of course without quote symbols]
$varExistError[ticketcategory;Please create the variable "ticketcategory" in the app, without any value]
$varExistError[ticketstaff;Please create the variable "ticketstaff" in the app, without any value]
$varExistError[userticket;Please create the variable "userticket" in the app, without any value]
 
$c[
This system may be updated again in the future,
to know about next updates or bug fixes just periodically check out the channel,
or just subscribe and enable the bell :)
You can also DM me, Berk#3506 
]
$c[ EDITABLE SETTINGS ]
 
$var[prefix;+] $c[YOUR BOT PREFIX, IN THIS CASE I USED "+" AS EXAMPLE]
$var[color;ed3491] $c[ANY HEXCODE COLOUR, I USED "#ed3491" AS EXAMPLE]
 
$c[ EDITABLE SETTINGS ]
 
$if[$customID==closeticket]
$modifyChannelPerms[$channelID;-readmessages;$guildID]
$removeComponent[closeticket]
$removeComponent[claimticket]
$addButton[no;justclose;Just close;danger;no;🔐]
$if[$checkContains[$channelTopic;Closed & Saved]==false]
$addButton[no;closeandsave;Close & Save;primary;no;💾]
$else
$addButton[no;closeandsave;Closed & Saved;primary;yes;💾]
$addButton[no;openagain;Open Ticket;success;no;🔑]
$endif
$addButton[no;justcancel;Cancel;secondary;no;🔖]
 
$author[Are you sure? pick an option]
$description[
Hey **$username[$authorID]#$discriminator[$authorID]** do you really want to close the ticket?
 
🔐 **Just close**
Just close the ticket, without saving any content inside it, this action can't be undone.
💾 **Close & Save**
Close the ticket, but save the channel, it removes the user permissions to view the ticket.
🔖 **Cancel**
Don't close the ticket.
]
$thumbnail[https://cdn.discordapp.com/attachments/899671061933740042/899676586691923988/52722-ticket.png]
$color[$var[color]]
$footer[$username[$botID] ticket system]
$endif
 
$if[$customID==justclose]
 $if[$checkContains[$channelTopic;claimed]==false]
$deleteChannels[$channelID]
 $else
   $if[$checkContains[$channelTopic;claimed by $username[$authorID]#$discriminator[$authorID]]==true]
     $deleteChannels[$channelID]
   $else
     $sendEmbedMessage[$channelID;<@$authorID>;;;Sorry, but another staff already claimed this ticket, only the staff that claimed the ticket can close it.;$var[color];Action denied;;$username[$botID] ticket system;;https://cdn.discordapp.com/attachments/899671061933740042/899676586691923988/52722-ticket.png;;yes;no]
   $endif
  $endif
$endif
 
$if[$customID==closeandsave]
$modifyChannelPerms[$channelID;-readmessages;$guildID]
$if[$getServerVar[ticketstaff]==]
$onlyPerms[kick;**$username** | Sorry, you need 'kick' permissions to execute this! or you need the staff role, which isn't set (tell an admin to do $var[prefix]set-staff-role <role>!)]
$else
$onlyIf[$hasRole[$authorID;$getServerVar[ticketstaff]]==true;**$username** | Sorry, only the staff can use this button!]
$endif
  $if[$checkContains[$channelTopic;claimed]==false]
      $modifyChannelPerms[$channelID;-readmessages;$findUser[$splitText[2]]]
      $removeComponent[justcancel]
      $sendEmbedMessage[$channelID;<@$authorID>;;;This ticket has been closed & saved, the user don't have access to it anymore! i'll save this channel till you use the "just close" button.;$var[color];Ticket Closed;;$username[$botID] ticket system;;https://cdn.discordapp.com/attachments/899671061933740042/899676586691923988/52722-ticket.png;;yes;no]
   $if[$getServerVar[ticketcategory]==]
$modifyChannel[$channelID;!unchanged;$channelTopic | Ticket Closed & Saved;no;!unchanged]
   $else
$modifyChannel[$channelID;!unchanged;$channelTopic | Ticket Closed & Saved;no;!unchanged;$getServerVar[ticketcategory]]
   $endif
$onlyBotPerms[managechannels;Please give me managechannels permissions, otherwise i can't take actions in the ticket.]
  $editButton[closeandsave;Closed & Saved;primary;yes;💾]
  $addButton[no;openagain;Open Ticket;success;no;🔑]
$author[Ticket Solved]
$description[
Here are some options that you, the staff, can use.
 
🔐 **Just close**
Just close the ticket, without saving any content inside it, this action can't be undone.
🔑 **Open Ticket**
Open the ticket, the user will be able to view the ticket again.
 
> **This ticket has been closed & saved by $username[$authorID]#$discriminator[$authorID]**!]
$thumbnail[https://cdn.discordapp.com/attachments/899671061933740042/899676586691923988/52722-ticket.png]
$color[$var[color]]
$footer[$username[$botID] ticket system]
  $else
 $if[$checkContains[$channelTopic;claimed by $username[$authorID]#$discriminator[$authorID]]==true]
     $modifyChannelPerms[$channelID;-readmessages;$findUser[$splitText[2]]]
     $sendEmbedMessage[$channelID;<@$authorID>;;;This ticket has been closed & saved, the user don't have access to it anymore! i'll save this channel till you use the "just close" button.;$var[color];Ticket Closed;;$username[$botID] ticket system;;https://cdn.discordapp.com/attachments/899671061933740042/899676586691923988/52722-ticket.png;;yes;no]
   $if[$getServerVar[ticketcategory]==]
$modifyChannel[$channelID;!unchanged;$channelTopic | Ticket Closed & Saved;no;!unchanged]
   $else
$modifyChannel[$channelID;!unchanged;$channelTopic | Ticket Closed & Saved;no;!unchanged;$getServerVar[ticketcategory]]
   $endif
$onlyBotPerms[managechannels;Please give me managechannels permissions, otherwise i can't take actions in the ticket.]
$editButton[closeandsave;Closed & Saved;primary;yes;💾]
$addButton[no;openagain;Open Ticket;success;no;🔑]
$author[Ticket Solved]
$description[
Here are some options that you, the staff, can use.
 
🔐 **Just close**
Just close the ticket, without saving any content inside it, this action can't be undone.
🔑 **Open Ticket**
Open the ticket, the user will be able to view the ticket again.
 
> **This ticket has been closed & saved by $username[$authorID]#$discriminator[$authorID]**!]
$thumbnail[https://cdn.discordapp.com/attachments/899671061933740042/899676586691923988/52722-ticket.png]
$color[$var[color]]
$footer[$username[$botID] ticket system]
 $else
     $sendEmbedMessage[$channelID;<@$authorID>;;;Sorry, but another staff already claimed this ticket, only the staff that claimed the ticket can close it.;$var[color];Action denied;;$username[$botID] ticket system;;https://cdn.discordapp.com/attachments/899671061933740042/899676586691923988/52722-ticket.png;;yes;no]
  $endif
 $endif
$endif
 
$if[$customID==justcancel]
$modifyChannelPerms[$channelID;-readmessages;$guildID]
$author[Ticket Panel]
$description[
Please, state down below your whole problem,
provide any detail you can so the staff can help you faster. 
Our staff team will answer soon as possible!
 
Please run *$var[prefix]close* when your problem has been solved
or use the "close" red button below.
 
Be patient till a staff check your ticket!
 
🔒 **Close**
You or the staff can use this button to close the ticket.
 
✋ **Claim**
The staff can use this button to claim the ticket.
Who claims the ticket will be the only one able to close it.
]
$thumbnail[https://cdn.discordapp.com/attachments/899671061933740042/899676586691923988/52722-ticket.png]
$color[$var[color]]
$footer[$username[$botID] ticket system]
$removeComponent[justclose]
$removeComponent[closeandsave]
$removeComponent[justcancel]
$addButton[no;closeticket;Close;danger;no;🔒]
$if[$checkContains[$channelTopic;claimed]==false]
$addButton[no;claimticket;Claim (staff);secondary;no;✋]
$else
$addButton[no;claimticket;Claimed;secondary;yes;✋]
$endif
$endif
 
$if[$customID==claimticket]
$modifyChannelPerms[$channelID;-readmessages;$guildID]
$if[$getServerVar[ticketstaff]==]
$onlyPerms[kick;**$username** | Sorry, you need 'kick' permissions to execute this! or you need the staff role, which isn't set (tell an admin to do $var[prefix]set-staff-role <role>!)]
$else
$onlyIf[$hasRole[$authorID;$getServerVar[ticketstaff]]==true;**$username** | Sorry, only the staff can use this button!]
$endif
$author[Ticket Panel]
$description[
Please, state down below your whole problem,
provide any detail you can so the staff can help you faster. 
Our staff team will answer soon as possible!
 
Please run *$var[prefix]close* when your problem has been solved
or use the "close" red button below.
 
Be patient till a staff check your ticket!
 
🔒 **Close**
You or the staff can use this button to close the ticket.
 
✋ **Claim**
The staff can use this button to claim the ticket.
 
> **This ticket has been claimed by $username[$authorID]#$discriminator[$authorID]**!]
$thumbnail[https://cdn.discordapp.com/attachments/899671061933740042/899676586691923988/52722-ticket.png]
$color[$var[color]]
$footer[$username[$botID] ticket system]
$editButton[claimticket;Claimed;secondary;yes;✋]
$if[$getServerVar[ticketcategory]==]
$modifyChannel[$channelID;!unchanged;$channelTopic | claimed by $username[$authorID]#$discriminator[$authorID];no;!unchanged]
$else
$modifyChannel[$channelID;!unchanged;$channelTopic | claimed by $username[$authorID]#$discriminator[$authorID];no;!unchanged;$getServerVar[ticketcategory]]
$endif
$onlyBotPerms[managechannels;Please give me managechannels permissions, otherwise i can't take actions in the ticket.]
$endif
 
$if[$customID==openagain]
$modifyChannelPerms[$channelID;-readmessages;$guildID]
$if[$getServerVar[ticketstaff]==]
$onlyPerms[kick;**$username** | Sorry, you need 'kick' permissions to execute this! or you need the staff role, which isn't set (tell an admin to do $var[prefix]set-staff-role <role>!)]
$else
$onlyIf[$hasRole[$authorID;$getServerVar[ticketstaff]]==true;**$username** | Sorry, only the staff can use this button!]
$endif
$author[Ticket Panel]
$description[
Please, state down below your whole problem,
provide any detail you can so the staff can help you faster. 
Our staff team will answer soon as possible!
 
Please run *$var[prefix]close* when your problem has been solved
or use the "close" red button below.
 
Be patient till a staff check your ticket!
 
🔒 **Close**
You or the staff can use this button to close the ticket.
 
✋ **Claim**
The staff can use this button to claim the ticket.
Who claims the ticket will be the only one able to close it.
]
$thumbnail[https://cdn.discordapp.com/attachments/899671061933740042/899676586691923988/52722-ticket.png]
$color[$var[color]]
$footer[$username[$botID] ticket system]
$editButton[closeandsave;Close & Save;primary;no;💾]
$removeComponent[openagain]
$sendEmbedMessage[$channelID;<@$authorID>;;;This ticket is now open, the user has access to it.;$var[color];Ticket Open;;$username[$botID] ticket system;;https://cdn.discordapp.com/attachments/899671061933740042/899676586691923988/52722-ticket.png;;yes;no]
$modifyChannelPerms[$channelID;+readmessages;$findUser[$splitText[2]]]
$modifyChannelPerms[$channelID;-readmessages;$guildID]
$if[$roleExists[$getServerVar[ticketstaff]]==true]
$modifyChannelPerms[$channelID;+readmessages;$getServerVar[ticketstaff]]
$endif
$endif
 
$textSplit[$channelTopic;"]
 
$if[$customID==openticket]
$nomention
$if[$channelExists[$getUserVar[userticket]]==true]
$if[$checkContains[$channelTopic[$getUserVar[userticket]];Closed & Saved]==false]
$onlyIf[2==5;] $c[don't delete this, it's actually important]
$endif
$endif
    $c[Restrictions]
  $c[If the system is disabled]
$onlyIf[$getServerVar[ticketsystem]!=no;Sorry! the ticket system is disabled on this server, tell an admin to type $var[prefix]enable-tickets to enable it!]
  $c[If the bot don't have Manage Channels permissions to create the ticket channel, it will return the error after the ";"]
$onlyBotPerms[managechannels;Sorry! I don't have enough permissions to create the ticket, tell an admin to give me "manage channels" permissions!]
    $c[This creates the ticket]
$async[ticket1]
  $if[$getServerVar[ticketcategory]==]
     $createChannel[ticket-00$sum[$getServerVar[tickets];1];text]
  $else
     $createChannel[ticket-00$sum[$getServerVar[tickets];1];text;$getServerVar[ticketcategory]]
  $endif
$endasync
 
$await[ticket1]
 
 $if[$getServerVar[ticketcategory]==]
     $modifyChannel[$channelID[ticket-00$sum[$getServerVar[tickets];1]];!unchanged;Ticket opened by "$username[$authorID]#$discriminator[$authorID]";no;!unchanged]
  $else
     $modifyChannel[$channelID[ticket-00$sum[$getServerVar[tickets];1]];!unchanged;Ticket opened by "$username[$authorID]#$discriminator[$authorID]";no;!unchanged;$getServerVar[ticketcategory]]
  $endif
 
$modifyChannelPerms[$channelID[ticket-00$sum[$getServerVar[tickets];1]];-readmessages;$guildID] $c[This deny the permission to view the ticket to everyone]
$modifyChannelPerms[$channelID[ticket-00$sum[$getServerVar[tickets];1]];+readmessages;$authorID] $c[This allows the permission to view the ticket to the user that creates the ticket]
$if[$roleExists[$getServerVar[ticketstaff]]==true] $c[This checks if the staff role has been set... and if it exists then...]
$modifyChannelPerms[$channelID[ticket-00$sum[$getServerVar[tickets];1]];+readmessages;$getServerVar[ticketstaff]] $c[This allows the permission to view the ticket to the staff role]
$endif
 
$setUserVar[userticket;$channelID[ticket-00$sum[$getServerVar[tickets];1]]]
$sendEmbedMessage[$channelID[ticket-00$sum[$getServerVar[tickets];1]];<@$authorID>;;;Hey **$username[$authorID]#$discriminator[$authorID]**, this is your ticket!
 
Please, state down below your whole problem,
provide any detail you can so the staff can help you faster.
Our staff team will answer soon as possible!
 
Please run $var[prefix]close when your problem has been solved
or use the "close" red button below.
 
Be patient till a staff check your ticket!
 
🔒 **Close**
You or the staff can use "$var[prefix]close" to close the ticket
💻 **Panel**
The staff can open the ticket panel with "$var[prefix]panel";$var[color];New ticket!;;$username[$botID] ticket system;;https://cdn.discordapp.com/attachments/899671061933740042/899676586691923988/52722-ticket.png;;yes;no]
 
 
 
$setServerVar[tickets;$sum[$getServerVar[tickets];1]]
$endif
 
$suppressErrors[Hey, you just discovered a bug...
For the Bot Developer:
- To know the exact error message just remove this line of code (suppress errors) and execute the stuff again.
For the Users using the bot:
- Hey, just let the bot owner know about this issue if you have some way to contact them :)]
 
$c[a command of Berk#3506 for the channel "Bot Designer For Discord: Guide"]
$c[If you're going to share the code for the public, don't remove/edit the comment above]
$c[Get more exclusive codes at https://dsc.chat/codes]
`;

const ticketsystem3 =
`

`;