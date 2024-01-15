import { Tabs } from 'antd';
import  Personal from "./personal"
import Upgrade from "./upgrade"
import Editpass from './editpass';

const tabBarStyle = {
  fontWeight: 560,
  color: '#2C3E50',
  width: '1200px'
}

const onChange = (key) => {
  console.log(key);
}

const items = [
  {
    key: '1',
    label: "Personal Info",
    children: <Personal/>,
  },
  {
    key: '2',
    label: "Edit Password",
    children: <Editpass/>,
 
   
  },
  {
    key: '3',
    label: "Upgrade",
    children: <Upgrade/>,
   
  }
];
const Upset = () => 
<Tabs defaultActiveKey="1" items={items} onChange={onChange}  tabBarStyle={tabBarStyle} />;

export default Upset;

