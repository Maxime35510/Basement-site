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