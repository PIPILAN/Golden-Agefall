// 箭矢
ServerEvents.recipes(event => {
    event.remove({id : 'wild_bows:flint_arrow_recipe'});
    event.remove({id : 'wild_bows:wild_copper_arrow_recipe'});
    event.remove({id : 'wild_bows:wild_cactus_arrow_recipe'});
    event.remove({id : 'wild_bows:wild_golden_arrow_recipe'});
    event.remove({id : 'wild_bows:wild_quartz_arrow_recipe'});
    event.remove({id : 'wild_bows:wild_iron_arrow_recipe'});
    event.remove({id : 'wild_bows:wild_amethyst_arrow_recipe'});
    event.remove({id : 'wild_bows:frozen_arrow_recipe'});
    event.remove({id : 'wild_bows:diamond_arrow_recipe'});
    event.remove({id : 'wild_bows:wild_blaze_arrow_recipe'});
    event.remove({id : 'wild_bows:wild_shock_arrow_recipe'});
    event.remove({id : 'wild_bows:wild_netherite_arrow_recipe'});
    event.remove({id : 'wild_bows:wild_wither_arrow_recipe'});
    event.remove({id : 'wild_bows:star_arrow_recipe'});
    event.remove({id : 'wild_bows:eclipse_arrow_recipe'});
});

ServerEvents.recipes(event => {
    event.shaped('16x wild_bows:flint_arrow', [
		' A ',
		' S ',
		'   '
	], {
		A: 'minecraft:flint',
        S: 'wild_bows:wild_stick'
    });
});

ServerEvents.recipes(event => {
    event.shaped('16x wild_bows:wild_copper_arrow', [
		' A ',
		' S ',
		'   '
	], {
		A: '#c:ingots/copper',
        S: 'wild_bows:wild_stick'
    });
});

ServerEvents.recipes(event => {
    event.shaped('16x wild_bows:wild_cactus_arrow', [
		' A ',
		' S ',
		'   '
	], {
		A: 'minecraft:cactus',
        S: 'wild_bows:wild_stick'
    });
});

ServerEvents.recipes(event => {
    event.shaped('16x wild_bows:wild_golden_arrow', [
		' A ',
		' S ',
		'   '
	], {
		A: '#c:ingots/gold',
        S: 'wild_bows:wild_stick'
    });
});

ServerEvents.recipes(event => {
    event.shaped('16x wild_bows:wild_quartz_arrow', [
		' A ',
		' S ',
		' I '
	], {
		A: '#c:gems/quartz',
        S: 'wild_bows:wild_stick',
        I: '#c:ingots/gold'
    });
});

ServerEvents.recipes(event => {
    event.shaped('16x wild_bows:wild_iron_arrow', [
		' A ',
		' S ',
		'   '
	], {
		A: '#c:ingots/iron',
        S: 'wild_bows:wild_stick'
    });
});

ServerEvents.recipes(event => {
    event.shaped('16x wild_bows:wild_amethyst_arrow', [
		' A ',
		' S ',
		' I '
	], {
		A: 'minecraft:amethyst_shard',
        S: 'wild_bows:wild_stick',
        I: '#c:ingots/gold'
    });
});

ServerEvents.recipes(event => {
    event.shaped('16x wild_bows:wild_frozen_arrow', [
		' A ',
		' S ',
		'   '
	], {
		A: 'minecraft:blue_ice',
        S: 'wild_bows:wild_stick'
    });
});

ServerEvents.recipes(event => {
    event.shaped('16x wild_bows:wild_diamond_arrow', [
		' A ',
		' S ',
		'   '
	], {
		A: '#c:gems/diamond',
        S: 'wild_bows:wild_stick'
    });
});

ServerEvents.recipes(event => {
    event.shaped('16x wild_bows:wild_blaze_arrow', [
		' A ',
		' S ',
		' D '
	], {
		A: 'wild_bows:flame_ingot',
        S: 'wild_bows:wild_stick',
		D: '#c:gems/diamond'
    });
});

ServerEvents.recipes(event => {
    event.shaped('16x wild_bows:wild_shock_arrow', [
		' A ',
		' A ',
		' B '
	], {
		A: 'wild_bows:flame_ingot',
		B: 'irons_spellbooks:lightning_bottle'
    });
});

ServerEvents.recipes(event => {
    event.shaped('16x wild_bows:wild_netherite_arrow', [
		' A ',
		' D ',
		' D '
	], {
		A: '#c:ingots/netherite',
		D: '#c:gems/diamond'
    });
});

ServerEvents.recipes(event => {
    event.shaped('64x wild_bows:wild_wither_arrow', [
		' T ',
		' S ',
		' I '
	], {
		T: 'wild_bows:witherized_smithing_template',
		I: 'wild_bows:witherized_ingot',
        S: 'wild_bows:wild_stick'
    });
});

