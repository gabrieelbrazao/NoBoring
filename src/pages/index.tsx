import { useState } from 'react'
import Head from 'next/head'
import { ParticipantsSlider } from '../styles/pages/Home'
import { MenuItem, Button, Typography, Box, Select, Grid } from '@material-ui/core'

type Tprops = {
  random: boolean
}

const Home: React.FC = () => {
  const [participants, setParticipants] = useState(1)
  const [type, setTypes] = useState('education')
  const [activity, setActivity] = useState('')

  const generateActivity = async (props: Tprops) => {
    let uri = 'https://www.boredapi.com/api/activity/'

    if(!props.random) uri += `?type=${type}&participants=${participants}`

    const response = await fetch(uri)
    const newActivity = await response.json()

    newActivity.activity ? setActivity(newActivity.activity) : setActivity("Nenhuma atividade encontrada")

    if(props.random){
      setParticipants(newActivity.participants)
      setTypes(newActivity.type)
    }
  }

  return (
    <Box bgcolor="background.default" height="100vh">
      <Head>
        <title>No Boring!</title>
      </Head>

      <Grid container direction="column" style={{ height: "100%" }}>
        <Grid container direction="column" alignItems="center" justify="center" style={{ height: '15vh' }}>
          <Typography variant="h3">NoBoring!</Typography>
          <Typography color="textSecondary">Descubra atividades para sair do tédio</Typography>
        </Grid>

        <Grid container justify="space-around">
          <Grid container item direction="column" xl={3} alignItems="center" style={{ padding: "0 30px" }}>
            <Typography variant="h5" color="textSecondary">Número de participantes</Typography>

            <ParticipantsSlider
              value={participants}
              onChange={(event, value) => setParticipants(value as number)}
              min={1}
              max={5}
              valueLabelDisplay="auto"
            />
          </Grid>

          <Grid container item xl={3} alignItems="center" justify="space-around">
            <Button variant="contained" color="primary" onClick={() => generateActivity({ random: false })}>
              Gerar atividade
            </Button>

            <Button variant="outlined" color="primary" onClick={() => generateActivity({ random: true })}>
              Atividade aleatória
            </Button>
          </Grid>

          <Grid container item direction="column" xl={3} alignItems="center" style={{ padding: 30 }}>
            <Typography variant="h5" color="textSecondary">Tipo de atividade</Typography>

            <Select
              onChange={event => setTypes(event.target.value as string)}
              value={type}
              fullWidth
            >
              <MenuItem value="education">Educacional</MenuItem>
              <MenuItem value="recreational">Recreativo</MenuItem>
              <MenuItem value="social">Social</MenuItem>
              <MenuItem value="diy">Faça você mesmo</MenuItem>
              <MenuItem value="charity">Caridoso</MenuItem>
              <MenuItem value="cooking">Culinária</MenuItem>
              <MenuItem value="relaxation">Relaxamento</MenuItem>
              <MenuItem value="music">Musical</MenuItem>
              <MenuItem value="busywork">Trabalho</MenuItem>
            </Select>
          </Grid>
        </Grid>

        <Grid container item alignItems="center" justify="center" style={{ flex: 1 }}>
          <Typography variant="h4" color="textSecondary" align="center">{activity}</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home
