// 饰品
// 类型：战利品

StartupEvents.registry('item', event => {
    event.create('goldenagefall:heart_of_manathrum')
        .displayName('§d魔力心脏')
        .tooltip('§7封印着原初魔力的心脏仍在跳动，蕴含源源不断的生命回响。')
        .maxStackSize(1)
        .tag('curios:animacore')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('minecraft:generic.max_health', "manathrum_max_health", 10, 'add_value')
                .addAttribute('irons_spellbooks:max_mana', "manathrum_max_mana", 50, 'add_value')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§d佩戴魔力心脏时：',
                        '§9 +10 最大生命值[+10]',
                        '§9 +50 最大法力值[+50]',
                        "§r ",
                    ];
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

StartupEvents.registry('item', event => {
    event.create('goldenagefall:diadem_of_dominion')
        .displayName('§e权柄')
        .tooltip('§7古圣骑士的荣耀象征，蕴藏着对神圣律法的虔诚信仰。')
        .maxStackSize(1)
        .tag('curios:head')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('irons_spellbooks:holy_spell_power', "dominion_holy_spell_power", 0.2, 'add_multiplied_base')
                .addAttribute('familiarslib:sound_spell_power', "dominion_sound_spell_power", 0.1, 'add_multiplied_base')
                .addAttribute('irons_spellbooks:cast_time_reduction', "dominion_cast_time_reduction", 0.1, 'add_multiplied_base')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§e佩戴权柄时：',
                        '§9 +20% 神圣法术强度[+0.20x]',
                        '§9 +10% 律灵法术强度[+0.10x]',
                        '§9 +10% 法术吟唱缩减[+0.10x]',
                        "§r ",
                    ];
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

StartupEvents.registry('item', event => {
    event.create('goldenagefall:nail_and_hammer')
        .displayName('§e钉与锤')
        .tooltip('§7代表苦难与救赎的双重象征，圣职者以此施展奇迹。')
        .maxStackSize(1)
        .tag('curios:hands')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('irons_spellbooks:holy_spell_power', "nail_hammer_holy_spell_power", 0.1, 'add_multiplied_base')
                .addAttribute('apothic_attributes:healing_received', "nail_hammer_healing_received", 0.2, 'add_multiplied_base')
                .addAttribute('minecraft:generic.attack_speed', "nail_hammer_attack_speed", 0.2, 'add_multiplied_base')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§e佩戴钉与锤时：',
                        '§9 +10% 神圣法术强度[+0.10x]',
                        '§9 +20% 受到治疗[+0.20x]',
                        '§9 +20% 攻击速度[+0.20x]',
                        "§r ",
                    ];
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

StartupEvents.registry('item', event => {
    event.create('goldenagefall:bracelet_of_austerity')
        .displayName('§e肃正之环')
        .tooltip('§7冷峻无私的圣器，仅为真正秉持律法者所佩，散发肃穆裁决之力。')
        .maxStackSize(1)
        .tag('curios:bracelet')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('minecraft:generic.attack_damage', "austerity_attack_damage", 3, 'add_value')
                .addAttribute('irons_spellbooks:holy_spell_power', "austerity_holy_spell_power", 0.1, 'add_multiplied_base')
                .addAttribute('minecraft:generic.explosion_knockback_resistance', "austerity_explosion_knockback_resistance", 0.1, 'add_value')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§e佩戴肃正之环时：',
                        '§9 +3 攻击伤害[+3]',
                        '§9 +10% 神圣法术强度[+0.10x]',
                        '§9 +0.1 爆炸击退抗性[+0.10x]',
                        "§r ",
                    ];
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

StartupEvents.registry('item', event => {
    event.create('goldenagefall:molten_coreheart')
        .displayName('§c熔心核')
        .tooltip('§7源自炽热深渊的赤红结晶，仿佛一颗永不熄灭的火焰之心。')
        .maxStackSize(1)
        .tag('curios:charm')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('apothic_attributes:fire_damage', "coreheart_fire_damage", 1, 'add_value')
                .addAttribute('irons_spellbooks:fire_spell_power', "coreheart_fire_spell_power", 0.12, 'add_multiplied_base')
                .addAttribute('irons_spellbooks:cooldown_reduction', "coreheart_cooldown_reduction", 0.05, 'add_value')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§c佩戴熔心核时：',
                        '§9 +1 火焰伤害[+1]',
                        '§9 +12% 炽焰法术强度[+0.12x]',
                        '§9 +5% 法术冷却缩减[+0.05x]',
                        "§r ",
                    ];
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

StartupEvents.registry('item', event => {
    event.create('goldenagefall:ring_of_burning_blood')
        .displayName('§c燃血戒')
        .tooltip('§7灼热如岩浆的血液被封入指环之中，佩戴者可借此引燃自身的战意。')
        .maxStackSize(1)
        .tag('curios:ring')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('apothic_attributes:crit_chance', "burning_blood_crit_chance", 0.025, 'add_value')
                .addAttribute('irons_spellbooks:fire_spell_power', "burning_blood_fire_spell_power", 0.18, 'add_multiplied_base')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§c佩戴燃血戒时：',
                        '§9 +2.5% 暴击率[+0.025x]',
                        '§9 +18% 炽焰法术强度[+0.18x]',
                        "§r ",
                    ];
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

StartupEvents.registry('item', event => {
    event.create('goldenagefall:emberflame_bracelet')
        .displayName('§c烬炎手镯')
        .tooltip('§7由残焰与余烬编织而成的护焰器具，温度虽低，却燃尽万物。')
        .maxStackSize(1)
        .tag('curios:bracelet')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('minecraft:generic.attack_knockback', "emberflame_attack_knockback", 0.5, 'add_value')
                .addAttribute('irons_spellbooks:max_mana', "emberflame_max_mana", 50, 'add_value')
                .addAttribute('irons_spellbooks:fire_spell_power', "emberflame_fire_spell_power", 0.1, 'add_multiplied_base')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§c佩戴烬炎手镯时：',
                        '§9 +0.5 击退[+0.5]',
                        '§9 +50 最大法力值[+50]',
                        '§9 +10% 炽焰法术强度[+0.1x]',
                        "§r ",
                    ];
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

StartupEvents.registry('item', event => {
    event.create('goldenagefall:frostbite_circlet')
        .displayName('§b冷蚀之环')
        .tooltip('§7环绕寒霜的银蓝之环，佩戴者的力量将如极寒侵蚀般缓慢而致命。')
        .maxStackSize(1)
        .tag('curios:bracelet')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 属性
                .addAttribute('irons_spellbooks:ice_spell_power', "frostbite_ice_spell_power", 0.15, 'add_multiplied_base')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§b佩戴冷蚀之环时：',
                        '§9 +15% 冰霜法术强度[+0.15x]',
                        '§6 攻击敌人时有 20% 概率施加 3 秒缓慢Ⅴ效果',
                        "§r ",
                    ];
                })

                .curioTick((ctx, stack) => {
                    let player = ctx.entity();
                    if (player.isPlayer() && player && !player.level.isClientSide()) {
                        // 检测玩家是否在攻击
                        if (player.attackStrengthTicker === 0) { // 攻击冷却刚刚重置，表示刚刚攻击了
                            // 获取玩家面向的目标实体
                            let lookingAt = player.rayTrace(player.getReachDistance(), false);
                            if (lookingAt && lookingAt.type === 'entity') {
                                let target = lookingAt.entity;
                                if (target && target.isLiving() && target !== player) {
                                    // 20%概率施加缓慢效果
                                    if (Math.random() < 0.2) {
                                        target.potionEffects.add('minecraft:slowness', 60, 4, false, false); // 3秒缓慢
                                    }
                                }
                            }
                        }
                    }
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

StartupEvents.registry('item', event => {
    event.create('goldenagefall:chime_of_the_frostwhisper')
        .displayName('§b寒语铃')
        .tooltip('§7幽蓝铃铛在低温中轻响，仿佛传来北地精灵的呢喃咒语。')
        .maxStackSize(1)
        .tag('curios:belt')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('irons_spellbooks:ice_spell_power', "frostwhisper_ice_spell_power", 0.15, 'add_multiplied_base')
                .addAttribute('irons_spellbooks:cast_time_reduction', "frostwhisper_cast_time_reduction", 0.1, 'add_multiplied_base')
                .addAttribute('irons_spellbooks:mana_regen', "frostwhisper_mana_regen", 0.1, 'add_multiplied_base')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§b佩戴寒语铃时：',
                        '§9 +15% 冰霜法术强度[+0.15x]',
                        '§9 +10% 法术吟唱缩减[+0.10x]',
                        '§9 +10% 法力值恢复[+0.10x]',
                        "§r ",
                    ];
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

StartupEvents.registry('item', event => {
    event.create('goldenagefall:shardstep_treadstone')
        .displayName('§b凛步石')
        .tooltip('§7踏冰之石，留霜之痕。佩戴者步伐轻灵，寒意随行。')
        .maxStackSize(1)
        .tag('curios:arcane_trinket')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('minecraft:generic.movement_speed', "shardstep_movement_speed", 0.05, 'add_multiplied_base')
                .addAttribute('irons_spellbooks:ice_spell_power', "shardstep_ice_spell_power", 0.1, 'add_multiplied_base')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§b佩戴凛步石时：',
                        '§9 +5% 移动速度[+0.05x]',
                        '§9 +10% 冰霜法术强度[+0.10x]',
                        "§r ",
                    ];
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

StartupEvents.registry('item', event => {
    event.create('goldenagefall:stormstep_veil')
        .displayName('§9霆光云布')
        .tooltip('§7轻若云纱，却蕴含雷霆奔袭之力。每一次跃起，皆为闪电降临的序曲。')
        .maxStackSize(1)
        .tag('curios:feet')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('minecraft:generic.movement_speed', "stormstep_movement_speed", 0.1, 'add_multiplied_base')
                .addAttribute('minecraft:generic.jump_strength', "stormstep_jump_strength", 0.15, 'add_multiplied_base')
                .addAttribute('irons_spellbooks:lightning_spell_power', "stormstep_lightning_spell_power", 0.2, 'add_multiplied_base')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§9佩戴霆光云布时：',
                        '§9 +10% 移动速度[+0.10x]',
                        '§9 +15% 跳跃力度[+0.15x]',
                        '§9 +20% 雷霆法术强度[+0.20x]',
                        "§r ",
                    ];
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

StartupEvents.registry('item', event => {
    event.create('goldenagefall:emblem_of_thundercry')
        .displayName('§9鸣电之徽')
        .tooltip('§7铭刻雷鸣印记的徽章，佩戴者的心跳将与闪电同频。')
        .maxStackSize(1)
        .tag('curios:body')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('irons_spellbooks:lightning_spell_power', "thundercry_lightning_spell_power", 0.15, 'add_multiplied_base')
                .addAttribute('minecraft:generic.attack_speed', "thundercry_attack_speed", 0.1, 'add_multiplied_base')
                .addAttribute('irons_spellbooks:spell_resist', "thundercry_spell_resist", 0.05, 'add_multiplied_base')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§9佩戴鸣电之徽时：',
                        '§9 +15% 雷霆法术强度[+0.15x]',
                        '§9 +10% 攻击速度[+0.10x]',
                        '§9 +5% 法术抗性[+0.05x]',
                        "§r ",
                    ];
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

StartupEvents.registry('item', event => {
    event.create('goldenagefall:ring_of_stormbreath')
        .displayName('§9雷息戒')
        .tooltip('§7蕴含雷霆吐息的微型符环，能击穿防御、粉碎甲胄。')
        .maxStackSize(1)
        .tag('curios:ring')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('apothic_attributes:armor_pierce', "stormbreath_armor_pierce", 5, 'add_value')
                .addAttribute('irons_spellbooks:lightning_spell_power', "stormbreath_lightning_spell_power", 0.05, 'add_multiplied_base')
                .addAttribute('apothic_attributes:crit_damage', "stormbreath_crit_damage", 0.25, 'add_value')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§9佩戴雷息戒时：',
                        '§9 +5 盔甲穿透[+5]',
                        '§9 +5% 雷霆法术强度[+0.05x]',
                        '§9 +25% 暴击伤害[+0.25]',
                        "§r ",
                    ];
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

StartupEvents.registry('item', event => {
    event.create('goldenagefall:chain_of_sacred_edict')
        .displayName('§5圣律之链')
        .tooltip('§7以神圣铭文锻链，封缚律灵之力，使其为佩戴者所用。')
        .maxStackSize(1)
        .tag('curios:necklace')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('irons_spellbooks:cooldown_reduction', "sacrededict_cooldown_reduction", 0.15, 'add_value')
                .addAttribute('familiarslib:sound_spell_power', "sacrededict_sound_spell_power", 0.15, 'add_multiplied_base')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§5佩戴圣律之链时：',
                        '§9 +15% 法术冷却缩减[+0.15x]',
                        '§9 +15% 律灵法术强度[+0.15x]',
                        "§r ",
                    ];
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

StartupEvents.registry('item', event => {
    event.create('goldenagefall:ring_of_echoing_spirits')
        .displayName('§5音灵戒')
        .tooltip('§7微不可闻的律动在指环中回响，延展咒音，引导律灵之力穿透更远的界限。')
        .maxStackSize(1)
        .tag('curios:ring')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('minecraft:player.block_interaction_range', "echoing_block_range", 1, 'add_value')
                .addAttribute('minecraft:player.block_break_speed', "echoing_block_break_speed", 0.1, 'add_multiplied_base')
                .addAttribute('familiarslib:sound_spell_power', "echoing_sound_spell_power", 0.15, 'add_multiplied_base')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§5佩戴音灵戒时：',
                        '§9 +1 方块交互距离[+1]',
                        '§9 +10% 方块破坏速度[+0.1x]',
                        '§9 +15% 律灵法术强度[+0.15x]',
                        "§r ",
                    ];
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

StartupEvents.registry('item', event => {
    event.create('goldenagefall:sanctified_bone_of_judicore')
        .displayName('§5灵裁圣骨')
        .tooltip('§7以律灵祝福之骨铸成，能引导法术精确落点，并减缓坠地之痛。')
        .maxStackSize(1)
        .tag('curios:feet')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('minecraft:generic.luck', "judicore_luck", 0.5, 'add_value')
                .addAttribute('minecraft:generic.fall_damage_multiplier', "judicore_fall_damage_multiplier", -0.15, 'add_multiplied_base')
                .addAttribute('familiarslib:sound_spell_power', "judicore_sound_spell_power", 0.1, 'add_multiplied_base')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§5佩戴灵裁圣骨时：',
                        '§9 +0.5 幸运值[+0.5]',
                        '§9 -15% 摔落伤害倍数[+0.85x]',
                        '§9 +10% 律灵法术强度[+0.1x]',
                        "§r ",
                    ];
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

StartupEvents.registry('item', event => {
    event.create('goldenagefall:bell_of_soulpact')
        .displayName('§d魂契之铃')
        .tooltip('§7铃声响起之时，魂灵应召而至。佩戴者与召唤物之间的契约由此加深。')
        .maxStackSize(1)
        .tag('curios:belt')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('minecraft:generic.armor', "soulpact_armor", 3, 'add_value')
                .addAttribute('irons_spellbooks:summon_damage', "soulpact_summon_damage", 0.3, 'add_multiplied_base')
                .addAttribute('combat_roll:recharge', "soulpact_roll_cooldown", 0.3, 'add_multiplied_base')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§d佩戴魂契之铃时：',
                        '§9 +3 护甲值',
                        '§9 +30% 召唤伤害',
                        '§9 +30% 翻滚冷却',
                        "§r ",
                    ];
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

StartupEvents.registry('item', event => {
    event.create('goldenagefall:oathbone_ring')
        .displayName('§4血誓骨戒')
        .tooltip('§7以鲜血与骨铸成的誓言指环，佩戴者将以生命为代价驱动猩红术式。')
        .maxStackSize(1)
        .tag('curios:ring')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('baublesreforked:life_steal', "oathbone_life_steal", 0.03, 'add_multiplied_base')
                .addAttribute('irons_spellbooks:blood_spell_power', "oathbone_blood_spell_power", 0.2, 'add_multiplied_base')
                // 负面属性
                .addAttribute('minecraft:generic.max_health', "oathbone_max_health", -2, 'add_value')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§4佩戴血誓骨戒时：',
                        '§9 +3% 生命偷取[+0.03x]',
                        '§9 +20% 猩红法术强度[+0.2x]',
                        '§c -2 最大生命值[-2]',
                        "§r ",
                    ];
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

StartupEvents.registry('item', event => {
    event.create('goldenagefall:crimson_moon_pendant')
        .displayName('§4猩月吊坠')
        .tooltip('§7吊坠中嵌有一轮血月碎片，在夜幕下悄然脉动，与猩红之力共鸣。')
        .maxStackSize(1)
        .tag('curios:charm')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('irons_spellbooks:eldritch_spell_power', "crimsonmoon_eldritch_spell_power", 0.05, 'add_multiplied_base')
                .addAttribute('irons_spellbooks:blood_spell_power', "crimsonmoon_blood_spell_power", 0.15, 'add_multiplied_base')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§4佩戴猩月吊坠时：',
                        '§9 +5% 邪术强度[+0.05x]',
                        '§9 +15% 猩红法术强度[+0.15x]',
                        "§r ",
                    ];
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

StartupEvents.registry('item', event => {
    event.create('goldenagefall:spellbone_core')
        .displayName('§4咒能骨')
        .tooltip('§7封存猩红咒能的遗骨残片，仍在微微跳动，渴望释放血契魔力。')
        .maxStackSize(1)
        .tag('curios:arcane_trinket')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('irons_spellbooks:summon_damage', "spellbone_summon_damage", 0.15, 'add_multiplied_base')
                .addAttribute('irons_spellbooks:blood_spell_power', "spellbone_blood_spell_power", 0.15, 'add_multiplied_base')
                .addAttribute('irons_spellbooks:casting_movespeed', "spellbone_casting_movespeed", 0.15, 'add_multiplied_base')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§4佩戴咒能骨时：',
                        '§9 +15% 召唤伤害[+0.15x]',
                        '§9 +15% 猩红法术强度[+0.15x]',
                        '§9 +15% 施法时移动速度[+0.15x]',
                        "§r ",
                    ];
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

StartupEvents.registry('item', event => {
    event.create('goldenagefall:scarf_of_forbidden_rites')
        .displayName('§5禁术围巾')
        .tooltip('§7浸染禁忌咒文的围巾仿若活物，低语不止，诱使佩戴者步入术法深渊。')
        .maxStackSize(1)
        .tag('curios:body')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('minecraft:generic.armor', "forbidden_armor", 5, 'add_value')
                .addAttribute('irons_spellbooks:eldritch_spell_power', "forbidden_eldritch_spell_power", 0.2, 'add_multiplied_base')
                // 负面属性
                .addAttribute('minecraft:generic.luck', "forbidden_luck", -0.5, 'add_value')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§5佩戴禁术围巾时：',
                        '§9 +5 护甲值[+5]',
                        '§9 +20% 邪术强度[+0.2x]',
                        '§c -0.5 幸运值[-0.5]',
                        "§r ",
                    ];
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

StartupEvents.registry('item', event => {
    event.create('goldenagefall:fang_of_the_voidcorrupt')
        .displayName('§5虚境侵蚀獠牙')
        .tooltip('§7来自虚境深处的异牙，蕴含吞噬护佑与秩序的侵蚀魔能。')
        .maxStackSize(1)
        .tag('curios:arcane_trinket')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('apothic_attributes:prot_pierce', "voidcorrupt_prot_pierce", 2, 'add_value')
                .addAttribute('irons_spellbooks:eldritch_spell_power', "voidcorrupt_eldritch_spell_power", 0.2, 'add_multiplied_base')
                // 负面属性
                .addAttribute('minecraft:generic.luck', "voidcorrupt_luck", -0.5, 'add_value')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§5佩戴虚境侵蚀獠牙时：',
                        '§9 +2 保护穿透[+2]',
                        '§9 +20% 邪术强度[+0.2x]',
                        '§c -0.5 幸运值[-0.5]',
                        "§r ",
                    ];
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

StartupEvents.registry('item', event => {
    event.create('goldenagefall:profane_bell')
        .displayName('§5渎神之铃')
        .tooltip('§7每一次清脆的铃响，都是对神圣的亵渎，引来更深的黑暗回响。')
        .maxStackSize(1)
        .tag('curios:belt')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('apothic_attributes:dodge_chance', "profane_dodge_chance", 0.05, 'add_multiplied_base')
                .addAttribute('irons_spellbooks:eldritch_spell_power', "profane_eldritch_spell_power", 0.2, 'add_multiplied_base')
                // 负面属性
                .addAttribute('minecraft:generic.luck', "profane_luck", -0.5, 'add_value')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§5佩戴渎神之铃时：',
                        '§9 +5% 闪避率[+0.05x]',
                        '§9 +20% 邪术强度[+0.2x]',
                        '§c -0.5 幸运值[-0.5]',
                        "§r ",
                    ];
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

StartupEvents.registry('item', event => {
    event.create('goldenagefall:voidbeast_scale')
        .displayName('§3虚空兽鳞')
        .tooltip('§7自虚空深渊游兽身上剥离的黝黑鳞片，散发着引力般的压迫感。')
        .maxStackSize(1)
        .tag('curios:arcane_trinket')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('irons_spellbooks:spell_resist', "voidbeast_spell_resist", 0.1, 'add_multiplied_base')
                .addAttribute('cataclysm_spellbooks:abyssal_spell_power', "voidbeast_abyss_spell_power", 0.15, 'add_multiplied_base')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§3佩戴虚空兽鳞时：',
                        '§9 +10% 法术抗性[+0.1x]',
                        '§9 +15% 深渊法术强度[+0.15x]',
                        "§r ",
                    ];
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

StartupEvents.registry('item', event => {
    event.create('goldenagefall:ring_of_the_voidtouch')
        .displayName('§3虚触侵蚀指环')
        .tooltip('§7指环内侧刻有模糊的深渊符文，佩戴者的动作在黑暗中变得无声无息。')
        .maxStackSize(1)
        .tag('curios:ring')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('minecraft:player.sneaking_speed', "voidtouch_sneaking_speed", 0.25, 'add_multiplied_base')
                .addAttribute('minecraft:generic.movement_speed', "voidtouch_movement_speed", 0.15, 'add_multiplied_base')
                .addAttribute('cataclysm_spellbooks:abyssal_spell_power', "voidtouch_abyss_spell_power", 0.1, 'add_multiplied_base')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§3佩戴虚触侵蚀指环时：',
                        '§9 +25% 潜行速度[+0.25x]',
                        '§9 +15% 移动速度[+0.15x]',
                        '§9 +10% 深渊法术强度[+0.1x]',
                        "§r ",
                    ];
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

StartupEvents.registry('item', event => {
    event.create('goldenagefall:gauntlet_of_the_abyssshade')
        .displayName('§3幽渊护手')
        .tooltip('§7由幽邃深渊中诞生的暗影之铁铸成，既能挥出沉重一击，也能引导扭曲的法术之力。')
        .maxStackSize(1)
        .tag('curios:hands')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('minecraft:generic.attack_damage', "abyssshade_attack_damage", 5, 'add_value')
                .addAttribute('apothic_attributes:armor_shred', "abyssshade_armor_shred", 0.05, 'add_multiplied_base')
                .addAttribute('cataclysm_spellbooks:abyssal_spell_power', "abyssshade_abyss_spell_power", 0.15, 'add_multiplied_base')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§3佩戴幽渊护手时：',
                        '§9 +5 攻击伤害[+5]',
                        '§9 +5% 盔甲撕裂[+0.05x]',
                        '§9 +15% 深渊法术强度[+0.15x]',
                        "§r ",
                    ];
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

StartupEvents.registry('item', event => {
    event.create('goldenagefall:eye_of_the_endshade')
        .displayName('§5终影之眼')
        .tooltip('§7来自终末之影的注视永不熄灭，使佩戴者在黑暗中洞彻一切奥秘。')
        .maxStackSize(1)
        .tag('curios:head')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('irons_spellbooks:ender_spell_power', "endshade_eye_ender_spell_power", 0.2, 'add_multiplied_base')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§5佩戴终影之眼时：',
                        '§9 +20% 末影法术强度[+0.2x]',
                        '§6 佩戴时获得夜视效果',
                        "§r ",
                    ];
                })

                .onEquip((ctx, prevStack, stack) => {
                    let player = ctx.entity();
                    if (player && player.isPlayer() && !player.level.isClientSide()) {
                        // 佩戴时给予永久夜视效果
                        player.potionEffects.add('minecraft:night_vision', -1, 0, false, false);
                    }
                })

                .onUnequip((ctx, newStack, stack) => {
                    let player = ctx.entity();
                    if (player && player.isPlayer() && !player.level.isClientSide()) {
                        // 卸下时移除夜视效果
                        if (player.hasEffect('minecraft:night_vision')) {
                            player.removeEffect('minecraft:night_vision');
                        }
                    }
                })

                .curioTick((ctx, stack) => {
                    let player = ctx.entity();
                    if (player.isPlayer() && player && !player.level.isClientSide()) {
                        // 确保夜视始终存在
                        if (!player.hasEffect('minecraft:night_vision')) {
                            player.potionEffects.add('minecraft:night_vision', -1, 0, false, false);
                        }
                    }
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

StartupEvents.registry('item', event => {
    event.create('goldenagefall:linkchain_of_the_netherbind')
        .displayName('§5虚界连接锁链')
        .tooltip('§7由末影虚界的残碎因果编织而成，链环间流动着跨界法则的回响。')
        .maxStackSize(1)
        .tag('curios:arcane_trinket')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('irons_spellbooks:ender_spell_power', "netherbind_ender_spell_power", 0.1, 'add_multiplied_base')
                .addAttribute('irons_spellbooks:cooldown_reduction', "netherbind_cooldown_reduction", 0.2, 'add_value')
                .addAttribute('irons_spellbooks:mana_regen', "netherbind_mana_regen", 0.2, 'add_multiplied_base')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§5佩戴虚界连接锁链时：',
                        '§9 +10% 末影法术强度[+0.1x]',
                        '§9 +20% 法术冷却缩减[+0.2x]',
                        '§9 +20% 法力值恢复[+0.2x]',
                        "§r ",
                    ];
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

StartupEvents.registry('item', event => {
    event.create('goldenagefall:bell_of_the_abyssgloom')
        .displayName('§5影渊之铃')
        .tooltip('§7铃音低鸣似从虚空深渊中传来，牵引末影与幽渊之力交织共鸣。')
        .maxStackSize(1)
        .tag('curios:belt')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('irons_spellbooks:ender_spell_power', "abyssgloom_ender_spell_power", 0.15, 'add_multiplied_base')
                .addAttribute('cataclysm_spellbooks:abyssal_spell_power', "abyssgloom_abyss_spell_power", 0.05, 'add_multiplied_base')
                .addAttribute('apothic_attributes:dodge_chance', "abyssgloom_dodge_chance", 0.05, 'add_multiplied_base')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§5佩戴影渊之铃时：',
                        '§9 +15% 末影法术强度[+0.15x]',
                        '§9 +5% 深渊法术强度[+0.05x]',
                        '§9 +5% 闪避率[+0.05x]',
                        "§r ",
                    ];
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

StartupEvents.registry('item', event => {
    event.create('goldenagefall:bell_of_sacrificial_pact')
        .displayName('§4献祭之铃')
        .tooltip('§7以血为契，以铃为媒。每一次生命的流逝，都化作召唤生物的怒火。')
        .maxStackSize(1)
        .tag('curios:belt')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 属性
                .addAttribute('irons_spellbooks:summon_damage', "sacrificial_summon_damage", 0.5, 'add_multiplied_base')
                .addAttribute('irons_spellbooks:evocation_spell_power', "sacrificial_evocation_spell_power", 0.25, 'add_multiplied_base')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§4佩戴献祭之铃时：',
                        '§9 +50% 召唤伤害[+0.5x]',
                        '§9 +25% 唤魔法术强度[+0.25x]',
                        '§c 每30秒损失1点生命值',
                        "§r ",
                    ];
                })

                .curioTick((ctx, stack) => {
                    let player = ctx.entity();
                    if (player.isPlayer() && player && !player.level.isClientSide()) {
                        // 每30秒损失1点生命值
                        if (player.tickCount % 600 === 0) { // 30秒 = 600 ticks
                            let currentHealth = player.getHealth();
                            if (currentHealth > 1) { // 确保不会死亡
                                player.attack('minecraft:magic', 1.0);
                            }
                        }
                    }
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

StartupEvents.registry('item', event => {
    event.create('goldenagefall:emblem_of_evokelight')
        .displayName('§b唤魔圣徽')
        .tooltip('由古代唤魔仪式中遗留的圣徽改铸，既是引导魔力的媒介，也是守护施法者的护印。')
        .maxStackSize(1)
        .tag('curios:body')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('minecraft:generic.armor', "evokelight_armor", 5, 'add_value')
                .addAttribute('combat_roll:count', "evokelight_roll_count", 1, 'add_value')
                .addAttribute('irons_spellbooks:evocation_spell_power', "evokelight_evocation_spell_power", 0.15, 'add_multiplied_base')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§b佩戴唤魔圣徽时：',
                        '§9 +5 护甲值[+5]',
                        '§9 +1 额外翻滚次数[+1]',
                        '§9 +15% 唤魔法术强度[+0.15x]',
                        "§r ",
                    ];
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

StartupEvents.registry('item', event => {
    event.create('goldenagefall:soulring_of_arcanexus')
        .displayName('§b魔魂戒')
        .tooltip('封印着唤魔残魂的指环，能引导更广泛的法术之力与唤魔共鸣。')
        .maxStackSize(1)
        .tag('curios:ring')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('irons_spellbooks:max_mana', "arcanexus_max_mana", 50, 'add_value')
                .addAttribute('irons_spellbooks:spell_power', "arcanexus_spell_power", 0.1, 'add_multiplied_base')
                .addAttribute('irons_spellbooks:evocation_spell_power', "arcanexus_evocation_spell_power", 0.1, 'add_multiplied_base')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§b佩戴魔魂戒时：',
                        '§9 +50 最大法力值[+50]',
                        '§9 +10% 法术强度[+0.1x]',
                        '§9 +10% 唤魔法术强度[+0.1x]',
                        "§r ",
                    ];
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

StartupEvents.registry('item', event => {
    event.create('goldenagefall:urn_of_the_windwhisper')
        .displayName('§a风语壶')
        .tooltip('据说壶中封印着精灵风灵的低语，使持有者步伐轻盈、出手如风，且与自然共鸣。')
        .maxStackSize(1)
        .tag('curios:arcane_trinket')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('minecraft:generic.movement_speed', "windwhisper_movement_speed", 0.05, 'add_multiplied_base')
                .addAttribute('minecraft:generic.attack_speed', "windwhisper_attack_speed", 0.1, 'add_multiplied_base')
                .addAttribute('irons_spellbooks:nature_spell_power', "windwhisper_nature_spell_power", 0.15, 'add_multiplied_base')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§a佩戴风语壶时：',
                        '§9 +5% 速度[+0.05x]',
                        '§9 +10% 攻击速度[+0.1x]',
                        '§9 +15% 自然法术强度[+0.15x]',
                        "§r ",
                    ];
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

StartupEvents.registry('item', event => {
    event.create('goldenagefall:bracelet_of_the_sylvan_spirit')
        .displayName('§a森灵手环')
        .tooltip('由古树藤蔓与月桂枝编织而成，蕴含森林精灵的祝福与自然法则的回响。')
        .maxStackSize(1)
        .tag('curios:bracelet')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('irons_spellbooks:mana_regen', "sylvan_mana_regen", 0.3, 'add_multiplied_base')
                .addAttribute('apothic_attributes:mining_speed', "sylvan_mining_speed", 0.1, 'add_multiplied_base')
                .addAttribute('irons_spellbooks:nature_spell_power', "sylvan_nature_spell_power", 0.15, 'add_multiplied_base')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§a佩戴森灵手环时：',
                        '§9 +30% 法力值恢复[+0.3x]',
                        '§9 +10% 挖掘速度[+0.1x]',
                        '§9 +15% 自然法术强度[+0.15x]',
                        "§r ",
                    ];
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

StartupEvents.registry('item', event => {
    event.create('goldenagefall:vineserpent_greaves')
        .displayName('§a藤蛇绑腿')
        .tooltip('以灵藤与蛇蜕缠绕编制，能在坠落之际柔化冲击，并引导自然法术的流动。')
        .maxStackSize(1)
        .tag('curios:feet')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('minecraft:generic.safe_fall_distance', "vineserpent_safe_fall", 2, 'add_value')
                .addAttribute('minecraft:generic.knockback_resistance', "vineserpent_knockback_resist", 0.15, 'add_multiplied_base')
                .addAttribute('irons_spellbooks:nature_spell_power', "vineserpent_nature_spell_power", 0.1, 'add_multiplied_base')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§a佩戴藤蛇绑腿时：',
                        '§9 +2 安全摔落高度[+2]',
                        '§9 +15% 击退抗性[+0.15x]',
                        '§9 +10% 自然法术强度[+0.1x]',
                        "§r ",
                    ];
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});
