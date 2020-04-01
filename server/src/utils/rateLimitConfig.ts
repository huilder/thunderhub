interface RateConfigProps {
    [key: string]: {
        max: number;
        window: string;
    };
}

export const RateConfig: RateConfigProps = {
    channelBalance: { max: 10, window: '1s' },
    channelFees: { max: 10, window: '1s' },
    channels: { max: 10, window: '1s' },
    channelReport: { max: 10, window: '1s' },
    closedChannels: { max: 10, window: '1s' },
    pendingChannels: { max: 10, window: '1s' },
    bitcoinFee: { max: 10, window: '1s' },
    bitcoinPrice: { max: 10, window: '1s' },
    getInOut: { max: 10, window: '1s' },
    chainBalance: { max: 10, window: '1s' },
    pendingChainBalance: { max: 10, window: '1s' },
    networkInfo: { max: 10, window: '1s' },
    nodeInfo: { max: 10, window: '1s' },
    forwards: { max: 10, window: '1s' },
    invoices: { max: 10, window: '1s' },
    payments: { max: 10, window: '1s' },
    forwardChannels: { max: 10, window: '1s' },
    forwardReport: { max: 10, window: '1s' },
    getRoute: { max: 10, window: '1s' },
    closeChannel: { max: 10, window: '1s' },
    openChannel: { max: 10, window: '1s' },
    createInvoice: { max: 10, window: '1s' },
    decode: { max: 10, window: '1s' },
    parsePayment: { max: 10, window: '1s' },
    pay: { max: 10, window: '1s' },
    getAddress: { max: 10, window: '1s' },
    sendToAddress: { max: 10, window: '1s' },
    getBackups: { max: 10, window: '1s' },
    verifyBackups: { max: 10, window: '1s' },
    recoverFunds: { max: 10, window: '1s' },
    updateFees: { max: 10, window: '1s' },
    chainTransactions: { max: 10, window: '1s' },
    getRoutes: { max: 10, window: '1s' },
    payViaRoute: { max: 10, window: '1s' },
    adminCheck: { max: 10, window: '1s' },
    getPeers: { max: 10, window: '1s' },
    addPeer: { max: 10, window: '1s' },
    removePeer: { max: 10, window: '1s' },
    signMessage: { max: 10, window: '1s' },
    verifyMessage: { max: 10, window: '1s' },
    getUtxos: { max: 10, window: '1s' },
};