// ==UserScript==
// @name         ACFun弹幕姬(仮)
// @namespace    https://queb.fun/
// @version      0.1
// @description  try to take over the world!
// @author       FairyScript
// @match        *://live.acfun.cn/live/*
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  //const css = CSSF();
  //$('body').append($('<style>').html(css));

  let msgCount = 0;
  setTimeout(function () {
    console.log('start');
    const messageContainer = $('.live-feed-messages');
    messageContainer.on('scroll',function(){
      const msg = $(this).children();
      if(msg.length !== msgCount){
        msgCount = msg.length;
        const lastMsg = msg.last();
        const msgType = lastMsg.attr('class');
        switch(msgType){
          case 'gift': {
            const giftText = lastMsg.find('span').last().html();
            if(/香蕉/.test(giftText)) lastMsg.children('div').attr('class','gift-banana');
          }
        }
      }
    });
},2000);
})();