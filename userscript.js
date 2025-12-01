// ==UserScript==
// @name         geofs autodriver++
// @namespace    https://geofs.com
// @version      1.0
// @description  Auto Takeoff+Auto land+AP PlusPlus
// @author       PancakeTD (TonyDong)
// @match        *://geo-fs.com/geofs.php?*
// @grant        none
// ==/UserScript==

(async function(){
  'use strict';
  function setThrottle(value){
    if (geofs.aircraft.instance.engine.throttle > value){
      for (let i = geofs.aircraft.instance.engine.throttle;i < value;i = geofs.aircraft.instance.engine.throttle){
        geofs.aircraft.instance.engine.throttle -= 0.05
      }
      geofs.aircraft.instance.engine.throttle = value
    }else if (geofs.aircraft.instance.engine.throttle < value){
      for (let i = geofs.aircraft.instance.engine.throttle;i > value;i = geofs.aircraft.instance.engine.throttle){
        geofs.aircraft.instance.engine.throttle += 0.05;
      }
      geofs.aircraft.instance.engine.throttle = value
    }
  }
  
}){}
