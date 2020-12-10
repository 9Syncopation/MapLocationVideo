import { InterfaceCamera } from '../modelsStore/camera.model';
import { CameraAction, camerasActionTypes } from '../actions/cameras.actions';

const initialState: Array<InterfaceCamera> = [
  {
    id: 9,
    country: 'China',
    city: 'Anjiang',
    longitude: 113.020456,
    latitude: 28.404102,
    active: true,
  },
  {
    id: 10,
    country: 'Indonesia',
    city: 'Cipaku',
    longitude: 107.7843483,
    latitude: -7.0631844,
    active: true,
  },
];

export function camerasReducer(
  state: Array<InterfaceCamera> = initialState,
  action: CameraAction
) {
  switch (action.type) {
    case camerasActionTypes.ADD_CAMERA:
      return [...state, action.payload];
    default:
      return state;
  }
}
