import React, { Component } from 'react'
import { Data } from "./data.js"
class App extends Component {
  state={
    data: Data,
    filter: '',
  }
  render() {
    const onchage=(e)=>{
      var user  = Data.filter((value) => value.name.toLowerCase().includes(e.target.value.toLowerCase()))

      this.setState({data: user})
    }
    return (
      <div>

        <input type="text" onChange={(e) => onchage(e)}   />
        <table border='1'  width='100%'>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
            <tbody>
              {
                this.state.data.map(item=>
                 <tr>
                      <td>
                        {item.id}
                      </td>
                      <td>
                        {item.name}
                      </td>
                      <td>
                        {item.status} 
                      </td>
                  </tr>
                  )
              }
            </tbody>
        </table>
      </div>
    )
  }
}


export default  App;