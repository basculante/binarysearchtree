import React from "react";
import Node from "./Node";

const myArray = [1, 20, -309, 23, 80, -40, 483, 829, 984, 34, 3, -20, -203]

interface IState {
  node?: any
}

class App extends React.Component<any, IState>{
  constructor(props: any){
    super(props)

    this.state = {}
  }

  binarySearchTree() {
    const node = new Node(myArray[0])
    const tree = myArray.map((number, index) => {
      node.insert(number);
    })
    this.setState({ node }, this.containBST)
  }

  containBST() {
    this.state.node.contains(80);
  }

  componentDidMount() {
    this.binarySearchTree();
  }

  render(){
    console.log(this.state.node)
    return(
      <div>
        Hello!
      </div>
    )
  }
}

export default App;