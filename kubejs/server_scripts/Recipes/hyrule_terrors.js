// 蜥蜴角短剑
ServerEvents.recipes(event => {
    event.remove({id : 'hyrule_terrors:lizalfos_horn_dagger'});
});

ServerEvents.recipes(event => {
    event.shaped('hyrule_terrors:lizalfos_horn_dagger', [
		' L ',
		' D ',
		' C '
	], {
		L: 'hyrule_terrors:lizalfos_horn',
        D: 'minecraft:diamond',
		C: 'irons_spellbooks:cinder_essence'
    });
});

// 卓拉银核
ServerEvents.recipes(event => {
    event.shaped('goldenagefall:silver_zora_core', [
		'PCP',
		'CLC',
		'HCH'
	], {
		P: 'minecraft:prismarine_shard',
        L: '#c:leathers',
		C: 'hyrule_terrors:chuchu_jelly',
		H: 'hyrule_terrors:lizalfos_horn'
    });
});

// 蛮族硬质皮革
ServerEvents.recipes(event => {
    event.shaped('goldenagefall:hard_leather', [
		'HLH',
		'LIL',
		'HLH'
	], {
		H: 'hyrule_terrors:bokoblin_horn',
        L: '#c:leathers',
		I: '#c:ingots/iron'
    });
});

// 钢制锻造模板
ServerEvents.recipes(event => {
    event.shaped('goldenagefall:knight_upgrade_smithing_template', [
		'BSB',
		'STS',
		'BSB'
	], {
		B: 'minecraft:nether_bricks',
        S: 'hyrule_terrors:steel',
		T: 'minecraft:netherite_upgrade_smithing_template'
    });
});

// 卓拉银剑 骑士双手剑 碎岩巨剑
ServerEvents.recipes(event => {
    event.remove({id : 'hyrule_terrors:sliver_longsword'});
    event.remove({id : 'hyrule_terrors:knights_claymore'});
    event.remove({id : 'hyrule_terrors:boulder_breaker'});
});

ServerEvents.recipes(event => {
    event.smithing(
		'hyrule_terrors:silver_longsword',
		'goldenagefall:silver_zora_core',
		'minecraft:diamond_sword',
		'minecraft:netherite_ingot'
	)
});

ServerEvents.recipes(event => {
    event.smithing(
		'hyrule_terrors:knights_claymore',
		'cataclysm:ignitium_upgrade_smithing_template',
		'minecraft:iron_sword',
		'minecraft:netherite_ingot'
	)
});

ServerEvents.recipes(event => {
    event.smithing(
		'hyrule_terrors:boulder_breaker',
		'cataclysm:ignitium_upgrade_smithing_template',
		'hyrule_terrors:knights_claymore',
		'minecraft:diamond_block'
	)
});


// 卓拉套装
ServerEvents.recipes(event => {
	event.remove({id : 'hyrule_terrors:zora_helmet'});
	event.remove({id : 'hyrule_terrors:zora_chestplate'});
	event.remove({id : 'hyrule_terrors:zora_leggings'});
	event.remove({id : 'hyrule_terrors:zora_boots'});
});

ServerEvents.recipes(event => {
    event.smithing(
		'hyrule_terrors:zora_helmet',
		'goldenagefall:silver_zora_core',
		'minecraft:diamond_helmet',
		'minecraft:netherite_ingot'
	)
});

ServerEvents.recipes(event => {
    event.smithing(
		'hyrule_terrors:zora_chestplate',
		'goldenagefall:silver_zora_core',
		'minecraft:diamond_chestplate',
		'minecraft:netherite_ingot'
	)
});

ServerEvents.recipes(event => {
    event.smithing(
		'hyrule_terrors:zora_leggings',
		'goldenagefall:silver_zora_core',
		'minecraft:diamond_leggings',
		'minecraft:netherite_ingot'
	)
});

ServerEvents.recipes(event => {
    event.smithing(
		'hyrule_terrors:zora_boots',
		'goldenagefall:silver_zora_core',
		'minecraft:diamond_boots',
		'minecraft:netherite_ingot'
	)
});

