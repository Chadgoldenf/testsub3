import { divide } from "lodash";
import { GameRoot } from "./script/GameRoot";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    private ab_bundle:cc.AssetManager.Bundle=null;

    start () {

        console.log("lodash2 ",divide(10,5));
        //init abgame
        let self = this;
        if( self.ab_bundle === null ){
            cc.assetManager.loadBundle('http://localhost:8081/assets/abtest', function (err, bundle) {
                if (err) {
                    return console.error(err);
                }
                console.log('load ab bundle successfully.',bundle);
                self.ab_bundle = bundle;
                bundle.load('testmgame', cc.Prefab, function (err, prefab) {
                    console.log("prefab load",err,prefab)
                    let pf:cc.Prefab = prefab as cc.Prefab;
                    let newNode = cc.instantiate(pf);
                    //newNode.x = cc.director.getScene().width/2;
                    //newNode.y = cc.director.getScene().height/2;
                    let child = cc.director.getScene().getChildByName('Canvas');
                    child.addChild(newNode);
                });
            });
        }

        //console.log("chad release cc_101");
        //cc.resources.release("cc_101");
        cc.game.emit('fire',new Date());
        this.scheduleOnce(function() {
            cc.find("LobbyNode").getComponent("LobbyNode").debug();
            console.log("chad2");
            cc.director.loadScene("game_cc_101");
            
        }, 2);

        let test:GameRoot = new GameRoot();
        test.debug();
    }
}
