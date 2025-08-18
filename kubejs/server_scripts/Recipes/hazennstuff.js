
// 神之精华
ServerEvents.recipes(event => {
    event.remove({id : 'hazennstuff:crafting/materials/deus_essence_from_echo_shard'});
});

ServerEvents.recipes(event => {
    event.shaped('3x hazennstuff:deus_essence', [
		'   ',
		'EHE',
		'   '
	], {
		H: 'minecraft:heart_of_the_sea',
        E: 'minecraft:echo_shard'
    });
});
ServerEvents.recipes(event => {
    event.shaped('6x hazennstuff:deus_essence', [
		'   ',
		'EDE',
		'   '
	], {
		D: 'irons_spellbooks:divine_soulshard',
        E: 'minecraft:echo_shard'
    });
});
ServerEvents.recipes(event => {
    event.shaped('4x hazennstuff:deus_essence', [
		'   ',
		'ENE',
		'   '
	], {
		N: 'minecraft:nether_star',
        E: 'minecraft:echo_shard'
    });
});

// 星愤
ServerEvents.recipes(event => {
    event.shaped('hazennstuff:starfury', [
		' HE',
		'HZH',
		'FH '
	], {
		H: 'crystal_chronicles:hemalite_shard',
        E: 'irons_spellbooks:ender_upgrade_orb',
        Z: 'hazennstuff:zenalite_ingot',
        F: 'hazennstuff:excalibur_fragment',
    });
});