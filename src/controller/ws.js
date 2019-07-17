const Base = require('./base.js');

module.exports = class extends Base {
    openAction() {
        console.log('ws open');
        this.broadcast('open','open1');//{"event":"","data":""}
      }
      closeAction() {
        console.log('ws close');
        return this.success();
      }
      messageAction() {
        const data = this.wsData.data;
        this.broadcast('message',data);
      }
};
