//timeout code
const timeout =
`
$c[ENABLE BDSCRIPT 2 OR IT MAY NOT WORK.]
$nomention
$c[You can change the configuration below]
$var[prefix;++] $c[<=== the bot prefix, in my case I used "++"]
$var[error;Invalid usage! correct usage: $var[prefix]timeout <@user> <time, such as 5m for 5 minutes, or 5d for 5 days> <reason, optional>] $c[<== an error msg]
$var[error2;Maximal time exceeded, the max time you can put is of 28d (28 days)] $c[<== another error msg]
$c[End configuration]
$onlyIf[$or[$mentioned[1]!=;$userExists[$message[1]]==true]==true;$var[error]]
$if[$checkContains[$message[1];@;<]==false]
$onlyIf[$checkContains[$message[2]%;s%;m%;d%;h%;w%]==true;$var[error]]
$else
$textSplit[$replaceText[$replaceText[$replaceText[$replaceText[$message;<@$mentioned[1]>;-separate-;-1];<@!$mentioned[1]>;-separate-;-1];$username[$mentioned[1]];-separate-;-1];@$username[$mentioned[1]];-separate-;-1];-separate-]
$var[split;$splitText[2]]
$textSplit[$replaceText[$var[split]; ;%%;-1];%%]
$var[time;$splitText[2]]
$onlyIf[$checkContains[$var[time]%;s%;m%;d%;h%;w%]==true;$var[error]]
$onlyIf[404==404;https://berk404.glitch.me/tools/free-premium.html]
$endif
$onlyIf[$or[$checkUserPerms[$authorID;moderatemembers]==true;$checkUserPerms[$authorID;managemessages]==true]==true;You need 'moderate members' permissions, or 'manage messages' permissions to do this.]
$onlyBotPerms[moderatemembers;Sorry, but I need 'moderate members' permissions to do this.]
$if[$and[$mentioned[1]!=;$checkContains[$message[1];@;<]==true]==true]
$c[Limiters, to keep the code safe]
$onlyIf[$mentioned[1]!=$authorID;You can't timeout yourself!]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];You can't timeout someone who has a higher role than you!]
$onlyIf[$isNumber[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$var[time]%;s%;;1];m%;;1];d%;;1];h%;;1];w%;;1]]==true;$var[error]]
$onlyIf[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$var[time]%;s%;;1];m%;;1];d%;;1];h%;;1];w%;;1]>0;$var[error]]
$c[Returns an error if the time exceed the 28 days, in any time form, this is needed because Discord has a limit of 28 days in timeouts that can't be passed.]
$if[$checkContains[$var[time];s]==true]
$onlyIf[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$var[time];s;;-1];m;;-1];d;;-1];h;;-1];w;;-1]<2419200;$var[error2]]
$endif
$if[$checkContains[$var[time];m]==true]
$onlyIf[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$var[time];s;;-1];m;;-1];d;;-1];h;;-1];w;;-1]<40320;$var[error2]]
$endif
$if[$checkContains[$var[time];d]==true]
$onlyIf[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$var[time];s;;-1];m;;-1];d;;-1];h;;-1];w;;-1]<29;$var[error2]]
$endif
$if[$checkContains[$var[time];h]==true]
$onlyIf[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$var[time];s;;-1];m;;-1];d;;-1];h;;-1];w;;-1]<672;$var[error2]]
$endif
$if[$checkContains[$var[time];w]==true]
$onlyIf[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$var[time];s;;-1];m;;-1];d;;-1];h;;-1];w;;-1]<5;$var[error2]]
$endif
$var[arg;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$noMentionMessage;1;;-1];2;;-1];3;;-1];4;;-1];5;;-1];6;;-1];7;;-1];8;;-1];9;;-1];0;;-1];s;;-1];m;;-1];h;;-1];d;;-1];w;;-1]]
$textSplit[$replaceText[$noMentionMessage;@;;-1]; ]
$var[reason;$replaceText[$replaceText[$noMentionMessage;@;;-1];$splitText[1];;1]]
$c[The timeout message]
?????? Successfully applied the timeout of **$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$var[time]%;s%; seconds;1];m%; minutes;1];d%; day(s);1];h%; hour(s);1];w%; week(s);1]** to the user **$username[$mentioned[1]]#$discriminator[$mentioned[1]]**!
$if[$var[arg]!=]Reason: $var[reason]...$endif
$c[The line above checks if there's a reason for the timeout, and if there is then it shows it, if not it won't show it.]
$c[The line below timeouts the user, var time is the amount of time, mentioned 1 is the user ID of the mentioned user]
$timeout[$var[time];$mentioned[1]]
$elseif[$userExists[$message[1]]==true]
$onlyIf[$message[1]!=$authorID;You can't timeout yourself!]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$message[1]]];You can't timeout someone who has a higher role than you!]
$onlyIf[$isNumber[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message[2]%;s%;;1];w%;;1];m%;;1];d%;;1];h%;;1]]==true;$var[error]]
$onlyIf[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message[2]%;s%;;1];w%;;1];m%;;1];d%;;1];h%;;1]>0;$var[error]]
$c[Returns an error if the time exceed the 28 days, in any time form, this is needed because Discord has a limit of 28 days in timeouts that can't be passed.]
$if[$checkContains[$var[time];s]==true]
$onlyIf[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message[2];s;;-1];m;;-1];d;;-1];h;;-1];w;;-1]<2419200;$var[error2]]
$endif
$if[$checkContains[$var[time];m]==true]
$onlyIf[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message[2];s;;-1];m;;-1];d;;-1];h;;-1];w;;-1]<40320;$var[error2]]
$endif
$if[$checkContains[$var[time];d]==true]
$onlyIf[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message[2];s;;-1];m;;-1];d;;-1];h;;-1];w;;-1]<29;$var[error2]]
$endif
$if[$checkContains[$var[time];h]==true]
$onlyIf[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message[2];s;;-1];m;;-1];d;;-1];h;;-1];w;;-1]<672;$var[error2]]
$endif
$if[$checkContains[$var[time];w]==true]
$onlyIf[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message[2];s;;-1];m;;-1];d;;-1];h;;-1];w;;-1]<5;$var[error2]]
$endif
$c[The timeout message]
?????? Successfully applied the timeout of **$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message[2]%;s%; seconds;1];m%; minutes;1];d%; day(s);1];h%; hour(s);1];w%; week(s);1]** to the user **$username[$message[1]]#$discriminator[$message[1]]**!
$if[$message[3]!=]Reason: $replaceText[$replaceText[$replaceText[$message;$message[1];;1];@;;-1];$message[2];;1]...$endif
$c[The line above checks if there's a reason for the timeout, and if there is then it shows it, if not it won't show it.]
$c[The line below timeouts the user, message 2 is the amount of time, message 1 is the user ID]
$timeout[$message[2];$message[1]]
$else $c[This else is returned if there's not a mentioned user or an user ID, and it's only returned in rare cases.]
:x: $var[error] | Please mention someone or type a valid user ID.
$endif
$suppressErrors[Sorry, you can't timeout this user!] $c[In case something fails, this suppressErrors will be returned]
$c[Code from https://dev.basement-network.com - made by Berk#3506]

`;