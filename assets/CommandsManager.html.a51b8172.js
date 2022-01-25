import{r,o as i,c as d,a as e,b as o,w as l,F as c,d as a,e as t}from"./app.254ad478.js";import{_}from"./plugin-vue_export-helper.21dcd24c.js";const h={},m=a(`<h1 id="commandsmanager" tabindex="-1"><a class="header-anchor" href="#commandsmanager" aria-hidden="true">#</a> CommandsManager</h1><p>Create an handler for bot commands. The commands can be in as many subfolders as desired.</p><h2 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> Constructor</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">CommandsManager</span><span class="token punctuation">(</span>client<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,4),u=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type"),e("th",null,"Description"),e("th",null,"Default"),e("th",null,"Optional")])],-1),p=e("td",null,"client",-1),f=t("ShewenyClient"),g=e("td",null,"The client",-1),b=e("td",null,"None",-1),C=e("td",null,"No",-1),y=e("td",null,"options",-1),S=t("CommandsManagerOptions"),v=e("td",null,"Options of the commands manager",-1),k=e("td",null,"None",-1),R=e("td",null,"No",-1),j=a('<details class="custom-container details"><summary>Properties</summary><ul><li><a href="#applicationpermissions">applicationPermissions</a></li><li><a href="#autoregisterapplicationcommands">autoRegisterApplicationCommands</a></li><li><a href="#client">client</a></li><li><a href="#commands">commands</a></li><li><a href="#default">default</a></li><li><a href="#directory">directory</a></li><li><a href="#guildid">guildId</a></li><li><a href="#prefix">prefix</a></li></ul></details><details class="custom-container details"><summary>Methods</summary><ul><li><a href="#async-createcommand-command-guildid">createCommand</a></li><li><a href="#async-deleteallcommands-guildid">deleteAllCommands</a></li><li><a href="#async-deletecommand-command-guildid">deleteCommand</a></li><li><a href="#async-editcommand-oldcommand-newcommand-guildid">editCommand</a></li><li><a href="#getapplicationcommanddata">getApplicationCommandData</a></li><li><a href="#async-loadall">loadAll</a></li><li><a href="#async-loadandregisterall">loadAndRegisterAll</a></li><li><a href="#async-registerApplicationCommands-commands-guildid">registerApplicationCommands</a></li><li><a href="#async-registerpermissions-commands-guildid">registerPermissions</a></li><li><a href="#unloadall">unloadAll</a></li></ul></details><details class="custom-container details"><summary>Events</summary><ul><li><a href="#clientmissingpermissions">clientMissingPermissions</a></li><li><a href="#cooldownlimit">cooldownLimit</a></li><li><a href="#usermissingpermissions">userMissingPermissions</a></li></ul></details><h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2><h3 id="applicationpermissions" tabindex="-1"><a class="header-anchor" href="#applicationpermissions" aria-hidden="true">#</a> applicationPermissions</h3><p>If the application permissions is set.</p>',6),A=t("Return : "),x={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"},O=t("Boolean"),T=e("h3",{id:"autoregisterapplicationcommands",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#autoregisterapplicationcommands","aria-hidden":"true"},"#"),t(" autoRegisterApplicationCommands")],-1),P=e("p",null,"If the application commands must be registered.",-1),w=t("Return : "),I={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"},G=t("Boolean"),z=e("h3",{id:"client",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#client","aria-hidden":"true"},"#"),t(" client")],-1),D=e("p",null,"The framework client.",-1),J=t("Return : "),W=t("ShewenyClient"),N=e("h3",{id:"commands",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#commands","aria-hidden":"true"},"#"),t(" commands")],-1),M=e("p",null,"The loaded commands.",-1),L=t("Return : Collection<"),E=t("Command"),B=t(">"),U=e("h3",{id:"default",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#default","aria-hidden":"true"},"#"),t(" default")],-1),F=e("p",null,"The default data of the commands.",-1),V=t("Return : "),q=t("CommandsManagerDefaultOption"),H=e("h3",{id:"directory",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#directory","aria-hidden":"true"},"#"),t(" directory")],-1),K=e("p",null,"The directory of buttons.",-1),Q=t("Return : "),X={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},Y=t("String"),Z=e("h3",{id:"guildid",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#guildid","aria-hidden":"true"},"#"),t(" guildId")],-1),$=e("p",null,"The guild id(s) for registering commands.",-1),ee=t("Return "),te={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},oe=t("String"),ne=t(" or "),se={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",target:"_blank",rel:"noopener noreferrer"},le=t("Array"),ae=t("<"),re={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},ie=t("String"),de=t(">"),ce=e("h3",{id:"prefix",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prefix","aria-hidden":"true"},"#"),t(" prefix")],-1),_e=e("p",null,"The prefix for message commands",-1),he=t("Return : "),me={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},ue=t("String"),pe=e("h2",{id:"methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),t(" Methods")],-1),fe=e("h3",{id:"async-createcommand-command-guildid",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#async-createcommand-command-guildid","aria-hidden":"true"},"#"),t(" [async] createCommand(command, guildId)")],-1),ge=e("p",null,"Create single command.",-1),be=e("p",null,"Parameters :",-1),Ce=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type"),e("th",null,"Description"),e("th",null,"Default"),e("th",null,"Optional")])],-1),ye=e("td",null,"command",-1),Se=t("ApplicationCommand"),ve=e("td",null,"The command",-1),ke=e("td",null,null,-1),Re=e("td",null,null,-1),je=e("td",null,"guildId",-1),Ae={href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},xe=t("String"),Oe=e("td",null,"The guild to register command",-1),Te=e("td",null,null,-1),Pe=e("td",null,"\u2713",-1),we=t("Return : "),Ie={href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise",target:"_blank",rel:"noopener noreferrer"},Ge=t("Promise"),ze=t("<"),De={href:"https://discord.js.org/#/docs/main/stable/class/ApplicationCommand",target:"_blank",rel:"noopener noreferrer"},Je=t("ApplicationCommand"),We=t(">"),Ne=e("h3",{id:"async-deleteallcommands-guildid",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#async-deleteallcommands-guildid","aria-hidden":"true"},"#"),t(" [async] deleteAllCommands( guildId)")],-1),Me=e("p",null,"Delete all commands.",-1),Le=e("p",null,"Parameters :",-1),Ee=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type"),e("th",null,"Description"),e("th",null,"Default"),e("th",null,"Optional")])],-1),Be=e("td",null,"guildId",-1),Ue={href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},Fe=t("String"),Ve=e("td",null,"The guild to delete command",-1),qe=e("td",null,null,-1),He=e("td",null,"\u2713",-1),Ke=t("Return : "),Qe={href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise",target:"_blank",rel:"noopener noreferrer"},Xe=t("Promise"),Ye=t("<Collection<"),Ze={href:"https://discord.js.org/#/docs/main/stable/typedef/Snowflake",target:"_blank",rel:"noopener noreferrer"},$e=t("Snowflake"),et=t(", "),tt={href:"https://discord.js.org/#/docs/main/stable/class/ApplicationCommand",target:"_blank",rel:"noopener noreferrer"},ot=t("ApplicationCommand"),nt=t(">>"),st=e("h3",{id:"async-deletecommand-command-guildid",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#async-deletecommand-command-guildid","aria-hidden":"true"},"#"),t(" [async] deleteCommand(command, guildId)")],-1),lt=e("p",null,"Delete single command.",-1),at=e("p",null,"Parameters :",-1),rt=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type"),e("th",null,"Description"),e("th",null,"Default"),e("th",null,"Optional")])],-1),it=e("td",null,"command",-1),dt={href:"https://discord.js.org/#/docs/main/stable/typedef/ApplicationCommandResolvable",target:"_blank",rel:"noopener noreferrer"},ct=t("ApplicationCommandResolvable"),_t=e("td",null,"The command to delete",-1),ht=e("td",null,null,-1),mt=e("td",null,null,-1),ut=e("td",null,"guildId",-1),pt={href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},ft=t("String"),gt=e("td",null,"The guild to delete command",-1),bt=e("td",null,null,-1),Ct=e("td",null,"\u2713",-1),yt=t("Return : "),St={href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise",target:"_blank",rel:"noopener noreferrer"},vt=t("Promise"),kt=t("<Collection<"),Rt={href:"https://discord.js.org/#/docs/main/stable/typedef/Snowflake",target:"_blank",rel:"noopener noreferrer"},jt=t("Snowflake"),At=t(", "),xt={href:"https://discord.js.org/#/docs/main/stable/class/ApplicationCommand",target:"_blank",rel:"noopener noreferrer"},Ot=t("ApplicationCommand"),Tt=t(">>"),Pt=e("h3",{id:"async-editcommand-oldcommand-newcommand-guildid",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#async-editcommand-oldcommand-newcommand-guildid","aria-hidden":"true"},"#"),t(" [async] editCommand(oldCommand, newCommand, guildId)")],-1),wt=e("p",null,"Edit single command.",-1),It=e("p",null,"Parameters :",-1),Gt=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type"),e("th",null,"Description"),e("th",null,"Default"),e("th",null,"Optional")])],-1),zt=e("td",null,"oldCommand",-1),Dt={href:"https://discord.js.org/#/docs/main/stable/typedef/ApplicationCommandResolvable",target:"_blank",rel:"noopener noreferrer"},Jt=t("ApplicationCommandResolvable"),Wt=e("td",null,"The command to edit",-1),Nt=e("td",null,null,-1),Mt=e("td",null,null,-1),Lt=e("td",null,"newCommand",-1),Et=t("ApplicationCommand"),Bt=e("td",null,"The new command",-1),Ut=e("td",null,null,-1),Ft=e("td",null,null,-1),Vt=e("td",null,"guildId",-1),qt={href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},Ht=t("String"),Kt=e("td",null,"The guild to update command",-1),Qt=e("td",null,null,-1),Xt=e("td",null,"\u2713",-1),Yt=t("Return : "),Zt={href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise",target:"_blank",rel:"noopener noreferrer"},$t=t("Promise"),eo=t("<"),to={href:"https://discord.js.org/#/docs/main/stable/class/ApplicationCommand",target:"_blank",rel:"noopener noreferrer"},oo=t("ApplicationCommand"),no=t(">"),so=e("h3",{id:"getapplicationcommanddata",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#getapplicationcommanddata","aria-hidden":"true"},"#"),t(" getApplicationCommandData()")],-1),lo=e("p",null,"Create an array with all commands data for register it.",-1),ao=t("Return : "),ro={href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array",target:"_blank",rel:"noopener noreferrer"},io=t("Array"),co=t("<"),_o={href:"https://discord.js.org/#/docs/main/stable/typedef/ApplicationCommandData",target:"_blank",rel:"noopener noreferrer"},ho=t("ApplicationCommandData"),mo=t(">| "),uo={href:"https://discord.js.org/#/docs/main/stable/typedef/ApplicationCommandData",target:"_blank",rel:"noopener noreferrer"},po=t("ApplicationCommandData"),fo=t(" | undefined"),go=e("h3",{id:"async-loadall",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#async-loadall","aria-hidden":"true"},"#"),t(" [async] loadAll()")],-1),bo=e("p",null,"Load all commands in collection.",-1),Co=t("Return : "),yo={href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise",target:"_blank",rel:"noopener noreferrer"},So=t("Promise"),vo=t("<Collection<"),ko={href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},Ro=t("String"),jo=t(", "),Ao=t("ApplicationCommand"),xo=t(">>"),Oo=e("h3",{id:"async-loadandregisterall",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#async-loadandregisterall","aria-hidden":"true"},"#"),t(" [async] loadAndRegisterAll()")],-1),To=e("p",null,"Load all commands in collection and register interactions.",-1),Po=e("p",null,"Return : Promise<void>",-1),wo=e("h3",{id:"async-registerapplicationcommands-commands-guildid",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#async-registerapplicationcommands-commands-guildid","aria-hidden":"true"},"#"),t(" [async] registerApplicationCommands(commands, guildId)")],-1),Io=e("p",null,"Register application commands.",-1),Go=e("p",null,"Parameters :",-1),zo=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type"),e("th",null,"Description"),e("th",null,"Default"),e("th",null,"Optional")])],-1),Do=e("td",null,"commands",-1),Jo=t("Collection<"),Wo={href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},No=t("String"),Mo=t(", "),Lo=t("ApplicationCommand"),Eo=t(")>"),Bo=e("td",null,"The commands",-1),Uo=e("td",null,"client.collections.commands",-1),Fo=e("td",null,"\u2713",-1),Vo=e("td",null,"guildId",-1),qo={href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},Ho=t("String"),Ko=e("td",null,"The guild to register commands",-1),Qo=e("td",null,null,-1),Xo=e("td",null,"\u2713",-1),Yo=t("Return : "),Zo={href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise",target:"_blank",rel:"noopener noreferrer"},$o=t("Promise"),en=t("<Collection<"),tn={href:"https://discord.js.org/#/docs/main/stable/typedef/Snowflake",target:"_blank",rel:"noopener noreferrer"},on=t("Snowflake"),nn=t(", "),sn={href:"https://discord.js.org/#/docs/main/stable/class/ApplicationCommand",target:"_blank",rel:"noopener noreferrer"},ln=t("ApplicationCommand"),an=t(">>"),rn=e("h3",{id:"async-registerpermissions-commands-guildid",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#async-registerpermissions-commands-guildid","aria-hidden":"true"},"#"),t(" [async] registerPermissions(commands, guildId)")],-1),dn=e("p",null,"Register application commands.",-1),cn=e("p",null,"Parameters :",-1),_n=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type"),e("th",null,"Description"),e("th",null,"Default"),e("th",null,"Optional")])],-1),hn=e("td",null,"applicationCommands",-1),mn=t("Collection<"),un={href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},pn=t("String"),fn=t(", "),gn={href:"https://discord.js.org/#/docs/main/stable/class/ApplicationCommand",target:"_blank",rel:"noopener noreferrer"},bn=t("ApplicationCommand"),Cn=t(")>"),yn=e("td",null,"The application commands",-1),Sn=e("td",null,"client.collections.commands",-1),vn=e("td",null,"\u2713",-1),kn=e("td",null,"clientCommands",-1),Rn=t("Collection<"),jn={href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},An=t("String"),xn=t(", "),On=t("Command"),Tn=t(")>"),Pn=e("td",null,"The client commands",-1),wn=e("td",null,"client.collections.commands",-1),In=e("td",null,"\u2713",-1),Gn=e("td",null,"guildId",-1),zn={href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},Dn=t("String"),Jn=t(" or "),Wn={href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array",target:"_blank",rel:"noopener noreferrer"},Nn=t("Array"),Mn=t("<"),Ln={href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},En=t("String"),Bn=t(">"),Un=e("td",null,"The guild to register commands",-1),Fn=e("td",null,null,-1),Vn=e("td",null,"\u2713",-1),qn=t("Return : "),Hn={href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise",target:"_blank",rel:"noopener noreferrer"},Kn=t("Promise"),Qn=t("<Collection<"),Xn={href:"https://discord.js.org/#/docs/main/stable/typedef/Snowflake",target:"_blank",rel:"noopener noreferrer"},Yn=t("Snowflake"),Zn=t(", "),$n={href:"https://discord.js.org/#/docs/main/stable/class/ApplicationCommand",target:"_blank",rel:"noopener noreferrer"},es=t("ApplicationCommand"),ts=t(">>"),os=a('<h3 id="unloadall" tabindex="-1"><a class="header-anchor" href="#unloadall" aria-hidden="true">#</a> unloadAll()</h3><p>Unload all commands.</p><p>Return : void</p><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><h3 id="clientmissingpermissions" tabindex="-1"><a class="header-anchor" href="#clientmissingpermissions" aria-hidden="true">#</a> clientMissingPermissions</h3><p>Emitted when client missing permissions.</p><p>Parameters :</p>',7),ns=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type"),e("th",null,"Description")])],-1),ss=e("td",null,"interaction",-1),ls={href:"https://discord.js.org/#/docs/main/stable/class/CommandInteraction",target:"_blank",rel:"noopener noreferrer"},as=t("CommandInteraction"),rs=t(" or "),is={href:"https://discord.js.org/#/docs/main/stable/class/CommandInteraction",target:"_blank",rel:"noopener noreferrer"},ds=t("ContextMenuInteraction"),cs=e("td",null,"The interaction",-1),_s=e("td",null,"missing",-1),hs={href:"https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS",target:"_blank",rel:"noopener noreferrer"},ms=t("Permission"),us=e("td",null,"The name of missing permission",-1),ps=e("h3",{id:"cooldownlimit",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cooldownlimit","aria-hidden":"true"},"#"),t(" cooldownLimit")],-1),fs=e("p",null,"Emitted when user hit the cooldown limit.",-1),gs=e("p",null,"Parameters :",-1),bs=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type"),e("th",null,"Description")])],-1),Cs=e("td",null,"interaction",-1),ys={href:"https://discord.js.org/#/docs/main/stable/class/CommandInteraction",target:"_blank",rel:"noopener noreferrer"},Ss=t("CommandInteraction"),vs=t(" or "),ks={href:"https://discord.js.org/#/docs/main/stable/class/CommandInteraction",target:"_blank",rel:"noopener noreferrer"},Rs=t("ContextMenuInteraction"),js=e("td",null,"The interaction",-1),As=e("td",null,"time",-1),xs={href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"},Os=t("Number"),Ts=e("td",null,"The time before run again",-1),Ps=e("h3",{id:"usermissingpermissions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#usermissingpermissions","aria-hidden":"true"},"#"),t(" userMissingPermissions")],-1),ws=e("p",null,"Emitted when user missing permissions.",-1),Is=e("p",null,"Parameters :",-1),Gs=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type"),e("th",null,"Description")])],-1),zs=e("td",null,"interaction",-1),Ds={href:"https://discord.js.org/#/docs/main/stable/class/CommandInteraction",target:"_blank",rel:"noopener noreferrer"},Js=t("CommandInteraction"),Ws=t(" or "),Ns={href:"https://discord.js.org/#/docs/main/stable/class/CommandInteraction",target:"_blank",rel:"noopener noreferrer"},Ms=t("ContextMenuInteraction"),Ls=e("td",null,"The interaction",-1),Es=e("td",null,"missing",-1),Bs={href:"https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS",target:"_blank",rel:"noopener noreferrer"},Us=t("Permission"),Fs=t(" or BOT_ADMIN"),Vs=e("td",null,"The name of missing permission",-1);function qs(Hs,Ks){const s=r("RouterLink"),n=r("ExternalLinkIcon");return i(),d(c,null,[m,e("table",null,[u,e("tbody",null,[e("tr",null,[p,e("td",null,[o(s,{to:"/doc/managers/ShewenyClient.html"},{default:l(()=>[f]),_:1})]),g,b,C]),e("tr",null,[y,e("td",null,[o(s,{to:"/doc/typedef/ManagerOptions.html#commandsmanageroptions"},{default:l(()=>[S]),_:1})]),v,k,R])])]),j,e("p",null,[A,e("a",x,[O,o(n)])]),T,P,e("p",null,[w,e("a",I,[G,o(n)])]),z,D,e("p",null,[J,o(s,{to:"/doc/client/ShewenyClient.html"},{default:l(()=>[W]),_:1})]),N,M,e("p",null,[L,o(s,{to:"/doc/structures/Command.html"},{default:l(()=>[E]),_:1}),B]),U,F,e("p",null,[V,o(s,{to:"/doc/typedef/ManagersDefaultOptions.html#commandsmanagerdefaultoptions"},{default:l(()=>[q]),_:1})]),H,K,e("p",null,[Q,e("a",X,[Y,o(n)])]),Z,$,e("p",null,[ee,e("a",te,[oe,o(n)]),ne,e("a",se,[le,o(n)]),ae,e("a",re,[ie,o(n)]),de]),ce,_e,e("p",null,[he,e("a",me,[ue,o(n)])]),pe,fe,ge,be,e("table",null,[Ce,e("tbody",null,[e("tr",null,[ye,e("td",null,[o(s,{to:"/doc/structures/Command.html"},{default:l(()=>[Se]),_:1})]),ve,ke,Re]),e("tr",null,[je,e("td",null,[e("a",Ae,[xe,o(n)])]),Oe,Te,Pe])])]),e("p",null,[we,e("a",Ie,[Ge,o(n)]),ze,e("a",De,[Je,o(n)]),We]),Ne,Me,Le,e("table",null,[Ee,e("tbody",null,[e("tr",null,[Be,e("td",null,[e("a",Ue,[Fe,o(n)])]),Ve,qe,He])])]),e("p",null,[Ke,e("a",Qe,[Xe,o(n)]),Ye,e("a",Ze,[$e,o(n)]),et,e("a",tt,[ot,o(n)]),nt]),st,lt,at,e("table",null,[rt,e("tbody",null,[e("tr",null,[it,e("td",null,[e("a",dt,[ct,o(n)])]),_t,ht,mt]),e("tr",null,[ut,e("td",null,[e("a",pt,[ft,o(n)])]),gt,bt,Ct])])]),e("p",null,[yt,e("a",St,[vt,o(n)]),kt,e("a",Rt,[jt,o(n)]),At,e("a",xt,[Ot,o(n)]),Tt]),Pt,wt,It,e("table",null,[Gt,e("tbody",null,[e("tr",null,[zt,e("td",null,[e("a",Dt,[Jt,o(n)])]),Wt,Nt,Mt]),e("tr",null,[Lt,e("td",null,[o(s,{to:"/doc/structures/Command.html"},{default:l(()=>[Et]),_:1})]),Bt,Ut,Ft]),e("tr",null,[Vt,e("td",null,[e("a",qt,[Ht,o(n)])]),Kt,Qt,Xt])])]),e("p",null,[Yt,e("a",Zt,[$t,o(n)]),eo,e("a",to,[oo,o(n)]),no]),so,lo,e("p",null,[ao,e("a",ro,[io,o(n)]),co,e("a",_o,[ho,o(n)]),mo,e("a",uo,[po,o(n)]),fo]),go,bo,e("p",null,[Co,e("a",yo,[So,o(n)]),vo,e("a",ko,[Ro,o(n)]),jo,o(s,{to:"/doc/structures/Command.html"},{default:l(()=>[Ao]),_:1}),xo]),Oo,To,Po,wo,Io,Go,e("table",null,[zo,e("tbody",null,[e("tr",null,[Do,e("td",null,[Jo,e("a",Wo,[No,o(n)]),Mo,o(s,{to:"/doc/structures/Command.html"},{default:l(()=>[Lo]),_:1}),Eo]),Bo,Uo,Fo]),e("tr",null,[Vo,e("td",null,[e("a",qo,[Ho,o(n)])]),Ko,Qo,Xo])])]),e("p",null,[Yo,e("a",Zo,[$o,o(n)]),en,e("a",tn,[on,o(n)]),nn,e("a",sn,[ln,o(n)]),an]),rn,dn,cn,e("table",null,[_n,e("tbody",null,[e("tr",null,[hn,e("td",null,[mn,e("a",un,[pn,o(n)]),fn,e("a",gn,[bn,o(n)]),Cn]),yn,Sn,vn]),e("tr",null,[kn,e("td",null,[Rn,e("a",jn,[An,o(n)]),xn,o(s,{to:"/doc/structures/Command.html"},{default:l(()=>[On]),_:1}),Tn]),Pn,wn,In]),e("tr",null,[Gn,e("td",null,[e("a",zn,[Dn,o(n)]),Jn,e("a",Wn,[Nn,o(n)]),Mn,e("a",Ln,[En,o(n)]),Bn]),Un,Fn,Vn])])]),e("p",null,[qn,e("a",Hn,[Kn,o(n)]),Qn,e("a",Xn,[Yn,o(n)]),Zn,e("a",$n,[es,o(n)]),ts]),os,e("table",null,[ns,e("tbody",null,[e("tr",null,[ss,e("td",null,[e("a",ls,[as,o(n)]),rs,e("a",is,[ds,o(n)])]),cs]),e("tr",null,[_s,e("td",null,[e("a",hs,[ms,o(n)])]),us])])]),ps,fs,gs,e("table",null,[bs,e("tbody",null,[e("tr",null,[Cs,e("td",null,[e("a",ys,[Ss,o(n)]),vs,e("a",ks,[Rs,o(n)])]),js]),e("tr",null,[As,e("td",null,[e("a",xs,[Os,o(n)])]),Ts])])]),Ps,ws,Is,e("table",null,[Gs,e("tbody",null,[e("tr",null,[zs,e("td",null,[e("a",Ds,[Js,o(n)]),Ws,e("a",Ns,[Ms,o(n)])]),Ls]),e("tr",null,[Es,e("td",null,[e("a",Bs,[Us,o(n)]),Fs]),Vs])])])],64)}var Ys=_(h,[["render",qs]]);export{Ys as default};
