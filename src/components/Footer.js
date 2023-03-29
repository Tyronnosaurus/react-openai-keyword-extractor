import { Box, Image, Text, Flex } from "@chakra-ui/react"
import openAiLogo from '../assets/openai.png'

const Footer = () => {

    return(
        <Box marginTop={50}>
            <Flex justifyContent='center' alignItems='center'>
                <Image src={openAiLogo} marginRight={1}/>
                <Text>Powered By Open AI</Text>
            </Flex>
        </Box>
    )

}

export default Footer