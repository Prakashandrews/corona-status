import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Divider from '@material-ui/core/Divider';
import PersonAddDisabledRoundedIcon from '@material-ui/icons/PersonAddDisabledRounded';
import EmojiPeopleRoundedIcon from '@material-ui/icons/EmojiPeopleRounded';
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function CountryList(props) {
    const classes = useStyles();
    const selectedCountries = props.countries.map(item => item.country);
    const list = props.list;
    const res = list.filter(item => selectedCountries.includes(item.country));

    const cardItems = res.map((item) =>
        <Grid item xs={6} sm={4} lg={6} md={6}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2"> {item.country}</Typography>                                                
                    </CardContent>


                    <Typography gutterBottom variant="h5" component="h2"> Cases </Typography>
                    <Typography gutterBottom variant="h5" component="h2"> {item.cases} </Typography>


                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <ImageIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Today Cases" secondary={item.todayCases} />
                    </ListItem>

                    <Divider />
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <PersonAddDisabledRoundedIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Today Deaths" secondary={item.todayDeaths} />
                    </ListItem>


                    <Divider />
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <EmojiPeopleRoundedIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Total Recovered" secondary={item.recovered} />
                    </ListItem>

                    <Divider />
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <PersonOutlineRoundedIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Active" secondary={item.active} />
                    </ListItem>

                </CardActionArea>

                <CardActions>
                    <Button size="small" color="primary"> Share  </Button>
                    <Button size="small" color="primary"> Learn More </Button>
                </CardActions>
            </Card>
        </Grid>
    );
    return (
        <Grid container
            direction="row"
            justify="flex-start"
            alignItems="flex-start" spacing={3}> {cardItems}  </Grid>

    );
}
