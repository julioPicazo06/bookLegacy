import { TimelineItem, TimelineOppositeContent } from '@material-ui/lab'
import React, { FC } from 'react'
import { TimeLineContentModel } from '../../Contenidos/TimeLineContent'
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { Icon } from '@material-ui/core';




const TimeLineGeneral:FC<TimeLineContentModel> = ({nombre , fecha, puesto}:TimeLineContentModel) => {
    const useStyles = makeStyles((theme) => ({
        paper: {
          padding: '6px 16px',
        },
        secondaryTail: {
          backgroundColor: theme.palette.secondary.main,
        },
      }));
 
    const classes = useStyles();
    
     
    return (
        <TimelineItem className="mouse">
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            {fecha}
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator style={{
          borderColor:'red'
        }}>
          <TimelineDot style={{
          backgroundColor:'#FF414D'
        }}>
          <Icon >code</Icon>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <h3> {nombre}</h3>
            <p>{puesto}</p>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    )
}

export default TimeLineGeneral
