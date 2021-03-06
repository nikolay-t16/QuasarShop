
/**
 * Quasar QAjaxBar component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/ajax-bar|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QAjaxBar',
  props: {
    /**
     * Emitted when bar is triggered to appear

     */      
    '@start': function () {},

    /**
     * Emitted when bar has finished its job

     */      
    '@stop': function () {},
    /**
     * Position within window of where QAjaxBar should be displayed
     * @type {'top'|'right'|'bottom'|'left'}
     */
    position: {
      type: String,
    },
    /**
     * Position within window of where QAjaxBar should be displayed
     * @type {'top'|'right'|'bottom'|'left'}
     */
    'position="top"': {
      type: String,
    },
    /**
     * Position within window of where QAjaxBar should be displayed
     * @type {'top'|'right'|'bottom'|'left'}
     */
    'position="right"': {
      type: String,
    },
    /**
     * Position within window of where QAjaxBar should be displayed
     * @type {'top'|'right'|'bottom'|'left'}
     */
    'position="bottom"': {
      type: String,
    },
    /**
     * Position within window of where QAjaxBar should be displayed
     * @type {'top'|'right'|'bottom'|'left'}
     */
    'position="left"': {
      type: String,
    },
    /**
     * Size in CSS units, including unit name
     * @type {String}
     */
    size: {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    color: {
      type: String,
    },
    /**
     * Skip Ajax hijacking (not a reactive prop)
     * @type {Boolean}
     */
    skipHijack: {
      type: Boolean,
    },
    /**
     * Reverse direction of progress
     * @type {Boolean}
     */
    reverse: {
      type: Boolean,
    }
  }
}
