Class YourMod{ //Change YourMod to your mod name.
	constructor(){
		this.mod = "YourMod"; //Change this to your mod name.
		core_f.packager.onLoad[this.mod] = this.load.bind(this);
		common_f.logger.logInfo(`Loading: ${this.mod}`);
	}
	load(){
		const lib = A_1_Lirikana_Weaponlib.mod;
		const ak74nId = "5644bd2b4bdc2d3b4c8b4572";
		const ak74nclone = "Lirikana_Weapon_545x39_ak74nclone";
		lib.newItem(ak74nId, ak74nclone);
		lib.weaponChangeRecoil(ak74nclone, 0, 0);
		database_f.server.tables.templates.items[ak74nId]._props.RecoilForceUp = 0;
		database_f.server.tables.templates.items[ak74nId]._props.RecoilForceBack = 0;
		        
				
		const _pkId = lib.getTraders()["_pkId"];
        const _roubleId = lib.getCurrency()["_roubleId"];
		lib.itemAddAll(ak74nclone, _pkId, _roubleId, 1);
	}
}
module.exports.Mod = YourMod; //Change YourMod to your mod name.