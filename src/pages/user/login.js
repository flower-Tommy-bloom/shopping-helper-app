import React from 'react';
import './../../assets/css/user/login.scss'
import { InputItem, Button } from 'antd-mobile';
import { login } from '../../api/user'
import { withRouter } from 'react-router-dom'
class LoginFrom extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        username: 'tom',
        password:'123'
      }
    }
    userChange = (username) => {
      this.setState({
        username,
      });
    }
    passwordChange = (password) => {
      this.setState({
        password,
      });
    }
    loginIn = async () => {
      let res = await login(this.state)
      console.log(res)
      if(res.success) this.props.history.push('/main')
    }
    render() {
      return (
        <div className="main">
            <InputItem
              type="text"
              placeholder="input your username"
              onChange={this.userChange}
              value={this.state.username}
            >user</InputItem>
            <InputItem
              type="password"
              className="mt10"
              placeholder="input your password"
              onChange={this.passwordChange}
              value={this.state.password}
            >password</InputItem>
            <Button className="mt30" type="primary" onClick={this.loginIn}>login</Button>
        </div>
      );
    }
  }

  export default withRouter(LoginFrom)
// class LoginFrom extends Component {
//     constructor(porps) {
//         super(porps)
//         this.state = {
//             uesrname: 'tom',
//             password: '123'
//         }
//     }
//     // 登录
//     handleSubmit = e => {
//         e.preventDefault();
//         this.props.form.validateFields(async(err, values) => {
//             if (!err) {
//                 const res = await login(values)
//                 if(res){
//                     this.props.history.push('/main')
//                 }
//             }
//         });
//     };

//     render() {
//         const { getFieldDecorator } = this.props.form;
//         return (
//             <Form className="main" onSubmit={this.handleSubmit}>
//                 <Row type="flex" justify="center" align="middle">
//                     <Col span={18}>
//                         <Form.Item>
//                             {getFieldDecorator('username', {
//                                 rules: [{ required: true, message: 'Please input your username!' }],
//                                 initialValue : this.state.uesrname
//                             })(
//                                 <Input
//                                     prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
//                                     placeholder="Username"
//                                 />,
//                             )}
//                         </Form.Item>
//                     </Col>
//                 </Row>
//                 <Row type="flex" justify="center" align="middle">
//                     <Col span={18}>
//                         <Form.Item>
//                             {getFieldDecorator('password', {
//                                 rules: [{ required: true, message: 'Please input your Password!' }],
//                                 initialValue : this.state.password
//                             })(
//                                 <Input
//                                     prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
//                                     type="password"
//                                     placeholder="Password"
//                                 />,
//                             )}
//                         </Form.Item>
//                     </Col>
//                 </Row>
//                 <Row type="flex" justify="center" align="middle">
//                     <Col span={18}>
//                         <Form.Item>
//                             <Button type="primary" block={true} htmlType="submit">
//                                 Log in
//                             </Button>
//                         </Form.Item>
//                     </Col>
//                 </Row>
//             </Form>
//         );
//     }
// }
// const Login = Form.create({ name: 'normal_login' })(LoginFrom);
// export default withRouter(Login)