(function(){"use strict";const e=cumcord.modules.webpackModules.findByProps("getElementFromMessageId").getElementFromMessageId;let t,o;function s(){for(let e of window.deletedMessages){console.log("[messagedeletion] Trying to restyle...");try{e.deletedHtmlElement.style.backgroundColor="rgba(240, 71, 71, 0.1)",document.getElementById(e.id).style.backgroundColor="rgba(240, 71, 71, 0.1)",console.log("[messagedeletion] Correctly styled message!")}catch(e){console.log("[messagedeletion] Failed to restyle deleted message!")}}}return window.deletedMessages=[],{onLoad(){o=setInterval(s,300),t=cumcord.patcher.instead("dispatch",Object.getPrototypeOf(cumcord.modules.webpackModules.findByProps("dispatch")),((t,o)=>{if("MESSAGE_DELETE"===t[0].type)try{var s={deletedHtmlElement:e(t[0].id)};return s.deletedText=s.deletedHtmlElement.innerText.split("\n")[3],s.deletedHtmlElement.style.backgroundColor="rgba(240, 71, 71, 0.1)",s.id="chat-messages-"+t[0].id,console.log("[messagedeletion] New Deleted Message: "+s.deletedText),-1==window.deletedMessages.indexOf(s)&&window.deletedMessages.push(s),console.log(window.deletedMessages),void 0}catch(e){console.log("[messagedeletion] Failed to get deleted message!"),console.log(e)}return console.log("[messagedeletion] Debug: event ran "+t[0].type),o(...t)}))},onUnload(){t(),clearInterval(o)}}})();