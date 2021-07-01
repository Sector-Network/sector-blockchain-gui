import React, { ReactNode } from 'react';
import { Trans, Plural } from '@lingui/macro';
import {
  Box,
  InputAdornment,
  FormControl,
  FormHelperText,
} from '@material-ui/core';
import { useWatch, useFormContext } from 'react-hook-form';
import TextField, { TextFieldProps } from '../TextField';
import { sector_to_octet } from '../../../../util/sector';
import useCurrencyCode from '../../../../hooks/useCurrencyCode';
import FormatLargeNumber from '../FormatLargeNumber';
import Flex from '../Flex';

export type AmountProps = TextFieldProps & {
  children?: (props: { octet: number; value: string | undefined }) => ReactNode;
  name?: string;
};

export default function Amount(props: AmountProps) {
  const { children, name, variant, fullWidth, ...rest } = props;
  const { control } = useFormContext();
  const currencyCode = useCurrencyCode();

  const value = useWatch<string>({
    control,
    name,
  });

  const octet = sector_to_octet(value);

  return (
    <FormControl variant={variant} fullWidth={fullWidth}>
      <TextField
        name={name}
        variant={variant}
        type="text"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">{currencyCode}</InputAdornment>
          ),
        }}
        {...rest}
      />
      {!!octet && (
        <FormHelperText>
          <Flex alignItems="center" gap={2}>
            <Flex flexGrow={1} gap={1}>
              <FormatLargeNumber value={octet} />
              <Box>
                <Plural value={octet} one="octet" other="octets" />
              </Box>
            </Flex>
            {children &&
              children({
                octet,
                value,
              })}
          </Flex>
        </FormHelperText>
      )}
    </FormControl>
  );
}

Amount.defaultProps = {
  label: <Trans>Amount</Trans>,
  name: 'amount',
  children: undefined,
};
