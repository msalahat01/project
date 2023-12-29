import { Layout  } from 'antd';
import Sider from '../components/Sider';
import Overtrain from './Overtrain';
import { auth } from '../firebase';
import { FaFacebook ,FaTwitter , FaWhatsapp } from "react-icons/fa";


const { Header, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#000000',
  height: 130,
  backgroundColor: '#FFFCF2',
};

const contentStyle = {
  height: "900px",
  textAlign: 'center',
  minHeight: '100',
  lineHeight: '80px',
  marginLeft:"0%",
  paddingLeft:"10%",
  color: '#000000',
  backgroundColor: '#FFFCF2',
};


const logoStyle = {
  padding:"22px",
  float: "left ",
  margin: "20px 20px 20px 20px",
  maxwidth:"100%",
  height:"120px",
 
};

const foot={
  background: "#252422" ,
   width: "100%",
    height: "240px" ,
     bottom: '0%' ,
     left : '0%'
} 
const year = new Date().getFullYear();

const page={
  backgroundColor: "#FFFFFF",
  height: "1200px",
   width: "1920px",

}


function Overlayout(){
  

  return(
  <div style={{...page , position:'relative'}}>
    
  <Sider> </Sider> 
  <Layout  style={{width: '100%'}}>
    <Layout>   
     <Header style={headerStyle}>
     <img src={require("/home/al-salahat/Downloads/project/src/image/12.png")} style={logoStyle} ></img>
     </Header>
      <Content style={contentStyle}>
           <Overtrain/>  
        </Content>
      </Layout>
        
          <Layout >
      
              <div className="" style={{...foot , position: 'absolute'}}>
                  <footer  style={{textAlign:"center" , color:"#FFFFFF" , width: "100%", position: 'absolute', top: '60px'}}>
                  <span> 
                  <a href="https://www.twitter.com">
                    <FaTwitter className="icon" size={32} color= '#00acee' />
                  </a>
                  <a href="https://www.facebook.com">
                    <FaFacebook className="icon" size={32} color='#3b5998' />
                  </a>
                  <a href="https://www.whatsapp.com">
                    <FaWhatsapp className="icon" size={32} color='#25D366' />
                  </a>
                  </span>
                  <h6>+962 777777777</h6>
                  <h6>intelliGym@info.com</h6>
                  <p>
                    &copy; <span>{year}</span> Copyright All Rights Reserves
                  </p>
            </footer>
            </div>
          </Layout>

        </Layout>

</div>
  );}


export default Overlayout;