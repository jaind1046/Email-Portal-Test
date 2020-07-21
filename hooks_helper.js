const { Helper } = codeceptjs;

class Hooks extends Helper {

  // before/after hooks
  /**
   * @protected
   */
  _before() {
    const recorder = require('codeceptjs').recorder;
    recorder.retry({
      retries: 2,
      when: err => err.message.indexOf('Cannot find context with specified id') > -1,
    });
  }

  /**
   * @protected
   */
  _after() {
    
  }

  
}

module.exports = Hooks;
