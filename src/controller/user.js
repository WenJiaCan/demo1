const Base = require('./base.js');

module.exports = class extends Base {
  async indexAction() {
    const user = this.model('shi');
    const data = await user.select();
    return this.json(data);
  }
  async createAction() {
    const username = this.post('shi_shang');
    const usertel = this.post('shi_xia');
    const user = {shi_shang:username,shi_xia:usertel};
    const userid = await this.model('shi').add(user);
    const newuser = await this.model('shi').where({shi_id:userid}).find();
    return this.json({newuser});
  }
  async deleteAction() {
    const username = this.post('shi_shang');
    await this.model('shi').where({shi_shang:username}).delete();
    await this.indexAction();
  }
  async updateAction(){
    const userid = this.post('shi_id');
    const username = this.post('shi_shang');
    const usertel = this.post('shi_xia');
    await this.model('shi').where({shi_id:userid}).update({shi_shang:username , shi_xia:usertel});
    await this.indexAction();
  }
  async findAction(){
    const username = this.get('shi_shang');
    const data = await this.model('shi').where({shi_shang:username}).find();
    if(think.isEmpty(data)){

    }
     return this.json({data});
  }
};
