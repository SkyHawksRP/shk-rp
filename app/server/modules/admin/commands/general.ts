import { COLOR } from '../../../consts/colors';
import { findPlayer } from '../../../utils/misc';
import { USER_DEV, USER_ADMIN, USER_MOD } from '../../../consts/player';

const kickCommand = (player: PlayerMp, fullText: string, target: string, ...args: Array<string>) => {
    if(!fullText || target) return player.outputChatBox(`${COLOR.INFO}* /kick [playerid] [motivo]`);

    const newTarget = findPlayer(target);
    if(player.adminLevel < USER_MOD) player.outputChatBox(`!${COLOR.ERROR}* Você não tem permissão.`);
    else if(!newTarget) player.outputChatBox(`!${COLOR.ERROR}* Jogador não encontrado.`);
    else if(Array.isArray(newTarget)) player.outputChatBox(`!${COLOR.ERROR}* Múltiplos jogadores encontrados.`);
    else {
        let reason = '';
        if(newTarget != player) {
        mp.players.sendChatMessage(`!${COLOR.ADMIN_ACTION}* ${player.name} kickou ${newTarget.name} do servidor.`, 1, false); // global
            if(args.length > 0) {
                reason = args.join(' ');
                mp.players.sendChatMessage(`!${COLOR.ADMIN_ACTION}* Motivo: ${reason}.`, 1, false); // global
            }
        }
        newTarget.kick(reason);
    }
}
mp.events.addCommand('kick', kickCommand);

const banCommand = (player: PlayerMp, fullText: string, target: string, ...args: Array<string>) => {
    if(!fullText || target) return player.outputChatBox(`${COLOR.INFO}* /ban [playerid] [motivo]`);

    const newTarget = findPlayer(target);
    if(player.adminLevel < USER_MOD) player.outputChatBox(`!${COLOR.ERROR}* Você não tem permissão.`);
    else if(!newTarget) player.outputChatBox(`!${COLOR.ERROR}* Jogador não encontrado.`);
    else if(Array.isArray(newTarget)) player.outputChatBox(`!${COLOR.ERROR}* Múltiplos jogadores encontrados.`);
    else {
        let reason = '';
        if(newTarget != player) {
        mp.players.sendChatMessage(`!${COLOR.ADMIN_ACTION}* ${player.name} baniu ${newTarget.name} do servidor.`, 1, false); // global
            if(args.length > 0) {
                reason = args.join(' ');
                mp.players.sendChatMessage(`!${COLOR.ADMIN_ACTION}* Motivo: ${reason}.`, 1, false); // global
            }
        }
        newTarget.ban(reason);
    }
}
mp.events.addCommand('ban', banCommand);

const createCarCommmand = (player: PlayerMp, fullText: string, vehicle: string) => {
    if(!fullText) return player.outputChatBox(`${COLOR.INFO}* /veh [vehicleid or vehiclename] `);

    if(player.adminLevel < USER_ADMIN) player.outputChatBox(`!${COLOR.ERROR}* Você não tem permissão.`);
    else {
        const veh = mp.vehicles.new(mp.joaat(vehicle), player.position, {
            numberPlate: "ADMIN",
            color: [[2, 36, 255], [255, 255, 255]], // tribute for David Silva (SkyHawks Forever)
            dimension: player.dimension
        });
        player.putIntoVehicle(veh, -1);
    }
}
mp.events.addCommand('veh', createCarCommmand);