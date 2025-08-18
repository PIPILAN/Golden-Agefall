```toml
[time]
	#白天时间流逝的速度。
	#白天定义为 dayStart（见下文）和 nightStart（见下文）之间的时间。
	#原版速度：1.0
	#范围：0.0 ~ 24000.0
	daySpeed = 1.0
	#夜晚时间流逝的速度。
	#夜晚定义为 nightStart（见下文）和 dayStart（见下文）之间的时间。
	#原版速度：1.0
	#范围：0.0 ~ 24000.0
	nightSpeed = 1.0
	#白天开始的时间。可在太阳升起与白天开始的时间段内设置。
	#默认：23500
	#范围：22300.0 ~ 24000.0
	dayStart = 23500.0
	#夜晚开始的时间。可在日落开始与夜晚开始的时间段内设置。
	#默认：12500
	#范围：12000.0 ~ 13000.0
	nightStart = 12500.0

	[time.effects]
		#启用后，天气会随时间速度同步。
		#例如，当时间流逝更快时，降雨会更快结束。晴天不受影响。
		#当设为 SLEEPING 时，仅在至少一名玩家在该维度睡觉时生效。
		#注意：若游戏规则 doWeatherCycle 为 false，此设置无效。
		#可选值：NEVER, ALWAYS, SLEEPING
		weatherEffect = "SLEEPING"
		#启用后，随机刻会随时间速度同步，强制作物、树木与草生长速度 = baseRandomTickSpeed × 当前时间速度。
		#当设为 SLEEPING 时，若无玩家睡觉，随机刻速度为 baseRandomTickSpeed。
		#更多信息可见：https://minecraft.fandom.com/wiki/Tick#Random_tick
		#警告：此设置会覆盖 randomTickSpeed 游戏规则。要调整基础随机刻速度，请修改 baseRandomTickSpeed 而不是直接改游戏规则。
		#可选值：NEVER, ALWAYS, SLEEPING
		randomTickEffect = "NEVER"
		#随机刻时间效果所使用的基础速度。
		#范围：> 0
		baseRandomTickSpeed = 3
		#启用后，药水效果会随时间速度同步。
		#当时间速度 ≤ 1.0 时无效。
		#注意：在多人服务器上可能会影响性能。
		#当设为 ALWAYS 时，对该维度所有玩家生效，无论昼夜。
		#当设为 SLEEPING 时，仅对正在睡觉的玩家生效。
		#可选值：NEVER, ALWAYS, SLEEPING
		potionEffect = "NEVER"
		#启用后，玩家的饥饿机制会随时间速度同步。
		#这会导致饱食时更快恢复，饥饿时更快掉血。
		#当时间速度 ≤ 1.0 时无效。
		#当设为 ALWAYS 时，对该维度所有玩家生效。高难度下不推荐使用。
		#当设为 SLEEPING 时，仅对正在睡觉的玩家生效。
		#可选值：NEVER, ALWAYS, SLEEPING
		hungerEffect = "NEVER"
		#启用后，方块实体（如熔炉、漏斗、刷怪笼）会随时间速度同步。
		#警告：此效果对性能有显著影响。
		#当时间速度 ≤ 1.0 时无效。
		#当设为 SLEEPING 时，仅在至少一名玩家睡觉时生效。
		#可选值：NEVER, ALWAYS, SLEEPING
		blockEntityEffect = "NEVER"
[sleep]
	#启用或禁用此模组的睡眠功能。启用后将修改原版睡眠机制，
	#可能与其他睡眠类模组冲突。若禁用，本节的所有设置均不生效。
	enableSleepFeature = true
	### 该设置定义了单人游戏中的睡眠时间流速 ###
	#当所有玩家睡觉时时间流逝的最大速度。
	#值为 110 时大致等于原版的睡眠所需时间。
	#范围：0.0 ~ 24000.0
	sleepSpeedMax = 110.0
	#当服务器人数已满时，仅有 1 名玩家睡觉时的最小时间流逝速度。
	#范围：0.0 ~ 24000.0
	sleepSpeedMin = 1.0
	#当所有玩家睡觉时的固定时间流逝速度。
	#设为 -1 可禁用该功能（此时使用 sleepSpeedMax）。
	#范围：-1.0 ~ 24000.0
	sleepSpeedAll = -1.0
	#该参数定义了将睡觉玩家百分比映射为时间流速的插值曲线。
	#使用的是「归一化可调 sigmoid 函数」。
	#值为 0.5 时为线性关系。
	#更小的值会使曲线贴近 X 轴，更大的值则贴近 Y 轴。
	#参考曲线图：https://www.desmos.com/calculator/w8gntxzfow
	#函数来源（Dino Dini）：https://dinodini.wordpress.com/2010/04/05/normalized-tunable-sigmoid-functions/
	#灵感来源（SmoothSleep）：https://www.spigotmc.org/resources/smoothsleep.32043/
	#范围：0.0 ~ 1.0
	sleepSpeedCurve = 0.3
	#设为 true 时，玩家早晨醒来时天气会转晴（与原版一致）。
	#设为 false 时，天气将自然流逝。若启用 accelerateWeather，可增强真实感。
	#注意：若游戏规则 doWeatherCycle 为 false，此设置无效。
	clearWeatherOnWake = true
	#设为 true 时，玩家可以在 Better Days 控制的维度中随时睡觉。
	#注意：其他模组可能会覆盖此能力。
	allowDaySleep = false
	#设为 true 时，会在睡眠界面显示时钟。
	displayBedClock = true

	#以下部分定义提示消息的设置。
	#所有消息均支持 Minecraft 格式化代码 (https://minecraft.fandom.com/wiki/Formatting_codes)。
	#可用变量通过 ${variableName} 插入。
	#type 控制消息显示位置：
	#	SYSTEM: 在聊天中显示（如“重生点已设置”）。
	#	GAME_INFO: 在快捷栏上方显示游戏信息（如“此时无法休息，床太远了”）。
	#target 控制消息发送对象：
	#	ALL: 发送给服务器所有玩家。
	#	DIMENSION: 发送给当前维度的所有玩家。
	#	SLEEPING: 仅发送给当前维度正在睡觉的玩家。
	[sleep.messages]

		#此消息会在一次睡眠循环完成后发送。
		[sleep.messages.morning]
			#可用变量：
			#sleepingPlayers -> 当前维度正在睡觉的玩家数
			#totalPlayers -> 当前维度的玩家总数（旁观者不计）
			#sleepingPercentage -> 当前维度睡觉玩家的百分比（不含 % 符号）
			message = "§e§o美好的一天到来了！"
			#设置消息显示位置。
			#可选值：SYSTEM, GAME_INFO
			type = "GAME_INFO"
			#设置消息发送对象。
			#值为 SLEEPING 时会发送给所有刚醒来的玩家。
			#可选值：ALL, DIMENSION, SLEEPING
			target = "DIMENSION"

		#此消息会在玩家进入床时发送。
		[sleep.messages.enterBed]
			#可用变量：
			#player -> 开始睡觉的玩家
			#sleepingPlayers -> 当前维度正在睡觉的玩家数
			#totalPlayers -> 当前维度的玩家总数（旁观者不计）
			#sleepingPercentage -> 当前维度睡觉玩家的百分比（不含 % 符号）
			message = "${player} 正在睡觉。[${sleepingPlayers}/${totalPlayers}]"
			#设置消息显示位置。
			#可选值：SYSTEM, GAME_INFO
			type = "GAME_INFO"
			#设置消息发送对象。
			#可选值：ALL, DIMENSION, SLEEPING
			target = "DIMENSION"

		#此消息会在玩家离开床（未被自然唤醒）时发送。
		[sleep.messages.leaveBed]
			#可用变量：
			#player -> 离开床的玩家
			#sleepingPlayers -> 当前维度正在睡觉的玩家数
			#totalPlayers -> 当前维度的玩家总数（旁观者不计）
			#sleepingPercentage -> 当前维度睡觉玩家的百分比（不含 % 符号）
			message = "${player} 离开了床。[${sleepingPlayers}/${totalPlayers}]"
			#设置消息显示位置。
			#可选值：SYSTEM, GAME_INFO
			type = "GAME_INFO"
			#设置消息发送对象。
			#可选值：ALL, DIMENSION, SLEEPING
			target = "DIMENSION"


```

