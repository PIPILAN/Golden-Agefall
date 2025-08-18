// 操作方法对应属性提示(modifyAttributesTooltip)后写法
// xxxx, 1, 'add_value' → [+1]
// xxxx, 1, 'add_multiplied_base' → [+1.00x]
// xxxx, 1, 'add_multiplied_total' → [x2.00]


StartupEvents.registry('creative_mode_tab', event => {
	event.create('goldenagefallrurios').displayName('黄金终焉纪 - 饰品').icon(() => 'goldenagefall:heart_of_the_colossus').content(() => [
		// 生灵之心
        "goldenagefall:heart_of_the_colossus",
        "goldenagefall:heart_of_the_endshade",
        "goldenagefall:heart_of_the_cinderwraith",
        "goldenagefall:heart_of_the_abyssgazer",
        "goldenagefall:heart_of_the_faebound",
        "goldenagefall:heart_of_the_netherblood",
        "goldenagefall:heart_of_the_dragonborn",
        // 战利品饰品
		"goldenagefall:heart_of_manathrum",
        "goldenagefall:diadem_of_dominion",
        "goldenagefall:nail_and_hammer",
        "goldenagefall:bracelet_of_austerity",
        "goldenagefall:molten_coreheart",
        "goldenagefall:ring_of_burning_blood",
        "goldenagefall:emberflame_bracelet",
        "goldenagefall:frostbite_circlet",
        "goldenagefall:chime_of_the_frostwhisper",
        "goldenagefall:shardstep_treadstone",
        "goldenagefall:stormstep_veil",
        "goldenagefall:emblem_of_thundercry",
        "goldenagefall:ring_of_stormbreath",
        "goldenagefall:chain_of_sacred_edict",
        "goldenagefall:ring_of_echoing_spirits",
        "goldenagefall:sanctified_bone_of_judicore",
        "goldenagefall:bell_of_soulpact",
        "goldenagefall:oathbone_ring",
        "goldenagefall:crimson_moon_pendant",
        "goldenagefall:spellbone_core",
        "goldenagefall:scarf_of_forbidden_rites",
        "goldenagefall:fang_of_the_voidcorrupt",
        "goldenagefall:profane_bell",
        "goldenagefall:voidbeast_scale",
        "goldenagefall:ring_of_the_voidtouch",
        "goldenagefall:gauntlet_of_the_abyssshade",
        "goldenagefall:eye_of_the_endshade",
        "goldenagefall:linkchain_of_the_netherbind",
        "goldenagefall:bell_of_the_abyssgloom",
        "goldenagefall:bell_of_sacrificial_pact",
        "goldenagefall:emblem_of_evokelight",
        "goldenagefall:soulring_of_arcanexus",
        "goldenagefall:urn_of_the_windwhisper",
        "goldenagefall:bracelet_of_the_sylvan_spirit",
        "goldenagefall:vineserpent_greaves",
        // 掉落物饰品
        "goldenagefall:corrupted_flesh_gauntlet",
        "goldenagefall:palewood_phalange",
        "goldenagefall:bionic_gillflap",
        "goldenagefall:grimoire_of_arcanum",
        "goldenagefall:golem_charm",
        "goldenagefall:token_of_the_heroic",
        "goldenagefall:flamefist",
        "goldenagefall:seed_of_fortune",
        // 交易饰品
        "goldenagefall:amulet_of_gwakwa",
        // 任务饰品
        "goldenagefall:belt_of_the_culinary_avatar_feast_aspect",
        "goldenagefall:belt_of_the_culinary_avatar_famine_aspect",
	])
})

//=============================================================================================================

