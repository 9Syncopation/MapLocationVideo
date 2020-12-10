import { ICameras } from '../modelsStore/camera.model';
import { CamerasAction, camerasActionTypes } from '../actions/cameras.actions';
export interface State {
  cameras: ICameras[];
  isLoading: boolean;
  error: string | null;
}
export const camerasFeatureKey = 'cameras';

export const initialState: State = {
  cameras: [],
  isLoading: false,
  error: '',
};

export function camerasReducer(
  state = initialState,
  action: CamerasAction
): State {
  switch (action.type) {
    case camerasActionTypes.LOAD_CAMERAS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case camerasActionTypes.LOAD_CAMERAS_SUCCESS: {
      return {
        cameras: action.payload.cameras,
        isLoading: false,
        error: null,
      };
    }
    case camerasActionTypes.LOAD_CAMERAS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }
    case camerasActionTypes.ADD_CAMERA_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case camerasActionTypes.ADD_CAMERA_SUCCESS: {
      return Object.assign({}, state, {
        employees: state.cameras.filter(({ id }) => id !== action.payload),
        isLoading: false,
        error: null,
      });
    }
    case camerasActionTypes.ADD_CAMERA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }
    default: {
      return state;
    }
  }
}
