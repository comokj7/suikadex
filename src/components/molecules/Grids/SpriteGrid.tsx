import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import styled from '@emotion/styled';

import { GenderIcon, Image } from '../../atoms';
import { Sprites } from '../../../interfaces';

type Props = {
  shiny?: boolean;
  femaleRate?: number | null;
  hasGenderDiff?: boolean;
  sprites?: Sprites;
};

const SpritePaper = styled(Paper)`
  width: 100px;
  height: 100px;
`;

export const SpriteGrid: React.FC<Props> = (props) => {
  const { shiny, femaleRate, hasGenderDiff, sprites } = props;

  return shiny ? (
    <>
      <Grid item xs={2}>
        {<GenderIcon femaleRate={femaleRate} hasGenderDiff={hasGenderDiff} />}
      </Grid>
      <Grid container item xs={5} justify="center">
        <SpritePaper>
          <Image src={sprites?.sprites.front_shiny ?? ''} />
        </SpritePaper>
      </Grid>
      <Grid container item xs={5} justify="center">
        <SpritePaper>
          <Image src={sprites?.sprites.back_shiny ?? ''} />
        </SpritePaper>
      </Grid>
      {hasGenderDiff && (
        <>
          <Grid item xs={2}>
            {<GenderIcon femaleRate={8} hasGenderDiff={hasGenderDiff} />}
          </Grid>
          <Grid container item xs={5} justify="center">
            <SpritePaper>
              <Image src={sprites?.sprites.front_shiny_female ?? ''} />
            </SpritePaper>
          </Grid>
          <Grid container item xs={5} justify="center">
            <SpritePaper>
              <Image src={sprites?.sprites.back_shiny_female ?? ''} />
            </SpritePaper>
          </Grid>
        </>
      )}
    </>
  ) : (
    <>
      <Grid item xs={2}>
        {<GenderIcon femaleRate={femaleRate} hasGenderDiff={hasGenderDiff} />}
      </Grid>
      <Grid container item xs={5} justify="center">
        <SpritePaper>
          <Image src={sprites?.sprites.front_default ?? ''} />
        </SpritePaper>
      </Grid>
      <Grid container item xs={5} justify="center">
        <SpritePaper>
          <Image src={sprites?.sprites.back_default ?? ''} />
        </SpritePaper>
      </Grid>
      {hasGenderDiff && (
        <>
          <Grid item xs={2}>
            {<GenderIcon femaleRate={8} hasGenderDiff={hasGenderDiff} />}
          </Grid>
          <Grid container item xs={5} justify="center">
            <SpritePaper>
              <Image src={sprites?.sprites.front_female ?? ''} />
            </SpritePaper>
          </Grid>
          <Grid container item xs={5} justify="center">
            <SpritePaper>
              <Image src={sprites?.sprites.back_female ?? ''} />
            </SpritePaper>
          </Grid>
        </>
      )}
    </>
  );
};
