import { Flex, VStack, HStack, Text, Input, InputLeftAddon, InputGroup } from "@chakra-ui/react"



const AdminPage = ()=>{








    return (<Flex>
        
        <VStack>
            <InputGroup width = '300px' size='sm'>
                <InputLeftAddon children = "대상"/>
                <Input value="" placeholder="user@skku.edu" size='xl' background = 'white' onChange={(event)=>{}}/>
            </InputGroup>
            <InputGroup width = '300px' size='sm'>
                <InputLeftAddon children = "사유"/>
                <Input value="" placeholder="다음 활동을 수행하였음" size='xl' background = 'white' onChange={(event)=>{}}/>
            </InputGroup>
            <InputGroup width = '300px' size='sm'>
                <InputLeftAddon children = "포인트"/>
                <Input value="" placeholder="100" size='xl' background = 'white' onChange={(event)=>{}}/>
            </InputGroup>
            <InputGroup width = '300px' size='sm'>
                <InputLeftAddon children = "관리자 비밀번호"/>
                <Input value="" placeholder="abcdefg"  type = "password" size='xl' background = 'white' onChange={(event)=>{}}/>
            </InputGroup>
        </VStack>
    </Flex>)
}






export default AdminPage;