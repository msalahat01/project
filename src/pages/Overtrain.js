import { Tabs } from 'antd';
import Over from './Over';
const onChange = (key) => {
  console.log(key);
};

const tabBarStyle = {
  fontWeight: 660,
  color: '#2C3E50',
  width: '1200px'
}

const items = [
  {
    key: '1',
    label: "overveiw" ,
    children: <Over />,
  }
];
const Overtrain = () => 
<Tabs defaultActiveKey="1" items={items} onChange={onChange} style={{margin: '14px 0px 0px 30px'}} tabBarStyle={tabBarStyle}/>;
export default Overtrain;