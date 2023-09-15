import type { StateEvents } from '../../state/index.js';

export interface ViewportState {
  height: number;
  isExpanded: boolean;
  stableHeight: number;
  width: number;
}

export type ViewportEvents = StateEvents<ViewportState>;

export type ViewportEventName = keyof ViewportEvents;

export type ViewportEventListener<E extends ViewportEventName> = ViewportEvents[E];
