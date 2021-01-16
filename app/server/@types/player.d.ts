interface PlayerMp {
    level: number;
    experience: number;
    money: number;
    bank: number;
    adminLevel: number;
    jobId: number | null;
    jobRankId: number | null;
    jailTime: number | null;
    inHospital: boolean;

    adminVeh: VehicleMp;
    hasCar: boolean;
}

interface PlayerMpPool {
    sendChatMessage(message: string, channel: number, important: boolean): void;
}