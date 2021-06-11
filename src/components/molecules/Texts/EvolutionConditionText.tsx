import React from 'react';
import { Fragment } from 'react';
import { Typography } from '@material-ui/core';

import Josa from 'josa-js';

import { EvolutionTriggers, Genders, TimeOfDay } from '../../../enums';
import { EvolutionCondition } from '../../../interfaces';

type Props = {
  condition: EvolutionCondition;
};

export const EvolutionConditionText: React.FC<Props> = (props) => {
  const { condition } = props;

  return (
    <Fragment>
      {!!condition.timeOfDay && (
        <Typography>
          {`${
            condition.timeOfDay === TimeOfDay.day.label
              ? TimeOfDay.day.name
              : TimeOfDay.night.name
          }에`}
        </Typography>
      )}
      {!!condition.where?.region && (
        <Typography>
          {`${condition.where.region}의 ${condition.where.location}에서`}
        </Typography>
      )}
      {!!condition.heldItem && (
        <Typography>{`${Josa.r(condition.heldItem, '을')} 지니고`}</Typography>
      )}
      {!!condition.partyPokemon && (
        <Typography>
          {`${Josa.r(condition.partyPokemon, '을')} 파티에 데리고`}
        </Typography>
      )}
      {!!condition.partyType && (
        <Typography>{`${condition.partyType}속성 포켓몬을 데리고`}</Typography>
      )}
      {!!condition.move && (
        <Typography>{`${Josa.r(condition.move, '을')} 배우고`}</Typography>
      )}
      {!!condition.moveType && (
        <Typography>{`${condition.moveType}속성 기술을 배우고`}</Typography>
      )}
      {!!condition.minHappiness && (
        <Typography>{`친밀도 ${condition.minHappiness} 이상일 때`}</Typography>
      )}
      {!!condition.minBeauty && (
        <Typography>{`아름다움 ${condition.minBeauty} 이상일 때`}</Typography>
      )}
      {!!condition.minAffection && (
        <Typography>
          {`포케파르레 애정도 ${condition.minAffection} 이상일 때`}
        </Typography>
      )}
      {!!condition.useItem && (
        <Typography>{`${Josa.r(condition.useItem, '을')} 사용`}</Typography>
      )}
      {!!condition.gender && (
        <Typography>
          {condition.gender === Genders.female.label
            ? Genders.female.symbol
            : Genders.male.symbol}
        </Typography>
      )}
      {!!condition.minLevel && (
        <Typography>{`Lv.${condition?.minLevel} 이상으로`}</Typography>
      )}
      {!!condition.tradePokemon && (
        <Typography>{`${Josa.r(condition.tradePokemon, '와')}`}</Typography>
      )}
      {condition.trigger === EvolutionTriggers.trade.label && (
        <Typography>{EvolutionTriggers.trade.name}</Typography>
      )}
      {condition.trigger === EvolutionTriggers.levelUp.label && (
        <Typography>{EvolutionTriggers.levelUp.name}</Typography>
      )}
    </Fragment>
  );
};
