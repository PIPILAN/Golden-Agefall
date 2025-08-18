StartupEvents.registry('item', event => {
    event.create('goldenagefall:belt_of_the_culinary_avatar_feast_aspect')
        .displayName('§6森罗厨神腰带·正面')
        .tooltip('§7献给盛宴之神的华美饰带，鼓舞身躯于饱餐之后全力绽放。')
        .tooltip('§7可在锻造台中使用铁粒转换成反面。')
        .maxStackSize(1)
        .tag('curios:belt')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§6佩戴森罗厨神腰带·正面时：',
                        '§a盛宴时刻：§6食用食物后30秒内获得',
                        '§9  +20 最大生命值[+20]',
                        '§9  +15 攻击力[+15]',
                        '§9  +15% 攻击速度[+0.15x]',
                        '§9  生命再生Ⅰ效果',
                        '§7 冷却时间：1分钟',
                        "§r ",
                    ];
                })

                .onEquip((ctx, prevStack, stack) => {
                    let player = ctx.entity();
                    if (player && player.isPlayer() && !player.level.isClientSide()) {
                        // 初始化计时数据
                        player.persistentData.putInt("culinary_timer", 0);
                        player.persistentData.putBoolean("culinary_feast_active", false);
                        player.persistentData.putBoolean("culinary_ready", true);
                    }
                })

                .onUnequip((ctx, newStack, stack) => {
                    let player = ctx.entity();
                    if (player && player.isPlayer() && !player.level.isClientSide()) {
                        // 清理计时数据
                        player.persistentData.remove("culinary_timer");
                        player.persistentData.remove("culinary_feast_active");
                        player.persistentData.remove("culinary_ready");

                        // 清除所有添加的属性修饰符
                        let attackAttribute = player.getAttribute('minecraft:generic.attack_damage');
                        if (attackAttribute.hasModifier('culinary_feast_attack')) {
                            player.removeAttribute('minecraft:generic.attack_damage', 'culinary_feast_attack');
                        }
                        let healthAttribute = player.getAttribute('minecraft:generic.max_health');
                        if (healthAttribute.hasModifier('culinary_feast_health')) {
                            player.removeAttribute('minecraft:generic.max_health', 'culinary_feast_health');
                        }
                        let speedAttribute = player.getAttribute('minecraft:generic.attack_speed');
                        if (speedAttribute.hasModifier('culinary_feast_speed')) {
                            player.removeAttribute('minecraft:generic.attack_speed', 'culinary_feast_speed');
                        }
                        if (player.hasEffect('minecraft:regeneration')) {
                            player.removeEffect('minecraft:regeneration');
                        }
                    }
                })

                .curioTick((ctx, stack) => {
                    let player = ctx.entity();
                    if (player.isPlayer() && player && !player.level.isClientSide()) {
                        // 检测玩家是否刚吃了食物
                        if (player.getFoodData().getFoodLevel() != player.persistentData.getInt("last_food_level")) {
                            let newFoodLevel = player.getFoodData().getFoodLevel();
                            let lastFoodLevel = player.persistentData.getInt("last_food_level");

                            // 如果食物等级增加了，说明吃了食物
                            if (newFoodLevel > lastFoodLevel && player.persistentData.getBoolean("culinary_ready")) {
                                // 开始计时并激活效果
                                player.persistentData.putInt("culinary_timer", 0);
                                player.persistentData.putBoolean("culinary_feast_active", true);
                                player.persistentData.putBoolean("culinary_ready", false);

                                // 添加属性修饰符
                                player.modifyAttribute('minecraft:generic.attack_damage', 'culinary_feast_attack', 15, 'add_value');
                                player.modifyAttribute('minecraft:generic.max_health', 'culinary_feast_health', 20, 'add_value');
                                player.modifyAttribute('minecraft:generic.attack_speed', 'culinary_feast_speed', 0.15, 'add_multiplied_base');

                                // 添加30秒生命再生效果
                                player.potionEffects.add('minecraft:regeneration', 600, 0, false, false);

                                // 添加激活粒子效果
                                player.level.sendParticles('minecraft:happy_villager',
                                    player.x, player.y + player.getBbHeight() / 2, player.z,
                                    15, 0.5, 0.5, 0.5, 0.1);
                                // 播放音效
                                player.level.runCommandSilent(`playsound minecraft:block.bell.use player ${player.username} ${player.x} ${player.y} ${player.z} 1.0 1.2`);

                                // 发送提示消息
                                player.tell('§6[盛宴时刻] §a已激活！获得30秒强化效果！');
                            }

                            // 更新食物等级记录
                            player.persistentData.putInt("last_food_level", newFoodLevel);
                        }

                        // 如果效果激活中，进行计时
                        if (player.persistentData.getBoolean("culinary_feast_active")) {
                            let timer = player.persistentData.getInt("culinary_timer");
                            timer++;
                            player.persistentData.putInt("culinary_timer", timer);

                            // 30秒后移除属性修饰符
                            if (timer == 600) { // 30秒 = 600 ticks
                                let attackAttribute = player.getAttribute('minecraft:generic.attack_damage');
                                if (attackAttribute.hasModifier('culinary_feast_attack')) {
                                    player.removeAttribute('minecraft:generic.attack_damage', 'culinary_feast_attack');
                                }
                                let healthAttribute = player.getAttribute('minecraft:generic.max_health');
                                if (healthAttribute.hasModifier('culinary_feast_health')) {
                                    player.removeAttribute('minecraft:generic.max_health', 'culinary_feast_health');
                                }
                                let speedAttribute = player.getAttribute('minecraft:generic.attack_speed');
                                if (speedAttribute.hasModifier('culinary_feast_speed')) {
                                    player.removeAttribute('minecraft:generic.attack_speed', 'culinary_feast_speed');
                                }

                                // 播放效果结束音效
                                player.level.runCommandSilent(`playsound minecraft:block.beacon.deactivate player ${player.username} ${player.x} ${player.y} ${player.z} 0.8 1.0`);

                                // 发送效果结束提示
                                player.tell('§6[盛宴时刻] §c强化效果已结束');
                            }

                            // 1分钟后重置状态，可再次获得效果
                            if (timer >= 1200) { // 1分钟 = 1200 ticks
                                player.persistentData.putBoolean("culinary_feast_active", false);
                                player.persistentData.putBoolean("culinary_ready", true);
                                player.persistentData.putInt("culinary_timer", 0);

                                // 播放准备就绪音效
                                player.level.runCommandSilent(`playsound minecraft:entity.experience_orb.pickup player ${player.username} ${player.x} ${player.y} ${player.z} 1.0 1.5`);

                                // 发送准备就绪提示
                                player.tell('§6[盛宴时刻] §a已准备就绪，可再次激活！');
                            }
                        }
                    }
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});


