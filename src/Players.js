import React, { Component } from 'react'

export default class Players extends Component {
    state={
     person:{   fullName:"fatma",
        bio:"hdzjd",
        imgsrc:"https://th.bing.com/th/id/R.76ab1538eb0603ee8936a6fba3f872a6?rik=1yGnfZG1i%2fDHIw&pid=ImgRaw&r=0",
        profession:"etudiante",
        
    },
    show:true
   

    }
    buttonshow=()=>{
      this.setState({show:!this.state.show})
    }
    
  render() {
    return (
      <div>

        {this.state.show?<>{this.state.person.name}{this.state.person.bio}{this.state.person.profession}
        <img src={this.state.person.imgsrc}></img>
</>:null}
        
        <button onClick={this.buttonshow}>show</button>
      </div>
    )
  }
}
