console.log("addon,github loaded")

import { world, system } from "@minecraft/server";

world.afterEvents.itemUse.subscribe(ev => {
    if (ev.itemStack.typeId === 'minecraft:fire_charge') {
        const x = ev.source.getViewDirection().x;
        const z = ev.source.getViewDirection().z;
        ev.source.applyKnockback(x, z, 5, 0.6)
        ev.source.playSound('mob.enderdragon.flap')
        ev.source.runCommandAsync('clear @s[m=!c,tag=!noclearfireball] fire_charge 0 1')
        ev.source.sendMessage(`§c>>§r §dファイアボールを一つ使用しました！`)
        ev.source.addTag('use_fireball')
        system.runTimeout(() => {
            ev.source.removeTag('use_fireball')
        }, 1)
    }



})
world.afterEvents.itemUse.subscribe(ev => {
    if (ev.itemStack.typeId === `minecraft:feather`) {
        const x = ev.source.getViewDirection().x;
        const z = ev.source.getViewDirection().z;
        ev.source.applyKnockback(x, z, 7, 1.15)
        ev.source.sendMessage(`§c>>§r §e羽を使用しました`)
        ev.source.playSound(`mob.enderdragon.flap`)

    }
})

