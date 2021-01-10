const findPlayer = (target: string): PlayerMp | PlayerMp[] | undefined => {
    if(!isNaN(+target)) return mp.players.at(+target);

    let found = 0;
    const players: Array<PlayerMp> = [];
    target = target.replace('_', ' ').toLowerCase();

    mp.players.forEach((player: PlayerMp) => {
        const name = player.name.toLowerCase();
        if(name.indexOf(target.toString()) >= 0) {
            players.push(player);
            found++;
        }
    });
    
    if (found == 0) return undefined;
    else if (found > 1) return players;
    else return players[0];
}