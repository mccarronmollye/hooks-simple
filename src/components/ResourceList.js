import React from 'react'
import axios from 'axios'

class ResourceList extends React.Component{
  state = { resources: []}

  async componentDidMount(){ //use async if using await
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`) //await says hold off until we complete making that request

    this.setState({ resources: response.data })
  }

  render(){
    return <div>{this.state.resources.length}</div>
  }
}

export default ResourceList
