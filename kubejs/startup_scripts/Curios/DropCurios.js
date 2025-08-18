StartupEvents.registry('item', event => {
    event.create('goldenagefall:corrupted_flesh_gauntlet')
        .displayName('§f腐化质手甲')
        .tooltip('由腐烂尸骨凝聚而成，仍残留些许亡者之力。')
        .maxStackSize(1)
        .tag('curios:hands')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('minecraft:generic.attack_damage', "corrupted_attack_damage", 2, 'add_value')
                .addAttribute('minecraft:generic.armor', "corrupted_armor", 2, 'add_value')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§f佩戴腐化质手甲时：',
                        '§9 +2 攻击伤害[+2]',
                        '§9 +2 护甲值[+2]',
                        "§r ",
                    ];
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

StartupEvents.registry('item', event => {
    event.create('goldenagefall:palewood_phalange')
        .displayName('§f森白手骨')
        .tooltip('苍白如枯木的指骨，来自某个沉眠某处的白骨。')
        .maxStackSize(1)
        .tag('curios:hands')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('apothic_attributes:draw_speed', "palewood_draw_speed", 0.1, 'add_multiplied_base')
                .addAttribute('apothic_attributes:arrow_damage', "palewood_arrow_damage", 0.1, 'add_multiplied_base')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§f佩戴森白手骨时：',
                        '§9 +10% 蓄力速度[+0.10x]',
                        '§9 +10% 箭矢伤害[+0.10x]',
                        "§r ",
                    ];
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

StartupEvents.registry('item', event => {
    event.create('goldenagefall:bionic_gillflap')
        .displayName('§9仿生鱼腮')
        .tooltip('模仿鱼类呼吸系统的魔法器官，使佩戴者如鱼得水。')
        .maxStackSize(1)
        .tag('curios:head')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§9佩戴仿生鱼腮时：',
                        '§9 获得水下呼吸效果',
                        "§r ",
                    ];
                })

                .onEquip((ctx, prevStack, stack) => {
                    let player = ctx.entity();
                    if (player && player.isPlayer() && !player.level.isClientSide()) {
                        // 佩戴时给予永久水下呼吸效果
                        player.potionEffects.add('minecraft:water_breathing', -1, 0, false, false);
                    }
                })

                .onUnequip((ctx, newStack, stack) => {
                    let player = ctx.entity();
                    if (player && player.isPlayer() && !player.level.isClientSide()) {
                        // 卸下时移除水下呼吸效果
                        if (player.hasEffect('minecraft:water_breathing')) {
                            player.removeEffect('minecraft:water_breathing');
                        }
                    }
                })

                .curioTick((ctx, stack) => {
                    let player = ctx.entity();
                    if (player.isPlayer() && player && !player.level.isClientSide()) {
                        // 确保水下呼吸始终存在
                        if (!player.hasEffect('minecraft:water_breathing')) {
                            player.potionEffects.add('minecraft:water_breathing', -1, 0, false, false);
                        }
                    }
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

StartupEvents.registry('item', event => {
    event.create('goldenagefall:grimoire_of_arcanum')
        .displayName('§d魔能宝典')
        .tooltip('封存着远古奥术知识的魔法书，其气息本身便能催动法力流动。')
        .maxStackSize(1)
        .tag('curios:belt')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('irons_spellbooks:max_mana', "arcanum_max_mana", 300, 'add_value')
                .addAttribute('irons_spellbooks:spell_power', "arcanum_spell_power", 0.15, 'add_multiplied_base')
                .addAttribute('irons_spellbooks:cooldown_reduction', "arcanum_cooldown_reduction", 0.15, 'add_value')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§d佩戴魔能宝典时：',
                        '§9 +300 最大法力值[+300]',
                        '§9 +15% 法术强度[+0.15x]',
                        '§9 +15% 法术冷却缩减[+0.15x]',
                        "§r ",
                    ];
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

StartupEvents.registry('item', event => {
    event.create('goldenagefall:golem_charm')
        .displayName('§b傀儡护符')
        .tooltip('沉重坚固的碎片，残留着傀儡的守护意志。')
        .maxStackSize(1)
        .tag('curios:charm')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('minecraft:generic.knockback_resistance', "golem_knockback_resist", 0.2, 'add_multiplied_base')
                .addAttribute('minecraft:generic.explosion_knockback_resistance', "golem_explosion_knockback_resist", 0.1, 'add_value')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§b佩戴傀儡护符时：',
                        '§9 +20% 击退抗性[+0.20x]',
                        '§9 +10% 爆炸击退抗性[+0.10x]',
                        "§r ",
                    ];
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

StartupEvents.registry('item', event => {
    event.create('goldenagefall:token_of_the_heroic')
        .displayName('§e英雄证物')
        .tooltip('§7象征无名英雄的荣耀信物，散发着令村民安心的光辉。')
        .maxStackSize(1)
        .tag('curios:charm')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§e佩戴英雄证物时：',
                        '§a 获得村庄英雄V效果',
                        "§r ",
                    ];
                })

                .onEquip((ctx, prevStack, stack) => {
                    let player = ctx.entity();
                    if (player && player.isPlayer() && !player.level.isClientSide()) {
                        // 佩戴时给予永久村庄英雄效果
                        player.potionEffects.add('minecraft:hero_of_the_village', -1, 4, false, false);
                    }
                })

                .onUnequip((ctx, newStack, stack) => {
                    let player = ctx.entity();
                    if (player && player.isPlayer() && !player.level.isClientSide()) {
                        // 卸下时移除村庄英雄效果
                        if (player.hasEffect('minecraft:hero_of_the_village')) {
                            player.removeEffect('minecraft:hero_of_the_village');
                        }
                    }
                })

                .curioTick((ctx, stack) => {
                    let player = ctx.entity();
                    if (player.isPlayer() && player && !player.level.isClientSide()) {
                        // 确保村庄英雄效果始终存在
                        if (!player.hasEffect('minecraft:hero_of_the_village')) {
                            player.potionEffects.add('minecraft:hero_of_the_village', -1, 0, false, false);
                        }
                    }
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

StartupEvents.registry('item', event => {
    event.create('goldenagefall:flamefist')
        .displayName('§c燃拳')
        .tooltip('灼热炽焰凝于拳上，一击即燃，远古烈焰人残魂犹在其内咆哮。')
        .maxStackSize(1)
        .tag('curios:hands')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('minecraft:generic.attack_damage', "flamefist_attack_damage", 5, 'add_value')
                .addAttribute('apothic_attributes:fire_damage', "flamefist_fire_damage", 3, 'add_value')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§c佩戴燃拳时：',
                        '§9 +5 攻击伤害[+5]',
                        '§6 +3 火焰伤害[+3]',
                        "§r ",
                    ];
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

StartupEvents.registry('item', event => {
    event.create('goldenagefall:seed_of_fortune')
        .displayName('§e幸运种子')
        .tooltip('由万物种子编织而成，象征丰收与好运的奇异护符。')
        .maxStackSize(1)
        .tag('curios:charm')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('minecraft:generic.luck', "fortune_seed_luck", 2, 'add_value')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§e佩戴幸运种子时：',
                        '§e +2 幸运值[+2]',
                        "§r ",
                    ];
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

