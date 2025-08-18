StartupEvents.registry('item', event => {
    event.create('goldenagefall:amulet_of_gwakwa')
        .displayName('§6呱呱护符')
        .tooltip('饰有呱呱印记的护符，佩戴者将被神秘律力与灵跃庇佑。')
        .maxStackSize(1)
        .tag('curios:charm')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('minecraft:generic.luck', "gwakwa_luck", 3, 'add_value')
                .addAttribute('minecraft:generic.jump_strength', "gwakwa_jump_strength", 0.18, 'add_multiplied_base')
                .addAttribute('familiarslib:sound_spell_power', "gwakwa_sound_spell_power", 0.18, 'add_multiplied_base')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§6佩戴呱呱护符时：',
                        '§9 +3 幸运值[+3]',
                        '§9 +18% 跳跃力度[+0.18x]',
                        '§9 +18% 律灵法术强度[+0.18x]',
                        "§r ",
                    ];
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});
