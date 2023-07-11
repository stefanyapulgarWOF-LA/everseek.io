import { Box, Grid, Typography } from '@mui/material';

import { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import Head from 'next/head';

function Custom404() {
    return (
        <Fragment>
            <Head>
                <title>404 | FireHawk Detección</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="En FireHawk, ofrecemos un servicio de detección temprana y notificación de incendios forestales que complementa el trabajo humano con Inteligencia Artificial." />
            </Head>

            <Grid container display={'flex'} alignItems='center' gap={0} rowSpacing={0}>
                <Grid item xs={12} margin={0}>
                    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} padding={'100px 0 0 0'} backgroundColor='#f0f0f0' >
                        <Box>
                            <Typography
                                variant="h2"
                                fontSize={'30px'}
                                fontWeight={500}
                                color={'primary'}
                                letterSpacing={2}
                                textAlign={'center'}
                            >
                                ERROR
                            </Typography>
                            <Typography
                                variant="h2"
                                fontSize={'200px'}
                                fontWeight={500}
                                color={'primary'}
                                letterSpacing={2}
                                textAlign={'center'}
                                lineHeight={1}
                            >
                                404
                            </Typography>
                        </Box>
                        <Typography
                            variant="h2"
                            fontSize={'40px'}
                            fontWeight={500}
                            color={'secondary'}
                            letterSpacing={2}
                            textAlign={'center'}
                        >
                            <FormattedMessage id='404.title' defaultMessage={'404.title'} values={{ br: <br /> }} />
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} marginBottom={-5}>
                    <img src={'/assets/404.jpeg'} width={'100%'} height={'100%'} alt='404 image' />
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Custom404