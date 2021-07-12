import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
//import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { makeStyles } from '@material-ui/core/styles';
import ExtensionIcon from '@material-ui/icons/Extension';
import BookIcon from '@material-ui/icons/Book';
import GamepadIcon from '@material-ui/icons/Gamepad';
import SportsKabaddiIcon from '@material-ui/icons/SportsKabaddi';
import FlightIcon from '@material-ui/icons/Flight';

export const mainListItems = (
  <div>

    <a href='/rpg'>
      <ListItem button>
        <ListItemIcon>
          <GamepadIcon />
        </ListItemIcon>
        <ListItemText primary="RPG" />
      </ListItem>
    </a>
    <a href='/adventure'>
      <ListItem button>
        <ListItemIcon>
          <BookIcon />
        </ListItemIcon>
        <ListItemText primary="アドベンチャー" />
      </ListItem>
    </a>
    <a href='/action'>
      <ListItem button>
        <ListItemIcon>
          <SportsKabaddiIcon />
        </ListItemIcon>
        <ListItemText primary="アクション" />
      </ListItem>
    </a>
    <a href='/shooting'>
      <ListItem button>
        <ListItemIcon>
          <FlightIcon />
        </ListItemIcon>
        <ListItemText primary="シューティング" />
      </ListItem>
    </a>
    <a href='/puzzle'>
      <ListItem button>
        <ListItemIcon>
          <ExtensionIcon />
        </ListItemIcon>
        <ListItemText primary="パズル" />
      </ListItem>
    </a>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);