
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


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var DemoArray = [{"example":<Demo1 />,"title":" 常用基础 Step","code":"/**\n*\n* @title 常用基础 Step\n* @description current 标记当前进行哪一步\n*\n*/\n\nimport React, { Component } from 'react';\nimport Step from 'bee-step';\n\nclass Demo1 extends Component {\n  render () {\n      return (\n        <div>\n          <Step.Steps current={1}>\n            <Step title=\"Finished\" description=\"This is a description.\" />\n            <Step title=\"In Progress\" description=\"This is a description.\" />\n            <Step title=\"Waiting\" description=\"This is a description.\" />\n          </Step.Steps>\n        </div>\n      \n      )\n  }\n}\n\n\n","desc":" current 标记当前进行哪一步"},{"example":<Demo2 />,"title":" 自定义icon Step","code":"/**\n*\n* @title 自定义icon Step\n* @description\n*\n*/\n\nimport React, { Component } from 'react';\nimport Icon from 'bee-icon';\nimport Step from 'bee-step';\n\nclass Demo2 extends Component {\n  render () {\n      return (\n        <Step.Steps>\n          <Step status=\"finish\" title=\"Login\" icon={<Icon type=\"uf-users-o\" />} />\n          <Step status=\"finish\" title=\"Verification\" icon={<Icon type=\"uf-personin-o\" />} />\n          <Step status=\"process\" title=\"Pay\" icon={<Icon type=\"uf-creditcard\" />} />\n          <Step status=\"wait\" title=\"Done\" icon={<Icon type=\"uf-correct-2\" />} />\n        </Step.Steps>\n      )\n  }\n}\n\n","desc":""},{"example":<Demo3 />,"title":" 结合切换事件的 Step","code":"\n/**\n*\n* @title 结合切换事件的 Step\n* @description 点击next，Step的流程跟进\n*\n*/\nimport React, { Component } from 'react';\nimport Icon from 'bee-icon';\nimport Message from 'bee-message';\nimport Button from 'bee-button';\nimport Step from 'bee-step';\n\nconst Steps = Step.Steps;\n\nconst steps = [{\n  title: 'First',\n  content: 'First-content',\n}, {\n  title: 'Second',\n  content: 'Second-content',\n}, {\n  title: 'Last',\n  content: 'Last-content',\n}];\n\nclass Demo3 extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      current: 0,\n    };\n  }\n  next() {\n    const current = this.state.current + 1;\n    this.setState({ current });\n  }\n  prev() {\n    const current = this.state.current - 1;\n    this.setState({ current });\n  }\n\n  alertDone() {\n    Message.create({content: 'done', color: 'info'});\n  }\n\n  render() {\n    const { current } = this.state;\n    return (\n      <div>\n        <Steps current={current}>\n          {steps.map(item => <Step key={item.title} title={item.title} />)}\n        </Steps>\n        <div className=\"steps-content\">{steps[this.state.current].content}</div>\n        <div className=\"steps-action\">\n          {\n            this.state.current < steps.length - 1\n            &&\n            <Button type=\"primary\" onClick={() => this.next()}>Next</Button>\n          }\n          {\n            this.state.current === steps.length - 1\n            &&\n            <Button type=\"primary\" onClick={() => this.alertDone()}>Done</Button>\n          }\n          {\n            this.state.current > 0\n            &&\n            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>\n              Previous\n            </Button>\n          }\n        </div>\n      </div>\n    );\n  }\n}\n\n","desc":" 点击next，Step的流程跟进"},{"example":<Demo4 />,"title":" vertical Step","code":"/**\n*\n* @title vertical Step\n* @description \n*\n*/\n\nimport React, { Component } from 'react';\nimport Step from 'bee-step';\n\nconst Steps = Step.Steps;\n\nclass Demo4 extends Component {\n  render () {\n      return (\n        <div>\n          <Steps direction=\"vertical\" size=\"small\" current={1}>\n            <Step title=\"Finished\" description=\"This is a description.\" />\n            <Step title=\"In Progress\" description=\"This is a description.\" />\n            <Step title=\"Waiting\" description=\"This is a description.\" />\n         </Steps>\n        </div>\n      )\n  }\n}\n\n","desc":" "},{"example":<Demo5 />,"title":" 指定状态的Step","code":"/**\n*\n* @title 指定状态的Step\n* @description  用step的status属性，指定当前step的状态\n*\n*/\n\nimport React, { Component } from 'react';\nimport Step from 'bee-step';\n\nconst Steps = Step.Steps;\n\nclass Demo5 extends Component {\n  render () {\n      return (\n        <div>\n          <Steps current={1} status=\"error\">\n            <Step title=\"Finished\" description=\"This is a description\" />\n            <Step title=\"In Process\" description=\"This is a description\" />\n            <Step title=\"Waiting\" description=\"This is a description\" />\n        </Steps>\n        </div>\n      )\n  }\n}\n\n","desc":"  用step的status属性，指定当前step的状态"}]


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
