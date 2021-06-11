import { GenderFemale, GenderMale, GenderMaleFemale } from 'mdi-material-ui';
import React from 'react';

type Props = {
  femaleRate?: number | null;
  hasGenderDiff?: boolean | null;
};

export const GenderIcon: React.FC<Props> = (props) => {
  const { femaleRate, hasGenderDiff } = props;

  if (femaleRate === 8) {
    return <GenderFemale />;
  } else if (femaleRate === -1) {
    return null;
  } else if (femaleRate === 0 || hasGenderDiff) {
    return <GenderMale />;
  } else {
    return <GenderMaleFemale />;
  }
};
