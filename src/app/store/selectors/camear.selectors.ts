import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, camerasFeatureKey } from '../reducers/cameras.reducers';

const getCamerasState = createFeatureSelector<State>(
  camerasFeatureKey
);

export const selectCamerasList = createSelector(
  getCamerasState,
  state => state.cameras
);

export const selectCamerasError = createSelector(
  getCamerasState,
  state => state.error
);

export const selectCamerasIsLoading = createSelector(
  getCamerasState,
  state => state.isLoading
);