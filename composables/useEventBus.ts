import mitt from 'mitt'

type ApplicationEvents = {
  'dropdown:close': void
  'tab:open': void
};

const emitter = mitt<ApplicationEvents>()

export const useEvent = emitter.emit
export const useListen = emitter.on
