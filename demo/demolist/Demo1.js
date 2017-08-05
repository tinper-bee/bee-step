/**
*
* @title 这是标题
* @description 这是描述
*
*/

class Demo1 extends Component {
  render () {
      return (
        <div>
          <Step.Steps current={1}>
            <Step title="Finished" description="This is a description." />
            <Step title="In Progress" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
          </Step.Steps>
        </div>
      
      )
  }
}
