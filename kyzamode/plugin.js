(function(a){"use strict";let e;const n={wtf:"what the fuck",wth:"what the hell",lmao:"*laughing my ass off*",lmfao:"*laughing my fucking ass off*",lol:"*laughing out loud*",wdym:"what do you mean"," ltr":"left to right"," rtl":"right to left",wym:"what you mean",ikr:"i know right",lmk:"let me know",ofc:"of course",brb:"be right back",btw:"by the way",b4:"before",ofc:"of course",bff:"best friends forever",afaik:"as far as i know",afk:"away from keyboard",ttyl:"talk to you later",gtg:"got to go",tho:"though",smh:"shaking my head",tbh:"to be honest",bruv:"brother"," ty":" thank you"," ngl":" not gonna lie"," ig ":" i guess "," ig":" i guess",rtfm:"read the freaking manual"," u ":" you "," r ":" are "," ur ":" your "," uw ":" you are welcome "," uwot ":" what do you mean "," ok ":" okay"," ok.":" okay."," ok?":" okay?"," ok!":" okay!"," ok,":" okay,"," i ":" I "," i?":" I?"," i!":" I!"," i.":" I."," i,":" I,","\ni ":`
I `,"im ":"I am ","Im ":"I am ",doesnt:"does not",dont:"do not",didnt:"did not",cant:"can not",cannot:"can not",wont:"will not",aint:"is not",lets:"let us",thats:"that is",wouldnt:"would not",couldnt:"could not",shouldnt:"should not",fuck:"freak",shitty:"poopy",shit:"poop",damn:"darn",damnit:"darn it",dammit:"darn it"},r=t=>{for(var o in n)t.toLowerCase().includes(o.toLowerCase())&&(console.log(`Message contains '${o}', would replace with '${n[o]}'`),t=t.toString().replace(o,n[o])),t.replace("~~","").slice(-1)!=="."&&t.replace("~~","").slice(-1)!=="!"&&t.replace("~~","").slice(-1)!=="?"&&(t+="."),t.replace("~~","")[0]!==t.replace("~~","").toUpperCase()[0]&&(t=t.charAt(0).toUpperCase()+t.slice(1));return t.replace("Https://","https://")};var i={onLoad(){e=cumcord.patcher.after("sendMessage",a.webpackModules.findByProps("sendMessage"),t=>{let o=t[1].content;return t[1].content=r(o),t})},onUnload(){e()}};return i})(cumcord.modules);
