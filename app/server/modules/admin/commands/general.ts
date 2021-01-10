import { COLOR } from '../../../consts/colors';
import { findPlayer } from '../../../utils/misc';

/*const kickCommand = (player: PlayerMp, fullText: string, target: string, ...args: Array<string>) => {
    if(!fullText || !target) return player.outputChatBox(`!${COLOR.INFO}* /Kick [playerid] [reason]`);

    const newTarget = findPlayer(target);
    if (player.adminLevel < 1) player.outputChatBox(`!${COLOR.ERROR}* Você não tem permissão.`);
    else if (!target) player.outputChatBox(`!${COLOR.ERROR}* Jogador não encontrado.`);
    else if (Array.isArray(target)) player.outputChatBox(`!${COLOR.ERROR}* Múltiplos jogadores encontrados.`);
    else {
        var reason = '';
        if (newTarget != player) {
        mp.players.broadcast(`!${COLOR.ADMIN_ACTION}* ${player.name} kickou ${newTarget.name} do servidor.`);
        if (args.length > 0) {
            reason = args.join(' ');
            mp.players.broadcast(`!${COLOR.ADMIN_ACTION}* Motivo: ${reason}.`);
        }
        }
        newTarget.kick(reason);
    }
}*/