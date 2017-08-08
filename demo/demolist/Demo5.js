/**
*
* @title 指定状态的Step
* @description  用step的status属性，指定当前step的状态
*
*/
class Demo5 extends Component {
  render () {
      return (
        <div>
          <Steps current={1} status="error">
            <Step title="Finished" description="This is a description" />
            <Step title="In Process" description="This is a description" />
            <Step title="Waiting" description="This is a description" />
        </Steps>
        </div>
      )
  }
}