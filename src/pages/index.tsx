import { useState } from 'react'
import Head from 'next/head'
import {
  Header,
  Container,
  Title,
  Description,
  ParticipantsSlider,
  Filters,
  SubTitle,
  Filter,
  SelectTypes
} from '../styles/pages/Home'
import { MenuItem, Button } from '@material-ui/core'

const Home: React.FC = () => {
  const [participants, setParticipants] = useState(1)
  const [type, setTypes] = useState('education')

  return (
    <div>
      <Head>
        <title>No Boring!</title>
      </Head>

      <Header>
        <Title>NoBoring!</Title>
        <SubTitle>Descubra atividades para sair do tédio</SubTitle>
      </Header>

      <Container>
        <Filters>
          <Filter>
            <Description>Número de participantes</Description>

            <ParticipantsSlider
              value={participants}
              onChange={(event, value) => setParticipants(value as number)}
              min={1}
              max={5}
              valueLabelDisplay="auto"
            />
          </Filter>

          <Filter>
            <Button variant="contained" color="primary">
              Atividade aleatória
            </Button>
          </Filter>

          <Filter>
            <Description>Tipo de atividade</Description>

            <SelectTypes
              onChange={event => setTypes(event.target.value as string)}
              value={type}
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
            </SelectTypes>
          </Filter>
        </Filters>
      </Container>
    </div>
  )
}

export default Home
