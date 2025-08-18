
ServerEvents.recipes(event => {
    event.remove({id : 'codex_of_champions:tri_blade'});
	event.remove({id : 'codex_of_champions:thunderbringer'});
});

// 元素三重刃
ServerEvents.recipes(event => {
    event.shaped('codex_of_champions:tri_blade', [
		'ABC',
		'DEF',
		' G '
	], {
		A: 'irons_spellbooks:fire_upgrade_orb',
        B: 'irons_spellbooks:ice_upgrade_orb',
        C: 'irons_spellbooks:nature_upgrade_orb',
        D: 'cataclysm:ignitium_ingot',
        E: 'codex_of_champions:excalibur',
        F: 'cataclysm:cursium_ingot',
        G: 'mowziesmobs:ice_crystal'
    });
});

// 雷霆使者
ServerEvents.recipes(event => {
    event.shaped('codex_of_champions:thunderbringer', [
		'CB ',
		'CA ',
		' P '
	], {
		C: '#c:ingots/copper',
        B: 'codex_of_champions:electrified_bronze',
        A: 'mowziesmobs:wrought_axe',
        P: 'irons_spellbooks:weapon_parts'
    });
});

// 灵魂十字军
ServerEvents.recipes(event => {
	event.remove({id : 'codex_of_champions:soul_crusader_mask'});
	event.remove({id : 'codex_of_champions:soul_crusader_robes'});
	event.remove({id : 'codex_of_champions:soul_crusader_leggings'});
	event.remove({id : 'codex_of_champions:soul_crusader_boots'});
});

ServerEvents.recipes(event => {
    event.smithing(
		'codex_of_champions:blood_soul_mask',
		'codex_of_champions:arcane_upgrade_template',
		'crystal_chronicles:rogue_helmet',
		'codex_of_champions:soul_forged_ingot'
	)
});

ServerEvents.recipes(event => {
    event.smithing(
		'codex_of_champions:blood_soul_robes',
		'codex_of_champions:arcane_upgrade_template',
		'crystal_chronicles:rogue_chestplate',
		'codex_of_champions:soul_forged_ingot'
	)
});

ServerEvents.recipes(event => {
    event.smithing(
		'codex_of_champions:blood_soul_leggings',
		'codex_of_champions:arcane_upgrade_template',
		'crystal_chronicles:rogue_leggings',
		'codex_of_champions:soul_forged_ingot'
	)
});

ServerEvents.recipes(event => {
    event.smithing(
		'codex_of_champions:blood_soul_boots',
		'codex_of_champions:arcane_upgrade_template',
		'crystal_chronicles:rogue_boots',
		'codex_of_champions:soul_forged_ingot'
	)
});