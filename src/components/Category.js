import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { SettingsPowerRounded } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  category: {
    textAlign: 'center',
    color: 'lightblue',
  }
}));

//categoryの装飾
export default function Category(props) {
  const classes = useStyles();
  const isOpened = props.isOpened;
  if(isOpened){
    return <h1 className={classes.category}>Category</h1>;
  }else{
    return <div />
  }
}