StartupEvents.registry('item', event => {
    event.create('goldenagefall:belt_of_the_culinary_avatar_famine_aspect')
        .displayName('§6森罗厨神腰带·反面')
        .tooltip('§7沉默而克制的馈赠，使佩戴者不再为口腹所困。')
        .tooltip('§7可在锻造台中使用铁粒转换成正面。')
        .maxStackSize(1)
        .tag('curios:belt')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                // 属性
                .addAttribute('minecraft:generic.max_health', "famine_max_health", 10, 'add_value')

                .modifyAttributesTooltip((tooltips, stack) => {
                    return [
                        "§r ",
                        '§6佩戴森罗厨神腰带·反面时：',
                        '§9 +10 最大生命值[+10]',
                        '§a 获得永久饱和效果',
                        "§r ",
                    ];
                })

                .onEquip((ctx, prevStack, stack) => {
                    let player = ctx.entity();
                    if (player && player.isPlayer() && !player.level.isClientSide()) {
                        // 佩戴时立即给予永久饱和效果
                        player.potionEffects.add('minecraft:saturation', -1, 0, false, false);
                    }
                })

                .onUnequip((ctx, newStack, stack) => {
                    let player = ctx.entity();
                    if (player && player.isPlayer() && !player.level.isClientSide()) {
                        // 卸下时移除饱和效果
                        if (player.hasEffect('minecraft:saturation')) {
                            player.removeEffect('minecraft:saturation');
                        }
                    }
                })

                .curioTick((ctx, stack) => {
                    let player = ctx.entity();
                    if (player.isPlayer() && player && !player.level.isClientSide()) {
                        // 确保饱和效果始终存在
                        if (!player.hasEffect('minecraft:saturation')) {
                            player.potionEffects.add('minecraft:saturation', -1, 0, false, false);
                        }
                    }
                })

                .canEquip((ctx, stack) => true)
                .canUnequip((ctx, stack) => true)
        );
});