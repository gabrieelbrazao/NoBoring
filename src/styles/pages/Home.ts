import styled from 'styled-components'
import { Slider, Select } from '@material-ui/core'
import theme from '../theme'
import { withStyles } from '@material-ui/core/styles'

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20vh;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80vh;
`

export const Filters = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  padding: 0 50px;
  column-gap: 50px;
  text-align: center;
`

export const Filter = styled.div`
  display: flex;
  flex-direction: column;
`

export const Description = styled.text`
  color: #d5d5d5;
  font-size: 25px;
  margin-bottom: 10px;
`

export const Title = styled.text`
  font-size: 50px;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
`

export const SubTitle = styled.text`
  margin-top: 8px;
  color: #d5d5d5;
  font-size: 20px;
`

export const SelectTypes = withStyles({
  root: {
    color: theme.colors.primary,
    width: '100%',
    borderBottom: '2px solid #d5d5d5'
  },
  icon: {
    color: '#d5d5d5'
  }
})(Select)

export const ParticipantsSlider = withStyles({
  root: {
    color: theme.colors.primary,
    height: 8
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit'
    }
  },
  valueLabel: {
    left: 'calc(-50% + 4px)'
  },
  active: {},
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4
  }
})(Slider)