// 蛮族套装
ServerEvents.recipes(event => {
	event.remove({id : 'hyrule_terrors:barbarian_helmet'});
	event.remove({id : 'hyrule_terrors:barbarian_chestplate'});
	event.remove({id : 'hyrule_terrors:barbarian_leggings'});
	event.remove({id : 'hyrule_terrors:barbarian_boots'});
});

ServerEvents.recipes(event => {
    event.smithing(
		'hyrule_terrors:barbarian_helmet',
		'goldenagefall:hard_leather',
		'mutantmonsters:mutant_skeleton_skull',
		'minecraft:netherite_ingot'
	)
});

ServerEvents.recipes(event => {
    event.smithing(
		'hyrule_terrors:barbarian_chestplate',
		'goldenagefall:hard_leather',
		'mutantmonsters:mutant_skeleton_chestplate',
		'minecraft:netherite_ingot'
	)
});

ServerEvents.recipes(event => {
    event.smithing(
		'hyrule_terrors:barbarian_leggings',
		'goldenagefall:hard_leather',
		'mutantmonsters:mutant_skeleton_leggings',
		'minecraft:netherite_ingot'
	)
});

ServerEvents.recipes(event => {
    event.smithing(
		'hyrule_terrors:barbarian_boots',
		'goldenagefall:hard_leather',
		'mutantmonsters:mutant_skeleton_boots',
		'minecraft:netherite_ingot'
	)
});

// 骑士套装
ServerEvents.recipes(event => {
	event.remove({id : 'hyrule_terrors:knight_helmet'});
	event.remove({id : 'hyrule_terrors:knight_chestplate'});
	event.remove({id : 'hyrule_terrors:knight_leggings'});
	event.remove({id : 'hyrule_terrors:knight_boots'});
});

ServerEvents.recipes(event => {
    event.smithing(
		'hyrule_terrors:knight_helmet',
		'goldenagefall:knight_upgrade_smithing_template',
		'minecraft:iron_helmet',
		'minecraft:netherite_ingot'
	)
});

ServerEvents.recipes(event => {
    event.smithing(
		'hyrule_terrors:knight_chestplate',
		'goldenagefall:knight_upgrade_smithing_template',
		'minecraft:iron_chestplate',
		'minecraft:netherite_ingot'
	)
});

ServerEvents.recipes(event => {
    event.smithing(
		'hyrule_terrors:knight_leggings',
		'goldenagefall:knight_upgrade_smithing_template',
		'minecraft:iron_leggings',
		'minecraft:netherite_ingot'
	)
});

ServerEvents.recipes(event => {
    event.smithing(
		'hyrule_terrors:knight_boots',
		'goldenagefall:knight_upgrade_smithing_template',
		'minecraft:iron_boots',
		'minecraft:netherite_ingot'
	)
});

// 魔灵套装
ServerEvents.recipes(event => {
	event.remove({id : 'hyrule_terrors:evil_spirit_helmet'});
	event.remove({id : 'hyrule_terrors:evil_spirit_chestplate'});
	event.remove({id : 'hyrule_terrors:evil_spirit_leggings'});
	event.remove({id : 'hyrule_terrors:evil_spirit_boots'});
});

ServerEvents.recipes(event => {
    event.smithing(
		'hyrule_terrors:evil_spirit_helmet',
		'hyrule_terrors:bokoblin_horn',
		'hyrule_terrors:knight_helmet',
		'minecraft:fermented_spider_eye'
	)
});

ServerEvents.recipes(event => {
    event.smithing(
		'hyrule_terrors:evil_spirit_chestplate',
		'hyrule_terrors:lizalfos_talon',
		'hyrule_terrors:knight_chestplate',
		'minecraft:nether_star'
	)
});

ServerEvents.recipes(event => {
    event.smithing(
		'hyrule_terrors:evil_spirit_leggings',
		'hyrule_terrors:chuchu_jelly',
		'hyrule_terrors:knight_leggings',
		'hyrule_terrors:lizalfos_talon'
	)
});

ServerEvents.recipes(event => {
    event.smithing(
		'hyrule_terrors:evil_spirit_boots',
		'hyrule_terrors:bokoblin_fang',
		'hyrule_terrors:knight_boots',
		'hyrule_terrors:chuchu_jelly'
	)
});