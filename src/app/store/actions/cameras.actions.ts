import {Action} from '@ngrx/store';
import {InterfaceCamera} from '../modelsStore/camera.model'

export enum camerasActionTypes{
    ADD_CAMERA = '[cameras] Add Camera'
}

export class AddCameraAction implements Action{
    readonly type = camerasActionTypes.ADD_CAMERA;

    constructor( public payload: InterfaceCamera ){}
}
export type CameraAction = AddCameraAction;