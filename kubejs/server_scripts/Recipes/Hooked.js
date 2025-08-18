
// 红石钩爪
ServerEvents.recipes(event => {
    event.remove({id : 'hooked:redstone_hook'});
    event.remove({id : 'hooked:ender_hook'});
    event.remove({id : 'hooked:iron_hook'});
    event.remove({id : 'hooked:diamond_hook'});
});

ServerEvents.recipes(event => {
    event.shaped('hooked:redstone_hook', [
		'PRO',
		'CHR',
		'ACP'
	], {
		R: 'minecraft:redstone_block',
		P: 'minecraft:piston',
		H: 'hooked:diamond_hook',
		C: 'minecraft:comparator',
		O: 'bosses_of_mass_destruction:obsidian_heart',
		A: 'bosses_of_mass_destruction:ancient_anima',
    });
});

ServerEvents.recipes(event => {
    event.shaped('hooked:ender_hook', [
		'ERH',
		'BDR',
		'CBE'
	], {
		H: 'mutantmonsters:endersoul_hand',
		R: 'minecraft:breeze_rod',
		E: 'codex_of_champions:reinforced_ender_eye',
		D: 'hooked:diamond_hook',
		B: 'minecraft:blaze_rod',
		C: 'bosses_of_mass_destruction:charged_ender_pearl',
    });
});

ServerEvents.recipes(event => {
    event.shaped('hooked:iron_hook', [
		'AIP',
		' CI',
		'C A'
	], {
		P: 'minecraft:iron_pickaxe',
		I: 'minecraft:iron_ingot',
		C: 'minecraft:chain',
		A: 'block_factorys_bosses:ancient_iron_ingot',
    });
});

ServerEvents.recipes(event => {
    event.shaped('hooked:diamond_hook', [
		' DD',
		'SID',
		'DS '
	], {
		D: 'minecraft:diamond',
		I: 'hooked:iron_hook',
		S: 'wild_bows:diamond_string',
    });
});