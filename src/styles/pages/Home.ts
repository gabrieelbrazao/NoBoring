import { Slider } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

export const ParticipantsSlider = withStyles({
  root: {
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
