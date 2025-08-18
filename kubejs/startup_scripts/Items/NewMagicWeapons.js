
StartupEvents.registry('creative_mode_tab', event => {
	event.create('goldenagefallweapons').displayName('黄金终焉纪 - 武器').icon(() => 'goldenagefall:ice_crystal_sword').content(() => [
		'goldenagefall:ice_crystal_sword'
	])
})

// 冰霜魔剑
StartupEvents.registry('item', event => {
    event.create('goldenagefall:ice_crystal_sword', 'magic_sword')
        .displayName('§b冰霜魔剑')
        .addSpell('irons_spellbooks:cone_of_cold', 10)
        .setTier(tier => {
            tier.addAttribute('apothic_attributes:cold_damage', 3, 'add_value')
                .addAttribute('irons_spellbooks:ice_spell_power', 0.15, 'add_multiplied_base')
                .setDamage(12)
                .setSpeed(-2.4)
        })
        .maxStackSize(1)
        .fireResistant()
        .tag('neoforge:tools/swords')
        .tag('minecraft:swords')
        .tag('minecraft:enchantable/sword')
        .tag('ga:weapon/melee')
})

// 百战雷剑
StartupEvents.registry('item', event => {
    event.create('goldenagefall:thunder_war_sword_battle', 'magic_sword')
        .displayName('§9百战雷剑')
        .addSpell('irons_spellbooks:charge', 1)
        .setTier(tier => {
            tier.addAttribute('irons_spellbooks:lightning_spell_power', 0.1, 'add_multiplied_base')
                .setDamage(11)
                .setSpeed(-2.2)
        })
        .maxStackSize(1)
        .fireResistant()
        .tag('neoforge:tools/swords')
        .tag('minecraft:swords')
        .tag('minecraft:enchantable/sword')
        .tag('ga:weapon/melee')
})