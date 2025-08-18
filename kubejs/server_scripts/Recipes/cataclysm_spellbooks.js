// 伪瓦吉特之杖
ServerEvents.recipes(event => {
    event.remove({id : 'cataclysm_spellbooks:wadjets_staff'});
});

ServerEvents.recipes(event => {
    event.shaped('cataclysm_spellbooks:fake_wudjets_staff', [
		'ABA',
		' C ',
		' C '
	], {
		A: 'cataclysm:ancient_metal_ingot',
        B: 'cataclysm:khopesh',
		C: 'cataclysm:koboleton_bone'
    });
});