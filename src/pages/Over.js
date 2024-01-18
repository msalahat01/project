import React from "react";
import { Col, Row } from "antd";
import { Card } from "antd";
import { Avatar, Button, List, Skeleton, message, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Input } from "antd";
import { Progress, Statistic } from "antd";
import {
  updateDoc,
  doc,
  arrayUnion,
  getDoc,
  arrayRemove,setDoc
} from "firebase/firestore";
import { db, auth } from "../firebase";
import { Scrollbars } from "react-custom-scrollbars";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const { TextArea } = Input;

const count = 3;

function Over() {


  const [initLoading, setInitLoading] = useState(true);
  const [list, setList] = useState([]);
  const [list1, setList1] = useState([]);
  const [listRating, setListrating] = useState([]);
  const [numberOfActive, setActive] = useState(0);
  const [numberOfAll, setAll] = useState(0);
  const [numberOfRatig, setRating] = useState(0);
  const [uid, setUID] = useState("");
  const [post, setPost] = useState("");
  const [trainess, setTrainess] = useState("");
  const [name, setName] = useState("");
  const [ID,setID]=useState("");
  const [Maxnumber, setMaxnumber] = useState(0);
  const [value, setValue] = useState("");


  const [editingIndex, setEditingIndex] = useState(-1);
  const isEditing = editingIndex !== -1;

  const handleEdit = (postIndex) => {
    setPost(list[postIndex]);
    setEditingIndex(postIndex);
  };
  const handleCancelEdit = () => {
    setPost("");
    setEditingIndex(-1);
  };

  const handleDelete = (postIndex) => {
    const updatedList = [...list];
    const deletedPost = updatedList.splice(postIndex, 1)[0];
    updateDoc(doc(db, "Coachuser", uid), {
      post: arrayRemove(deletedPost),
    }).catch((err) => {
      updateDoc(doc(db, "Gymuser", uid), { post: arrayRemove(deletedPost) });
      console.log(err);
    });

    setList(updatedList);
    setAll(updatedList.length);
    setEditingIndex(-1);
    message.success("Post deleted successfully");
  };

// create a variable for the sum and initialize it
let sum = 0;

// iterate over each item in the array
for (let i = 0; i < listRating.length; i++ ) {
  sum += listRating[i];
}



  const handlePost = (e) => {
    e.preventDefault();

    if (post !== "") {
      if (isEditing) {
        const updatedList = [...list];
        updatedList[editingIndex] = post;
        updateDoc(doc(db, "Coachuser", uid), { post: updatedList }).catch(
          (err) => {
            updateDoc(doc(db, "Gymuser", uid), { post: updatedList });
            console.log(err);
          }
        );
        setEditingIndex(-1);
        message.success("Post updated successfully");
      } else {
        updateDoc(doc(db, "Coachuser", uid), { post: arrayUnion(post) }).catch(
          (err) => {
            updateDoc(doc(db, "Gymuser", uid), { post: arrayUnion(post) });
            console.log(err);
          }
        );
        message.success("Post published successfully");
      }

      setPost("");
    } else {
      alert("Please write a post");
    }
  };


  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUID(user.uid);

        if(ID == 1)
        
        getDoc(doc(db, "Gymuser", user.uid)).then((docSnap) => {

          if (docSnap.exists()) {

            if (docSnap.data().trainess != null) {
              setActive(docSnap.data().trainess.length);
              setRating(docSnap.data().rating.length);
              setTrainess(docSnap.data().trainess);
              setList1(docSnap.data().trainess);
              setListrating(docSnap.data().rating);
              setMaxnumber(docSnap.data().Cost);
              setValue (sum / numberOfRatig) ;
            }
            
            if (docSnap.data().post != null) {
              setAll(docSnap.data().post.length);
              setName(docSnap.data().name);
              setList(docSnap.data().post);
              list.push(docSnap.data().post);
            }
            setInitLoading(false);
            // trainees.push(docSnap.data().trainees);
          } else {
            console.log("No such document!");
          }
        })
      
        else
        
        getDoc(doc(db, "Coachuser", user.uid)).then((docSnap) => {

          if (docSnap.exists()) {
            if (docSnap.data().trainess != null) {
              setActive(docSnap.data().trainess.length);
              setRating(docSnap.data().rating.length);
              setTrainess(docSnap.data().trainess);
              setList1(docSnap.data().trainess);
              setListrating(docSnap.data().rating);
              setMaxnumber(docSnap.data().Cost);
              setValue (sum / numberOfRatig) ;
            }

            if (docSnap.data().post != null) {
              setAll(docSnap.data().post.length);
              setName(docSnap.data().name);
              setList(docSnap.data().post);
              list.push(docSnap.data().post);
            }
            setInitLoading(false);
            // trainees.push(docSnap.data().trainees);
          } else {
            setID(1);
            console.log("No such document!");
          }
        });
        
      } else {
        console.log("no user");
      }
    });
  });


  return (
    <>
      <Row>
        <Col span={9}>
          <Card
            size="small"
            style={{
              width: 480,
              margin: "60px 10px 0px 60px",
              background: "#EB5E28 ",
              color: "white",
              border: "3px solid #FFFCF2",
              borderRadius: "40px",
            }}
          >
            <TextArea
              rows={6}
              value={post}
              onChange={(e) => setPost(e.target.value)}
              style={{
                margin: "5px 0 0 0",
                borderRadius: "40px",
                backgroundColor: "#D9D9D9",
                textIndent: "30px",
                fontSize: "18px",
              }}
              autoFocus={false}
            />
            <br />

            <Button
              onClick={handlePost}
              style={{
                margin: "8px",
                backgroundColor: "#2C3E50",
                color: "white",
                borderRadius: "30px",
                width: "120px",
              }}
            >
              {isEditing ? "Save" : "Post"}
            </Button>

          </Card>

          <Card
            size="small"
            style={{
              maxHeight: 420,
              width: 480,
              margin: "10px 0px 0px 60px",
              background: "#EB5E28 ",
              color: "white",
              border: "3px solid #FFFCF2",
              borderRadius: "40px",
              overscrollBehavior: "auto",
              overflowX: "hidden",
            }}
          >
            <Scrollbars
              autoHide
              autoHideTimeout={1000}
              autoHideDuration={200}
              style={{ height: 220 }}
            >
              <List
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                dataSource={list}
                size={list.length}
                renderItem={(item, index) => (
                  <Card
                    size="small"
                    style={{
                      width: 440,
                      margin: "2px",
                      marginBottom: "8px",
                      background: "#D9D9D9 ",
                      color: "black",
                      border: "3px solid #FFFCF2",
                      borderRadius: "40px",
                      wordBreak: "break-word",
                    }}
                  >
                    {item.loading ? (
                      <Skeleton avatar loading active />
                    ) : (
                      <List.Item.Meta
                        description={
                          <>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              <div>{list[list.length - 1 - index]}</div>
                              <Space size="middle">
                                <Button
                                  type="primary"
                                  shape="circle"
                                  icon={<EditOutlined />}
                                  onClick={() =>
                                    handleEdit(list.length - 1 - index)
                                  }
                                  style={{ marginRight: "-15px" }}
                                />
                                <Button
                                  type="danger"
                                  shape="circle"
                                  icon={<DeleteOutlined />}
                                  onClick={() =>
                                    handleDelete(list.length - 1 - index)
                                  }
                                />
                              </Space>
                            </div>
                          </>
                        }
                      />
                    )}
                  </Card>
                )}
              />
            </Scrollbars>
          </Card>
        </Col>



        <Col span={9}>
<Row>
        <Card
              bordered={false}
              style={{
                backgroundColor: "#D9D9D9",
                width: "500px",
                height: "55px",
                borderRadius: "14px",
                margin: "65px 0px 0px 0px",
              }}
            >
              <Rating  style={{margin:"-12px 0px 0px 0px"}} name="half-rating-read" value={value}  precision={0.5} readOnly />
              <div style={{fontSize:"20px" ,margin:"-35px 380px 0px 0px "}}>Rating </div>

            </Card>
            </Row>
          <Row>
            <Card
              bordered={false}
              style={{
                backgroundColor: "#D9D9D9",
                width: "220px",
                height: "200px",
                borderRadius: "30px",
                margin: "30px 0px 0px 0px",
              }}
            >
              <Statistic
                title={<h3 style={{ color: "#2C3E50" }}> Trainees</h3>}
                value={numberOfActive}
                valueStyle={{ color: "#2C3E50", fontSize: "55px" }}
                style={{
                  display: "flex",
                  margin: "0px 0px 0px 0px",
                  flexDirection: "column-reverse",
                  alignItems: "center",
                }}
              />
            </Card>
            <Card
              bordered={false}
              style={{
                backgroundColor: "#EB5E28",
                width: "220px",
                height: "200px",
                borderRadius: "30px",
                margin: "30px 0px 0px 60px",
              }}
            >
              <Statistic
                title={<h3 style={{ color: "white" }}>Number Of Posts</h3>}
                value={numberOfAll}
                valueStyle={{ color: "white", fontSize: "50px" }}
                style={{
                  display: "flex",
                  flexDirection: "column-reverse",
                  alignItems: "center",
                }}
              />
            </Card>
          </Row>
          <Row>
            <Card
              bordered={false}
              style={{
                backgroundColor: "#EB5E28 ",
                color: "white",
                width: "220px",
                height: "200px",
                borderRadius: "30px",
                margin: "30px 0px 0px 0px",
              }}
            >
              <div style={{ position: "relative" }}>
                <Progress
                  type="circle"
                  percent={(numberOfActive / Maxnumber)*100} 
                  width={90}
                  strokeWidth={20}
                  strokeColor={["#252422"]}
                  trailColor="#D9D9D9"
                  format={() => ""}
                  style={{
                    position: "absolute",
                    left: "25%",
                    marginTop:"8px"

                  }}
                />
              </div>
              <h2
                style={{
                  fontSize: "17px",
                  position: "absolute",
                  top: "66%",
                  left: "22%",
                }}
              >
                 Trainess from {Maxnumber}
              </h2>
            </Card>

            <Card
              bordered={false}
              style={{
                backgroundColor: "#D9D9D9 ",
                width: "220px",
                height: "200px",
                borderRadius: "30px",
                margin: "30px 0px 0px 60px",
              }}
            >
              <div style={{ position: "relative" }}>
                <Progress
                  type="circle"
                  percent={(numberOfAll / Maxnumber)*100} 
                  width={90}
                  strokeWidth={20}
                  strokeColor={["#1ABC9C"]}
                  trailColor="white"
                  format={() => ""}
                  style={{
                    position: "absolute",
                    left: "25%",
                    marginTop:"8px"
                  }}
                />
              </div>
              <h2
                style={{
                  fontSize: "17px",
                  position: "absolute",
                  top: "67%",
                  left: "27%",
                }}
              >
                 Posts from {Maxnumber}
              </h2>
            </Card>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Over;