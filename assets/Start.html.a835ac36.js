import{r as a,o as i,c as s,a as e,b as t,F as r,e as o,d}from"./app.254ad478.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const h={},c=e("h1",{id:"start-with-sheweny",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#start-with-sheweny","aria-hidden":"true"},"#"),o(" Start with Sheweny")],-1),u=e("h2",{id:"installing-node-js",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-node-js","aria-hidden":"true"},"#"),o(" Installing Node.js")],-1),p=o("To use sheweny, you'll need to install Node.js. You can do so by going to "),m={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},g=o("the Node.js website"),y=o("."),_=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"WARNING"),e("p",null,[o("If you "),e("em",null,"do"),o(" have Node installed, but it's an older version (i.e. anything below 16.6.0), then you must upgrade to the latest version. sheweny V1 requires Node v16.6.0 or higher.")])],-1),f=e("h3",{id:"installing-on-windows",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-on-windows","aria-hidden":"true"},"#"),o(" Installing on Windows")],-1),w=o("If you're developing on Windows, it's as simple as installing any other program. Go to "),b={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},k=o("the Node.js website"),v=o(", download the latest version, open up the downloaded file, and follow the steps from the installer."),j=e("h3",{id:"installing-on-macos",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-on-macos","aria-hidden":"true"},"#"),o(" Installing on macOS")],-1),x=o("If you're developing on macOS, you have a few options. You can go to "),I={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},N=o("the Node.js website"),O=o(", download the latest version, double click the package installer, and follow the instructions. You can also use a package manager like "),S={href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"},T=o("Homebrew"),q=o(" with the command "),W=e("code",null,"brew install node",-1),L=o("."),V=e("h3",{id:"installing-on-linux",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-on-linux","aria-hidden":"true"},"#"),o(" Installing on Linux")],-1),C=o("If you're developing on Linux, you may consult "),Y={href:"https://nodejs.org/en/download/package-manager/",target:"_blank",rel:"noopener noreferrer"},A=o("this page"),B=o(" to determine how you should install Node. On that note, there's a possibility that you may already have Node installed on your machine (e.g., if you're using a VPS). You can check the installed version by running the "),E=e("code",null,"node -v",-1),H=o(" command. If it outputs something like "),P=e("code",null,"v16.6.0",-1),F=o(" or higher, then you're good to go! Otherwise, take a look at "),G={href:"https://nodejs.org/en/download/package-manager/",target:"_blank",rel:"noopener noreferrer"},U=o("this page"),z=o(" for instructions on installing Node on your OS."),R=d('<hr><h2 id="preparing-the-essentials" tabindex="-1"><a class="header-anchor" href="#preparing-the-essentials" aria-hidden="true">#</a> Preparing the essentials</h2><p>To use sheweny, you&#39;ll need to install it via npm (Node&#39;s package manager). npm comes with every Node installation, so you don&#39;t have to worry about installing that. However, before you install anything, you should set up a new project folder.</p><h3 id="setting-up-a-project-folder" tabindex="-1"><a class="header-anchor" href="#setting-up-a-project-folder" aria-hidden="true">#</a> Setting up a project folder</h3><p>Like any other project, you should have a dedicated folder to keep it organized and manageable.</p><p>Navigate to a place on your machine that&#39;s easy to find and reopen in the future for convenience purposes. Create a new folder like you normally would (depending on your OS, you can use <code>mkdir project-name</code> inside your terminal). If you already have a name you want to use for your bot, you can use that as the folder name. Otherwise, you may name it something like <code>discord-bot</code> for the time being (or anything else you have in mind).</p><p>Once you&#39;re done making the folder, open it up (depending on your OS, you can use <code>cd project-name</code> inside your terminal).</p><h3 id="opening-the-command-prompt" tabindex="-1"><a class="header-anchor" href="#opening-the-command-prompt" aria-hidden="true">#</a> Opening the command prompt</h3><p>If you&#39;re on Linux, you can quickly open up the terminal with <code>Ctrl + Alt + T</code>.</p><p>If you&#39;re on Windows and aren&#39;t familiar with opening up the command prompt, do the following:</p><ol><li>Open your bot project folder.</li><li>Hold down the <code>Shift</code> key and right-click inside the folder.</li><li>Choose the &quot;Open command window here&quot; option.</li></ol><p>It should then open up a window with a black background. It&#39;s a bit unattractive, but we&#39;ll talk about using better, more powerful tools in a different part of the guide.</p><h3 id="using-the-command-prompt" tabindex="-1"><a class="header-anchor" href="#using-the-command-prompt" aria-hidden="true">#</a> Using the command prompt</h3><p>With the command prompt open, run the <code>node -v</code> command to make sure you&#39;ve successfully installed Node.js. If you see something like <code>v16.6</code> or higher, great! If not, go back and try installing again.</p><p>The next command you&#39;ll be running is <code>npm init</code>. This command creates a <code>package.json</code> file for you, which will keep track of the dependencies your bot uses and other info. If you&#39;re a bit confused by that, you can ignore it for the time being.</p><p>The <code>npm init</code> command will ask you a sequence of questions\u2013you should fill them out as you see fit. If you&#39;re not sure of something or want to skip it as a whole, leave it blank and press enter.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Want to get started quickly? Use <code>npm init -y</code> to have it fill out everything for you!</p></div><p>Once you&#39;re done with that, you&#39;re ready to install sheweny!</p><hr><h2 id="installing-sheweny" tabindex="-1"><a class="header-anchor" href="#installing-sheweny" aria-hidden="true">#</a> Installing sheweny</h2><p>Now that you&#39;ve installed Node.js and know how to open up your console and run commands, you can finally install sheweny!</p><p>To install sheweny, run the <code>npm install sheweny</code>. This can take a bit of time but should finish fairly quickly.</p><p>And that&#39;s it! With all the necessities installed, you&#39;re almost ready to start coding your bot.</p>',23);function D(J,K){const n=a("ExternalLinkIcon");return i(),s(r,null,[c,u,e("p",null,[p,e("a",m,[g,t(n)]),y]),_,f,e("p",null,[w,e("a",b,[k,t(n)]),v]),j,e("p",null,[x,e("a",I,[N,t(n)]),O,e("a",S,[T,t(n)]),q,W,L]),V,e("p",null,[C,e("a",Y,[A,t(n)]),B,E,H,P,F,e("a",G,[U,t(n)]),z]),R],64)}var X=l(h,[["render",D]]);export{X as default};
