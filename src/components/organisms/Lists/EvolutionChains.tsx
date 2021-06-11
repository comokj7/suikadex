import React, { Fragment } from 'react';

import { Grid, Paper, Typography } from '@material-ui/core';
import { ChevronRight } from 'mdi-material-ui';

import { Image } from '../../atoms';
import { EvolutionChain } from '../../../interfaces';
import styled from '@emotion/styled';
import { EvolutionConditionText } from '../../molecules';

type Props = {
  evolutionChains: EvolutionChain;
  handleMoveTo: (id?: number) => void;
};

const ChainPaper = styled(Paper)`
  flex: 1;
  flex-flow: row;
  align-items: center;
`;

export const EvolutionChains: React.FC<Props> = (props) => {
  const { evolutionChains, handleMoveTo } = props;

  const imageSource = (id?: number) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  };

  return (
    <Grid container item direction="row" xs={12}>
      {evolutionChains.map((first) => (
        <Fragment key={`evolition-${first.id}`}>
          <Grid container item xs={3} direction="row">
            <ChainPaper onClick={() => handleMoveTo(first.id)}>
              <Image src={imageSource(first.id)} />
              <Typography align="center">{first.name}</Typography>
            </ChainPaper>
          </Grid>
          <Grid container item direction="row" xs={9}>
            {first?.next?.map((second) => (
              <Fragment key={`evolition-${first.id}-${second.id}`}>
                <Grid container item direction="row" xs={6}>
                  <Grid container item xs={4}>
                    <ChainPaper>
                      <ChevronRight color="secondary" fontSize="large" />
                      {second.conditions?.map((condition, index, list) => (
                        <Fragment
                          key={`evolution-${first.id}-${second.id}-${index}`}>
                          <EvolutionConditionText condition={condition} />
                          {index < list.length - 1 && (
                            <Typography>{`또는`}</Typography>
                          )}
                        </Fragment>
                      ))}
                    </ChainPaper>
                  </Grid>
                  <Grid container item xs={8}>
                    <ChainPaper onClick={() => handleMoveTo(first.id)}>
                      <Image src={imageSource(second.id)} />
                      <Typography align="center">{second.name}</Typography>
                    </ChainPaper>
                  </Grid>
                </Grid>
                <Grid container item direction="row" xs={6}>
                  {second.next?.map((third) => (
                    <Grid
                      container
                      item
                      direction="row"
                      xs={12}
                      key={`evolution-${first.id}-${second.id}-${third.id}`}>
                      <Grid container item xs={4}>
                        <ChainPaper>
                          <ChevronRight color="secondary" fontSize="large" />
                          {third.conditions?.map((condition, index, list) => (
                            <Fragment
                              key={`evolution-${first.id}-${second.id}-${index}`}>
                              <EvolutionConditionText condition={condition} />
                              {index < list.length - 1 && (
                                <Typography>{`또는`}</Typography>
                              )}
                            </Fragment>
                          ))}
                        </ChainPaper>
                      </Grid>
                      <Grid container item xs={8}>
                        <ChainPaper onClick={() => handleMoveTo(third.id)}>
                          <Image src={imageSource(third.id)} />
                          <Typography align="center">{third.name}</Typography>
                        </ChainPaper>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </Fragment>
            ))}
          </Grid>
        </Fragment>
      ))}
    </Grid>
  );
};
