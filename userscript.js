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
  //变量定义
  const v1 = 120
  const rightTurnMax = 0.4
  const leftTurnMax = -0.4
  
  //操作函数定义
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
})()
