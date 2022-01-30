import { refreshAccount, transactionServices } from '@elrondnetwork/dapp-core';
import { contractAdresses } from 'config';
import { encodeToHex } from 'utils/hex';

export const createCampaign = async (metadata_uri: string, token_identifier: string) => {
    const { sendTransactions } = transactionServices;

    const payload = 'createCampaign' +
        '@' + encodeToHex(metadata_uri) +
        '@' + encodeToHex(token_identifier);

    const transaction = {
        data: payload,
        receiver: contractAdresses.tips,
    };

    await refreshAccount();

    const { sessionId, error } = await sendTransactions({ transactions: [transaction] });

    if (error) {
        console.error(error);
    }

    return sessionId;
};
