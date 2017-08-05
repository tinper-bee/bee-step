/**
*
* @title 这是标题
* @description 这是描述
*
*/

class Demo2 extends Component {
  render () {
      return (
        <Step.Steps>
          <Step status="finish" title="Login" icon={<Icon type="uf-users-o" />} />
          <Step status="finish" title="Verification" icon={<Icon type="uf-personin-o" />} />
          <Step status="process" title="Pay" icon={<Icon type="uf-creditcard" />} />
          <Step status="wait" title="Done" icon={<Icon type="uf-correct-2" />} />
        </Step.Steps>
      )
  }
}
