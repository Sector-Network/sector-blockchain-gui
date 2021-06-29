"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// export const initial_wallet = createWallet(0, "Sector Wallet", "STANDARD_WALLET", "");
function createWallet(id, name, type, data) {
    return {
        id: id,
        name: name,
        type: type,
        data: data,
        balance_total: 0,
        balance_pending: 0,
        balance_spendable: 0,
        balance_frozen: 0,
        balance_change: 0,
        transactions: [],
        address: '',
        colour: '',
        mydid: '',
        didcoin: '',
        backup_dids: [],
        dids_num_req: 0,
        did_attest: '',
        sending_transaction: false,
        send_transaction_result: '',
    };
}
exports.default = createWallet;
//# sourceMappingURL=createWallet.js.map