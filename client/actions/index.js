'use strict';

export const LOG_SOMETHING = 'LOG_SOMETHING';

export function logSomething() {
  console.log('Logging Something');
  return {
    type: LOG_SOMETHING,
    payload: 'Random text'
  }
}
