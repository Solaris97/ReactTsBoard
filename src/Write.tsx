import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from "axios";

/**
 * Write class
 */
class Write extends Component {

    state = {
        isModifyMode:false,
        title:"",
        content:"",
        name:"",
    };


    write = () => {
        console.log("쓰기!!");
        Axios.post("http://localhost:8000/insert",{
            title: this.state.title,
            content: this.state.content,
        })
            .then((res) => {
                console.log(res);
            })
            .catch((e)=>{
                console.log(e);
            });
    };

    update = () => {
        console.log("수정!!");
        Axios.post("http://localhost:8000/update",{
            title:this.state.title,
            content:this.state.content,
        })
            .then((res) => {
                console.log(res);
            })
            .catch((e)=>{
                console.log(e);
            });
    };

    // eslint-disable-next-line

    handleChange = (e: any) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    /**
     * @return {Component} Component
     */
    render() {
        return (
            <div>
                <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>제목</Form.Label>
                    <Form.Control type="text" name = "title" onChange={this.handleChange} placeholder="제목을 입력하세요" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>내용</Form.Label>
                    <Form.Control as="textarea" name = "content" onChange={this.handleChange} placeholder="내용을 입력하세요" />
                </Form.Group>
                </Form>
                <Button variant="info" onClick={this.state.isModifyMode ? this.update : this.write}>
                    작성완료
                </Button>
                <Button variant="secondary">취소</Button>
            </div>
        );
    }
}

export default Write;