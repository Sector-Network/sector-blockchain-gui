import React, { useMemo } from 'react';
import { Trans } from '@lingui/macro';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../modules/rootReducer';
import FarmCard from './FarmCard';
import { octet_to_sector } from '../../../util/sector';
import useCurrencyCode from '../../../hooks/useCurrencyCode';

export default function FarmCardBlockRewards() {
  const currencyCode = useCurrencyCode();
  const loading = useSelector(
    (state: RootState) => !state.wallet_state.farmed_amount,
  );

  const farmerRewardAmount = useSelector(
    (state: RootState) =>
      state.wallet_state.farmed_amount?.farmer_reward_amount,
  );

  const poolRewardAmount = useSelector(
    (state: RootState) => state.wallet_state.farmed_amount?.pool_reward_amount,
  );

  const blockRewards = useMemo(() => {
    if (farmerRewardAmount !== undefined && poolRewardAmount !== undefined) {
      const val =
        BigInt(farmerRewardAmount.toString()) +
        BigInt(poolRewardAmount.toString());
      return octet_to_sector(val);
    }
  }, [farmerRewardAmount, poolRewardAmount]);

  return (
    <FarmCard
      title={<Trans>{currencyCode} Block Rewards</Trans>}
      description={<Trans>Without fees</Trans>}
      value={blockRewards}
      loading={loading}
    />
  );
}
