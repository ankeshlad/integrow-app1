import React from 'react';
import BackgroundImage from '../../components/backgroundImage/BackgroundImgReg'
import Card from '../../components/cardAuth/CardRegister'
import Text from '../../components/text/Text'
import Input from '../../components/input/Input'
import ButtonCircular from '../../components/button/Button';
import Toggle from '../../components/toggle/Toggle';

const Register = () => {

    return(
        <div>
            <BackgroundImage />
            <div style={{padding:"50px",marginTop:"-102%"}}>
            <Card>
                <Text title="Integrow" fontSize={60} fontWeight={700} margin={0} />
                <Text title="Asset Management" fontSize={13} fontWeight={800} marginTop={0}/>
                <Text title="ART . WORK . LIFE" fontSize={17} fontWeight={800} marginTop={-5}/>
                <Text title="Please confirm you role" float={"left"} fontSize={23} marginLeft={40} />
                <Input type="text" placeholder="Name*" />
                <Input type="text" placeholder="Organization Name" />
                <Input type="text" placeholder="Email Address*" />
                <Input type="text" placeholder="OTP" />
                <Input type="text" placeholder="Mobile Number*" />
                <Input type="text" placeholder="OTP" />
                <Input type="text" placeholder="Enter Password" />
                <Input type="text" placeholder="Confirm Password" />
               <br /><ButtonCircular title="Sign up" borderRadius="10px" backgroundColor="#6EA642" 
                color="#fff" margin={0} marginTop={25} marginRight={43}
                height="4%" width="35%" border="none" fontSize="20px" float={"right"} />
               <br></br><br></br><br></br> <Text title="Already have an account? please sign in" fontWeight={500} fontSize={15} float={"left"} marginLeft={"7%"} />
                <Text title="here" fontSize={15} float={"left"} fontWeight={500} marginLeft={"1%"} color={"#6EA642"} textDecorationLine={"underlined"}  />
                <Text title="If you are part of Integrow Asset Management, please sign in" fontWeight={500} fontSize={13} float={"left"} marginLeft={"7%"} />
                <Text title="here" fontSize={15} float={"left"} fontWeight={500} fontSize={13} marginLeft={"1%"} color={"#6EA642"} />
            
            </Card>
        </div>
        </div>
       
    )
}

export default Register