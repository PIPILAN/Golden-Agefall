// 腐肉烧皮革
ServerEvents.recipes(event => {
    event.smelting("minecraft:leather","minecraft:rotten_flesh", 0.5, 100)
})

// 食神腰带转换

ServerEvents.recipes(event => {
    event.smithing(
		'goldenagefall:belt_of_the_culinary_avatar_famine_aspect',
		'minecraft:iron_nugget',
		'goldenagefall:belt_of_the_culinary_avatar_feast_aspect',
		'minecraft:iron_nugget'
	)
});

ServerEvents.recipes(event => {
    event.smithing(
		'goldenagefall:belt_of_the_culinary_avatar_feast_aspect',
		'minecraft:iron_nugget',
		'goldenagefall:belt_of_the_culinary_avatar_famine_aspect',
		'minecraft:iron_nugget'
	)
});

// 冰霜魔剑
ServerEvents.recipes(event => {
    event.smithing(
		'goldenagefall:ice_crystal_sword',
		'mowziesmobs:ice_crystal',
		'minecraft:netherite_sword',
		'irons_spellbooks:ice_upgrade_orb'
	)
});