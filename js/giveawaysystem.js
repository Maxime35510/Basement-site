const giveawaysystem = 
`
$nomention
$c[config below]
$var[color;367fff]
$var[prefix;io?] $c[<== replace "(Your bot prefix here)" with your bot prefix]
$var[perms;ManageServer] $c[The permission the user needs to create a giveaway]
$c[config above]
 
$c[DON'T FORGET TO ENABLE BDSCRIPT 2]
$c[Code made by Berk#3506 | Submitted at https://dsc.chat/codes - the biggest BDFD codes sharing server.]
$onlyIf[$guildID!=;This command only works on servers.]
$onlyBotPerms[embedlinks;💥 Hey, it seems i don't have permissions to attach embeds (EMBED_LINKS)]
$onlyIf[$or[$checkUserPerms[$authorID;$var[perms]]==true;$hasRole[$authorID;$roleID[giveaways]]==true;$hasRole[$authorID;$roleID[Giveaways]]==true]==true;💥 You must have the $var[perms] permission, or a role called "Giveaways", to use this command!]
$onlyIf[$message[1]!=;Invalid format! usage: $var[prefix]start <time in **s**econds/**m**inutes/**h**ours, example: **40m**, optional> {prize, needed} <role requirement (mention), optional>]
$if[$and[$checkContains[$message[1];m;s;h]==true;$isNumber[$replaceText[$replaceText[$replaceText[$message[1];m;;1];s;;1];h;;1]]==true]==true]
$onlyIf[$replaceText[$noMentionMessage;$message[1];;1]!=;Invalid format! usage: $var[prefix]start <time in **s**econds/**m**inutes/**h**ours, example: **40m**, optional> {prize, needed} <role requirement (mention), optional>]
$if[$checkContains[$message[1];s]$checkContains[$message[1];m]$checkContains[$message[1];h]==truefalsefalse]
$var[time;$sum[$getTimestamp;$replaceText[$replaceText[$message[1];m;;1];s;;1]]]
$else
$if[$checkContains[$message[1];h]==true]
$var[time;$sum[$getTimestamp;$multi[$replaceText[$replaceText[$replaceText[$message[1];m;;1];s;;1];h;;1];3600]]]
$else
$var[time;$sum[$getTimestamp;$multi[$replaceText[$replaceText[$message[1];m;;1];s;;1];60]]]
$endif
$endif
 
$var[msgid;$sendEmbedMessage[$channelID;;$replaceText[$replaceText[$message;$message[1];;1];<@&$findRole[$mentionedRoles[1]]>;;1];;**Hosted By:** <@$authorID> 
**Nº Winners:** 1
**Role required:** $replaceText[<@&$findRole[$mentionedRoles[1]]>;<@&>;None;1]
**Ends** <t:$var[time]:R>;$var[color];🎉 GIVEAWAY 🎉;;Giveaway Nº$sum[$getServerVar[gw_amount];1];;$serverIcon[$guildID];;yes;yes]]
 
$setServerVar[gw_amount;$sum[$getServerVar[gw_amount];1]]
$setServerVar[gw_req;$findRole[$mentionedRoles[1]];$var[msgid]]
$nomention
$if[$checkUserPerms[$botID;managemessages]==true]
$deletecommand
$endif
 
$if[$isSlash==true]
$ephemeral
$title[Successfully started!]
$embeddedURL[https://discord.com/oauth2/authorize?client_id=$botID&scope=bot%20applications.commands&permissions=$randomText[8;274878286912]]
$description[;Successfully started your giveaway of **$replaceText[$replaceText[$message;$message[1];;1];<@&$findRole[$mentionedRoles[1]]>;;-1]** in the channel <#$channelID>]
$color[$var[color]]
$footer[Powered by $username[$botID]]
$else
$endif
 
$addButton[no;gw_join$var[msgid];🎊 Join 🎊;success;no;;$var[msgid]]
$addButton[no;gw_end$var[msgid];End (Host);primary;no;;$var[msgid]]
 
$else
$onlyIf[$noMentionMessage!=;Invalid format! usage: $var[prefix]start <time in **s**econds/**m**inutes/**h**ours, example: **40m**, optional> {prize, needed} <role requirement (mention), optional> (you're forgetting the prize)]
 
$var[msgid;$sendEmbedMessage[$channelID;;$replaceText[$message;<@&$findRole[$mentionedRoles[1]]>;;-1];;**Hosted By:** <@$authorID> 
**Nº Winners:** 1
**Role required:** $replaceText[<@&$findRole[$mentionedRoles[1]]>;<@&>;None;1]
**Ends** undefinied!;$var[color];🎉 GIVEAWAY 🎉;;Giveaway Nº$sum[$getServerVar[gw_amount];1];;$serverIcon[$guildID];;yes;yes]]
 
$setServerVar[gw_amount;$sum[$getServerVar[gw_amount];1]]
$setServerVar[gw_req;$findRole[$mentionedRoles[1]];$var[msgid]]
$nomention
$if[$checkUserPerms[$botID;managemessages]==true]
$deletecommand
$endif
 
$if[$isSlash==true]
$ephemeral
$title[Successfully started!]
$embeddedURL[https://discord.com/oauth2/authorize?client_id=$botID&scope=bot%20applications.commands&permissions=$randomText[8;274878286912]]
$description[Successfully started your giveaway of **$replaceText[$message;<@&$findRole[$mentionedRoles[1]]>;;-1]** in the channel <#$channelID>]
$color[$var[color]]
$footer[Powered by $username[$botID]]
$else
$endif
 
$addButton[no;gw_join$var[msgid];🎊 Join 🎊;success;no;;$var[msgid]]
$addButton[no;gw_end$var[msgid];End (Host);primary;no;;$var[msgid]]
$endif 
$c[GIVEAWAY SYSTEM made by Berk#3506, the full style was customized by GWali#1115, the text split function provided by Natasquare#9698]
`;
const giveawaysystem2 = 
`
$c[configuration]
$var[perms;ManageServer] $c[The permission needed to end a giveaway, default is "admin" as you can see in the function, you can edit it with a valid permission, you can find the BDFD available permissions here: https://nilpointer-software.github.io/bdfd-wiki/resources/permissions.html]
 
$c[DON'T FORGET TO ENABLE BDSCRIPT 2]
$nomention
$if[$checkContains[$customID;gw_join]==true]
$if[$roleExists[$getServerVar[gw_req;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]]==true]
$if[$hasRole[$authorID;$getServerVar[gw_req;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]]==false]
$ephemeral $removeButtons
Your giveaway entry was **denied**, as you not have the <@&$getServerVar[gw_req;$replaceText[$customID;gw_join;;-1]]> role
$else
$if[$charCount[$getServerVar[gw_joins12;$replaceText[$customID;gw_join;;-1]]]<480]
$if[$checkContains[$getServerVar[gw_joins;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins2;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins3;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins4;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins5;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins6;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins7;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins8;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins9;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins10;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins11;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins12;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]];$authorID]==false]
$ephemeral $removeButtons
You've successfully joined this giveaway, now it has **$sum[$getServerVar[gw_joiners;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]];1]** participants!
$else
$ephemeral $removeButtons
You've already joined this giveaway, it has **$getServerVar[gw_joiners;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]** participants.
$endif
$endif
 
$if[$charCount[$getServerVar[gw_joins;$replaceText[$customID;gw_join;;-1]]]<480]
$if[$checkContains[$getServerVar[gw_joins;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins2;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins3;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins4;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins5;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins6;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins7;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins8;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins9;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins10;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins11;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins12;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]];$authorID]==false]
$setServerVar[gw_joins;$getServerVar[gw_joins;$replaceText[$customID;gw_join;;-1]]-$authorID;$replaceText[$customID;gw_join;;-1]]
$setServerVar[gw_joiners;$sum[$getServerVar[gw_joiners;$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]];1];$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]] 
$endif
$elseif[$charCount[$getServerVar[gw_joins2;$replaceText[$customID;gw_join;;-1]]]<480]
$if[$checkContains[$getServerVar[gw_joins;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins2;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins3;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins4;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins5;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins6;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins7;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins8;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins9;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins10;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins11;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins12;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]];$authorID]==false]
$setServerVar[gw_joins2;$getServerVar[gw_joins2;$replaceText[$customID;gw_join;;-1]]-$authorID;$replaceText[$customID;gw_join;;-1]]
$setServerVar[gw_joiners;$sum[$getServerVar[gw_joiners;$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]];1];$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]]
$endif
$elseif[$charCount[$getServerVar[gw_joins3;$replaceText[$customID;gw_join;;-1]]]<480]
$if[$checkContains[$getServerVar[gw_joins;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins2;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins3;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins4;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins5;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins6;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins7;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins8;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins9;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins10;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins11;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins12;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]];$authorID]==false]
$setServerVar[gw_joins3;$getServerVar[gw_joins3;$replaceText[$customID;gw_join;;-1]]-$authorID;$replaceText[$customID;gw_join;;-1]]
$setServerVar[gw_joiners;$sum[$getServerVar[gw_joiners;$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]];1];$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]]
$endif
$elseif[$charCount[$getServerVar[gw_joins4;$replaceText[$customID;gw_join;;-1]]]<480]
$if[$checkContains[$getServerVar[gw_joins;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins2;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins3;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins4;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins5;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins6;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins7;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins8;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins9;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins10;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins11;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins12;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]];$authorID]==false]
$setServerVar[gw_joins4;$getServerVar[gw_joins4;$replaceText[$customID;gw_join;;-1]]-$authorID;$replaceText[$customID;gw_join;;-1]]
$setServerVar[gw_joiners;$sum[$getServerVar[gw_joiners;$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]];1];$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]]
$endif
$elseif[$charCount[$getServerVar[gw_joins5;$replaceText[$customID;gw_join;;-1]]]<480]
$if[$checkContains[$getServerVar[gw_joins;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins2;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins3;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins4;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins5;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins6;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins7;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins8;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins9;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins10;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins11;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins12;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]];$authorID]==false]
$setServerVar[gw_joins5;$getServerVar[gw_joins5;$replaceText[$customID;gw_join;;-1]]-$authorID;$replaceText[$customID;gw_join;;-1]]
$setServerVar[gw_joiners;$sum[$getServerVar[gw_joiners;$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]];1];$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]]
$endif
$elseif[$charCount[$getServerVar[gw_joins6;$replaceText[$customID;gw_join;;-1]]]<480]
$if[$checkContains[$getServerVar[gw_joins;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins2;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins3;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins4;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins5;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins6;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins7;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins8;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins9;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins10;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins11;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins12;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]];$authorID]==false]
$setServerVar[gw_joins6;$getServerVar[gw_joins6;$replaceText[$customID;gw_join;;-1]]-$authorID;$replaceText[$customID;gw_join;;-1]]
$setServerVar[gw_joiners;$sum[$getServerVar[gw_joiners;$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]];1];$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]]
$endif
$elseif[$charCount[$getServerVar[gw_joins7;$replaceText[$customID;gw_join;;-1]]]<480]
$if[$checkContains[$getServerVar[gw_joins;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins2;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins3;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins4;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins5;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins6;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins7;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins8;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins9;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins10;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins11;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins12;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]];$authorID]==false]
$setServerVar[gw_joins7;$getServerVar[gw_joins7;$replaceText[$customID;gw_join;;-1]]-$authorID;$replaceText[$customID;gw_join;;-1]]
$setServerVar[gw_joiners;$sum[$getServerVar[gw_joiners;$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]];1];$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]]
$endif
$elseif[$charCount[$getServerVar[gw_joins8;$replaceText[$customID;gw_join;;-1]]]<480]
$if[$checkContains[$getServerVar[gw_joins;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins2;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins3;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins4;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins5;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins6;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins7;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins8;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins9;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins10;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins11;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins12;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]];$authorID]==false]
$setServerVar[gw_joins8;$getServerVar[gw_joins8;$replaceText[$customID;gw_join;;-1]]-$authorID;$replaceText[$customID;gw_join;;-1]]
$setServerVar[gw_joiners;$sum[$getServerVar[gw_joiners;$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]];1];$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]]
$endif
$elseif[$charCount[$getServerVar[gw_joins9;$replaceText[$customID;gw_join;;-1]]]<480]
$if[$checkContains[$getServerVar[gw_joins;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins2;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins3;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins4;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins5;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins6;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins7;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins8;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins9;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins10;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins11;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins12;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]];$authorID]==false]
$setServerVar[gw_joins9;$getServerVar[gw_joins9;$replaceText[$customID;gw_join;;-1]]-$authorID;$replaceText[$customID;gw_join;;-1]]
$setServerVar[gw_joiners;$sum[$getServerVar[gw_joiners;$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]];1];$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]]
$endif
$elseif[$charCount[$getServerVar[gw_joins10;$replaceText[$customID;gw_join;;-1]]]<480]
$if[$checkContains[$getServerVar[gw_joins;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins2;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins3;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins4;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins5;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins6;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins7;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins8;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins9;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins10;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins11;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins12;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]];$authorID]==false]
$setServerVar[gw_joins10;$getServerVar[gw_joins10;$replaceText[$customID;gw_join;;-1]]-$authorID;$replaceText[$customID;gw_join;;-1]]
$setServerVar[gw_joiners;$sum[$getServerVar[gw_joiners;$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]];1];$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]]
$endif
$elseif[$charCount[$getServerVar[gw_joins11;$replaceText[$customID;gw_join;;-1]]]<480]
$if[$checkContains[$getServerVar[gw_joins;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins2;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins3;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins4;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins5;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins6;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins7;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins8;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins9;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins10;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins11;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins12;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]];$authorID]==false]
$setServerVar[gw_joins11;$getServerVar[gw_joins11;$replaceText[$customID;gw_join;;-1]]-$authorID;$replaceText[$customID;gw_join;;-1]]
$setServerVar[gw_joiners;$sum[$getServerVar[gw_joiners;$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]];1];$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]]
$endif
$elseif[$charCount[$getServerVar[gw_joins12;$replaceText[$customID;gw_join;;-1]]]<480]
$if[$checkContains[$getServerVar[gw_joins;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins2;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins3;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins4;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins5;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins6;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins7;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins8;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins9;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins10;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins11;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins12;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]];$authorID]==false]
$setServerVar[gw_joins12;$getServerVar[gw_joins12;$replaceText[$customID;gw_join;;-1]]-$authorID;$replaceText[$customID;gw_join;;-1]]
$setServerVar[gw_joiners;$sum[$getServerVar[gw_joiners;$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]];1];$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]]
$endif
$elseif[$charCount[$getServerVar[gw_joins12;$replaceText[$customID;gw_join;;-1]]]>480]
$ephemeral $removeButtons
Hey, it seems like the limit of participants for giveaway has been reached, so you can't join this giveaway.
$endif
$endif
$else
$if[$charCount[$getServerVar[gw_joins12;$replaceText[$customID;gw_join;;-1]]]<480]
$if[$checkContains[$getServerVar[gw_joins;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins2;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins3;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins4;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins5;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins6;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins7;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins8;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins9;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins10;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins11;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins12;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]];$authorID]==false]
$ephemeral $removeButtons
You've successfully joined this giveaway, now it has **$sum[$getServerVar[gw_joiners;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]];1]** participants!
$else
$ephemeral $removeButtons
You've already joined this giveaway, it has **$getServerVar[gw_joiners;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]** participants.
$endif
$endif
 
$if[$charCount[$getServerVar[gw_joins;$replaceText[$customID;gw_join;;-1]]]<480]
$if[$checkContains[$getServerVar[gw_joins;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins2;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins3;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins4;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins5;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins6;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins7;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins8;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins9;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins10;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins11;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins12;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]];$authorID]==false]
$setServerVar[gw_joins;$getServerVar[gw_joins;$replaceText[$customID;gw_join;;-1]]-$authorID;$replaceText[$customID;gw_join;;-1]]
$setServerVar[gw_joiners;$sum[$getServerVar[gw_joiners;$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]];1];$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]] 
$endif
$elseif[$charCount[$getServerVar[gw_joins2;$replaceText[$customID;gw_join;;-1]]]<480]
$if[$checkContains[$getServerVar[gw_joins;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins2;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins3;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins4;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins5;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins6;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins7;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins8;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins9;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins10;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins11;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins12;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]];$authorID]==false]
$setServerVar[gw_joins2;$getServerVar[gw_joins2;$replaceText[$customID;gw_join;;-1]]-$authorID;$replaceText[$customID;gw_join;;-1]]
$setServerVar[gw_joiners;$sum[$getServerVar[gw_joiners;$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]];1];$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]]
$endif
$elseif[$charCount[$getServerVar[gw_joins3;$replaceText[$customID;gw_join;;-1]]]<480]
$if[$checkContains[$getServerVar[gw_joins;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins2;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins3;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins4;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins5;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins6;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins7;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins8;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins9;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins10;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins11;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins12;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]];$authorID]==false]
$setServerVar[gw_joins3;$getServerVar[gw_joins3;$replaceText[$customID;gw_join;;-1]]-$authorID;$replaceText[$customID;gw_join;;-1]]
$setServerVar[gw_joiners;$sum[$getServerVar[gw_joiners;$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]];1];$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]]
$endif
$elseif[$charCount[$getServerVar[gw_joins4;$replaceText[$customID;gw_join;;-1]]]<480]
$if[$checkContains[$getServerVar[gw_joins;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins2;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins3;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins4;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins5;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins6;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins7;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins8;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins9;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins10;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins11;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins12;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]];$authorID]==false]
$setServerVar[gw_joins4;$getServerVar[gw_joins4;$replaceText[$customID;gw_join;;-1]]-$authorID;$replaceText[$customID;gw_join;;-1]]
$setServerVar[gw_joiners;$sum[$getServerVar[gw_joiners;$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]];1];$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]]
$endif
$elseif[$charCount[$getServerVar[gw_joins5;$replaceText[$customID;gw_join;;-1]]]<480]
$if[$checkContains[$getServerVar[gw_joins;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins2;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins3;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins4;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins5;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins6;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins7;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins8;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins9;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins10;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins11;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins12;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]];$authorID]==false]
$setServerVar[gw_joins5;$getServerVar[gw_joins5;$replaceText[$customID;gw_join;;-1]]-$authorID;$replaceText[$customID;gw_join;;-1]]
$setServerVar[gw_joiners;$sum[$getServerVar[gw_joiners;$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]];1];$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]]
$endif
$elseif[$charCount[$getServerVar[gw_joins6;$replaceText[$customID;gw_join;;-1]]]<480]
$if[$checkContains[$getServerVar[gw_joins;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins2;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins3;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins4;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins5;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins6;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins7;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins8;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins9;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins10;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins11;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins12;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]];$authorID]==false]
$setServerVar[gw_joins6;$getServerVar[gw_joins6;$replaceText[$customID;gw_join;;-1]]-$authorID;$replaceText[$customID;gw_join;;-1]]
$setServerVar[gw_joiners;$sum[$getServerVar[gw_joiners;$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]];1];$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]]
$endif
$elseif[$charCount[$getServerVar[gw_joins7;$replaceText[$customID;gw_join;;-1]]]<480]
$if[$checkContains[$getServerVar[gw_joins;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins2;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins3;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins4;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins5;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins6;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins7;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins8;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins9;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins10;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins11;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins12;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]];$authorID]==false]
$setServerVar[gw_joins7;$getServerVar[gw_joins7;$replaceText[$customID;gw_join;;-1]]-$authorID;$replaceText[$customID;gw_join;;-1]]
$setServerVar[gw_joiners;$sum[$getServerVar[gw_joiners;$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]];1];$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]]
$endif
$elseif[$charCount[$getServerVar[gw_joins8;$replaceText[$customID;gw_join;;-1]]]<480]
$if[$checkContains[$getServerVar[gw_joins;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins2;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins3;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins4;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins5;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins6;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins7;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins8;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins9;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins10;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins11;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins12;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]];$authorID]==false]
$setServerVar[gw_joins8;$getServerVar[gw_joins8;$replaceText[$customID;gw_join;;-1]]-$authorID;$replaceText[$customID;gw_join;;-1]]
$setServerVar[gw_joiners;$sum[$getServerVar[gw_joiners;$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]];1];$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]]
$endif
$elseif[$charCount[$getServerVar[gw_joins9;$replaceText[$customID;gw_join;;-1]]]<480]
$if[$checkContains[$getServerVar[gw_joins;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins2;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins3;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins4;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins5;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins6;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins7;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins8;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins9;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins10;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins11;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins12;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]];$authorID]==false]
$setServerVar[gw_joins9;$getServerVar[gw_joins9;$replaceText[$customID;gw_join;;-1]]-$authorID;$replaceText[$customID;gw_join;;-1]]
$setServerVar[gw_joiners;$sum[$getServerVar[gw_joiners;$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]];1];$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]]
$endif
$elseif[$charCount[$getServerVar[gw_joins10;$replaceText[$customID;gw_join;;-1]]]<480]
$if[$checkContains[$getServerVar[gw_joins;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins2;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins3;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins4;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins5;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins6;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins7;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins8;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins9;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins10;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins11;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins12;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]];$authorID]==false]
$setServerVar[gw_joins10;$getServerVar[gw_joins10;$replaceText[$customID;gw_join;;-1]]-$authorID;$replaceText[$customID;gw_join;;-1]]
$setServerVar[gw_joiners;$sum[$getServerVar[gw_joiners;$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]];1];$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]]
$endif
$elseif[$charCount[$getServerVar[gw_joins11;$replaceText[$customID;gw_join;;-1]]]<480]
$if[$checkContains[$getServerVar[gw_joins;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins2;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins3;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins4;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins5;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins6;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins7;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins8;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins9;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins10;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins11;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins12;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]];$authorID]==false]
$setServerVar[gw_joins11;$getServerVar[gw_joins11;$replaceText[$customID;gw_join;;-1]]-$authorID;$replaceText[$customID;gw_join;;-1]]
$setServerVar[gw_joiners;$sum[$getServerVar[gw_joiners;$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]];1];$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]]
$endif
$elseif[$charCount[$getServerVar[gw_joins12;$replaceText[$customID;gw_join;;-1]]]<480]
$if[$checkContains[$getServerVar[gw_joins;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins2;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins3;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins4;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins5;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins6;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins7;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins8;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins9;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins10;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins11;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins12;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]];$authorID]==false]
$setServerVar[gw_joins12;$getServerVar[gw_joins12;$replaceText[$customID;gw_join;;-1]]-$authorID;$replaceText[$customID;gw_join;;-1]]
$setServerVar[gw_joiners;$sum[$getServerVar[gw_joiners;$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]];1];$replaceText[$replaceText[$customID;gw_join;;-1];gw_end;;-1]]
$endif
$elseif[$charCount[$getServerVar[gw_joins12;$replaceText[$customID;gw_join;;-1]]]>480]
$ephemeral $removeButtons
Hey, it seems like the limit of participants for giveaway has been reached, so you can't join this giveaway.
$endif
$endif
$endif
$if[$checkContains[$customID;gw_end]==true]
$textSplit[$getServerVar[gw_joins;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins2;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins3;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins4;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins5;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins6;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins7;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins8;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins9;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins10;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins11;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]$getServerVar[gw_joins12;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]];-]
$nomention
$if[$getTextSplitLength>2]
$if[$or[$checkUserPerms[$authorID;$var[perms]]==true;$hasRole[$authorID;$roleID[giveaways]]==true;$hasRole[$authorID;$roleID[Giveaways]]==true]==true]
$if[$splitText[$random[2;$sum[$getTextSplitLength;1]]]!=] 
$if[$isUserDMEnabled[$splitText[$random[2;$sum[$getTextSplitLength;1]]]]==true]
$async[gw_end_winner]
$dm[$splitText[$random[2;$sum[$getTextSplitLength;1]]]]
$sendMessage[__*Sent from Server:* ***$serverName[$guildID] ($guildID)***__
 
You have won the giveaway for **$getEmbedData[$channelID;$messageID;1;title]** on the server **$serverName[$guildID]**.
https://discord.com/channels/$guildID/$channelID/$messageID;no]
$suppressErrors
$endasync
$endif
$addButton[no;https://discord.com/channels/$guildID/$channelID/$messageID; ㅤ;link;no;;$sendMessage[:tada: The user <@$splitText[$random[2;$sum[$getTextSplitLength;1]]]> won the giveaway of **$getEmbedData[$channelID;$messageID;1;title]**, congrats! :tada:;yes]]
$if[$isUserDMEnabled[$splitText[$random[2;$sum[$getTextSplitLength;1]]]]==true]
$await[gw_end_winner]
$endif
$c[embed]
$thumbnail[$serverIcon]
$author[🎉 GIVEAWAY (ENDED) 🎉]
$title[$getEmbedData[$channelID;$messageID;1;title]]
$description[**Hosted By:** <@$authorID>
**Winner:** <@$splitText[$random[2;$sum[$getTextSplitLength;1]]]> 
 
**$getServerVar[gw_joiners;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]** Users had joined this giveaway.]
$footer[$getEmbedData[$channelID;$messageID;1;footer]]
$color[57F287]
$addTimestamp
$c[embed final]
$editButton[gw_join$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1];🎊 Join 🎊;danger;yes;]
$editButton[gw_end$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1];Reroll (Host);primary;no;]
$else
$ephemeral $removeButtons
Are you sure you want to end this giveaway of **$getEmbedData[$channelID;$messageID;1;title]** with **$getServerVar[gw_joiners;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]** participants? click the button again to confirm. $c[Note: this message also can appear as an ERROR, it usually only appears when the giveaway has a low amount of participants]
$endif
$else
$ephemeral $removeButtons
💥 You must have the $var[perms] permission, or a role called "Giveaways", to use this command!
$endif
$else
$ephemeral $removeButtons
Atleast 2 users must join the giveaway to pick a winner, there are **$getServerVar[gw_joiners;$replaceText[$replaceText[$customID;gw_end;;-1];gw_join;;-1]]/2** users participating in the giveaway right now.
$endif
$endif
$suppressErrors
$c[GIVEAWAY SYSTEM made by Berk#3506, the full style was customized by GWali#1115, the text split function provided by Natasquare#9698]
`;