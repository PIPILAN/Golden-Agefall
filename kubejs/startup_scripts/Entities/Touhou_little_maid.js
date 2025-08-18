
EntityJSEvents.attributes(event => {

    // 女仆基础生命上调
    event.modify('touhou_little_maid:maid', attribute => {
        attribute.add("minecraft:generic.max_health", 200)
    })

})