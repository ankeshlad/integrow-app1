import React from 'react';
import BackgroundImage from '../../components/backgroundImage/BackgroundImage'
import Card from '../../components/cardAuth/Card'
import Text from '../../components/text/Text'
import Input from '../../components/input/Input'
import ButtonCircular from '../../components/button/Button';
import Toggle from '../../components/toggle/Toggle';


const Login = () => {

    return(
        <div>
            <BackgroundImage />
            <div style={{padding:"50px",marginTop:"-55%"}}>
            
            <Card>
                <Text title="Integrow" fontSize={60} fontWeight={700} margin={0} />
                <Text title="Asset Management" fontSize={13} fontWeight={800} marginTop={0}/>
                <Text title="ART . WORK . LIFE" fontSize={17} fontWeight={800} marginTop={-5}/>
                <Text title="Please confirm you role" float={"left"} fontSize={23} marginLeft={40} />
                <Input type="text" placeholder="Email ID" />
                <Input type="text" placeholder="Password" />
                <Toggle type="checkbox" />
                <Text title="Remember me" fontSize={15} fontWeight={500} float={"left"} marginTop={-2} margin={0} />
                <Text title="Forgot Password?" fontSize={15} fontWeight={500} float={"right"} marginRight={43} marginTop={-2} margin={0} />
                <br /><ButtonCircular title="Sign in" borderRadius="10px" backgroundColor="#6EA642" 
                color="#fff" margin={0} marginTop={25} marginRight={43}
                height="8%" width="35%" border="none" fontSize="20px" float={"right"} />
               <br></br><br></br><br></br> <Text title="Don't have account yet?" fontWeight={500} fontSize={15} float={"left"} marginLeft={"7%"} />
                <Text title="Sign up here" fontSize={15} float={"left"} fontWeight={500} marginLeft={"1%"} color={"#6EA642"} textDecorationLine={"underlined"}  />
                <Text title="If you are part of Integrow Asset Management, please sign in" fontWeight={500} fontSize={13} float={"left"} marginLeft={"7%"} />
                <Text title="here" fontSize={15} float={"left"} fontWeight={500} fontSize={13} marginLeft={"1%"} color={"#6EA642"} />
            
            </Card>
        </div>
        </div>
       
    )
}

export default Login