StartupEvents.registry('item', event => {
    event.create('goldenagefall:heart_of_the_colossus')
        .displayName('§6巨灵之心')
        .tooltip('§7这颗巨人之心被古老魔法封印，依旧跳动着洪荒的鼓点。')
        .tooltip('§7当它与凡人的血肉融合，融合者将继承巨灵的狂怒与力量，踏碎大地如履平原。')
        .maxStackSize(1)
        .tag('curios:animacore')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面
                .addAttribute('minecraft:generic.scale', "colossus_scale", 0.5, 'add_value')
                .addAttribute('minecraft:generic.attack_damage', "colossus_attack_damage", 0.5, 'add_multiplied_total')
                .addAttribute('apothic_attributes:projectile_damage', "colossus_projectile_damage", 0.5, 'add_multiplied_base')
                .addAttribute('apothic_attributes:crit_chance', "colossus_crit_chance", 0.05, 'add_value')
                .addAttribute('apothic_attributes:crit_damage', "colossus_crit_damage", 0.5, 'add_value')
                .addAttribute('minecraft:generic.max_health', "colossus_max_health", 30, 'add_value')
                .addAttribute('minecraft:generic.armor', "colossus_armor", 15, 'add_value')
                .addAttribute('minecraft:generic.step_height', "colossus_step_height", 0.6, 'add_value')
                .addAttribute('minecraft:generic.movement_speed', "colossus_movement_speed", 0.3, 'add_multiplied_base')
                .addAttribute('minecraft:generic.safe_fall_distance', "colossus_safe_fall_distance", 2, 'add_value')
                .addAttribute('minecraft:generic.jump_strength', "colossus_jump_strength", 0.5, 'add_multiplied_base')
                .addAttribute('minecraft:player.block_interaction_range', "colossus_block_interaction_range", 1, 'add_value')
                .addAttribute('minecraft:player.entity_interaction_range', "colossus_entity_interaction_range", 1, 'add_value')
                .addAttribute('irons_spellbooks:spell_resist', "colossus_spell_resist", 0.5, 'add_multiplied_base')

                // 负面
                .addAttribute('minecraft:generic.attack_speed', "colossus_attack_speed", -0.25, 'add_multiplied_total')
                .addAttribute('irons_spellbooks:spell_power', "colossus_spell_power", -0.8, 'add_multiplied_total')
                .addAttribute('apothic_attributes:healing_received', "colossus_healing_received", -0.5, 'add_multiplied_total')
                .addAttribute('minecraft:generic.burning_time', "colossus_burning_time", 1.0, 'add_multiplied_base')
                .addAttribute('apothic_attributes:experience_gained', "colossus_experience_gained", -0.25, 'add_multiplied_base')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§6佩戴生灵之心时：',
                        '§7 +50% 尺寸[+0.5]',
                        '§9 +50% 攻击伤害[x1.5]',
                        '§9 +50% 弹射物伤害[+0.50x]',
                        '§9 +5% 暴击率[+0.05x]',
                        '§9 +50% 暴击伤害[+0.50x]',
                        '§9 +30 最大生命值[+30]',
                        '§9 +15 护甲值[+15]',
                        '§9 +0.6 最大行走高度[+0.6]',
                        '§9 +30% 速度[+0.30x]',
                        '§9 +2 安全摔落高度[+2]',
                        '§9 +50% 跳跃力度[+0.50x]',
                        '§9 +1 方块交互距离[+1]',
                        '§9 +1 实体交互距离[+1]',
                        '§9 +50% 法术抗性[+0.50x]',
                        '§c +100% 着火时间[+1.0x]',
                        '§c -25% 攻击速度[x0.75]',
                        '§c -80% 法术强度[x0.20]',
                        '§c -50% 受到治疗[x0.50]',
                        '§c -25% 经验获取[-0.25x]',
                        "§r ",
                    ];
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

//=============================================================================================================

StartupEvents.registry('item', event => {
    event.create('goldenagefall:heart_of_the_endshade')
        .displayName('§5终影之心')
        .tooltip('§7它曾在无光的深空中跳动，与虚空同频。')
        .tooltip('§7传说那是某位古老末影君王的心脏，仍残留着操纵空间与暗影的意志。')
        .tooltip('§7一旦融合，它将赋予你操控界域的力量——代价是，你的心是否还属于你自己？')
        .maxStackSize(1)
        .tag('curios:animacore')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('irons_spellbooks:max_mana', "endshade_max_mana", 300, 'add_value')
                .addAttribute('irons_spellbooks:ender_spell_power', "endshade_ender_spell_power", 0.5, 'add_multiplied_base')
                .addAttribute('irons_spellbooks:cooldown_reduction', "endshade_cooldown_reduction", 0.3, 'add_value')
                .addAttribute('minecraft:generic.attack_damage', "endshade_attack_damage", 0.15, 'add_multiplied_total')
                .addAttribute('minecraft:generic.fall_damage_multiplier', "endshade_fall_damage_multiplier", -1.0, 'add_multiplied_base')

                // 负面属性
                .addAttribute('irons_spellbooks:nature_spell_power', "endshade_nature_spell_power", -0.5, 'add_multiplied_base')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§5佩戴终影之心时：',
                        '§9 +300 最大法力值[+300]',
                        '§9 +50% 末影法术强度[+0.50x]',
                        '§9 +30% 法术冷却缩减[+0.30x]',
                        '§9 +15% 攻击伤害[x1.15]',
                        '§c -50% 自然法术强度[-0.50x]',
                        '§c 接触水时会持续受到伤害',
                        '§e 免疫摔落伤害',
                        '§6 末地纬度中攻击伤害额外 +30%[x1.30]',
                        "§r ",
                    ];
                })
                .onUnequip((ctx, newStack, stack) => {
                    let player = ctx.entity();
                    if (player && player.isPlayer()) {
                        // 移除末地攻击力修饰符
                        let attackAttribute = player.getAttribute('minecraft:generic.attack_damage');
                        if (attackAttribute.hasModifier('endshade_end_attack')) {
                            player.removeAttribute('minecraft:generic.attack_damage', 'endshade_end_attack');
                        }
                    }
                })
                .curioTick((ctx, stack) => {
                    let player = ctx.entity();
                    if (player.isPlayer() && player.isInWater()) {
                        if (player.tickCount % 20 === 0) {
                            let maxHealth = player.getMaxHealth();
                            let damage = maxHealth * 0.05;
                            player.attack('minecraft:drown', damage);
                        }
                    }
                    // 末地维度中额外攻击伤害
                    let level = player.level;
                    let isInEnd = level.dimension == 'minecraft:the_end';
                    let attackAttribute = player.getAttribute('minecraft:generic.attack_damage');
                    let hasEndModifier = attackAttribute.hasModifier('endshade_end_attack');
                    if (isInEnd && !hasEndModifier) {
                        // 进入末地时添加攻击力修饰符
                        player.modifyAttribute('minecraft:generic.attack_damage', 'endshade_end_attack', 0.3, 'add_multiplied_total');
                    } else if (!isInEnd && hasEndModifier) {
                        // 离开末地时移除攻击力修饰符
                        player.removeAttribute('minecraft:generic.attack_damage', 'endshade_end_attack');
                    }
                })


                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

