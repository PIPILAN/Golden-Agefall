// 移除索拉瑞亚
ServerEvents.recipes(event => {
    event.remove({id : 'wild_bows:solaria_helmet_recipe'});
    event.remove({id : 'wild_bows:solaria_chestplate_recipe'});
    event.remove({id : 'wild_bows:solaria_leggings_recipe'});
    event.remove({id : 'wild_bows:solaria_boots_recipe'});
    event.remove({id : 'wild_bows:solaria_armor_helmet_recipe'});
    event.remove({id : 'wild_bows:solaria_armor_chestplate_recipe'});
    event.remove({id : 'wild_bows:solaria_armor_leggings_recipe'});
    event.remove({id : 'wild_bows:solaria_armor_boots_recipe'});
    event.remove({id : 'wild_bows:solaria_armor_boots_recipe'});
    event.remove({id : 'wild_bows:solaria_pickaxe_recipe'});
    event.remove({id : 'wild_bows:solaria_axe_recipe'});
    event.remove({id : 'wild_bows:solaria_shovel_recipe'});
    event.remove({id : 'wild_bows:solaria_hoe_recipe'});
    event.remove({id : 'wild_bows:solaria_sword_recipe'});
	event.remove({id : 'wild_bows:solar_helmet_recipe'});
	event.remove({id : 'wild_bows:solar_chestplate_recipe'});
	event.remove({id : 'wild_bows:solar_leggings_recipe'});
	event.remove({id : 'wild_bows:solar_boots_recipe'});
	event.remove({id : 'wild_bows:solar_helmet_recipe'});
	event.remove({id : 'wild_bows:star_armor_boots_recipe'});
	event.remove({id : 'wild_bows:star_armor_leggings_recipe'});
	event.remove({id : 'wild_bows:star_armor_chestplate_recipe'});
	event.remove({id : 'wild_bows:star_armor_helmet_recipe'});
});

// 沼泽灯笼配方
ServerEvents.recipes(event => {
    event.recipes.kubejs.shapeless('ribbits:swamp_lantern',
        [
            'minecraft:lantern',
            'minecraft:vine'
        ]
    )
})

// 螃蟹壳分解骨粉
ServerEvents.recipes(event => {
    event.recipes.kubejs.shapeless('2x minecraft:bone_meal',
        [
            'livingthings:crab_shell'
        ]
    )
})

// 祛魔台配方
ServerEvents.recipes(event => {
    event.remove({id : 'disenchanting_table:disenchanting_table'});
});

ServerEvents.recipes(event => {
    event.shaped('disenchanting_table:disenchanting_table', [
		' V ',
		'STS',
		'NWN'
	], {
		V: 'bosses_of_mass_destruction:void_thorn',
        S: 'minecraft:nether_star',
		T: 'minecraft:enchanting_table',
		N: 'minecraft:netherite_block',
		W: 'cataclysm:witherite_block'
    });
});



// 幸运种子
ServerEvents.recipes(event => {
	event.shapeless('goldenagefall:seed_of_fortune', [
		'minecraft:pumpkin_seeds',
		'minecraft:wheat_seeds',
		'minecraft:melon_seeds',
		'adorablehamsterpets:green_bean_seeds',
		'minecraft:beetroot_seeds',
		'adorablehamsterpets:cucumber_seeds',
		'kaleidoscope_cookery:tomato_seed',
		'kaleidoscope_cookery:chili_seed',
		'kaleidoscope_cookery:lettuce_seed',
	])
});

// 百战雷剑
ServerEvents.recipes(event => {
    event.shaped('goldenagefall:thunder_war_sword_battle', [
		' T ',
		'LSL',
		'BLB'
	], {
		T: 'lootr:trophy',
        L: 'irons_spellbooks:lightning_bottle',
		B: 'minecraft:lapis_block',
		S: 'block_factorys_bosses:warrior_sword'
    });
});


// 西瓜分解
ServerEvents.recipes(event => {
	event.shapeless('4x minecraft:melon_slice', [
		'minecraft:melon',
	])
});

// 铁马铠
ServerEvents.recipes(event => {
	event.shaped('minecraft:iron_horse_armor', [
		'I I',
		'ISI',
		'I I'
	], {
		I: 'minecraft:iron_ingot',
		S: 'minecraft:leather'
	});
});
// 金马铠
ServerEvents.recipes(event => {
	event.shaped('minecraft:golden_horse_armor', [
		'G G',
		'GSG',
		'G G'
	], {
		G: 'minecraft:gold_ingot',
		S: 'minecraft:leather'
	});
});
// 钻石马铠
ServerEvents.recipes(event => {
	event.shaped('minecraft:diamond_horse_armor', [
		'D D',
		'DSD',
		'D D'
	], {
		D: 'minecraft:diamond',
		S: 'minecraft:leather'
	});
});



// 魔力心脏
ServerEvents.recipes(event => {
	event.shaped('goldenagefall:heart_of_manathrum', [
		'IRI',
		'SAS',
		'IOI'
	], {
		I: 'irons_spellbooks:arcane_ingot',
		R: 'irons_spellbooks:arcane_rune',
		S: 'irons_spellbooks:mithril_scrap',
		O: 'irons_spellbooks:mana_upgrade_orb',
		A: 'minecraft:enchanted_golden_apple'
	});
});
// 龙裔之心
ServerEvents.recipes(event => {
	event.shaped('goldenagefall:heart_of_the_dragonborn', [
		'OHO',
		'AEB',
		'OSO'
	], {
		O: 'irons_spellbooks:dragonskin',
		H: 'minecraft:dragon_head',
		A: 'block_factorys_bosses:dragon_skull',
		B: 'cataclysm:kobolediator_skull',
		E: 'minecraft:dragon_egg',
		S: 'minecraft:nether_star'
	});
});