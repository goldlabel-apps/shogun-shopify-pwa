import React, {useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import firebase from 'firebase/app'
import 'firebase/auth'
import { 
    useDispatch 
} from 'react-redux'
import {
    makeStyles,
    Grid,
    Card,
    CardMedia,
} from '@material-ui/core'
import { 
    Item,
} from '../components'
import { AnimatedMachine } from './'

const useStyles = makeStyles(theme => ({
    ssr:{
        margin: 'auto',
        paddingTop: theme.spacing(),
    },
    media: {
        height: 0,
    },
    view:{
        margin: theme.spacing(),
        padding: theme.spacing(),
        // background: theme.palette.primary.main,
    },
    screen:{
        marginTop: theme.spacing(),
    }
}))

export default function Public(props) {

    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()
    const { pathname } = history.location

    useEffect(() => {
        dispatch({type: `ANIMATION/PATHNAME`, pathname})
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                dispatch({type: `APP/AUTHED`, authed: true})
            } else {
                dispatch({type: `APP/AUTHED`, authed: false})
            }
        })
    }, [dispatch, pathname])

    return <div className={classes.ssr}>
                <div className={classes.screen}> 
                    <Card className={classes.view}>
                        <CardMedia 
                            className={classes.media}
                            component={AnimatedMachine}
                        />
                    </Card>
                    <Grid container>
                      <Grid item xs={12} md={6}>
                        <Item content={{
                            title: `Shopify`,
                            secondary: `Build Shopify pages that convert`,
                            icon: `work`,
                            url: `https://getshogun.com/shopify`,
                        }}/>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Item content={{
                            title: `Frontend`,
                            secondary: `Transform your storefront`,
                            icon: `life`,
                            url: `https://getshogun.com/frontend`,
                        }}/>
                      </Grid>
                    </Grid> 
                </div>
            </div>
}