import { DataSupport } from "./../core/DataSupport";
import { TextureDataSupport } from "../middleware/texture/TextureDataSupport";
import { MaterialDataSupport } from "../middleware/material/MaterialDataSupport";
import { LightDataSupport } from "../middleware/light/LightDataSupport";
import { GeometryDataSupport } from "../middleware/geometry/GeometryDataSupport";
import { CameraDataSupport } from "../middleware/camera/CameraDataSupport";
import { TextureCompilerTarget } from "../middleware/texture/TextureCompiler";
import { LightCompilerTarget } from "../middleware/light/LightCompiler";
import { GeometryCompilerTarget } from "../middleware/geometry/GeometryCompiler";
import { CameraCompilerTarget } from "../middleware/camera/CameraCompiler";
import { MaterialCompilerTarget } from "../middleware/material/MaterialCompiler";
import { MODULETYPE } from "../middleware/constants/MODULETYPE";
import { RendererCompilerTarget } from "../middleware/renderer/RendererCompiler";
import { RendererDataSupport } from "../middleware/renderer/RendererDataSupport";
import { SceneCompilerTarget } from "../middleware/scene/SceneCompiler";
import { SceneDataSupport } from "../middleware/scene/SceneDataSupport";
import { ControlsCompilerTarget } from "../middleware/controls/ControlsCompiler";
import { ControlsDataSupport } from "../middleware/controls/ControlsDataSupport";
import { Compiler, CompilerTarget } from "../core/Compiler";
import { SpriteCompilerTarget } from "../middleware/sprite/SpriteCompiler";
import { SpriteDataSupport } from "../middleware/sprite/SpriteDataSupport";
import { EventCompilerTarget } from "../middleware/event/EventCompiler";
import { EventDataSupport } from "../middleware/event/EventDataSupport";
import { LineDataSupport } from "../middleware/line/LineDataSupport";
import { MeshCompilerTarget } from "../middleware/mesh/MeshCompiler";
import { MeshDataSupport } from "../middleware/mesh/MeshDataSupport";
import { PointsCompilerTarget } from "../middleware/points/PointsCompiler";
import { PointsDataSupport } from "../middleware/points/PointsDataSupport";
import { BasicObjectDataSupport } from "../middleware/object/ObjectDataSupport";
import { SymbolConfig } from "../middleware/common/CommonConfig";
import { GroupCompilerTarget } from "../middleware/group/GroupCompiler";
import { GroupDataSupport } from "../middleware/group/GroupDataSupport";
export interface LoadOptions {
    [MODULETYPE.TEXTURE]?: TextureCompilerTarget;
    [MODULETYPE.MATERIAL]?: MaterialCompilerTarget;
    [MODULETYPE.GEOMETRY]?: GeometryCompilerTarget;
    [MODULETYPE.LIGHT]?: LightCompilerTarget;
    [MODULETYPE.CAMERA]?: CameraCompilerTarget;
    [MODULETYPE.SPRITE]?: SpriteCompilerTarget;
    [MODULETYPE.LINE]?: LightCompilerTarget;
    [MODULETYPE.MESH]?: MeshCompilerTarget;
    [MODULETYPE.POINTS]?: PointsCompilerTarget;
    [MODULETYPE.GROUP]?: GroupCompilerTarget;
    [MODULETYPE.RENDERER]?: RendererCompilerTarget;
    [MODULETYPE.SCENE]?: SceneCompilerTarget;
    [MODULETYPE.CONTROLS]?: ControlsCompilerTarget;
    [MODULETYPE.EVENT]?: EventCompilerTarget;
}
export interface DataSupportManagerParameters {
    cameraDataSupport?: CameraDataSupport;
    lightDataSupport?: LightDataSupport;
    geometryDataSupport?: GeometryDataSupport;
    textureDataSupport?: TextureDataSupport;
    materialDataSupport?: MaterialDataSupport;
    rendererDataSupport?: RendererDataSupport;
    sceneDataSupport?: SceneDataSupport;
    controlsDataSupport?: ControlsDataSupport;
    spriteDataSupport?: SpriteDataSupport;
    eventDataSupport?: EventDataSupport;
    lineDataSupport?: LineDataSupport;
    meshDataSupport?: MeshDataSupport;
    pointsDataSupport?: PointsDataSupport;
    groupDataSupport?: GroupDataSupport;
}
export declare class DataSupportManager {
    static configModuleMap: {
        [key: string]: string;
    };
    cameraDataSupport: CameraDataSupport;
    lightDataSupport: LightDataSupport;
    geometryDataSupport: GeometryDataSupport;
    textureDataSupport: TextureDataSupport;
    materialDataSupport: MaterialDataSupport;
    rendererDataSupport: RendererDataSupport;
    sceneDataSupport: SceneDataSupport;
    controlsDataSupport: ControlsDataSupport;
    spriteDataSupport: SpriteDataSupport;
    eventDataSupport: EventDataSupport;
    lineDataSupport: LineDataSupport;
    meshDataSupport: MeshDataSupport;
    pointsDataSupport: PointsDataSupport;
    groupDataSupport: GroupDataSupport;
    private dataSupportMap;
    constructor(parameters?: DataSupportManagerParameters);
    /**
     *
     * @deprecated - 下版本废弃 不在单独区分object dataSupport
     *
     */
    getObjectDataSupportList(): BasicObjectDataSupport[];
    /**
     *
     * @deprecated - 下版本废弃 -> getConfigBySymbol
     *
     */
    getObjectConfig<T extends SymbolConfig>(vid: string): T | null;
    getDataSupport<D>(type: MODULETYPE): D | null;
    getSupportData<C extends CompilerTarget, D extends DataSupport<C, Compiler>>(type: MODULETYPE): C | null;
    setSupportData<C extends CompilerTarget, D extends DataSupport<C, Compiler>>(type: MODULETYPE, data: C): this;
    getConfigBySymbol<T extends SymbolConfig>(vid: string): T | null;
    removeConfigBySymbol(vid: string): void;
    getModuleBySymbol(vid: string): MODULETYPE | null;
    applyConfig<T extends SymbolConfig>(config: T): this;
    reactiveConfig<T extends SymbolConfig>(config: T): T;
    load(config: LoadOptions): this;
    remove(config: LoadOptions): this;
    toJSON(extendsConfig?: object): string;
}
