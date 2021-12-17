import { Camera, OrthographicCamera, PerspectiveCamera, Scene } from "three";
import { validate } from "uuid";
import { Compiler, COMPILEREVENTTYPE, CompilerTarget, ObjectCompiler } from "../../middleware/Compiler";
import { SymbolConfig } from "../common/CommonConfig";
import { CameraAllType } from "./CameraConfig";

export interface CameraCompilerTarget extends CompilerTarget {
  [key: string]: CameraAllType
}

export interface CameraCompilerParameters {
  scene?: Scene
  target?: CameraCompilerTarget
}

export class CameraCompiler extends Compiler implements ObjectCompiler {

  private target!: CameraCompilerTarget
  private scene!: Scene
  private map: Map<string, Camera>
  private constructMap: Map<string, () => Camera>

  constructor (parameters?: CameraCompilerParameters) {
    super()
    if (parameters) {
      parameters.target && (this.target = parameters.target)
      parameters.scene && (this.scene = parameters.scene)
    } else {
      this.scene = new Scene()
      this.target = {}
    }
    this.map = new Map()
    const constructMap = new Map()
    constructMap.set('PerspectiveCamera', () => new PerspectiveCamera())
    constructMap.set('OrthographicCamera', () => new OrthographicCamera())

    this.constructMap = constructMap
  }

  add (vid: string, config: CameraAllType): this {
    if (validate(vid)) {
      if (config.type && this.constructMap.has(config.type)) {
        const camera = this.constructMap.get(config.type)!()

        const tempConfig = JSON.parse(JSON.stringify(config))
        delete tempConfig.vid
        delete tempConfig.type

        // TODO: lookAt
        delete tempConfig.lookAt

        Compiler.applyConfig(tempConfig, camera)

        if (camera instanceof PerspectiveCamera || camera instanceof OrthographicCamera) {
          (camera as PerspectiveCamera).updateProjectionMatrix()
        }


        this.map.set(vid, camera)

        this.dispatchEvent({
          type: COMPILEREVENTTYPE.ADD,
          object: camera,
          vid
        })

        this.scene.add(camera)
      }
    } else {
      console.error(`camera vid parameter is illegal: ${vid}`)
    }
    return this
  }

  set (vid: string, path: string[], key: string, value: any): this {
    if (!validate(vid)) {
      console.warn(`camera compiler set function vid parameters is illeage: '${vid}'`)
      return this
    }

    if (!this.map.has(vid)) {
      console.warn(`geometry compiler set function can not found vid geometry: '${vid}'`)
      return this
    }

    const camera = this.map.get(vid)!
    let config = camera
    path.forEach((key, i, arr) => {
      config = camera[key]
    })
    config[key] = value

    // TODO: 根据特点属性update
    if (camera instanceof PerspectiveCamera || camera instanceof OrthographicCamera) {
      (camera as PerspectiveCamera).updateProjectionMatrix()
    }
    return this

  }

  // TODO:
  remove () {}

  setScene (scene: Scene): this {
    this.scene = scene
    return this
  }

  setTarget (target: CameraCompilerTarget): this {
    this.target = target
    return this
  }

  getMap (): Map<SymbolConfig['type'], Camera> {
    return this.map
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