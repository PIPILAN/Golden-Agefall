EntityEvents.death('minecraft:warden', event => {

    // 生成随机数，15%概率触发
    let randomValue = Math.random()

    // 检查是否满足10%的概率条件
    if (randomValue < 0.10) {

        // 获取死亡Warden的位置坐标
        let pos = event.entity.blockPosition()

        // 获取世界维度ID
        let dimension = event.entity.level.dimension

        // 获取服务器实例
        let server = event.entity.level.server

        // 立即给附近玩家发送警告消息
        event.entity.level.getEntitiesWithin(event.entity.getBoundingBox().inflate(32))
            .filter(entity => entity.isPlayer())
            .forEach(player => {
                player.tell('§c§l黑暗中传来了不祥的气息,某种强大的存在正在苏醒...')
            })

        // 使用服务器权限执行命令，并指定维度
        server.runCommandSilent(
            `execute in ${dimension} run playsound minecraft:entity.warden.ambient hostile @a[x=${pos.x},y=${pos.y},z=${pos.z},distance=..32] ${pos.x} ${pos.y} ${pos.z} 1.5 0.3`
        )

        // 设置持续的预警粒子特效 - 每0.5秒播放一次
        let particleInterval = setInterval(() => {
            server.runCommandSilent(
                `execute in ${dimension} run particle minecraft:sculk_charge_pop ${pos.x} ${pos.y + 1} ${pos.z} 2 2 2 0.1 250 force`
            )
            // 添加额外的幽魂粒子增强效果
            server.runCommandSilent(
                `execute in ${dimension} run particle minecraft:soul ${pos.x} ${pos.y + 1} ${pos.z} 1 1 1 0.05 100 force`
            )
        }, 500) // 每500毫秒（0.5秒）执行一次

        // 5秒延迟后生成Boss
        setTimeout(() => {

            // 清除持续的粒子特效
            clearInterval(particleInterval)

            // 使用服务器权限在指定维度召唤Warden Boss
            server.runCommandSilent(
                `execute in ${dimension} run summon spice:warden_boss ${pos.x} ${pos.y} ${pos.z}`
            )

            // 使用服务器权限给附近玩家发送Boss出现消息
            server.runCommandSilent(
                `execute in ${dimension} run tellraw @a[x=${pos.x},y=${pos.y},z=${pos.z},distance=..32] {"text":"深渊坚守者已降临！","color":"dark_red","bold":true,"underlined":true}`
            )

            // 使用服务器权限播放Boss出现音效
            server.runCommandSilent(
                `execute in ${dimension} run playsound minecraft:entity.warden.roar hostile @a[x=${pos.x},y=${pos.y},z=${pos.z},distance=..32] ${pos.x} ${pos.y} ${pos.z} 2 0.5`
            )

            // 添加Boss出现粒子特效
            server.runCommandSilent(
                `execute in ${dimension} run particle minecraft:sculk_soul ${pos.x} ${pos.y + 1} ${pos.z} 3 3 3 0.1 500 force`
            )

            // 可选：添加更多震撼特效
            server.runCommandSilent(
                `execute in ${dimension} run particle minecraft:explosion_emitter ${pos.x} ${pos.y} ${pos.z} 0 0 0 0 1 force`
            )

        }, 5000) // 5000毫秒 = 5秒延迟

    }

})