// ==UserScript==
// @name         GeoFS Autodriver++
// @namespace    https://github.com/yourname
// @version      1.3.1
// @description  Auto Takeoff + Auto Land + AP
// @author       PancakeTD
// @match        https://geo-fs.com/geofs.php*
// @match        https://*.geo-fs.com/geofs.php*
// @grant        none
// @run-at       document-idle
// @downloadURL  https://tonyd365.github.io/geofs-autodriver-plus/userscript.js
// @updateURL    https://tonyd365.github.io/geofs-autodriver-plus/userscript.js
// ==/UserScript==

(function(){
  'use strict';
  //变量定义
  const v1 = 120
  const rightTurnMax = 0.4
  const leftTurnMax = -0.4
  let targetPitch = 0
  let targetPitchAngle = 0
  let targetLookAt = 0
  let targetRollAngle = 0
  let targetSpeed = 0
  let zhuangtai = "takeoff"
  let isInAuto = false

  //操作函数定义
  async function setThrottle(value){
    if (geofs.aircraft.instance.engine.throttle > value){
      for (let i = geofs.aircraft.instance.engine.throttle;i > value;i = geofs.aircraft.instance.engine.throttle){
        controlers -= 0.05
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
    nowAngle = geofs.aircraft.instance.orientation.roll * (180 / Math.PI)
    setPitch((1/90) * targetPitchAngle - nowAngle * (1/90))
    const nowSpeed = readSpeed()
    const cha = targetSpeed - nowSpeed
    if (cha > 15){
      setThrottle(1)
    }else if (cha < 15 && cha > 10){
      setThrottle(0.75)
    }else if (cha < 10 && cha > 5){
      setThrottle(0.4)
    }else if (cha < 5 && cha > 1){
      setThrottle(0.15)
    }else{
      setThrottle(0)
    }
  }, 100);

  //loop
  const loop = setInterval(async() => {
    if (zhuangtai == "takeoff") takeoff()
  }, 200);

})()
