import React, { ReactNode } from 'react';
import { useHistory } from 'react-router-dom';
import {
  AppBar as MUIAppBar,
  Button,
  ButtonGroup,
  Toolbar,
} from '@material-ui/core';
import random from 'random';
import { PageTitle } from '../../atoms';
import { Locales } from '../../../enums';
import { useLocale } from '../../../providers';
import { Typography } from '@material-ui/core';

type Props = {
  leftButton: ReactNode;
  title: string;
  randomRange: number;
};

export const AppBar: React.FC<Props> = (props) => {
  const { leftButton, title, randomRange } = props;

  const history = useHistory();
  const { locale, setLocale } = useLocale();

  const goToRandomPokemon = () => {
    const randomNo = random.int(1, randomRange);
    history.push(`/pokemon/${randomNo}`);
  };

  return (
    <MUIAppBar position="static">
      <Toolbar>
        {leftButton}
        <PageTitle title={title} />
        <Button variant="contained" onClick={goToRandomPokemon}>
          <Typography variant="body1">랜덤</Typography>
        </Button>
        <ButtonGroup>
          <Button
            variant="contained"
            disabled={locale === Locales.KOREAN}
            onClick={() => setLocale(Locales.KOREAN)}>
            <Typography variant="body1">한</Typography>
          </Button>
          <Button
            variant="contained"
            disabled={locale === Locales.JAPANESE}
            onClick={() => setLocale(Locales.JAPANESE)}>
            <Typography variant="body1">日</Typography>
          </Button>
          <Button
            variant="contained"
            disabled={locale === Locales.ENGLISH}
            onClick={() => setLocale(Locales.ENGLISH)}>
            <Typography variant="body1">En</Typography>
          </Button>
        </ButtonGroup>
      </Toolbar>
    </MUIAppBar>
  );
};
