CuriosJSEvents.registerRenderer(event => {
	// remove curios render
	// event.remove('test')

	// register curios render
	event.register(
		'minecraft:lantern',
		context => {
			let { stack, slotContext, matrixStack, renderLayerParent, renderTypeBuffer, light, limbSwing, limbSwingAmount, partialTicks, ageInTicks, netHeadYaw, headPitch } = context
			let entity = slotContext.entity()
			matrixStack.pushPose()
			CuriosRenderer.followBodyRotations(entity, renderLayerParent.model)
			CuriosRenderer.translateIfSneaking(matrixStack, entity)
			// CuriosRenderer.rotateIfSneaking(matrixStack, entity)
			if (entity.isCrouching()) {
				matrixStack.translate(0.05, -0.15, 0.29)
			}
			matrixStack.scale(0.5, 0.5, 0.5)
			matrixStack.mulPose(new Quaternionf().rotateZ(JavaMath.toRadians(180)))
			matrixStack.translate(-0.02, -2.0, -0.28)
			Client.blockRenderer.renderSingleBlock(Block.getBlock("minecraft:lantern").defaultBlockState(), matrixStack, renderTypeBuffer, light, OverlayTexture.NO_OVERLAY)
			matrixStack.popPose()
		}
	)
    event.register(
		'minecraft:soul_lantern',
		context => {
			let { stack, slotContext, matrixStack, renderLayerParent, renderTypeBuffer, light, limbSwing, limbSwingAmount, partialTicks, ageInTicks, netHeadYaw, headPitch } = context
			let entity = slotContext.entity()
			matrixStack.pushPose()
			CuriosRenderer.followBodyRotations(entity, renderLayerParent.model)
			CuriosRenderer.translateIfSneaking(matrixStack, entity)
			// CuriosRenderer.rotateIfSneaking(matrixStack, entity)
			if (entity.isCrouching()) {
				matrixStack.translate(0.05, -0.15, 0.29)
			}
			matrixStack.scale(0.5, 0.5, 0.5)
			matrixStack.mulPose(new Quaternionf().rotateZ(JavaMath.toRadians(180)))
			matrixStack.translate(-0.02, -2.0, -0.28)
			Client.blockRenderer.renderSingleBlock(Block.getBlock("minecraft:soul_lantern").defaultBlockState(), matrixStack, renderTypeBuffer, light, OverlayTexture.NO_OVERLAY)
			matrixStack.popPose()
		}
	)
})