ServerEvents.recipes(event => {
    event.shaped('32x wild_bows:star_arrow', [
		' F ',
		' S ',
		' S '
	], {
		F: 'wild_bows:stellaria_fragment',
        S: 'wild_bows:wild_stick'
    });
});

ServerEvents.recipes(event => {
    event.shaped('32x wild_bows:eclipse_arrow', [
		' G ',
		' S ',
		' I '
	], {
		G: 'wild_bows:graviton_string',
        S: 'wild_bows:wild_stick',
        I: 'wild_bows:noctirium_ingot'
    });
});



// 冰冻弓
ServerEvents.recipes(event => {
    event.remove({id : 'wild_bows:frozen_bow_recipe'});
});

ServerEvents.recipes(event => {
    event.shaped('wild_bows:frozen_bow', [
		' HS',
		'PBS',
		' HS'
	], {
		P: 'endermanoverhaul:icy_pearl',
        H: 'irons_spellbooks:frosted_helve',
        S: 'wild_bows:wild_string',
        B: 'wild_bows:wild_iron_bow'
    });
});

// 狂野烈焰弓底座
ServerEvents.recipes(event => {
    event.remove({id : 'wild_bows:wild_blaze_bow_base_recipe'});
});

ServerEvents.recipes(event => {
    event.shaped('wild_bows:wild_blaze_bow_base', [
		' E ',
		'IBI',
		'IDI'
	], {
		E: 'bosses_of_mass_destruction:blazing_eye',
        D: 'wild_bows:wild_diamond_bow_base',
        B: 'wild_bows:wild_bow_base',
        I: 'wild_bows:flame_ingot'
    });
});

// 狂野电击弓
ServerEvents.recipes(event => {
    event.remove({id : 'wild_bows:wild_shock_bow_recipe'});
});

ServerEvents.recipes(event => {
    event.shaped('wild_bows:wild_shock_bow', [
		' ES',
		'ABI',
		' ES'
	], {
		S: 'crystal_chronicles:voltite_shard',
        B: 'wild_bows:wild_blaze_bow_base',
        A: 'wild_bows:wild_shock_arrow',
        I: 'wild_bows:flame_ingot',
        E: 'codex_of_champions:electrified_bronze'
    });
});

// 狂野下界合金弓
ServerEvents.recipes(event => {
    event.remove({id : 'wild_bows:wild_netherite_bow_recipe'});
});

ServerEvents.recipes(event => {
    event.shaped('wild_bows:wild_netherite_bow', [
		'IKS',
		'BGS',
		'IKS'
	], {
		B: 'wild_bows:wild_netherite_bow_base',
        S: 'wild_bows:netherite_string',
        G: 'illagerinvasion:hallowed_gem',
        I: 'cataclysm:ancient_metal_ingot',
        K: 'cataclysm:koboleton_bone'
    });
});

// 星辰弓
ServerEvents.recipes(event => {
    event.remove({id : 'wild_bows:star_bow_recipe'});
});

ServerEvents.recipes(event => {
    event.smithing(
		'wild_bows:star_bow',
		'wild_bows:celestial_smithing_template',
		'wild_bows:wild_netherite_bow',
		'wild_bows:solaria'
	)
});

// 星辰弓
ServerEvents.recipes(event => {
    event.remove({id : 'wild_bows:eclipse_bow_recipe'});
});

ServerEvents.recipes(event => {
    event.shaped('wild_bows:eclipse_bow', [
		' IS',
		'RBS',
		' IS'
	], {
		B: 'wild_bows:star_bow',
        S: 'wild_bows:graviton_string',
        I: 'wild_bows:noctirium_ingot',
        R: 'hazennstuff:radiance'
    });
});


// 凋灵锻造模板

ServerEvents.recipes(event => {
    event.remove({id : 'wild_bows:witherized_smithing_template_recipe'});
});

ServerEvents.recipes(event => {
    event.shaped('wild_bows:witherized_smithing_template', [
		'IAI',
		'ATA',
		'IAI'
	], {
		A: '#c:ingots/netherite',
		T: 'minecraft:netherite_upgrade_smithing_template',
		I: 'wild_bows:witherized_ingot'
    });
});

// 天界锻造模板

ServerEvents.recipes(event => {
    event.remove({id : 'wild_bows:celestial_smithing_template_recipe'});
});

ServerEvents.recipes(event => {
    event.shaped('wild_bows:celestial_smithing_template', [
		'SAS',
		'ITI',
		'SFS'
	], {
		A: 'bosses_of_mass_destruction:obsidian_heart',
		T: 'minecraft:netherite_upgrade_smithing_template',
		S: 'wild_bows:solaria',
		F: 'wild_bows:celestial_fragment',
		I: 'hazennstuff:zenalite_ingot'
    });
});