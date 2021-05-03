const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    start () {
        // init logic
        //this.label.string = this.text;

        console.log("chad release cc_101");
        cc.resources.release("cc_101");

        this.scheduleOnce(function() {
            cc.find("LobbyNode").getComponent("LobbyNode").debug();
            console.log("chad2");
            cc.director.loadScene("game_cc_101");
        }, 2);
    }
}
