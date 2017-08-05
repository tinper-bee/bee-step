
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Step from '../src';
import Icon from 'bee-icon';
import Message from 'bee-message';
import Button from 'bee-button';
const Steps = Step.Steps;
const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


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



const steps = [{
  title: 'First',
  content: 'First-content',
}, {
  title: 'Second',
  content: 'Second-content',
}, {
  title: 'Last',
  content: 'Last-content',
}];

class Demo3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }
  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }
  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  alertDone() {
    Message.create({content: 'done', color: 'info'});
  }

  render() {
    const { current } = this.state;
    return (
      <div>
        <Steps current={current}>
          {steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>
        <div className="steps-content">{steps[this.state.current].content}</div>
        <div className="steps-action">
          {
            this.state.current < steps.length - 1
            &&
            <Button type="primary" onClick={() => this.next()}>Next</Button>
          }
          {
            this.state.current === steps.length - 1
            &&
            <Button type="primary" onClick={() => this.alertDone()}>Done</Button>
          }
          {
            this.state.current > 0
            &&
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
          }
        </div>
      </div>
    );
  }
}

class Demo4 extends Component {
  render () {
      return (
        <div>
          <Steps direction="vertical" size="small" current={1}>
            <Step title="Finished" description="This is a description." />
            <Step title="In Progress" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
         </Steps>
        </div>
      )
  }
}
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
}var DemoArray = [{"example":<Demo1 />,"title":" 这是标题","code":"/**\n*\n* @title 这是标题\n* @description 这是描述\n*\n*/\n\nclass Demo1 extends Component {\n  render () {\n      return (\n        <div>\n          <Step.Steps current={1}>\n            <Step title=\"Finished\" description=\"This is a description.\" />\n            <Step title=\"In Progress\" description=\"This is a description.\" />\n            <Step title=\"Waiting\" description=\"This is a description.\" />\n          </Step.Steps>\n        </div>\n      \n      )\n  }\n}\n","desc":" 这是描述"},{"example":<Demo2 />,"title":" 这是标题","code":"/**\n*\n* @title 这是标题\n* @description 这是描述\n*\n*/\n\nclass Demo2 extends Component {\n  render () {\n      return (\n        <Step.Steps>\n          <Step status=\"finish\" title=\"Login\" icon={<Icon type=\"uf-users-o\" />} />\n          <Step status=\"finish\" title=\"Verification\" icon={<Icon type=\"uf-personin-o\" />} />\n          <Step status=\"process\" title=\"Pay\" icon={<Icon type=\"uf-creditcard\" />} />\n          <Step status=\"wait\" title=\"Done\" icon={<Icon type=\"uf-correct-2\" />} />\n        </Step.Steps>\n      )\n  }\n}\n","desc":" 这是描述"},{"example":<Demo3 />,"title":"Demo3","code":"\n\n\nconst steps = [{\n  title: 'First',\n  content: 'First-content',\n}, {\n  title: 'Second',\n  content: 'Second-content',\n}, {\n  title: 'Last',\n  content: 'Last-content',\n}];\n\nclass Demo3 extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      current: 0,\n    };\n  }\n  next() {\n    const current = this.state.current + 1;\n    this.setState({ current });\n  }\n  prev() {\n    const current = this.state.current - 1;\n    this.setState({ current });\n  }\n\n  alertDone() {\n    Message.create({content: 'done', color: 'info'});\n  }\n\n  render() {\n    const { current } = this.state;\n    return (\n      <div>\n        <Steps current={current}>\n          {steps.map(item => <Step key={item.title} title={item.title} />)}\n        </Steps>\n        <div className=\"steps-content\">{steps[this.state.current].content}</div>\n        <div className=\"steps-action\">\n          {\n            this.state.current < steps.length - 1\n            &&\n            <Button type=\"primary\" onClick={() => this.next()}>Next</Button>\n          }\n          {\n            this.state.current === steps.length - 1\n            &&\n            <Button type=\"primary\" onClick={() => this.alertDone()}>Done</Button>\n          }\n          {\n            this.state.current > 0\n            &&\n            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>\n              Previous\n            </Button>\n          }\n        </div>\n      </div>\n    );\n  }\n}\n","desc":""},{"example":<Demo4 />,"title":"Demo4","code":"\nclass Demo4 extends Component {\n  render () {\n      return (\n        <div>\n          <Steps direction=\"vertical\" size=\"small\" current={1}>\n            <Step title=\"Finished\" description=\"This is a description.\" />\n            <Step title=\"In Progress\" description=\"This is a description.\" />\n            <Step title=\"Waiting\" description=\"This is a description.\" />\n         </Steps>\n        </div>\n      )\n  }\n}","desc":""},{"example":<Demo5 />,"title":"Demo5","code":"\nclass Demo5 extends Component {\n  render () {\n      return (\n        <div>\n          <Steps current={1} status=\"error\">\n            <Step title=\"Finished\" description=\"This is a description\" />\n            <Step title=\"In Process\" description=\"This is a description\" />\n            <Step title=\"Waiting\" description=\"This is a description\" />\n        </Steps>\n        </div>\n      )\n  }\n}","desc":""}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        const header = (
            <Row>
                <Col md={11}>
                { example }
                </Col>
                <Col md={1}>
                <Button shape="icon" onClick={ this.handleClick }>
                    { caret }
                </Button>
                </Col>
            </Row>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ header } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
