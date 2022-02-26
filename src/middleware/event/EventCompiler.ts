import { Compiler, CompilerTarget } from "../../core/Compiler";
import { EventConfig } from "./eventConfig";
import { SymbolConfig } from "../common/CommonConfig";
import { Object3D } from "three";
import { EVENTNAME, ObjectEvent } from "../../manager/EventManager";
import { isValidKey } from "../../utils/utils";
import {v4 as getUuid} from 'uuid'

import * as BasicEventLirary from '../../convenient/BasicEventLibrary/handler'
import { BasicEventAllConfig } from "../../convenient/BasicEventLibrary/configure";

export type EventHandler<C extends BasicEventConfig> = (compiler: EventCompiler, config: C) => (event?: ObjectEvent) => void
export interface BasicEventConfig {
  name: string
}

export interface EventCompilerTarget extends CompilerTarget {
  [key: string]: EventConfig
}

export interface EventCompilerParameters {
  target: EventCompilerTarget
}

interface EventStructure {
  target: string,
  pointerdown: string[]
  pointermove: string[]
  pointerup: string[]
  pointerenter: string[]
  pointerleave: string[]
  click: string[]
  dblclick: string[]
  contextmenu: string[]
}

export class EventCompiler extends Compiler {

  static eventLibrary:{[key: string]: EventHandler<BasicEventConfig>} = {}

  static registerEvent = function<T extends BasicEventConfig> (map: {[key: string]: EventHandler<T>}) {
    EventCompiler.eventLibrary = Object.assign(EventCompiler.eventLibrary, map)
  }

  private target: EventCompilerTarget
  private map: Map<string, EventStructure>
  private funMap: Map<string, Function>
  private objectMapSet: Set<Map<SymbolConfig['vid'], Object3D>>


  constructor (parameters?: EventCompilerParameters) {
    super()

    if (parameters) {
      this.target = parameters.target
    } else {
      this.target = {}
    }
    this.map = new Map()
    this.funMap = new Map()
    this.objectMapSet = new Set()
  }

  // 获取物体
  private getObject (vid: string): Object3D | null {
    for (const map of this.objectMapSet) {
      if (map.has(vid)) {
        return map.get(vid)!
      }
    }
    return null
  }

  // 获取目标物体
  private getTargetObject(vid: string): Object3D | null {
    if (!this.map.has(vid)) {
      return null
    }

    const structure = this.map.get(vid)!
    return this.getObject(structure.target)
  }

  linkObjectMap (...map: Map<SymbolConfig['vid'], Object3D>[]): this {
    for (let objectMap of map) {
      if (!this.objectMapSet.has(objectMap)) {
        this.objectMapSet.add(objectMap)
      }
    }
    return this
  }

  add (vid: string, config: EventConfig): this {
    const structure: EventStructure = {
      target: config.target,
      [EVENTNAME.POINTERDOWN]: [],
      [EVENTNAME.POINTERUP]: [],
      [EVENTNAME.POINTERMOVE]: [],
      [EVENTNAME.POINTERENTER]: [],
      [EVENTNAME.POINTERLEAVE]: [],
      [EVENTNAME.CLICK]: [],
      [EVENTNAME.DBLCLICK]: [],
      [EVENTNAME.CONTEXTMENU]: []
    }
    this.map.set(vid, structure)
    for (let key in config) {
      let value = config[key]
      if (Array.isArray(value) &&  isValidKey(key, EVENTNAME) && value.length) {
        for (let configure of value) {
          this.addEvent(vid, key, configure)
        }
      }
    }
    return this
  }

  addEvent (vid: string, eventName: EVENTNAME, config: BasicEventConfig): this {
    if (!this.map.has(vid)) {
      console.warn(`EventCompiler: No matching vid found: ${vid}`)
      return this
    }
    if (!EventCompiler.eventLibrary[config.name]) {
      console.warn(`EventCompiler: can not support this event: ${config.name}`)
      return this
    }

    const targetObject = this.getTargetObject(vid) as Object3D<ObjectEvent>

    if (!targetObject) {
      console.warn(`EventCompiler: no object with matching vid found: ${vid}`)
      return this
    }   

    // 生成函数
    const fun = EventCompiler.eventLibrary[config.name](this, config)
    const funSymbol = getUuid()
    

    // 映射缓存
    this.funMap.set(funSymbol, fun) 

    const structure = this.map.get(vid)!
    structure[eventName].push(funSymbol)

    // 绑定事件
    targetObject.addEventListener(eventName, fun)
    return this
  }

  remove (): this {
    return this
  }

  setTarget (target: EventCompilerTarget): this {
    this.target = target
    return this
  }
  
  compileAll (): this {
    const target = this.target
    for (const key in target) {
      this.add(key, target[key])
    }
    return this
  }

  dispose (): this {
    return this
  }
}

EventCompiler.registerEvent<BasicEventAllConfig>(BasicEventLirary)