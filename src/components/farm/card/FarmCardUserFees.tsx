import React, { useMemo } from 'react';
import { Trans } from '@lingui/macro';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../modules/rootReducer';
import FarmCard from './FarmCard';
import { octet_to_sector } from '../../../util/sector';
import useCurrencyCode from '../../../hooks/useCurrencyCode';

export default function FarmCardUserFees() {
  const currencyCode = useCurrencyCode();
  const loading = useSelector(
    (state: RootState) => !state.wallet_state.farmed_amount,
  );

  const feeAmount = useSelector(
    (state: RootState) => state.wallet_state.farmed_amount?.fee_amount,
  );

  const userTransactionFees = useMemo(() => {
    if (feeAmount !== undefined) {
      const val = BigInt(feeAmount.toString());
      return octet_to_sector(val);
    }
  }, [feeAmount]);

  return (
    <FarmCard
      title={<Trans>{currencyCode} User Transaction Fees</Trans>}
      value={userTransactionFees}
      loading={loading}
    />
  );
}
