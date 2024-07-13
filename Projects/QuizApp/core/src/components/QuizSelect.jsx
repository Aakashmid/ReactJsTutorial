import Header from '../components/framework/header'
import Footer from '../components/framework/footer'
import ConnectApi from '../api/ConnectApi'
import { Button, Card, CardActions, CardContent, CardHeader, Container, Grid, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
export default function QuizSelect() {
    const ApiUrl = 'http://127.0.0.1:8000/'
    const [dataState] = ConnectApi(ApiUrl);

    console.log(dataState);
    return (
        <>
            <Header />
            <Container maxWidth="sm" component='main' className="heroContent"  sx={{marginTop:3}}>
                <Typography variant='h2' component='h1' align='center' color='textPrimary' gutterBottom>
                    Quizzes
                </Typography>
                <Typography variant='h5' color="textSecondary" component='p' align='center'>
                    We've got all the quizzes you love to binge! The world's larges selection of quizzes Choose from the
                </Typography>
            </Container>
            <Container maxWidth="md" component="main" >
                <Grid container spacing={5} alignItems={'flex-end'} sx={{ marginTop: 2 }}>  {/* here spacing define spacing b/w grids in map fucntions*/}
                    {dataState.data.map((q) => (
                        <Grid item key={q.title} xs={12} md={4}>
                            <Card>
                                <CardHeader title={q.title} titleTypographyProps={{ align: 'center' }} subheaderTypographyProps={{ align: 'center' }} className='cardHeader' sx={{ backgroundColor: '#e0e0e0' }} />
                                <CardContent>
                                    <div className="cardPricing">
                                        <Typography component='h2' variant='h6' color='textPrimary' align='center'>
                                            Random Quiz
                                        </Typography>
                                    </div>
                                    <div className="">

                                        <Typography variant='subtitle1' align='center'>
                                            50 Questions
                                        </Typography>
                                    </div>
                                    
                                </CardContent>
                                <CardActions>
                                    <Button variant='outlined' fullWidth color='primary' href='http://127.0.0.1:8000/r/django'>
                                        Start Quiz
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Footer />
        </>
    )
}
