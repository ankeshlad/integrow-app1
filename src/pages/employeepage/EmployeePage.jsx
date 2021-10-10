import React from 'react';
import BackgroundImage from '../../components/backgroundImage/BackgroundImage'
import Card from '../../components/cardAuth/CardEmp'
import Text from '../../components/text/Text'
import Input from '../../components/input/Input'
import ButtonCircular from '../../components/button/Button';
import Toggle from '../../components/toggle/Toggle';


const Employee = () => {

    return(
        <div>
            <BackgroundImage />
            <div style={{padding:"50px",marginTop:"-55%"}}>
            
            <Card>
                <Text title="Integrow" fontSize={60} fontWeight={700} margin={0} />
                <Text title="Asset Management" fontSize={13} fontWeight={800} marginTop={0}/>
                <Text title="ART . WORK . LIFE" fontSize={17} fontWeight={800} marginTop={-5}/>
                <Input type="text" placeholder="Employee ID" />
                <Input type="text" placeholder="Password" />
                <Toggle type="checkbox" />
                <Text title="Remember me" fontSize={15} fontWeight={500} float={"left"} marginTop={-2} margin={0} />
                <Text title="Forgot Password?" fontSize={15} fontWeight={500} float={"right"} marginRight={43} marginTop={-2} margin={0} />
                <br /><ButtonCircular title="Sign in" borderRadius="10px" backgroundColor="#6EA642" 
                color="#fff" margin={0} marginTop={25} marginRight={43}
                height="10%" width="35%" border="none" fontSize="20px" float={"right"} />
            
            </Card>
        </div>
        </div>
       
    )
}

export default Employee