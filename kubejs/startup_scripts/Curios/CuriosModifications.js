ItemEvents.modification(event => {
    event.modify('block_factorys_bosses:sandworm_dart', item => {
        item.attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 基础属性
                .addAttribute('minecraft:generic.attack_damage', "sandworm_base_damage", 5, 'add_value')
                .addAttribute('apothic_attributes:crit_damage', "sandworm_crit_damage", 0.5, 'add_multiplied_base')
                .addAttribute('irons_spellbooks:eldritch_spell_power', "sandworm_eldritch_spell_power", 0.1, 'add_value')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§6佩戴沙虫毒镖时：',
                        '§9 +5 攻击伤害[+5]',
                        '§9 +50% 暴击伤害[+0.50x]',
                        '§9 +10% 邪术强度[+0.10x]',
                        '§e 完全免疫中毒效果',
                        "§r ",
                    ];
                })

                .curioTick((ctx, stack) => {
                    let player = ctx.entity();

                    // 给玩家中毒免疫效果
                    if (player.hasEffect('minecraft:poison')) {
                        player.removeEffect('minecraft:poison');
                    }
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        )
    })
});