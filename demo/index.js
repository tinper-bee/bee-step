import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var DemoArray = [{"example":<Demo1 />,"title":" 常用基础 Step","code":"/**\r\n*\r\n* @title 常用基础 Step\r\n* @description current 标记当前进行哪一步\r\n*\r\n*/\r\n\r\nimport React, { Component } from 'react';\r\nimport { Step } from 'tinper-bee';\r\n\r\nclass Demo1 extends Component {\r\n  render () {\r\n      return (\r\n          <Step.Steps current={1}>\r\n            <Step title=\"Finished\" description=\"This is a description.\" />\r\n            <Step title=\"In Progress\" description=\"This is a description.\" />\r\n            <Step title=\"Waiting\" description=\"This is a description.\" />\r\n          </Step.Steps>\r\n      )\r\n  }\r\n}\r\n\r\n\r\n","desc":" current 标记当前进行哪一步"},{"example":<Demo2 />,"title":" 自定义icon Step","code":"/**\r\n*\r\n* @title 自定义icon Step\r\n* @description\r\n*\r\n*/\r\n\r\nimport React, { Component } from 'react';\r\n\nimport { Step, Icon } from 'tinper-bee';\r\n\r\nclass Demo2 extends Component {\r\n  render () {\r\n      return (\r\n        <Step.Steps>\r\n          <Step status=\"finish\" title=\"Login\" icon={<Icon type=\"uf-users-o\" />} />\r\n          <Step status=\"finish\" title=\"Verification\" icon={<Icon type=\"uf-personin-o\" />} />\r\n          <Step status=\"process\" title=\"Pay\" icon={<Icon type=\"uf-creditcard\" />} />\r\n          <Step status=\"wait\" title=\"Done\" icon={<Icon type=\"uf-correct-2\" />} />\r\n        </Step.Steps>\r\n      )\r\n  }\r\n}\r\n\r\n","desc":""},{"example":<Demo3 />,"title":" 结合切换事件的 Step","code":"\r\n/**\r\n*\r\n* @title 结合切换事件的 Step\r\n* @description 点击next，Step的流程跟进\r\n*\r\n*/\r\nimport React, { Component } from 'react';\r\n\n\nimport { Step, Button, Message } from 'tinper-bee';\r\n\r\nconst Steps = Step.Steps;\r\n\r\nconst steps = [{\r\n  title: 'First',\r\n  content: 'First-content',\r\n}, {\r\n  title: 'Second',\r\n  content: 'Second-content',\r\n}, {\r\n  title: 'Last',\r\n  content: 'Last-content',\r\n}];\r\n\r\nclass Demo3 extends Component {\r\n  constructor(props) {\r\n    super(props);\r\n    this.state = {\r\n      current: 0,\r\n    };\r\n  }\r\n  next() {\r\n    const current = this.state.current + 1;\r\n    this.setState({ current });\r\n  }\r\n  prev() {\r\n    const current = this.state.current - 1;\r\n    this.setState({ current });\r\n  }\r\n\r\n  alertDone() {\r\n    Message.create({content: '完成', color: 'info'});\r\n  }\r\n\r\n  render() {\r\n    const { current } = this.state;\r\n    return (\r\n      <div>\r\n        <Steps current={current}>\r\n          {steps.map(item => <Step key={item.title} title={item.title} />)}\r\n        </Steps>\r\n        <div className=\"steps-content\">{steps[this.state.current].content}</div>\r\n        <div className=\"steps-action\">\r\n          {\r\n            this.state.current < steps.length - 1\r\n            &&\r\n            <Button type=\"primary\" onClick={() => this.next()}>下一页</Button>\r\n          }\r\n          {\r\n            this.state.current === steps.length - 1\r\n            &&\r\n            <Button type=\"primary\" onClick={() => this.alertDone()}>完成</Button>\r\n          }\r\n          {\r\n            this.state.current > 0\r\n            &&\r\n            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>\r\n              上一页\r\n            </Button>\r\n          }\r\n        </div>\r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\n","desc":" 点击next，Step的流程跟进","scss_code":".steps-content {\r\n  margin-top: 16px;\r\n  border: 1px dashed #e9e9e9;\r\n  border-radius: 6px;\r\n  background-color: #fafafa;\r\n  min-height: 200px;\r\n  text-align: center;\r\n  padding-top: 80px;\r\n}\r\n\r\n.steps-action {\r\n  margin-top: 24px;\r\n}"},{"example":<Demo4 />,"title":" vertical Step","code":"/**\r\n*\r\n* @title vertical Step\r\n* @description \r\n*\r\n*/\r\n\r\nimport React, { Component } from 'react';\r\nimport { Step } from 'tinper-bee';\r\n\r\nconst Steps = Step.Steps;\r\n\r\nclass Demo4 extends Component {\r\n  render () {\r\n      return (\r\n        <div>\r\n          <Steps direction=\"vertical\" size=\"small\" current={1}>\r\n            <Step title=\"Finished\" description=\"This is a description.\" />\r\n            <Step title=\"In Progress\" description=\"This is a description.\" />\r\n            <Step title=\"Waiting\" description=\"This is a description.\" />\r\n         </Steps>\r\n        </div>\r\n      )\r\n  }\r\n}\r\n\r\n","desc":" "},{"example":<Demo5 />,"title":" 指定状态的Step","code":"/**\r\n*\r\n* @title 指定状态的Step\r\n* @description  用step的status属性，指定当前step的状态\r\n*\r\n*/\r\n\r\nimport React, { Component } from 'react';\r\nimport { Step } from 'tinper-bee';\r\n\r\nconst Steps = Step.Steps;\r\n\r\nclass Demo5 extends Component {\r\n  render () {\r\n      return (\r\n        <div>\r\n          <Steps current={1} status=\"error\">\r\n            <Step title=\"Finished\" description=\"This is a description\" />\r\n            <Step title=\"In Process\" description=\"This is a description\" />\r\n            <Step title=\"Waiting\" description=\"This is a description\" />\r\n        </Steps>\r\n        </div>\r\n      )\r\n  }\r\n}\r\n\r\n","desc":"  用step的status属性，指定当前step的状态"}]


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
        const { title, example, code, desc, scss_code  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const header = (
            <div>
            {example}
            <Button style={{"marginTop": "10px"}} shape="block" onClick={ this.handleClick }>
        { caret }
        { text }
    </Button>
        </div>
    );
        return (
            <Col md={12} >
            <h3>{ title }</h3>
            <p>{ desc }</p>
            <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ header } footerStyle = {{padding: 0}}>
    <pre><code className="hljs javascript">{ code }</code></pre>
        { !!scss_code ? <pre><code className="hljs css">{ scss_code }</code></pre> : null }
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
                    <Demo example= {child.example} title= {child.title} code= {child.code} scss_code= {child.scss_code} desc= {child.desc} key= {index}/>
            )

            })}
    </Row>
    )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
