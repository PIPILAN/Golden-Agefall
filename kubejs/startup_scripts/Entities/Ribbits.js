
EntityJSEvents.attributes(event => {

    // 呱呱生命值设置
    event.modify('ribbits:ribbit', attribute => {
        attribute.add("minecraft:generic.max_health", 150)
    })

})