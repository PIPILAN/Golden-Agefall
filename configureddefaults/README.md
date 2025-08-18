# 配置默认值

此目录作为 `.minecraft` 的同步镜像。放置在本目录下的所有子目录和/或文件，都会在游戏启动时被复制到主 `.minecraft` 目录下（前提是目标目录/文件尚不存在）。
 无法覆盖已存在的文件，只有当目标位置为空时才会进行复制。

请注意，由于 Minecraft 特殊处理 `options.txt` 文件的方式，只需包含你想预设的选项即可。文件中缺失的选项将在游戏读取该文件时自动使用其内部默认值补全。

示例：

- `.minecraft/configureddefaults/options.txt` 会在不存在的情况下复制到 `.minecraft/options.txt`
- `.minecraft/configureddefaults/config/jei/jei.toml` 会在不存在的情况下复制到 `.minecraft/config/jei/jei.toml`

请注意，本 `README.md` 文件不会被复制到 `.minecraft` 目录。
