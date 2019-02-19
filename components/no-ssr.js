import React, {Component,} from 'react'


export default class NoSSR extends Component {
  state = {
    'canRender': false,
  }

  componentDidMount () {
    const {delay,} = this.props

    if (delay > 0) {
      this.timer = setTimeout(() => this.setState({
        'canRender': true,
      }), delay)
    } else {
      this.setState({
        'canRender': true,
      })
    }
  }

  componentWillUnmount () {
    if (this.timer) {
      clearTimeout(this.timer)
    }
  }

  render () {
    const {
      children,
      placeholder,
    } = this.props

    return this.state.canRender ? children() : placeholder
  }

  static defaultProps = {
    'delay':       0,
    'placeholder': <p>server side rendering...</p>,
  }


}