//=============================================================================================================

StartupEvents.registry('item', event => {
    event.create('goldenagefall:heart_of_the_cinderwraith')
        .displayName('§c灼魂之心')
        .tooltip('§7它源自一位浴火重生的焰灵君王，被封印于火山岩髓之中，永不熄灭。')
        .tooltip('§7融合者的血液将与永恒之火同频，从此烈焰不再焚身，而化为随心所动的力量。')
        .tooltip('§7但焰灵之路孤独且危险——燃尽他人前，先焚己心。')
        .maxStackSize(1)
        .tag('curios:animacore')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('apothic_attributes:fire_damage', "cinderwraith_fire_damage", 10, 'add_value')
                .addAttribute('irons_spellbooks:fire_spell_power', "cinderwraith_fire_spell_power", 0.6, 'add_multiplied_base')
                .addAttribute('irons_spellbooks:fire_magic_resist', "cinderwraith_fire_resist", 0.75, 'add_multiplied_base')
                // 负面属性
                .addAttribute('irons_spellbooks:ice_magic_resist', "cinderwraith_ice_resist", -1.0, 'add_multiplied_base')
                .addAttribute('irons_spellbooks:mana_regen', "cinderwraith_mana_regen", -0.3, 'add_multiplied_base')
                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§c佩戴灼魂之心时：',
                        '§9 +10 火焰伤害[+10]',
                        '§9 +60% 炽焰法术强度[+0.60x]',
                        '§9 +75% 炽焰法术抗性[+0.75x]',
                        '§c -100% 冰霜法术抗性[-1.00x]',
                        '§c -30% 法力恢复速度[-0.30x]',
                        '§c 雷雨天移动速度额外 -15%[-0.15x]',
                        '§e 完全免疫火焰伤害',
                        '§a 熔岩中每秒恢复2点生命',
                        '§c 攻击附带灼烧效果，可点燃敌人',
                        '§6 地狱纬度中攻击伤害额外 +30%[x1.30]',
                        "§r ",
                    ];
                })
                .onEquip((ctx, stack) => {
                    let player = ctx.entity();
                    if (player && player.isPlayer() && !player.level.isClientSide()) {
                        // 佩戴时立即给予永久火焰抗性
                        player.potionEffects.add('minecraft:fire_resistance', -1, 0, false, false);
                    }
                })
                .onUnequip((ctx, newStack, stack) => {
                    let player = ctx.entity();
                    if (player && player.isPlayer()) {
                        // 移除缓慢效果
                        if (player.hasEffect('minecraft:slowness')) {
                            player.removeEffect('minecraft:slowness');
                        }
                        // 移除火焰抗性效果
                        if (player.hasEffect('minecraft:fire_resistance')) {
                            player.removeEffect('minecraft:fire_resistance');
                        }
                        // 移除地狱攻击力修饰符
                        let attackAttribute = player.getAttribute('minecraft:generic.attack_damage');
                        if (attackAttribute.hasModifier('cinderwraith_nether_attack')) {
                            player.removeAttribute('minecraft:generic.attack_damage', 'cinderwraith_nether_attack');
                        }
                    }
                })
                .curioTick((ctx, stack) => {
                    let player = ctx.entity();
                    if (player.isPlayer() && player && !player.level.isClientSide()) {
                        // 确保火焰抗性始终存在
                        if (!player.hasEffect('minecraft:fire_resistance')) {
                            player.potionEffects.add('minecraft:fire_resistance', -1, 0, false, false);
                        }
                        // 熔岩中恢复生命
                        if (player.isInLava()) {
                            if (player.tickCount % 20 === 0) {
                                let currentHealth = player.getHealth();
                                let maxHealth = player.getMaxHealth();
                                if (currentHealth < maxHealth) {
                                    player.heal(2.0);
                                }
                            }
                        }
                        //  雷雨天移动速度额外减15%
                        let level = player.level;
                        if (level.isRaining() && level.isThundering()) {
                            if (!player.hasEffect('minecraft:slowness')) {
                                player.potionEffects.add('minecraft:slowness', -1, 0, false, false);
                            }
                        } else if (player.hasEffect('minecraft:slowness') && !level.isRaining() && !level.isThundering()) {
                            player.removeEffect('minecraft:slowness');
                        }
                        // 地狱维度中额外攻击伤害
                        let isInNether = level.dimension == 'minecraft:the_nether';
                        let attackAttribute = player.getAttribute('minecraft:generic.attack_damage');
                        let hasNetherModifier = attackAttribute.hasModifier('cinderwraith_nether_attack');
                        if (isInNether && !hasNetherModifier) {
                            // 进入地狱时添加攻击力修饰符
                            player.modifyAttribute('minecraft:generic.attack_damage', 'cinderwraith_nether_attack', 0.25, 'add_multiplied_total');
                        } else if (!isInNether && hasNetherModifier) {
                            // 离开地狱时移除攻击力修饰符
                            player.removeAttribute('minecraft:generic.attack_damage', 'cinderwraith_nether_attack');
                        }
                    }
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

//=============================================================================================================

StartupEvents.registry('item', event => {
    event.create('goldenagefall:heart_of_the_abyssgazer')
        .displayName('§3窥渊之心')
        .tooltip('§7它是深渊呼唤者的遗骸核心，在沉眠的深海中低语召唤。')
        .tooltip('§7融合它的人能借助深渊的感知窥视万象，')
        .tooltip('§7但理智也会逐渐被潮汐侵蚀，失去人与怪物的界限。')
        .maxStackSize(1)
        .tag('curios:animacore')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('apothic_attributes:armor_shred', "abyssgazer_armor_shred", 15, 'add_value')
                .addAttribute('irons_spellbooks:evocation_spell_power', "abyssgazer_evocation_spell_power", 0.4, 'add_multiplied_base')
                .addAttribute('irons_spellbooks:eldritch_spell_power', "abyssgazer_eldritch_spell_power", 0.3, 'add_multiplied_base')
                .addAttribute('irons_spellbooks:max_mana', "abyssgazer_max_mana", 200, 'add_value')
                .addAttribute('irons_spellbooks:mana_regen', "abyssgazer_mana_regen", 1.0, 'add_multiplied_base')

                // 负面属性
                .addAttribute('minecraft:generic.attack_speed', "abyssgazer_attack_speed", -0.2, 'add_multiplied_total')
                .addAttribute('irons_spellbooks:holy_magic_resist', "abyssgazer_holy_spell_resist", -1.0, 'add_multiplied_base')
                .addAttribute('minecraft:generic.luck', "abyssgazer_luck", -2.0, 'add_value')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§3佩戴窥渊之心时：',
                        '§9 +15 盔甲撕裂[+15]',
                        '§9 +40% 深渊法术强度[+0.40x]',
                        '§9 +30% 邪术强度[+0.30x]',
                        '§9 +200 最大法力值[+200]',
                        '§9 +100% 法力值恢复[+1.00x]',
                        '§c -20% 最终攻击速度[-0.20x]',
                        '§c -100% 神圣法术抗性[-1.00x]',
                        '§c -2.0 幸运[-2.0]',
                        '§e 免疫失明和黑暗效果',
                        '§3 深渊视域：§6每10秒触发一次，3秒内§6标记附近所有生物',
                        "§r "
                    ];
                })

                .onEquip((ctx, prevStack, stack) => {
                    let player = ctx.entity();
                    if (player && player.isPlayer()) {
                        // 添加深渊视域标记
                        player.persistentData.putBoolean("abyssgazer_equipped", true);
                        player.persistentData.putInt("abyssgazer_timer", 0);
                    }
                })

                .onUnequip((ctx, newStack, stack) => {
                    let player = ctx.entity();
                    if (player && player.isPlayer()) {
                        // 移除深渊视域标记和效果
                        player.persistentData.remove("abyssgazer_equipped");
                        player.persistentData.remove("abyssgazer_timer");
                        if (player.hasEffect('minecraft:glowing')) {
                            player.removeEffect('minecraft:glowing');
                        }
                    }
                })

                .curioTick((ctx, stack) => {
                    let player = ctx.entity();
                    if (player.isPlayer() && player && !player.level.isClientSide()) {
                        // 免疫失明和黑暗效果
                        if (player.hasEffect('minecraft:blindness')) {
                            player.potionEffects.removeEffect('minecraft:blindness');
                        }
                        if (player.hasEffect('minecraft:darkness')) {
                            player.potionEffects.removeEffect('minecraft:darkness');
                        }
                        // 深渊视域效果 - 每10秒触发一次
                        let timer = player.persistentData.getInt("abyssgazer_timer");
                        timer++;
                        player.persistentData.putInt("abyssgazer_timer", timer);
                        if (timer >= 200) { // 10秒 = 200 ticks
                            // 重置计时器
                            player.persistentData.putInt("abyssgazer_timer", 0);
                            // 给予深渊视域效果 - 让附近的生物发光
                            let entities = player.level.getEntitiesWithin(AABB.of(
                                player.x - 32, player.y - 16, player.z - 32,
                                player.x + 32, player.y + 16, player.z + 32
                            ));
                            entities.forEach(entity => {
                                if (entity !== player && entity.isLiving()) {
                                    // 给生物添加发光效果，持续3秒
                                    entity.potionEffects.add('minecraft:glowing', 60, 0, false, false);
                                }
                            });

                        }


                    }
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

//=============================================================================================================

StartupEvents.registry('item', event => {
    event.create('goldenagefall:heart_of_the_faebound')
        .displayName('§d灵魅之心')
        .tooltip('§7它曾属于一位古老的妖精女王，脉动中回荡着自然与幻梦的节奏。')
        .tooltip('§7融合者将获得灵魅之力——轻盈如风，变化莫测，')
        .tooltip('§7但凡人之心往往难以承受那飘渺的真实与虚幻的界限。')
        .maxStackSize(1)
        .tag('curios:animacore')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('irons_spellbooks:nature_spell_power', "faebound_nature_spell_power", 0.3, 'add_multiplied_base')
                .addAttribute('familiarslib:sound_spell_power', "faebound_sound_spell_power", 0.25, 'add_multiplied_base')
                .addAttribute('apothic_attributes:dodge_chance', "faebound_dodge_chance", 0.3, 'add_value')
                .addAttribute('minecraft:generic.movement_speed', "faebound_movement_speed", 0.25, 'add_multiplied_base')
                .addAttribute('apothic_attributes:arrow_velocity', "faebound_arrow_velocity", 0.35, 'add_multiplied_base')
                .addAttribute('apothic_attributes:experience_gained', "faebound_experience_gained", 0.25, 'add_multiplied_base')
                .addAttribute('apothic_attributes:current_hp_damage', "faebound_current_hp_damage", 0.015, 'add_value')

                // 负面属性
                .addAttribute('minecraft:generic.scale', "faebound_scale", -0.2, 'add_multiplied_base')
                .addAttribute('minecraft:generic.gravity', "faebound_gravity", -0.5, 'add_multiplied_base')
                .addAttribute('minecraft:generic.armor', "faebound_armor", -0.3, 'add_multiplied_total')
                .addAttribute('minecraft:generic.max_health', "faebound_max_health", -0.3, 'add_multiplied_total')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§d佩戴灵魅之心时：',
                        '§9 +30% 自然法术强度[+0.30x]',
                        '§9 +25% 律灵法术强度[+0.25x]',
                        '§9 +30% 闪避率[+0.30x]',
                        '§9 +25% 移动速度[+0.25x]',
                        '§9 +35% 箭矢速度[+0.35x]',
                        '§9 +25% 经验获取[+0.25x]',
                        '§c -20% 尺寸[-0.20x]',
                        '§c -50% 重力[-0.50x]',
                        '§c -30% 最终护甲值[x0.70]',
                        '§c -30% 最终最大生命值[x0.70]',
                        '§6 §d妖魅之力: §6每次攻击可额外造成敌人 1.5% 当前生命值的真实伤害',
                        "§r ",
                    ];
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

//=============================================================================================================

StartupEvents.registry('item', event => {
    event.create('goldenagefall:heart_of_the_netherblood')
        .displayName('§4冥血之心')
        .tooltip('§7那是一颗早已停止跳动的王者之心，却仍在冥界深处滴落着不灭的猩红。')
        .tooltip('§7它曾属于一位以鲜血铸魂、以死亡为军的冥血君主——')
        .tooltip('§7融合者将被赐予操控死者与不灭之血的力量，')
        .tooltip('§7代价是他们必须放弃凡人的生机，走上血与亡的君临之路。')
        .maxStackSize(1)
        .tag('curios:animacore')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('irons_spellbooks:summon_damage', "netherblood_summon_damage", 0.5, 'add_multiplied_base')
                .addAttribute('apothic_attributes:life_steal', "netherblood_life_steal", 0.25, 'add_value')
                .addAttribute('apothic_attributes:armor_shred', "netherblood_armor_shred", 0.25, 'add_value')
                .addAttribute('irons_spellbooks:blood_spell_power', "netherblood_blood_spell_power", 0.35, 'add_multiplied_base')
                .addAttribute('minecraft:generic.attack_speed', "netherblood_attack_speed", 0.3, 'add_multiplied_base')
                .addAttribute('irons_spellbooks:max_mana', "netherblood_max_mana", 300, 'add_value')

                // 负面属性
                .addAttribute('irons_spellbooks:holy_magic_resist', "netherblood_holy_resist", -1.0, 'add_multiplied_base')
                .addAttribute('irons_spellbooks:lightning_magic_resist', "netherblood_lightning_resist", -0.5, 'add_multiplied_base')
                .addAttribute('minecraft:generic.max_health', "netherblood_max_health", -0.25, 'add_multiplied_total')
                .addAttribute('apothic_attributes:healing_received', "netherblood_healing_received", -0.75, 'add_multiplied_total')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§4佩戴冥血之心时：',
                        '§9 +50% 召唤伤害[+0.50x]',
                        '§9 +25% 生命偷取[+0.25x]',
                        '§9 +25% 盔甲撕裂[+0.25x]',
                        '§9 +35% 猩红法术强度[+0.35x]',
                        '§9 +30% 攻击速度[+0.30x]',
                        '§9 +300 最大法力值[+300]',
                        '§c -100% 神圣法术抗性[-1.00x]',
                        '§c -50% 雷霆法术抗性[-0.50x]',
                        '§c -25% 最终最大生命值[x0.75]',
                        '§c -75% 最终受到治疗[x0.75]',
                        '§4 与亡灵缔结契约，每30秒损失 §f5%§4 最大生命值',
                        '§8 亡灵之躯§c：头部未装备头盔时在太阳直射下将缓慢燃烧',
                        "§r ",
                    ];
                })

                .curioTick((ctx, stack) => {
                    let player = ctx.entity();
                    if (player.isPlayer() && player && !player.level.isClientSide()) {
                        // 亡灵契约 - 每30秒损失5%最大生命值
                        if (player.tickCount % 600 === 0) { // 30秒 = 600 ticks
                            // 计算并造成5%最大生命值的伤害
                            let maxHealth = player.getMaxHealth();
                            let damage = maxHealth * 0.05;

                            if (damage > 0) {
                                player.attack('minecraft:magic', damage);
                            }
                        }

                        // 亡灵之躯 - 太阳直射下燃烧（头部无头盔时）
                        let level = player.level;
                        let headSlot = player.getItemBySlot('head');
                        let isWearingHelmet = headSlot && !headSlot.isEmpty();

                        // 检查是否在太阳直射下
                        if (level.isDay() && !level.isRaining() && level.canSeeSky(player.blockPosition())) {
                            if (!isWearingHelmet) {
                                // 每秒给予燃烧效果
                                if (player.tickCount % 20 === 0) {
                                    // 计算并造成5%最大生命值的伤害
                                    let maxHealth = player.getMaxHealth();
                                    let damage = maxHealth * 0.05;
                                    player.attack('minecraft:on_fire', damage);
                                    // 添加燃烧粒子效果
                                    player.level.sendParticles('minecraft:flame',
                                        player.x, player.y + player.getBbHeight() - 0.2, player.z,
                                        5, 0.2, 0.1, 0.2, 0.02);
                                }
                            }
                        }
                    }
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});

//=============================================================================================================

StartupEvents.registry('item', event => {
    event.create('goldenagefall:heart_of_the_dragonborn')
        .displayName('§6龙裔之心')
        .tooltip('§7它曾是最后一位龙裔的心脏——在燃尽天穹与信仰之后，连龙都低头臣服。')
        .tooltip('§7如今，那段血脉只剩这残存的心核，依旧低鸣着古龙之怒。')
        .tooltip('§7佩戴者将获得龙之血赐福，斩断万物如风。')
        .maxStackSize(1)
        .tag('curios:animacore')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 正面属性
                .addAttribute('minecraft:generic.attack_damage', "dragonborn_attack_damage", 0.75, 'add_multiplied_total')
                .addAttribute('apothic_attributes:armor_pierce', "dragonborn_armor_pierce", 20, 'add_value')
                .addAttribute('minecraft:generic.max_health', "dragonborn_max_health", 0.25, 'add_multiplied_base')
                .addAttribute('irons_spellbooks:spell_resist', "dragonborn_spell_resist", 0.3, 'add_multiplied_base')
                .addAttribute('apothic_attributes:mining_speed', "dragonborn_mining_speed", 0.3, 'add_multiplied_base')
                .addAttribute('minecraft:generic.knockback_resistance', "dragonborn_knockback_resistance", 0.5, 'add_value')

                // 负面属性
                .addAttribute('minecraft:generic.attack_speed', "dragonborn_attack_speed", -0.5, 'add_multiplied_total')
                .addAttribute('apothic_attributes:experience_gained', "dragonborn_experience_gained", -0.5, 'add_multiplied_base')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§6佩戴龙裔之心时：',
                        '§9 +75% 攻击伤害[x1.75]',
                        '§9 +20 盔甲穿透[+20]',
                        '§9 +25% 最大生命值[+0.25x]',
                        '§9 +30% 法术抗性[+0.30x]',
                        '§9 +30% 挖掘速度[+0.30x]',
                        '§9 +50% 击退抗性[+0.50x]',
                        '§c -50% 最终攻击速度[x0.50]',
                        '§c -50% 经验获取[-0.50x]',
                        '§e 完全免疫虚弱效果',
                        '§6 龙血沸腾§A：每秒恢复1.5%最大生命值',
                        '§6 龙裔不死术§a：生命值低于30%时获得生命再生',
                        "§r ",
                    ];
                })

                .curioTick((ctx, stack) => {
                    let player = ctx.entity();
                    if (player.isPlayer() && player && !player.level.isClientSide()) {
                        // 龙血沸腾 - 免疫虚弱效果
                        if (player.hasEffect('minecraft:weakness')) {
                            player.removeEffect('minecraft:weakness');
                        }

                        // 龙裔不死术 - 每秒恢复1.5%最大生命值
                        if (player.tickCount % 20 === 0) { // 每秒触发
                            let currentHealth = player.getHealth();
                            let maxHealth = player.getMaxHealth();

                            // 计算恢复量（1.5%最大生命值）
                            let healAmount = maxHealth * 0.015;

                            if (currentHealth < maxHealth && healAmount > 0) {
                                player.heal(healAmount);
                            }

                            // 生命值低于30%时获得生命再生效果
                            let healthPercentage = currentHealth / maxHealth;
                            if (healthPercentage < 0.3) {
                                if (!player.hasEffect('minecraft:regeneration')) {
                                    // 给予生命再生效果，持续25秒（确保持续触发）
                                    player.potionEffects.add('minecraft:regeneration', 500, 1, false, false);
                                }
                            } else {
                                // 生命值恢复到30%以上时移除生命再生效果
                                if (player.hasEffect('minecraft:regeneration')) {
                                    player.removeEffect('minecraft:regeneration');
                                }
                            }
                        }
                    }
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});