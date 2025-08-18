// 北冰之刃
ServerEvents.recipes(event => {
    event.remove({id : 'irons_spellbooks:boreal_blade'});
});

ServerEvents.recipes(event => {
    event.shaped('irons_spellbooks:boreal_blade', [
		'  I',
		'VA ',
		'PV '
	], {
		I: 'irons_spellbooks:mithril_ingot',
        V: 'irons_spellbooks:ice_venom_vial',
		P: 'irons_spellbooks:weapon_parts',
		A: 'bosses_of_mass_destruction:ancient_anima'
    });
});

// 北护之戒
ServerEvents.recipes(event => {
    event.remove({id : 'irons_spellbooks:frostward_ring'});
});

ServerEvents.recipes(event => {
    event.shaped('irons_spellbooks:frostward_ring', [
		'S A',
		' C ',
		'   '
	], {
		S: 'irons_spellbooks:permafrost_shard',
        C: 'irons_spellbooks:mithril_scrap',
		A: 'bosses_of_mass_destruction:ancient_anima'
    });
});