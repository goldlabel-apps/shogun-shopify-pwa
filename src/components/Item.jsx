import React from 'react'
import {
    makeStyles,
    ListItem,
    ListItemText,
    ListItemIcon,
    Card,
} from '@material-ui/core'
import {
  Icon
} from './'

const useStyles = makeStyles((theme) => ({
  item: {
    margin: theme.spacing(),
  },
}))

export default function Item(props) {
  
  const classes = useStyles()
  const { 
    content 
  } = props

  return (
    <Card className={classes.item}>
      <ListItem button
        onClick={(e) => {
          e.preventDefault()
          window.open(content.url, `_blank`)
        }}>
        <ListItemIcon>
          <Icon icon={content.icon} color={`primary`} /> 
        </ListItemIcon>
        <ListItemText 
          primary={content.title}
          secondary={content.secondary}
        />
      </ListItem>
    </Card>
  )
}

