// ==UserScript==
// @name         geofs autodriver++
// @namespace    https://geofs.com
// @version      1.0
// @description  Auto Takeoff+Auto land+AP PlusPlus
// @author       PancakeTD (TonyDong)
// @match        *://geo-fs.com/geofs.php?*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function(){
  'use strict';
  //变量定义
  const v1 = 120
  const rightTurnMax = 0.4
  const leftTurnMax = -0.4
  let targetPitch = 0
  let targetPitchDo = 0
  let targetLookAt = 0
  let targetRollAngle = 0
  let targetSpeed = 0
  let zhuangtai = "takeoff"
  let isInAuto = false
  
  //操作函数定义
  async function setThrottle(value){
    if (geofs.aircraft.instance.engine.throttle > value){
      for (let i = geofs.aircraft.instance.engine.throttle;i > value;i = geofs.aircraft.instance.engine.throttle){
        geofs.aircraft.instance.engine.throttle -= 0.05
      }
      geofs.aircraft.instance.engine.throttle = value
    }else if (geofs.aircraft.instance.engine.throttle < value){
      for (let i = geofs.aircraft.instance.engine.throttle;i < value;i = geofs.aircraft.instance.engine.throttle){
        geofs.aircraft.instance.engine.throttle += 0.05;
      }
      geofs.aircraft.instance.engine.throttle = value
    }
  }
  async function setYaw(value){
    if (geofs.aircraft.instance.controls.yaw > value){
      for (let i = geofs.aircraft.instance.controls.yaw;i > value;i = geofs.aircraft.instance.controls.yaw){
        geofs.aircraft.instance.controls.yaw -= 0.05;
      }
      geofs.aircraft.instance.controls.yaw = value;
    }else if (geofs.aircraft.instance.controls.yaw < value){
      for (let i = geofs.aircraft.instance.controls.yaw;i < value;i = geofs.aircraft.instance.controls.yaw){
        geofs.aircraft.instance.controls.yaw += 0.05;
      }
      geofs.aircraft.instance.controls.yaw = value
    }
  }
  async function setRoll(value){
    if (geofs.aircraft.instance.controls.roll > value){
      for (let i = geofs.aircraft.instance.controls.roll;i > value;i = geofs.aircraft.instance.controls.roll){
        geofs.aircraft.instance.controls.roll -= 0.03
      }
      geofs.aircraft.instance.controls.roll = value
    }else if (geofs.aircraft.instance.controls.roll < value){
      for (let i = geofs.aircraft.instance.controls.roll;i < value;i  = geofs.aircraft.instance.controls.roll){
        geofs.aircraft.instance.controls.roll += 0.03
      }
      geofs.aircraft.instance.controls.roll = value
    }
  }
  async function setPitch(value){
    if (geofs.aircraft.instance.controls.pitch > value){
      for (let i = geofs.aircraft.instance.controls.pitch;i > valsue;i = geofs.aircraft.instance.controls.pitch){
        geofs.aircraft.instance.controls.pitch -= 0.03
      }
      geofs.aircraft.instance.controls.pitch = value
    }else if (geofs.aircraft.instance.controls.pitch < value){
      for (let i = geofs.aircraft.instance.controls.pitch;i < value;i = geofs.aircraft.instance.controls.pitch){
        geofs.aircraft.instance.controls.pitch += 0.03
      }
      geofs.aircraft.instance.controls.pitch = value
    }
  }
  function readSpeed(){
    return geofs.aircraft.instance.airspeed
  }

  //takeoff
  async function takeoff(){
    zhuangtai = "takeoff"
  }

  const keepTargetInterval = setInterval(() => {
    //roll
    let nowAngle = geofs.aircraft.instance.orientation.roll * (180 / Math.PI)
    setRoll((1/90) * targetRollAngle - nowAngle * (1/90))
  }, 100);

  //loop
  setInterval(async() => {
    if (zhuangtai == "takeoff") takeoff()
  }, 200);

})()
