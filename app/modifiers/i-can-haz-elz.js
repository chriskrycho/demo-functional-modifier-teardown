import { modifier } from 'ember-modifier';

/**
 * @param {HTMLElement} element
 */
function iCanHazElz(element) {
  const parent = element.parentElement;

  return () => {
    if (parent) {
      debugger;
    }
  };
}

export default modifier(iCanHazElz);
