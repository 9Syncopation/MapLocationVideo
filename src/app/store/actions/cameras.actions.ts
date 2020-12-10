import {Action} from '@ngrx/store';
import {ICameras} from '../modelsStore/camera.model'

export enum camerasActionTypes{
    LOAD_CAMERAS_REQUEST ="[cameras] Load Request" ,  
    LOAD_CAMERAS_FAILURE ="[cameras] Load Failure" ,  
    LOAD_CAMERAS_SUCCESS ="[cameras] Load Success" ,  
    ADD_CAMERA_REQUEST = "[cameras] Add Request",
    ADD_CAMERA_FAILURE = "[cameras] Add Failure",
    ADD_CAMERA_SUCCESS = "[cameras] Add Success",
}

export class LoadCamerasRequestAction implements Action {
    readonly type = camerasActionTypes.LOAD_CAMERAS_REQUEST;
  }
  
  export class LoadCamerasFailureAction implements Action {
    readonly type = camerasActionTypes.LOAD_CAMERAS_FAILURE;
    constructor(public payload: { error: string }) {}
  }
  
  export class LoadCamerasSuccessAction implements Action {
    readonly type = camerasActionTypes.LOAD_CAMERAS_SUCCESS;
    constructor(public payload: { cameras: ICameras[] }) {}
  }
  
  export class AddCamerasRequestAction implements Action {
    readonly type = camerasActionTypes.ADD_CAMERA_REQUEST;
    constructor(public payload: number) {}
  }
  
  export class AddCamerasFailureAction implements Action {
    readonly type = camerasActionTypes.ADD_CAMERA_FAILURE;
    constructor(public payload: { error: string }) {}
  }
  
  export class AddCamerasSuccessAction implements Action {
    readonly type = camerasActionTypes.ADD_CAMERA_SUCCESS;
    constructor(public payload: number) {}
  }
// export class AddCameraAction implements Action{
//     readonly type = camerasActionTypes.ADD_CAMERA;

    // constructor( public payload: InterfaceCamera ){}
// }
// export type CameraAction = AddCameraAction;

export type CamerasAction =
  | LoadCamerasRequestAction
  | LoadCamerasFailureAction
  | LoadCamerasSuccessAction
  | AddCamerasRequestAction
  | AddCamerasFailureAction
  | AddCamerasSuccessAction;